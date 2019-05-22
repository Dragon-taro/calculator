const CACHE_VERSION = "static-v1";
const paths = ["/", "/static/js/bundle.js", "/static/css/style.css"];
console.log("service worker");

self.addEventListener("install", event => {
  const preCache = async () => {
    const cache = await caches.open(CACHE_VERSION);
    return cache.addAll(paths);
  };

  event.waitUntil(preCache());
});

self.addEventListener("activate", event => {
  // 古いバージョンのcacheを削除
  const deleteOldCache = async () => {
    const keys = await caches.keys();

    return Promise.all(
      keys.map(key => {
        if (key !== CACHE_VERSION) {
          return caches.delete(key);
        }
      })
    );
  };

  event.waitUntil(deleteOldCache());
});

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method != "GET") return;

  const handleRequest = async () => {
    const cache = await caches.open(CACHE_VERSION);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // cacheがないなら本来のリクエストを行う
    const response = await fetch(request);

    // reaponseをcloneしとかんとバグるっぽい
    const _response = response.clone();
    event.waitUntil(cache.put(request.url, response));

    return _response;
  };

  event.respondWith(handleRequest());
});

// _____________ NOTE _____________
// waitUntil()はpromiseが引数ぽい
