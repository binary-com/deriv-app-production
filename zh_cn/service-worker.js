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

var precacheConfig = [["/js/0-dd576530f9dea6f8451c.js","623f30aa95eadeef8114158f68b584be"],["/js/1-acba35279cb189bb1cbe.js","dda5ac268954ca0897d6bfcc860b4c46"],["/js/10-e6ab0525d966bb1207fa.js","a45f22fac2ad4035ef66b50e2ebe7203"],["/js/11-756bf135ac3d65584ed2.js","eebe8633d0f504b51920d1fc7b6b2396"],["/js/12-59c80720813700fc43ec.js","e6ae1803853981e4116672252cb18cb3"],["/js/13-2062a4e2f9ddba25fdff.js","cf74758b8ed28d29b143e555c63c45d5"],["/js/14-58f7e877b7caaa4913fd.js","c2b012ac6db1226c469ce76f8f078e2c"],["/js/15-ebd6886a9a71352f93c5.js","613574a4540c61c357e46c0651638c7a"],["/js/16-f63f559ecf020591d474.js","7fa23a9ab8f4a9515f1a251812194ce7"],["/js/17-a601d5c031f34d18d655.js","3f85b53adfae7ec1e995ed4835d95a91"],["/js/18-1f99c17bef900cf63d6d.js","8bb9121a35b8ac437f7a61266674e0cb"],["/js/19-f6c3d7045e7901fdb7ad.js","1e7e2888a3a80edd9b7003088307cdf0"],["/js/2-8a07caed3bf743fda085.js","abe0721848122acdd7fbdab01dc631b0"],["/js/20-7d2fcfbdc3eb87aa286d.js","e161eabe9bf5a354b7be7b4d4f55a5f8"],["/js/21-8ef7f390bbb5ceb58b61.js","813d1a9393d8a10111614ef8a60c4d79"],["/js/22-2759ec8be8b84e4a8653.js","e992ea13ce0f25787194fbd17f19728e"],["/js/23-5e71de940db05e3af986.js","4bc2d088583bd7d1fa0c7c97afdd18c0"],["/js/24-0c046ca1a3d80530b585.js","7b37762d76c505b8c21c0c258db86e32"],["/js/25-a797d64d891678502893.js","a7bc4ccda89ab1561bf98f43469eab2b"],["/js/26-6dc71f4141d59885b1f0.js","e8774a7979a1803f6d73477f2e3c648e"],["/js/27-f0bbdb697ee48530284d.js","9bcc825af67394ac23510d1dce351846"],["/js/28-0f1b21151144b6b777ff.js","e5c4d453a82e49578e376ea43d4bd74b"],["/js/29-a7a2beb3d365b12b64a3.js","39145e29f22b5c2f21e8b428301cff0a"],["/js/3-5b0979ec628a4034b7f6.js","85f810b82025a9ee05f96568eddb92a4"],["/js/30-f8a27ce03afc5e3bd3a6.js","ffc09231ff022e0b77d8c876fc75ec1c"],["/js/31-50ea2c846cabc7e83450.js","aca80e38652a67fe5c6adc04edc6fd7d"],["/js/32-0e231ead2bf97a4a4f36.js","c5587c27d25012ba07994662489033c0"],["/js/33-d1583010504a4a9c2718.js","ffea1d4270545e3c7461bb181d01a1e6"],["/js/34-33a6b2021becdc0907ae.js","8e206165629c74b41200a6cd6a12849b"],["/js/35-798c9e9dd5bf98938465.js","01f69c1eb0e77060356e8b4d56cc8693"],["/js/36-944dd538409025f3416f.js","5aa196eea204c71f2008d14951f2a978"],["/js/37-7b93b3a21157299f6865.js","ff823d18188a2eee3b43b68bd1232fd4"],["/js/38-1c674c267b39f5c3f3d1.js","f714a7512ea112758fab693b5e407cad"],["/js/39-e6eacc0cc922bce303ac.js","fa825f5092e69691eea1e6ac3af65ba7"],["/js/4-89da92d80bf9973f79ce.js","bfd523b9b2128f510a6e3c3c8d0c053d"],["/js/40-bc1ecf02d598033c993f.js","3b47763224c462ebd064bf1d7a0eef50"],["/js/404-c53dddcb5710afe9e505.js","c419dd35761c695a68ba2aa2c986563e"],["/js/41-e96afa1838c912abf83b.js","f9e7fceac797342e5131861db7de9a43"],["/js/42-a84f7a3723fa149a6117.js","5d4bd9b095bdc7830e692058cbf19060"],["/js/43-0846f85704fcf321d5f7.js","b6deea222c8952b054209e28b5865b87"],["/js/44-e9a882cda80864c2895a.js","afd37993e2d1609da737b7e1ca7ab869"],["/js/45-9339c8519319461f4a85.js","67c27aa819aed4b0878e97bae0c37cf2"],["/js/46-a77634c924b4596c659d.js","543ad3acbc5c959d981323b5e57f3b49"],["/js/47-ccc2d0fae99cb180022e.js","776dd12081e71a257ffef2d83d43cce0"],["/js/48-93b90bdf9155b0137b4c.js","dc3c33a35ef29b04c3c3d6ade1a3cde4"],["/js/49-a06720b24095b234d00a.js","571f487fb775952bca924d6aa24a95ec"],["/js/5-c14662dc2c225242863d.js","f88ea95c5de84ae6713515b4643d4ee5"],["/js/50-3ed263af6c3eed3da6b9.js","65121e405d2a2d6b3d0ac28c83ec441a"],["/js/51-936b35af02d006d5ff3a.js","bafa40b14465d971b6dbac501f2527f1"],["/js/52-5537fb682951c92fd6a2.js","b5a6ee2e722a9666b52f9cdd9db45f22"],["/js/53-57e8cc027bedd120bdd6.js","ae6c62be68c0138cb152e68a3722967a"],["/js/54-252d3350a067ac256d02.js","034764fd737d3add00ae909121776b19"],["/js/55-2e96fc66d7dd51aefc8e.js","d097b9e264b7b5e39ac36bee658c8e79"],["/js/56-e505be9735fc9f7f35c5.js","42db642248578f623583785a0458b568"],["/js/57-b0b74eb48622c7a435df.js","15e1853e984dd463d0e0c07a8b38f57b"],["/js/58-d979c52ac3ce22b77191.js","25b826f955bc259294dbb2d2b137cf34"],["/js/59-db5206624a078f225148.js","2cd2e8e2bcbf04cf0a7b58c72db55697"],["/js/6-aae97b90c30cf1ea53b5.js","8ad98db7af576d0a062816afb23e0067"],["/js/60-2ed673dda4fad3f5d58a.js","afa466e598513ac4914ea3644bba0821"],["/js/61-4553b2c8fcda4da8ac4a.js","82f6471368515d15db6fe694ca2b15a0"],["/js/62-99210f3491da1962f139.js","162d6b4fb599a786c3bb2ada3c20788c"],["/js/63-552c941eeeaf96f5b22d.js","cf11f554317d691b6630f8ecc7239d74"],["/js/64-25a2d29f921715b7d7d1.js","2bb9bb5c9e4586f3cdf17c53f5911a56"],["/js/65-59dab5669806e4542084.js","d41c2af7cbc53804bf443436d614f87c"],["/js/7-c3d28e78b8ce2d46ce14.js","f91d64becbda9d285b759dc57038b798"],["/js/8-0a6cdd01de0433d4e178.js","e2707aefcd64cef0a0335dccff4ee37d"],["/js/9-85b3a40da862599cb8c4.js","dc47c7030f42c442e93d281142971504"],["/js/account_password-06a7f5a2f137ca0b743e.js","aa7c602d40cf2fef8a5adea6a7e9577f"],["/js/api_token-9b4365c6e253a2bfbc60.js","368768244288a0cb91a3d6a738880a5e"],["/js/authorized_application-137ffcea735c4a8df230.js","d1f9a815162baf3f4355c99565cc1640"],["/js/binary.min.js","5355c8c82347e73a746725f622035841"],["/js/binary_common.min.js","f81cc579a26194916713da2ff41f246d"],["/js/cashier_password-58020cc1a4ff480f2f26.js","7f687745130bae22afb9baf47f13994f"],["/js/contract-c59d4803716bd9e97528.js","bf0203b86b4fce8dee42eae448d7cd18"],["/js/financial_assessment-29f5d677befe69ca50e5.js","650a02a8a0a4c7619c3e27dbf189358b"],["/js/limits-cdcfc0dd7fdf318b0557.js","e7e71be0bb776e134a124dbdd041a53b"],["/js/login_history-9808a45d173c11a5d60c.js","b4fc20e1d41ef12e229e57a9a12f1273"],["/js/open_positions-7a3a6002c144dea6573e.js","69fef348fcd22baa0274534f09f253e5"],["/js/open_positions~profit_table~statement-4899b74ffc669434c7c1.js","fd38c0f63535a2978d1a3f91314cfae4"],["/js/personal_details-87f1065ff46f00a91920.js","037abfb4d33ad3b4af8dab88db2b2c78"],["/js/portfolio-3bcdcc25e2f92ad3be61.js","d7376c6e11b1d4858446ffa32314a1cb"],["/js/profit_table-ed3d57e41430c35ea2c0.js","eeaa11450f66b53c4ef41f83e8c938e8"],["/js/react_mobx.min.js","4395ed3f4e03d112f40b7a1ed8a8803d"],["/js/reports-c767c89c66340b66ad2d.js","2d2b7d4037da31bf9387283cd5330072"],["/js/self_exclusion-38f51d24a8ea78d09b6a.js","95a1da98e14b9db2506526b9c8a24c92"],["/js/settings-840b0e1e22591c288ffd.js","97125bb262981bf758081727ac3d97f5"],["/js/smart_chart-5366e0ecc16e6b24119a.js","a4bf9e44ca50419c0baff98a35fdca02"],["/js/statement-2cb84ae965c7020f6b7f.js","0c6b3be0076f9e1369ac2e6aed15c8e0"],["/js/vendor.min.js","25b164874ee6f19e3d331ddeb032a16a"],["/js/vendors~smart_chart-3beff3d975e285bcf7cd.js","f71d22dd4ba27bb7785aae72cba8bf09"]];
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







