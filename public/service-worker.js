const staticArtFo= "art-fo-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "./App.js",
  "images/nocheestrellada.jpg",
  "images/elbeso.jpg",
  "images/elnacvenus.jpg",
  "images/gernika.jpg",
  "images/lalibertad.jpg",
  "images/laultimacena.jpg",
  "images/meninas.jpg",
  "images/monalisa.jpg",
  "images/persistencia.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticArtFo).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})