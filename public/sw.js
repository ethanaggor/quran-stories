/* Service worker for Stories from the Qur'an.
 *
 * The book data and page images change during generation, so the worker reads generated build
 * metadata instead of assuming a permanent "v1" cache. HTML/book/build metadata are network-first
 * with offline fallback. Fonts/icons and versioned image requests are cache-first.
 */
const CACHE_PREFIX = "qs-";
const META_CACHE = `${CACHE_PREFIX}meta`;
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

function fallbackBuildMeta() {
  return {
    buildId: "fallback",
    shellAssets: FALLBACK_SHELL_ASSETS,
    imageAssets: [],
  };
}

function shellCacheName(buildId) {
  return `${CACHE_PREFIX}shell-${buildId}`;
}

function imageCacheName(buildId) {
  return `${CACHE_PREFIX}img-${buildId}`;
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
  const response = await fetch(BUILD_URL, { cache: "no-store" });
  if (!response.ok) throw new Error(`build.json ${response.status}`);
  const cache = await caches.open(META_CACHE);
  await cache.put(BUILD_URL, response.clone());
  return response.json();
}

async function cleanupCachesForBuild(buildId) {
  const keep = new Set([META_CACHE, shellCacheName(buildId), imageCacheName(buildId)]);
  const keys = await caches.keys();
  await Promise.all(
    keys
      .filter((key) => key.startsWith(CACHE_PREFIX) && !keep.has(key))
      .map((key) => caches.delete(key))
  );
}

async function getBuildMeta(refresh = false) {
  if (refresh || !buildMetaPromise) {
    buildMetaPromise = fetchBuildMeta()
      .catch(() => readCachedBuildMeta())
      .then(async (meta) => {
        const validMeta = meta && meta.buildId ? meta : fallbackBuildMeta();
        if (refresh) cleanupCachesForBuild(validMeta.buildId).catch(() => {});
        return validMeta;
      });
  }
  return buildMetaPromise;
}

async function warmShellCache(refresh = false) {
  const meta = await getBuildMeta(refresh);
  const cache = await caches.open(shellCacheName(meta.buildId));
  await cache.addAll(meta.shellAssets || FALLBACK_SHELL_ASSETS);
  return meta;
}

self.addEventListener("install", (event) => {
  event.waitUntil(warmShellCache(true));
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

async function networkFirst(request, cacheName, fallbackAsset) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response && response.ok) await cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    if (fallbackAsset) {
      const fallback = await cache.match(fallbackAsset);
      if (fallback) return fallback;
    }
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
    event.respondWith(getBuildMeta(true).then((meta) => networkFirst(request, shellCacheName(meta.buildId), "index.html")));
  } else if (path.endsWith("/book.json") || path.endsWith("/build.json")) {
    event.respondWith(getBuildMeta(true).then((meta) => networkFirst(request, shellCacheName(meta.buildId))));
  } else if (/\/images\//.test(path)) {
    const requestBuildId = url.searchParams.get("v");
    event.respondWith(getBuildMeta().then((meta) => cacheFirst(request, imageCacheName(requestBuildId || meta.buildId))));
  } else if (/\.(woff2|css|js|png|svg|webp|json)$/.test(path)) {
    event.respondWith(getBuildMeta().then((meta) => cacheFirst(request, shellCacheName(meta.buildId))));
  }
});
