/* NovaDesk service worker: internetsiz ishlash uchun. */
const V = 'novadesk-v2'; // Versiyani o'zgartirdik
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(V).then((c) => {
          // Har bir faylni alohida qo'shish (biri topilmasa ham, qolgani ishlaydi)
          return Promise.allSettled(
            ASSETS.map(asset => c.add(asset).catch(err => console.warn('Keshga qo\'shilmadi:', asset, err)))
          );
        })
        .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== V).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Sahifaning o'zi: avval tarmoq, bo'lmasa keshdan
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(V).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Qolgan fayllar: avval kesh, keyin tarmoq
  e.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(V).then((c) => c.put(req, copy));
          return res;
        })
    )
  );
});
