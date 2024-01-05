const cacheName = "your-pwa-cache-v1";
const filesToCache = [
  "/index.html",
  "/manifest.json",
  "/assets/romolo-icon.svg",
  "/assets/qr-code",
  // Add other files you want to cache
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
