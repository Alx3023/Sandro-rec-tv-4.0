// Service Worker minimale
self.addEventListener('install', (e) => {
  console.log('Service Worker installato');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker attivato');
  return self.clients.claim();
});