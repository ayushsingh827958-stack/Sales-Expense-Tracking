const cacheName = "expense-tracker-cache-v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js"
];

// Install event
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

// Fetch event
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
