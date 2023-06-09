var cacheName = 'restRec+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/js/jquery.min.js',
        './assets/js/browser.min.js',
        './assets/js/breakpoints.min.js',
        './assets/js/main.js',
        './assets/js/util.js',

        './assets/css/main.css',
        './assets/css/fontawesome-all.min.css',

        './images/buca.avif',
        './images/Caja9.avif',
        './images/Capa.avif',
        './images/leite.avif',
        './images/logo1.png',
        './images/rest.avif',
        './images/restca.avif',
        './images/restleite.avif',
        './images/reteteu.avif',
        './images/romantic.avif',
        './images/saopedro.avif',
        './images/tiopepe.avif',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});