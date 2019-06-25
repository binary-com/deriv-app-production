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

var precacheConfig = [["/js/0-8914be1b50a0fb8bfbf0.js","9319bae5d27664a952e4a14711ecc122"],["/js/1-3cdd3920ee5fd98f64d8.js","dd0ced6fecf864eb8f84781a4b9e071a"],["/js/10-fa234b4fd9601922a2dd.js","1f3a70d44c98f1f709d58d1c9c86db28"],["/js/11-00139010cb88381a50a4.js","0f712a75eee97bfdc72202fbfcec2799"],["/js/12-110034e89bc2fef1c274.js","84c88aab74e719238648c146aa836dd8"],["/js/13-cf1100d6269d38b87d84.js","58ef455c41d467e50f29c4710e00a402"],["/js/14-bc2990060c4348982ddf.js","d16ff02e174f4959f64f8a1dd448fe00"],["/js/15-8b439805a7d76332e8b4.js","992f6eff5d094d7447985b5df9c3aebe"],["/js/16-b8d4b92f82529f027550.js","ac38523fb94b0cb0211e33a45c4a5bf8"],["/js/17-b2cd28f65e0ecc5eda8d.js","059cdfe8c979bf2c63640bef2e5d968c"],["/js/18-46fd2c4d28b6f1603911.js","dfe250383dfadfb0da1147741015d5c6"],["/js/19-8d4a48a45126ff1e43a5.js","c5516a72e0af138a6a7597b9cb144a14"],["/js/2-9a2794c90dec396b8ba1.js","3a9f403caaf75781f7bf3bb75072c5e9"],["/js/20-a98030875bbec42c6f12.js","7cbf5b4b71f52c02471c7c4a19466e7a"],["/js/21-cf946e9f5c30e6a90cf1.js","d3fa3aa723f0552715c47518bad6d107"],["/js/22-c3ba855c1e5ae9b71ddf.js","e0288a9257019876af1827144081a66e"],["/js/23-75911f5384177eea858a.js","1313a65c08ae1cc0df1f1e25bf4fc10f"],["/js/24-663007bbfe9e804af22d.js","d16d7eada1e88b21ac9f2e48da76d688"],["/js/25-399fae4ed36eb7e0c7b5.js","18308da5fd3c5c1273f299d1e4109f01"],["/js/26-59070511ce40e120631c.js","af84d3d1ce9501c79736332eac237d11"],["/js/27-aab88eac42fda8f8a84f.js","2e80ee4d31b864fabe313c0693cfbf5c"],["/js/28-647d3e69c60fdcd1b0c1.js","ed91d628d60aee9594662fa3eb81e880"],["/js/29-1766681453eb9f410f40.js","574d646acd269c6814f640c6478f1130"],["/js/3-ab800ffd7473ae6ab2e5.js","56f158a404ec43d5b67e70d9558c4566"],["/js/30-b308d822e4b86a7fef55.js","fe3f6719a5cf6cf9e55625cb275da1e5"],["/js/31-ddff3689182b639e6073.js","faf3f30b1f4aa5ff523569cb8e621a6a"],["/js/32-2ad5c86115968df15bd6.js","5e7efc24fe68644effb1870fae02c63b"],["/js/33-4e99c3b13e92fcb9e76e.js","b420e655321685495b92a0295d832de8"],["/js/34-d3dd7fa99a1e72731d49.js","5dd7806e462a337bc059ebf3a7f1d441"],["/js/35-b3c68cdbb8f074e1030c.js","64aa1737c6c731f2167a38e785af3e46"],["/js/36-92707205920a3d6d301d.js","aeff687e8f73fadc0a64cabf251a96b7"],["/js/37-92c230621546c752c4a9.js","358fd548359e1828fcd5b245cd2bc356"],["/js/38-f51e98ed7c448ee136f8.js","9379ca0cc8f65f4f8196b5e4cedc874c"],["/js/39-29cae810d6ce9d90775f.js","1e33a847ba6e8dbf7732e4b6312a5f7e"],["/js/4-17ff38fccd0a8fd74b2b.js","e44b14f71409452a6310dc99dcac216a"],["/js/40-63e6c1ff04e5bad90e05.js","f71c8d3fc17a7432a57b3199838a1c34"],["/js/404-3e1380a31fbd578c4848.js","972819395e79172ba9e6ff9e2000bdf7"],["/js/41-acd3830574854ebe57d5.js","2c480e529c23697d93dd98375979c91b"],["/js/42-e9a7b2da53e3e5d42719.js","a68a14f56f41e166d894dd4b5f2493c0"],["/js/43-b62be6cfe869a1cebb9c.js","52fb003b1d300951a1135fe5f73a5f8b"],["/js/44-401802b91272da73a085.js","c838e4a57fb339f373a419542b6c0986"],["/js/45-4397845e1c8141b71c84.js","fcd6cd77ce7541cb4d452630c9ce8d51"],["/js/46-f75ba6d902f1689c2a84.js","1e07a60ae6826ec13d05bd5251de6a57"],["/js/47-c2f3a470a20a7ad6e914.js","aebcb0dd11c0793d447befea021d0d3a"],["/js/48-6193ae5eb8e462cf16bd.js","147a19511f10b96cf97303eeb92a78ce"],["/js/49-4e7a7e68d374b0951eea.js","86adc6940cd1b0b6aeabcc4437ca92d1"],["/js/5-6afd0b66d57774c7545f.js","c7f63c5e2266c3f869afc17ed6dca126"],["/js/50-56850cecbfa54d02c496.js","2f60968ccfee5bc5ab70b055fac5b789"],["/js/51-ec94b208dca71acf05fa.js","2f4a104f586ed03036f9b8d7d927e19a"],["/js/52-adc0ecf21bffd33e0775.js","45101387e4b6af30bc5a6a338fb70532"],["/js/53-4e807fa0275432a088ef.js","f5f8362a5b743c4fb64f030b0670cc02"],["/js/54-ef3909152392f205bfb0.js","3f44d936b801d6980b86700d6efb402e"],["/js/55-82c2f4d29c2823f65eec.js","e7acb2aa6e6fd4028020e494f0497a91"],["/js/56-46d9714843c6ec26772f.js","8065bd0bb3c9241dca0a49909f1b8a9b"],["/js/57-19401968bc087253dd66.js","35751e9a76c0ab1f8b78191d67ba014d"],["/js/58-13bb5d755e7a0cf6a77c.js","fdd9180d50c47947c40da52938d9f309"],["/js/59-5f6655736f65147f64bb.js","765e02ef80d9645b55e6b03cae00bb1f"],["/js/6-cb137f5f448e93faf724.js","9cea1bd7ee7136aceaee00dd36975e2c"],["/js/60-60518a2f9c7eef90cbf2.js","0adc2a7ce9f160ba3f859ff04d73eced"],["/js/61-e2a41918ee756d36ea7f.js","a4318f1d0c4304fb2bc23a7897afae91"],["/js/62-4933bd869662573b4d6f.js","1d02adac778a0ae7f6323f425b019a78"],["/js/63-c581841978d50b217513.js","a562551aff2547b4a5499f432ee45204"],["/js/64-473a5b51bd882c333cac.js","7065fae834ba7aa1f246488bb6c0df9b"],["/js/65-cfd9363831b4510cd442.js","d761991d3f0ef603ae8e5f5071004d68"],["/js/7-79ecd7e3312488fa36a0.js","2f46f3c1d892adfdef754b16a3dda5e4"],["/js/8-19461c06c2143f8d2702.js","d9da9324810641ba61fcb54a9108fe4d"],["/js/9-663f3f7712556794e6fa.js","775b927785a80e7bd1a09badb2de24f1"],["/js/account_password-19491ba03a5e4a64a2a5.js","55c00e7fc95987c60e6b0a933ae74df3"],["/js/api_token-d8b7a1319088c119570e.js","a37d2dc20518c9618a540b0a4bdbc35a"],["/js/authorized_application-41287c0f9101b2ddd686.js","33ef69c72538c4126be66fb19a9ec3a5"],["/js/binary.min.js","f231c38b02dfecd1ab5cf96ddc6dab30"],["/js/binary_common.min.js","993e4690400887eae89431dcd621d88f"],["/js/cashier_password-3553256e2e910a6f1aa6.js","f34db3d4d9c83ef1d5c3305cf359acb0"],["/js/contract-1ac4c3a293cef0880020.js","ffa544d4ffb7c4b0ca5348d0e39f4428"],["/js/financial_assessment-aed155e93559f5d37dd9.js","1c453378294a103610838641ecfee080"],["/js/limits-32e21aa3b967d702cbaa.js","281c4e2cf460c552c522c89e8d9d6884"],["/js/login_history-e2111fd63babcae53906.js","3bd8294e2e3e7ff804734085f02cc336"],["/js/open_positions-8461c83c9237894a3ddd.js","34169073972336e0fc706cb6102981a9"],["/js/open_positions~profit_table~statement-02aa3d9384a0a04be465.js","896ba85b2558c2af69e30226a38cd7ed"],["/js/personal_details-8447876a4d25b4edaadf.js","bc8f101993c4205233f7eb5a1f2e2ac0"],["/js/portfolio-9b8556b146e26c570016.js","a665020ed90ca901d6bde283b8200254"],["/js/profit_table-00090947ae12da5f2f54.js","d9527a5c4664d41e79ef51b402370aa7"],["/js/react_mobx.min.js","58032645b46332ee9fc6d207c3be1999"],["/js/reports-beaae818e9b1eb5b702a.js","34164c16ff9551b3b195e2ee4a939547"],["/js/self_exclusion-fc21500bf2438bfe0a1f.js","74adc63c7686832cdb25152fa354000a"],["/js/settings-cd6951a2f52411500379.js","92f095f75b77c54455ff5d2aef6744ea"],["/js/smart_chart-689a29ec9993cbb3cc28.js","c6bcf1f10f3475dff312c0ada805143e"],["/js/statement-7022cd22f34719f544f1.js","ca75f1ca4927b9204da30959017994ff"],["/js/vendor.min.js","afaaaa904aec0dbeb2578453789798b9"],["/js/vendors~smart_chart-826d11c05716e93f442a.js","5d4d8962d64bfc4ac59ebf57a5346629"]];
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







