"use strict";var precacheConfig=[["/index.html","9c06ebcb7f9c1136f1f4c8e97658d944"],["/static/css/main.1d387b3a.css","50fdb5e05d5119554135f32ab7bbc247"],["/static/js/main.07329a50.js","fe4f71d28ce21ee709b7117b56b259b2"],["/static/media/IMG_20180316_224217.c10c5f48.jpg","c10c5f48973584e4ae4f08637be5f1ab"],["/static/media/IMG_20180316_224220.10153e7f.jpg","10153e7f1556da5ad71835fac61f36f0"],["/static/media/IMG_20180316_224222.8beb468f.jpg","8beb468fe7e0ffc42830e68c62692682"],["/static/media/IMG_20180316_224225.5eac624d.jpg","5eac624d3a80359ed5a5af26a237c82c"],["/static/media/IMG_20180316_224432.b8e557b1.jpg","b8e557b1b863c15978510778a01390e6"],["/static/media/IMG_20180614_094758.12268e7a.jpg","12268e7ac3983aeb5e0a7c1094768738"],["/static/media/IMG_20180614_094801.78fe7f8a.jpg","78fe7f8ad6070c6baf193e49c1d770e5"],["/static/media/IMG_20180614_094803.12eb9f10.jpg","12eb9f10b813910db924fce26d148fbe"],["/static/media/IMG_20180709_102913.5e7b985e.jpg","5e7b985ef6d47033c0849adbb9b5f6c3"],["/static/media/IMG_20180709_102915.3e31f03d.jpg","3e31f03d4ce9d4cbff2cbed38fea972f"],["/static/media/IMG_20180709_103217.888b7530.jpg","888b75307b8e938fd707ecc74cdb0b9c"],["/static/media/sell-icon.8fabbc26.ttf","8fabbc26da2d0b2e3b1354023223e118"],["/static/media/sell-icon.9c68014d.svg","9c68014dcb290f118722b19a759e6757"],["/static/media/sell-icon.e0b65b98.eot","e0b65b984b6e7fcb4f9a764e1990a750"],["/static/media/sell-icon.fb25400e.woff","fb25400ee33d0949066d1c5c745ea02c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});