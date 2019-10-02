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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","8dda3685135a540704bd543726a1cb90"],["/css/app.css","d1f96e09325537ad5e0a567b46ee67d0"],["/css/modals.css","828256690638c40e408e14600775ca10"],["/css/mt5.css","0276cd45fe1c0b7921ef30318bdf9f8d"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","324ad1916101bbbbe396d1374476c6c8"],["/js/0.bda6a2cf7ad432b9931a.js","dd94db29e60657652ec6a6ad543d7fc1"],["/js/1.bda6a2cf7ad432b9931a.js","c42a2d3de69b8c955cb7001d24b1118b"],["/js/10.bda6a2cf7ad432b9931a.js","d72aeffb9bc86bee55b7e197734cec52"],["/js/11.bda6a2cf7ad432b9931a.js","26bafc530fdb40a19b57097a01d66a02"],["/js/12.bda6a2cf7ad432b9931a.js","c4ecc9fee52d7e2f5a3bc3e893819fdd"],["/js/13.bda6a2cf7ad432b9931a.js","c818e97f710ba338118542c78faacaff"],["/js/14.bda6a2cf7ad432b9931a.js","9803014dca5bed7e455fa2f33d943cff"],["/js/15.bda6a2cf7ad432b9931a.js","4c4764cbdd9071424fba079c6d908ffc"],["/js/16.bda6a2cf7ad432b9931a.js","845c49aa8cec9612510960fb4999dc7a"],["/js/17.bda6a2cf7ad432b9931a.js","9616b8bf9c6d2570968197c681136198"],["/js/18.bda6a2cf7ad432b9931a.js","238e37caaacc61edaf1ccfc3043efa4f"],["/js/19.bda6a2cf7ad432b9931a.js","aa5583c74a3f4df56f2d325fd6969f7b"],["/js/2.bda6a2cf7ad432b9931a.js","b382ba017afea1a9ba20f312b044f681"],["/js/20.bda6a2cf7ad432b9931a.js","85dedc40f774c641daa2a17a3f227215"],["/js/21.bda6a2cf7ad432b9931a.js","7d1d8ec1f3a235fa438d4b1131daf542"],["/js/22.bda6a2cf7ad432b9931a.js","55179499327d3d430833859d0e0b37b8"],["/js/23.bda6a2cf7ad432b9931a.js","7db8c5a963980a19ffaafc62d496fb4f"],["/js/24.bda6a2cf7ad432b9931a.js","fd9a739da6f8d4f9a53367a57c367123"],["/js/25.bda6a2cf7ad432b9931a.js","f6f59a758c7d7225dae229f781143d11"],["/js/26.bda6a2cf7ad432b9931a.js","c1b397d5537c0d404f5f951b92d6f88b"],["/js/27.bda6a2cf7ad432b9931a.js","0ec4e2fa9674f163b08da1dd9417ba3b"],["/js/28.bda6a2cf7ad432b9931a.js","8010a16810c418c4550fb784673bb47a"],["/js/29.bda6a2cf7ad432b9931a.js","f1e8de2f8186ed07c76ab61c7badacaf"],["/js/3.bda6a2cf7ad432b9931a.js","77638f37099cfdb3a2eba0b57a6aa9e5"],["/js/30.bda6a2cf7ad432b9931a.js","2b841a92b851b5f8cfa21417cc5a44fc"],["/js/31.bda6a2cf7ad432b9931a.js","17222b2321e0d28a516c7d1425474643"],["/js/32.bda6a2cf7ad432b9931a.js","da9cd346028ceb06d9babe1b86fc8e2c"],["/js/33.bda6a2cf7ad432b9931a.js","328c44ee9bf475288641a3c9f08b333a"],["/js/34.bda6a2cf7ad432b9931a.js","4979640915e4bb3cb90f7cbaffa6e50a"],["/js/35.bda6a2cf7ad432b9931a.js","e5abdf95c687175ccd145773dd5fc8e6"],["/js/36.bda6a2cf7ad432b9931a.js","63d7d21056af6df0651c522599873792"],["/js/37.bda6a2cf7ad432b9931a.js","e4aeb17c9314f5caeda0d6eb3d3e207d"],["/js/38.bda6a2cf7ad432b9931a.js","ea1f8f43bcceee61f3c596d91ed69c82"],["/js/39.bda6a2cf7ad432b9931a.js","3bb83ec79ae7e9b915642cf31e07fa9a"],["/js/4.bda6a2cf7ad432b9931a.js","20b10213f55961095d1619bc2bf40f0b"],["/js/40.bda6a2cf7ad432b9931a.js","090e72d53503137b533f01f54452ccde"],["/js/404.bda6a2cf7ad432b9931a.js","0691088fce6ddf2ec631f7b7836c5f5f"],["/js/41.bda6a2cf7ad432b9931a.js","3bd4f5223f560fa6bca5dcb16117d68a"],["/js/42.bda6a2cf7ad432b9931a.js","d9b85ceccbf1388a5c5fd3a89052a620"],["/js/43.bda6a2cf7ad432b9931a.js","6278c87134b1f24d4256947d42148b43"],["/js/44.bda6a2cf7ad432b9931a.js","fcfeac32acd140fe23ee2c5be597305d"],["/js/45.bda6a2cf7ad432b9931a.js","972fe7cdcb060bd4c2fb0dfb19c16f25"],["/js/46.bda6a2cf7ad432b9931a.js","c5831f919559edcaacd537f7d1a2b0f2"],["/js/47.bda6a2cf7ad432b9931a.js","863a2530c6c34573fa142e4b36a3f45a"],["/js/48.bda6a2cf7ad432b9931a.js","96e1dbd613eb91940dad7bca1ad70aa7"],["/js/49.bda6a2cf7ad432b9931a.js","7a2d15d19764f0d9abbe5103ca29995e"],["/js/5.bda6a2cf7ad432b9931a.js","96d07eb82b7b40e101be6abba273ab87"],["/js/50.bda6a2cf7ad432b9931a.js","85875512f22c617a35fe629e2c1dce87"],["/js/51.bda6a2cf7ad432b9931a.js","4ba7da79f0a36c27900648f188d578a9"],["/js/52.bda6a2cf7ad432b9931a.js","af392a00f65702a97c9d819380f17936"],["/js/53.bda6a2cf7ad432b9931a.js","4ad90376e749f1ffe99ba98ede3dbf2b"],["/js/54.bda6a2cf7ad432b9931a.js","2815faead8a6b98bac91044b7913cdc5"],["/js/55.bda6a2cf7ad432b9931a.js","7ca268c369bc28ec01e68c034718fd74"],["/js/56.bda6a2cf7ad432b9931a.js","acabe361fd00b8a3b4bf6b19a3f59f2b"],["/js/57.bda6a2cf7ad432b9931a.js","6df1e5ddecc5a5fa5c1f044abaa41254"],["/js/58.bda6a2cf7ad432b9931a.js","8011ceb4c747c591ea91b1303ab8f0c7"],["/js/59.bda6a2cf7ad432b9931a.js","c8f756214237372bd73ed9f885253576"],["/js/6.bda6a2cf7ad432b9931a.js","2bf02f10a2095cc665a906a81900e534"],["/js/60.bda6a2cf7ad432b9931a.js","12a2277ed8ef1165f08b1368508f5742"],["/js/61.bda6a2cf7ad432b9931a.js","6f8aee068d5067d8c04e733d8071f686"],["/js/62.bda6a2cf7ad432b9931a.js","1fc11f6cf1800eb4ba876bb4b65bf26f"],["/js/63.bda6a2cf7ad432b9931a.js","3693579af2c9d4d29d95baad5ae9e78d"],["/js/64.bda6a2cf7ad432b9931a.js","e58186c2c0113424b8a95206442998a0"],["/js/65.bda6a2cf7ad432b9931a.js","186e09e7c82af1e7a4256861e1c0a2ec"],["/js/66.bda6a2cf7ad432b9931a.js","e882672da3ecd7a6560a3f4ae932c63d"],["/js/67.bda6a2cf7ad432b9931a.js","f31ad2b9b4bf4947f4a6ae90f9da96ad"],["/js/68.bda6a2cf7ad432b9931a.js","6674880d8821b9cd9707455d4d4f6b23"],["/js/69.bda6a2cf7ad432b9931a.js","c201ec6651a6aa8c001df71eb28f8d4f"],["/js/7.bda6a2cf7ad432b9931a.js","05cfe74d8eedb1a0a97f82a593255e4c"],["/js/70.bda6a2cf7ad432b9931a.js","c476dbcd1a7d7054ae09a9fa53192e41"],["/js/71.bda6a2cf7ad432b9931a.js","643e6273edc4dac5a8607f300c9652db"],["/js/72.bda6a2cf7ad432b9931a.js","bc4161ef1e101a9fd3b4af263a424b42"],["/js/73.bda6a2cf7ad432b9931a.js","659860be04946bc12ba0a7131774d39b"],["/js/74.bda6a2cf7ad432b9931a.js","28928e75db02df0ccdbd791c342843f4"],["/js/75.bda6a2cf7ad432b9931a.js","946c475f757386292996d8e3d3d012cf"],["/js/76.bda6a2cf7ad432b9931a.js","36a1895da3c313a1d5b02c111c49b7ae"],["/js/77.bda6a2cf7ad432b9931a.js","65d92201a9acda30d41f5e24523571fb"],["/js/78.bda6a2cf7ad432b9931a.js","285ccc674188d012f872ad240c6c1b85"],["/js/79.bda6a2cf7ad432b9931a.js","2fcd6c2692ef9f5adb98115e496a19d9"],["/js/8.bda6a2cf7ad432b9931a.js","38b304fafa78c48fcae63c7f7554d820"],["/js/80.bda6a2cf7ad432b9931a.js","79c236b570e28121c802446a95858f44"],["/js/81.bda6a2cf7ad432b9931a.js","c94d50b6c802c51f2356ddee7824bd56"],["/js/82.bda6a2cf7ad432b9931a.js","e9429fb38e4ddabe2b56bf35c335b99c"],["/js/83.bda6a2cf7ad432b9931a.js","d390c4b41072c7dc4ac40f367b7f5e38"],["/js/84.bda6a2cf7ad432b9931a.js","bb907d26695375e0af19df1552210bb0"],["/js/85.bda6a2cf7ad432b9931a.js","5cb23a32a7aeaa2ddcbca315774f75e8"],["/js/86.bda6a2cf7ad432b9931a.js","34fd3cf3667b5ad111b3352f51026e39"],["/js/87.bda6a2cf7ad432b9931a.js","560e239f9e498d031aa979f538faa766"],["/js/88.bda6a2cf7ad432b9931a.js","8cef234e26ec42553111776dd03c2197"],["/js/89.bda6a2cf7ad432b9931a.js","e3c08f1db700e683a5cab40de8df41fa"],["/js/9.bda6a2cf7ad432b9931a.js","a4f8fd609f9b726ff2cb43751df20bb3"],["/js/90.bda6a2cf7ad432b9931a.js","2e641ed440776b0871c9854e7c9e8693"],["/js/91.bda6a2cf7ad432b9931a.js","c15a2775f348079f86b6fdbf7e3d48db"],["/js/92.bda6a2cf7ad432b9931a.js","daa35034716275927871e0dca42e0f17"],["/js/AccountSignupModal.bda6a2cf7ad432b9931a.js","fcd1858fc561fe6cbba0ddf0197674f1"],["/js/ResetPasswordModal.bda6a2cf7ad432b9931a.js","967ea3adddc6db04afdbc2071d869a77"],["/js/account-info.bda6a2cf7ad432b9931a.js","facf0ec0e179b5d832aeb71d37fda99f"],["/js/account.bda6a2cf7ad432b9931a.js","ad7e1c71a36f9ebf5b51cc4b354760a7"],["/js/contract.bda6a2cf7ad432b9931a.js","c0ec6cd94b094651baf1b1d1a5e629e1"],["/js/modals.bda6a2cf7ad432b9931a.js","2e4cc1b690495e53ff1bc79819610362"],["/js/mt5.bda6a2cf7ad432b9931a.js","b4bada089d658960a28f16623e8f7468"],["/js/notification-messages.bda6a2cf7ad432b9931a.js","0e727e474902a63f6c827d0cc2caf109"],["/js/push-notification.bda6a2cf7ad432b9931a.js","1be186569c06c9a46f06b1e9254ae18a"],["/js/reports.bda6a2cf7ad432b9931a.js","1da947fd805145fdaa702c9b38bf5344"],["/js/screen-small.bda6a2cf7ad432b9931a.js","1f60b970dba3576f982669f14f92627a"],["/js/settings-chart.bda6a2cf7ad432b9931a.js","e6060b44c120c791cc55f0c1bd688352"],["/js/settings-language.bda6a2cf7ad432b9931a.js","c778baac8938ad7abc0e38de69d5f464"],["/js/settings-theme.bda6a2cf7ad432b9931a.js","dc0898b941fc4e4be1f91592a80718e2"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.bda6a2cf7ad432b9931a.js","2551b925f3b35b062793df0708547351"],["/js/two-month-picker.bda6a2cf7ad432b9931a.js","7a163b102fb15a3028a373e03c0f1c95"],["/js/vendors~main.bda6a2cf7ad432b9931a.js","2ec9a9c2061973633ce87028b1f9f306"],["/js/vendors~smart_chart.bda6a2cf7ad432b9931a.js","fdf1a45dcc0ada1109c235080d972e54"],["/js/work-in-progress.bda6a2cf7ad432b9931a.js","333d07537bb50d793b20f789d5a0cc58"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


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
    var navigateFallback = '/';
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







