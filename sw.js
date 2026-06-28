/* C-17 Duty Day - offline service worker */
var CACHE = "c17-duty-v1";
var ASSETS = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      return hit || fetch(e.request).then(function (resp) {
        return caches.open(CACHE).then(function (c) {
          try { c.put(e.request, resp.clone()); } catch (x) {}
          return resp;
        });
      }).catch(function () { return caches.match("./index.html"); });
    })
  );
});
