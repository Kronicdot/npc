const CACHE = 'npc-pytincture-mvp-v1';
const ASSETS = ['./', './index.html', './styles.css', './manifest.json', './assets/pytincture.js'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
