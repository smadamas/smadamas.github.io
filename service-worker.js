const APP_PREFIX = 'samadamssite-';
const VERSION = 'version01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./index.html",
    "./css/main.css",
    "./css/normalize.css",
    "./img/angular.png",
    "./img/aws.png",
    "./img/C++.png",
    "./img/css3.png",
    "./img/csse.png",
    "./img/docker.png",
    "./img/fireAlpaca.png",
    "./img/FormalHeadshot.png",
    "./img/github.png",
    "./img/GreenTheory.png",
    "./img/html5.png",
    "./img/iMovie.png",
    "./img/Java.png",
    "./img/javascript.png",
    "./img/matlab.png",
    "./img/MyCows.png",
    "./img/postgresql.png",
    "./img/python.png",
    "./img/react.png",
    "./img/shotcut.png",
    "./img/spring.png",
    "./img/spring.png",
    "./img/synfig.png",
    "./img/unity.png",
    "./img/waterfall.jpg",
    "./img/marquee/bar.jpg",
    "./img/marquee/beach.jpg",
    "./img/marquee/boat.jpg",
    "./img/marquee/boston.jpg",
    "./img/marquee/christmas-dome.jpg",
    "./img/marquee/cliff.jpg",
    "./img/marquee/coffee.jpg",
    "./img/marquee/gator-band.jpg",
    "./img/marquee/halloween.jpg",
    "./img/marquee/maymont.jpg",
    "./img/marquee/nashville.jpg",
    "./img/marquee/nyc.jpg",
    "./img/marquee/nye.jpg",
    "./img/marquee/rice-lake.jpg",
    "./img/marquee/roommates.jpg",
    "./img/marquee/samuel-adams.JPG",
    "./img/marquee/ski-lift.jpg",
    "./img/marquee/sunset.jpg",
    "./img/marquee/watermelon-festival.jpg",
    "./js/main.js",
    "./js/plugins.js",
    "./pdf/Adams Samuel Resume.pdf",
    "./pdf/AWS Certified Solutions Architect - Associate certificate.pdf",
    "./pdf/CSSE_cert.pdf",
    "./manifest.webmanifest",
];

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('Installing cache: ' + CACHE_NAME);
            return cache.addAll(FILES_TO_CACHE);
        })
    )
});

self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys().then(function(keyList) {
            let cacheKeeplist = keyList.filter(function(key) {
                return key.indexOf(APP_PREFIX);
            });
            cacheKeeplist.push(CACHE_NAME);

            return Promise.all(
                keyList.map(function(key, i) {
                    if (cacheKeeplist.indexOf(key) === -1) {
                        // console.log('deleting cache: ' + keyList[i]); Debugging
                        return caches.delete(keyList[i]);
                    }
                })
            )
        })
    );
});

self.addEventListener("fetch", function (e) {
    // console.log('fetch request: ' + e.request.url); Debugging
    e.respondWith(
        caches.match(e.request).then(function(req) {
            if (req) {
                // console.log('responding with cache: ' + e.request.url); Debugging
                return req;
            } else {
                // console.log('file is not cached, fetching: ' + e.request.url); Debugging
                return fetch(e.request);
            }
        })
    )
})