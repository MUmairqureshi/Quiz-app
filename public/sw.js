// let cacheData = "appV1"
 
// this.addEventListener( "install" , ( event) =>{
//     event.waitUntil(
//         caches.open(cacheData).then((cache) =>{
//             cache.addAll([
//          "css?family=Roboto:300,400,500,700&display=swap",
//          "/icon?family=Material+Icons",
//          "/sw.js",
//          "/static/js/vendors~main.chunk.js",
//          "/Stylesheeticon?family=Material+Icons"      ,  
//          "/Scriptbundle.js",
//          "/Scriptvendors~main.chunk.js",
//          "/Scriptmain.chunk.js",
//          "/WebSocketsockjs-node",
//          "/Otherfavicon.ico",




//         // "/static/js/bundle.js",
//         // "/static/js/main.chunk.js",
//         // "/static/js/0.chunk.js",
//         // "inex.html",
      
//         "/",
//      ])  
//         })
//     )
// })

// this.addEventListener("fetch" , (event) =>{
//     event.respondWith(
//         caches.match(event.request).then((result) =>{
//             if(result) {
//                 return result
//             }

//         })
//     )
// })





















var CACHE_NAME = "web";
var urlsToCache = [
  // "/static/js/bundle.js",
  // "/static/js/main.chunk.js",
  // "/static/js/0.chunk.js",
  // "inex.html",


         "css?family=Roboto:300,400,500,700&display=swap",
         "/icon?family=Material+Icons",
         "/sw.js",
         "/static/js/vendors~main.chunk.js",
         "/Stylesheeticon?family=Material+Icons"      ,  
         "/Scriptbundle.js",
         "/Scriptvendors~main.chunk.js",
         "/Scriptmain.chunk.js",
         "/WebSocketsockjs-node",
         "/Otherfavicon.ico",


  "/",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.log(err);
      })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});