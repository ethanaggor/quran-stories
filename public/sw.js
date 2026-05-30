/* Service worker for Stories from the Qur'an.
 *
 * Caching is the app's real performance + offline layer (GitHub Pages can't set cache headers).
 * All precache URLs are RELATIVE so the worker works under the project subpath
 * (https://<user>.github.io/quran-stories/) and at the dev-server root alike.
 *
 * Strategy:
 *   - HTML navigations + book.json -> stale-while-revalidate (instant, self-updating on next load)
 *   - fonts / css / icons          -> cache-first (effectively immutable)
 *   - images/**                    -> cache-first, cached on view (not precached; 165MB is too big)
 *
 * Update behavior: skipWaiting + clients.claim, so a new deploy takes control immediately and
 * refreshes silently on the next navigation, without a jarring mid-read reload.
 */
const VERSION = "v1";
const SHELL_CACHE = `qs-shell-${VERSION}`;
const IMG_CACHE = `qs-img-${VERSION}`;

const SHELL_ASSETS = [
  "./",
  "index.html",
  "book.json",
  "manifest.json",
  "fonts/fonts.css",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "fonts/01-J7aRnpd8CGxBHqUp.woff2",
  "fonts/02-J7acnpd8CGxBHp2VkZY4.woff2",
  "fonts/03-6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9sPEKsxx664UJf1hLTf7W.woff2",
  "fonts/04-6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9sPEKsxx664UJf1h5Tf7W.woff2",
  "fonts/05-6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9sPEKsxx664UJf1iVSv7W.woff2",
  "fonts/06-6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib1603gg7S2nfgRYIctxujDg.woff2",
  "fonts/07-6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib1603gg7S2nfgRYIchRujDg.woff2",
  "fonts/08-6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib1603gg7S2nfgRYIcaRyjDg.woff2",
  "fonts/09-cY9kfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLP4obnf7fTXglsMwoT-ZA.woff2",
  "fonts/10-cY9kfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLP4obnf7fTXglsMwaT-ZA.woff2",
  "fonts/11-cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438weI_ADA.woff2",
  "fonts/12-cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438wSo_ADA.woff2",
  "fonts/13-cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438wpojADA.woff2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== SHELL_CACHE && k !== IMG_CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

function staleWhileRevalidate(request) {
  return caches.open(SHELL_CACHE).then((cache) =>
    cache.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
}

function cacheFirst(request, cacheName) {
  return caches.open(cacheName).then((cache) =>
    cache.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response && response.ok) cache.put(request, response.clone());
        return response;
      });
    })
  );
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const path = url.pathname;
  if (request.mode === "navigate" || path.endsWith("/book.json")) {
    event.respondWith(staleWhileRevalidate(request));
  } else if (/\/images\//.test(path)) {
    event.respondWith(cacheFirst(request, IMG_CACHE));
  } else if (/\.(woff2|css|png|svg|json)$/.test(path)) {
    event.respondWith(cacheFirst(request, SHELL_CACHE));
  }
});
