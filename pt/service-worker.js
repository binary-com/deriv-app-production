/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/js/0-737d354129cb32330e78.js","b34a3cc55abc2caa0693a77c0aac5a2f"],["/js/1-23738cf5c84fc7308649.js","2ba4c97133ac33e2825230c3438354d3"],["/js/10-de61873b093664e71483.js","fe53e7acb4eda5502f12d82767ca3283"],["/js/11-38f00a75f1714a4f9dcc.js","67ab755c8541a924b0215e4c088936d6"],["/js/12-9cdfbe2548752133d498.js","24845824b0b9784b7c342c04f3a3998c"],["/js/13-1879587e92d339374860.js","26ecfe69c1a5dbe95f31a2225e54253f"],["/js/14-bb6b88a1aa80ec630d44.js","88148d1891ac5ebf18200fb0df837bc9"],["/js/15-a18e99b188c86398cd13.js","0961792cab47922aa735c12edd3a869a"],["/js/16-4073eca755bc26a8a569.js","1a5cb380a97e8311beb766ce26e455ba"],["/js/17-cec44a9488db08410020.js","de524d17202558805a4c10b7781e64da"],["/js/18-55a87381fbfb573099d6.js","8f24f713f8fd95b43c401f68d67b6f58"],["/js/19-04d662d6f89682967386.js","d267a1dbf29ab893a5e37d33613c4c37"],["/js/2-fb2b69c7961ce2ff2d72.js","93d8964ab3d63ec0de32034c1af7444f"],["/js/20-43fdb79f0d521fc75419.js","19de3952d9e4e7d73bb229d48633bd7e"],["/js/21-f02ef791e2959990659b.js","7bd89e4434a8155ff65c4de560298fad"],["/js/22-595ebeaa56845b2ab7e6.js","7681ebcde74f0ddee02125c12fccd4bf"],["/js/23-950cc65e7348800d8b79.js","c3bfeefa0e21903fdd01785aef28c638"],["/js/24-acb606d65a83dbc5d7f3.js","7c7168a77e1c1bd29ffc66d9c6ae2cef"],["/js/25-7db87edd6d2c7e3d7591.js","7bbd1f4e2566dc8e47889cec14efcfc8"],["/js/26-5f313704189541e33fbe.js","f0a1bbbd0421608847439c3daa9823b8"],["/js/27-8d7b45425aef32c80a9f.js","911a93cd8dfe88bb6b12d02667b7b4a3"],["/js/28-8369a0fe41cb54412a16.js","f84af67507af00e243d00ffa13097f7e"],["/js/29-70b6d496d05c1ba62532.js","d961a1311ba7f073497df76a6f2e79f6"],["/js/3-162fdf58afdcbc78d6bb.js","aaed1b005c14c935b2facd75a75ed16e"],["/js/30-3e7713eff2f263da6e36.js","5fba97d10ceb1ec3c7d978a73424021e"],["/js/31-03f0c8c4d24dd5ffa1e3.js","1ac2b096c0b01d8a250f4931354b17e7"],["/js/32-b90567b8c72fd498c345.js","6a16132f62f9af15068eb400ce628eae"],["/js/33-d59411893ba30c88fd99.js","6c7c5ee68315a368f9f9a704d0105409"],["/js/34-773d19508973cd4ce29d.js","8fc41774c0a48456c88dbea53f672daf"],["/js/35-5e2d56ab03a28a9ff6c6.js","72bdd26977f0a27c09fc4d9204fc68b5"],["/js/36-c7459503ec3914b4e080.js","1fcf833ce996e1a89fe755d9f0beb2f3"],["/js/37-a2685c7d50aba8764cfa.js","e96977de1297f09387da959677dc7fab"],["/js/38-6518c2b724d1d1b5a2dc.js","c6de888b55f2ea0e0acbade1791b289a"],["/js/39-cd1a206954f42d91a778.js","e9bc689315bad357366245e196b8938a"],["/js/4-5f0b39dc3f1101e964ae.js","e94570a79ade462200529f15ef438571"],["/js/40-ebcbed1feb4982480453.js","35546f8fe7590be4c931311e0bdb92e2"],["/js/404-7847eb9bacb0184295f8.js","3bbb859187a0ada77ecf9bfd8b4b0f77"],["/js/41-0480206b90b5116cb3c6.js","cad3b0edb511f1940a6a610d4980e33c"],["/js/42-090232a45f015ef59ab6.js","e5b34b9e38156b036a9f0f4541b51255"],["/js/43-dae07fe4a291eeb6265c.js","04b02298a929f663b884b0122b1b0123"],["/js/44-e17aa74156ce92f0b36d.js","9145b90b85c95bcfcdaf37e2bb845999"],["/js/45-89b5c499a1803a3e4f51.js","b3a658f0265feb1f790d0370b5be69f1"],["/js/46-5833af14992e1e02ebc2.js","5db96a88be6fd7951957c98bae627fad"],["/js/47-77d4b9b192f17f2a2e3f.js","6771ca014169d8a314b4bcf42c8510e9"],["/js/48-2bf675822b7105200152.js","5fdbf4cbe88cdebd5610ee46b63de87e"],["/js/49-d39be2c277f448f7e285.js","b20d0dab1be88fb602fa215f5b6aa3c9"],["/js/5-83b8ca8f0d0a618399c5.js","fa9f652631f5628c61e0270f520a17db"],["/js/50-e6f6b5bf39c3847bb2aa.js","566233133f5e178f7931aad465855f15"],["/js/51-bfd8a4e8f96894760930.js","7d1029348925131f1bc4f648a5e6ccb2"],["/js/52-5c213e4515b7fdd3c5cc.js","eb7972cfa5339d1f5ed445b6e7e2aa71"],["/js/53-65db6f0b1c335eee76ab.js","d034a0f3003b3957d9a2a34f34ca8487"],["/js/54-342dc173d72f0ae235e6.js","2688b501c379c230ea1c79b3a1f6d18a"],["/js/55-3662ebe9d0e2a55ae1d3.js","38b492926bb12ae12d834251d6a0b109"],["/js/56-566567bb53e7d8ea8314.js","df7df4967c10ccbd269f68442ca62535"],["/js/57-91ac6795f7138b633e23.js","4ff27de9c799fa4bd33bb4f96a292533"],["/js/58-3314a4d32bafdd4630a9.js","0d220db759f0ce534a595e598ed20cbc"],["/js/59-7eaca9145a2ceaa6ef27.js","181ae11afce6ed714d77166de5bc33b4"],["/js/6-3d15c9e5a53b797a23b3.js","3fcefa5fd4ddde172d089fd9e03a25bd"],["/js/60-1fea4108338a5cc9ecc5.js","06be0ff8ca3849bbd5860f1ef0ab7507"],["/js/61-264ad07c0e9973cdd45c.js","e52382c4c3fa2f75dbf8f18b464da151"],["/js/62-275794e8ca2227546080.js","112a6e70c2ffcee6c32db641286f6da8"],["/js/63-f955132b195c9280a0e0.js","5cacfc9b4a1dd28e617d07275ff04e78"],["/js/64-b9111f0038eb32b262e2.js","d972d465f253b0280cd771add697d912"],["/js/65-8ad35ba3509bf59265fc.js","82c6c1f4df5aff4e03c01771f8d3a8c3"],["/js/7-b00afff4442948c9823e.js","1b66fa4e12b1e8f97454102fe0c5814d"],["/js/8-3cadc7e9090085ae56a1.js","3ac60316265e351f2857905fef3124ce"],["/js/9-97e13a19c710c3b05b2f.js","754e719482e44287d1214ffd5bd7d4e6"],["/js/account_password-0bbb7abf97a8731bc2dc.js","962c7267c56dcd25011605e21f23b145"],["/js/api_token-63c8c3580c111a6b8bb1.js","3100dc4d11cbf67de48d2e229f01dda9"],["/js/authorized_application-542e6ddbc5982d966707.js","47ea0969236d01748bf963f0529abd0f"],["/js/binary.min.js","941fd4d7d2153871d6b9f7683a56f732"],["/js/binary_common.min.js","8152635cb1ff06afb84f2340893f2594"],["/js/cashier_password-51ad0627141b442190e2.js","920c2fb2f9dcdbff2ad1232ecefb148a"],["/js/contract-5a490c085c6339a7c8b2.js","35f6f7b20293ff68a8a0d92c0ed5f945"],["/js/financial_assessment-d0c040f11f28d7e12a6e.js","0d78a1715763f97c9152d9bb01ee128e"],["/js/limits-eb6b0bfca405ecf7c349.js","9623cd58f7b18b64da1e3c2702179d51"],["/js/login_history-bdb7a98c52114d64b898.js","72aa506b726e7f143e0ddedc1930549a"],["/js/open_positions-6e53116f1784eba324a9.js","3467610f24db886317592f007639f77e"],["/js/open_positions~profit_table~statement-723ae448c8b4d01d9337.js","49f1f6060bfd93f3ff5aea82ddb86165"],["/js/personal_details-ead8eb048cf0347c50f5.js","c3a81f262bc377da481556be5ffd9f5c"],["/js/portfolio-863ea1661c2398edb093.js","35e3f4467960b3089ff4a2b2b216fc81"],["/js/profit_table-f67a382eb856d837936f.js","39151c310c66ed4aa46baf8223c05b67"],["/js/react_mobx.min.js","442f45b7474906a53203f56394f93f90"],["/js/reports-5c9bd686ba54106c352f.js","8d4daf87913a90c3b7c72c9a0b2d832c"],["/js/self_exclusion-56644647f8428fbfa644.js","6f3a321d21723762619fc09497afc715"],["/js/settings-64b5c354952bdde0d4c6.js","a3d5f870ca91b4551f03e651b664c4fc"],["/js/smart_chart-6f04d25ca6ba2d1bb2ca.js","116c7c4caee2b157ef9074b88e643638"],["/js/statement-193f9b0fadcae4dab68a.js","863744fe4b2a2c4b3531c8782a9efbc1"],["/js/vendor.min.js","37dcee1cd8b3352d51beaa54964efe71"],["/js/vendors~smart_chart-35d2d5cc042e17b90434.js","675b4e8d371fb3c3d8939992c9dfcf19"]];
var cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







