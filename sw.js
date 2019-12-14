let staticCacheName = 'resto-review-static-v1';

const assets = [
    './',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './css/responsive.css',
    './data/restaurants.json',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './js/sw_register.js',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg'
];

//1. Install
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache){
            return cache.addAll(assets);
        })
    );
});

//2. Activate
self.addEventListener('activate', function(event){
    event.waitUntil(
        .then(function(cacheName){
            return Promise.all(
                cacheNames.filter(function(cacheName){
                    return cacheName.startsWith('restaurant-') &&
                        cacheName != staticCacheName;
                }).map(function(cacheName){
                    return caches.delete(cacheName);
                })
            );
        })
    );
})

//3. Fetch
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            return response || fetch(event.request);
        })
    );
});