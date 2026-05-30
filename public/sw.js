/* Service worker for Stories from the Qur'an.
 *
 * The reader uses build-scoped asset tiers. The worker serves cached UI first, refreshes metadata
 * in the background, and keeps old builds alive until the client activates a waiting worker safely.
 */
const CACHE_PREFIX = "qs-";
const META_CACHE = "qs-meta";
const BUILD_URL = new URL("build.json", self.registration.scope).toString();

const FALLBACK_SHELL_ASSETS = [
  "./",
  "index.html",
  "sw.js",
  "book.json",
  "build.json",
  "manifest.json",
  "fonts/fonts.css",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
];

let buildMetaPromise = null;
let latestMeta = null;

function fallbackBuildMeta() {
  return {
    appVersion: 3,
    buildId: "fallback",
    shellAssets: FALLBACK_SHELL_ASSETS,
    assetBuckets: { thumbs: [], readerMobile: [], readerDesktop: [] },
  };
}

function shellCacheName(buildId) {
  return `${CACHE_PREFIX}shell-${buildId}`;
}

function thumbCacheName(buildId) {
  return `${CACHE_PREFIX}thumbs-${buildId}`;
}

function readerMobileCacheName(buildId) {
  return `${CACHE_PREFIX}reader-mobile-${buildId}`;
}

function readerDesktopCacheName(buildId) {
  return `${CACHE_PREFIX}reader-desktop-${buildId}`;
}

function cacheNameForPath(path, buildId) {
  if (path.includes("/thumbs/")) return thumbCacheName(buildId);
  if (path.includes("/reader-mobile/")) return readerMobileCacheName(buildId);
  if (path.includes("/reader-desktop/")) return readerDesktopCacheName(buildId);
  return shellCacheName(buildId);
}

async function broadcast(message) {
  const clientsList = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  for (const client of clientsList) client.postMessage(message);
}

async function readCachedBuildMeta() {
  const cache = await caches.open(META_CACHE);
  const cached = await cache.match(BUILD_URL);
  if (!cached) return null;
  try {
    return await cached.json();
  } catch {
    return null;
  }
}

async function fetchBuildMeta() {
  const previous = latestMeta || (await readCachedBuildMeta());
  const response = await fetch(BUILD_URL, { cache: "no-store" });
  if (!response.ok) throw new Error(`build.json ${response.status}`);
  const cache = await caches.open(META_CACHE);
  await cache.put(BUILD_URL, response.clone());
  const meta = await response.json();
  latestMeta = meta && meta.buildId ? meta : fallbackBuildMeta();
  await broadcast({ type: "QS_BUILD_META", buildId: latestMeta.buildId });
  if (previous?.buildId && previous.buildId !== latestMeta.buildId) {
    await broadcast({ type: "QS_BUILD_AVAILABLE", buildId: latestMeta.buildId });
  }
  return latestMeta;
}

async function getBuildMeta(refresh = false) {
  if (refresh) return fetchBuildMeta().catch(() => latestMeta || readCachedBuildMeta()).then((meta) => meta || fallbackBuildMeta());
  if (!buildMetaPromise) {
    buildMetaPromise = readCachedBuildMeta()
      .then((cached) => {
        if (cached?.buildId) {
          latestMeta = cached;
          fetchBuildMeta().catch(() => {});
          return cached;
        }
        return fetchBuildMeta();
      })
      .then((meta) => meta || fallbackBuildMeta())
      .catch(() => fallbackBuildMeta());
  }
  return buildMetaPromise;
}

async function cleanupCachesForBuild(buildId) {
  const keep = new Set([
    META_CACHE,
    shellCacheName(buildId),
    thumbCacheName(buildId),
    readerMobileCacheName(buildId),
    readerDesktopCacheName(buildId),
  ]);
  const keys = await caches.keys();
  await Promise.all(
    keys
      .filter((key) => key.startsWith(CACHE_PREFIX) && !keep.has(key))
      .map((key) => caches.delete(key))
  );
}

async function warmShellCache() {
  const meta = await getBuildMeta(true);
  const cache = await caches.open(shellCacheName(meta.buildId));
  await cache.addAll(meta.shellAssets || FALLBACK_SHELL_ASSETS);
  return meta;
}

self.addEventListener("install", (event) => {
  event.waitUntil(warmShellCache());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const meta = await getBuildMeta();
    await cleanupCachesForBuild(meta.buildId);
  })());
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

async function backgroundRefresh(request, cacheName) {
  try {
    const response = await fetch(request, { cache: "no-store" });
    if (response && response.ok) {
      const cache = await caches.open(cacheName);
      await cache.put(request, response.clone());
    }
  } catch {}
}

async function cachedFirstWithRefresh(request, cacheName, fallbackAsset) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  backgroundRefresh(request, cacheName);
  if (cached) return cached;
  if (fallbackAsset) {
    const fallback = await cache.match(fallbackAsset);
    if (fallback) return fallback;
  }
  try {
    const response = await fetch(request);
    if (response && response.ok) await cache.put(request, response.clone());
    return response;
  } catch {
    return new Response("Offline", { status: 503, statusText: "Offline" });
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) await cache.put(request, response.clone());
  return response;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const path = url.pathname;
  if (request.mode === "navigate") {
    event.respondWith(getBuildMeta().then((meta) => cachedFirstWithRefresh(request, shellCacheName(meta.buildId), "index.html")));
  } else if (path.endsWith("/book.json") || path.endsWith("/build.json")) {
    event.respondWith(getBuildMeta().then((meta) => cachedFirstWithRefresh(request, shellCacheName(meta.buildId))));
  } else if (/\/(thumbs|reader-mobile|reader-desktop)\//.test(path)) {
    const requestBuildId = url.searchParams.get("v");
    event.respondWith(getBuildMeta().then((meta) => cacheFirst(request, cacheNameForPath(path, requestBuildId || meta.buildId))));
  } else if (/\.(woff2|css|js|png|svg|webp|json)$/.test(path)) {
    event.respondWith(getBuildMeta().then((meta) => cacheFirst(request, shellCacheName(meta.buildId))));
  }
});
