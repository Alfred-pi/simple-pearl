/* Simple Pearl service worker — offline-first app shell.
   The app is a fully client-side tool, so once the shell and its hashed
   assets are cached, it runs entirely offline (localStorage keeps the work). */

const CACHE = "simple-pearl-v8";
// Paths are relative to the worker, so the app works at the domain root or under a sub-path
// (GitHub Pages serves it from /simple-pearl/).
const ROOT = new URL("./", self.location.href).href;
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon.svg", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // Never cache dynamic API calls (image generation / URL import).
  if (url.pathname.startsWith("/api/") || !url.href.startsWith(ROOT)) return;

  // Navigations: network-first so new deploys are picked up, fall back to the cached shell offline.
  // The browser's own cache is skipped: the host lets it keep the page for ten minutes, and a
  // stale page loads the previous build.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request.url, { cache: "no-store" })
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(ROOT, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match(ROOT))),
    );
    return;
  }

  // Static assets (hashed JS/CSS, icons): cache-first, populate on first fetch.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    }),
  );
});
