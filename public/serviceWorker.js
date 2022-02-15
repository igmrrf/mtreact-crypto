let CACHE_NAME = 'cryptocrat_cache';
const urlsToCache = [
	'/',
	'/about',
	'/blog',
	'/privacy-policy',
	'/terms-of-service',
	'/help-center',
	'/merch',
	'index.html',
	'https://res.cloudinary.com/iodiary/raw/upload/v1641255618/fonts/blanka_naxhhv.otf',
	'https://res.cloudinary.com/iodiary/raw/upload/v1641255622/fonts/proxima_akhtyl.otf',
	'https://res.cloudinary.com/iodiary/raw/upload/v1641255621/fonts/phantom_wxqtkb.otf',
	'https://res.cloudinary.com/iodiary/raw/upload/v1641255618/fonts/cubano_bcjpiu.ttf',
	'https://res.cloudinary.com/iodiary/raw/upload/v1641255622/fonts/sofiapro_ilhzcw.otf',
];

self.addEventListener('install', function(event){
	event.waitUntil(caches.open(CACHE_NAME).then(function(cache){
		console.log('Opened Cache');
		return cache.addAll(urlsToCache);
	}))
	self.skipWaiting();
})

self.addEventListener('fetch', function(event){
	event.respondWith(caches.match(event.request).then(function(response){
		if (response){
			return response;
		}
		return fetch(event.request);
	}))
})