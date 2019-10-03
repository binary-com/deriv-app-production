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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/css/AccountSignupModal.css","fd506e50c770af4843fb5e2e5add1789"],["/css/account.css","0a3a5ac5495c8e95046c28cf0163c178"],["/css/app.css","e360a390dae68746592cd45ef0007511"],["/css/modals.css","59c76be941d6feafa7886a8aba932c3b"],["/css/mt5.css","bf009c6f130ce412e3bb83da58900547"],["/css/notification-messages.css","6a0d670b1dfcacb96b7260efffc6a4f5"],["/css/reports.css","3f379e4798102173a5b10ebc4e400946"],["/css/screen-small.css","e9121bc9b28df9aaf8e5086d03205f6f"],["/css/settings-chart.css","1d871c9430edb2809600ace0624dcb12"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","14be9a86831fbe49421b5cc7a31763b5"],["/js/0.ce431eb1cd413b0d8cc1.js","a38162234280cda91ef583a70a1728a8"],["/js/1.ce431eb1cd413b0d8cc1.js","129aed3b2c2d248f370e8ca819632852"],["/js/10.ce431eb1cd413b0d8cc1.js","4c1ff6a5614536a9ab2290a18472300b"],["/js/11.ce431eb1cd413b0d8cc1.js","b748937fa4f6e7833ac66cc960b93977"],["/js/12.ce431eb1cd413b0d8cc1.js","5adff3c3ba3ab5c75de1b221d60d1ac4"],["/js/13.ce431eb1cd413b0d8cc1.js","6d0e38cfdd54683eb86edd73d680a563"],["/js/14.ce431eb1cd413b0d8cc1.js","6b6370cca65b25f82c1411e4a7c465db"],["/js/15.ce431eb1cd413b0d8cc1.js","752f4e995041ab31088f55187367dbbd"],["/js/16.ce431eb1cd413b0d8cc1.js","f433626a43f0f75e65f29c6f5b358327"],["/js/17.ce431eb1cd413b0d8cc1.js","c3249cb414d87a606fa0965669c08689"],["/js/18.ce431eb1cd413b0d8cc1.js","1e010787b443dd11156063c15a865d18"],["/js/19.ce431eb1cd413b0d8cc1.js","42e1a616632ae1204f7f16eafcf68667"],["/js/2.ce431eb1cd413b0d8cc1.js","7a288ca2beb17f8b15a692abd339b2ae"],["/js/20.ce431eb1cd413b0d8cc1.js","f3020a6edc70c77439ec4b7e9d28571e"],["/js/21.ce431eb1cd413b0d8cc1.js","1a92430ab2f82a176dc4edb8ed3133f5"],["/js/22.ce431eb1cd413b0d8cc1.js","ccc1d00cb09dc8c72bf0c692f293a21d"],["/js/23.ce431eb1cd413b0d8cc1.js","7276ed17322fbae5dd213bb11733a95b"],["/js/24.ce431eb1cd413b0d8cc1.js","4ff7d4e0d2649304014cb6843b417a00"],["/js/25.ce431eb1cd413b0d8cc1.js","3029b2b01dac3c77c11e116d8d817713"],["/js/26.ce431eb1cd413b0d8cc1.js","6b954429a0c66aaf55ae67558590fa29"],["/js/27.ce431eb1cd413b0d8cc1.js","d3ae8cd8ce325bd17c938b2e40cdd13f"],["/js/28.ce431eb1cd413b0d8cc1.js","5df6371fbd322f8959025e29c9ef82e8"],["/js/29.ce431eb1cd413b0d8cc1.js","31e187676a5b3f80798d0691222a8705"],["/js/3.ce431eb1cd413b0d8cc1.js","e1d6032669bdb24ec59e2a2b2f43f8b2"],["/js/30.ce431eb1cd413b0d8cc1.js","7e55c8e56c292204c178a698462f64fb"],["/js/31.ce431eb1cd413b0d8cc1.js","0b7cf26056566ff19b160b222bde0d04"],["/js/32.ce431eb1cd413b0d8cc1.js","aacfba60ecc2dddaaaa913e21c3da213"],["/js/33.ce431eb1cd413b0d8cc1.js","7a34fc576a70d14cd2564e386a0d84eb"],["/js/34.ce431eb1cd413b0d8cc1.js","8f896e2250f01ce6f8f195e2ec25b322"],["/js/35.ce431eb1cd413b0d8cc1.js","eb6d1e9924d2a005456e601c0e8d5f00"],["/js/36.ce431eb1cd413b0d8cc1.js","542f47f425f5e2ecb3ff3f526877bda1"],["/js/37.ce431eb1cd413b0d8cc1.js","70cbd014df7af274f5ae679f63da0183"],["/js/38.ce431eb1cd413b0d8cc1.js","d24e50ff1f590d05719a7a0e01138dd2"],["/js/39.ce431eb1cd413b0d8cc1.js","a19a9764d538b4d119fb8dc508d23c59"],["/js/4.ce431eb1cd413b0d8cc1.js","148f396b8e21ed811838cb98ef291be3"],["/js/40.ce431eb1cd413b0d8cc1.js","24c037671f8d48be8165c3e999de8aac"],["/js/404.ce431eb1cd413b0d8cc1.js","8f5e7fad899cbebe7f7f59deaeee1f3f"],["/js/41.ce431eb1cd413b0d8cc1.js","7dc1caa047b051fa29b05b68d92cf680"],["/js/42.ce431eb1cd413b0d8cc1.js","afb5f8ca7349b8822a86788542226151"],["/js/43.ce431eb1cd413b0d8cc1.js","58f3636e8bb67d2b93980502c4380d5c"],["/js/44.ce431eb1cd413b0d8cc1.js","314067c51f56e9fb66a09e758cea8a53"],["/js/45.ce431eb1cd413b0d8cc1.js","29d55c0b2831615792d1fd2d0670113b"],["/js/46.ce431eb1cd413b0d8cc1.js","2a17533ee9bb8900c7fc687fec9c3cf5"],["/js/47.ce431eb1cd413b0d8cc1.js","27d3b99fb878a9b2aa6cca38f066ec69"],["/js/48.ce431eb1cd413b0d8cc1.js","0b927d04ae7daa5fbce398393a0a6837"],["/js/49.ce431eb1cd413b0d8cc1.js","5ea20b41e0e8209e1fad436d633ee9c0"],["/js/5.ce431eb1cd413b0d8cc1.js","748dba0d6af9b0cbb3135c60011612ab"],["/js/50.ce431eb1cd413b0d8cc1.js","7049b0e047c16335556ce656efa1523d"],["/js/51.ce431eb1cd413b0d8cc1.js","a5e4eee4748bf2d5413336258d5e28f2"],["/js/52.ce431eb1cd413b0d8cc1.js","f66117c13babf0056061d6f72c833515"],["/js/53.ce431eb1cd413b0d8cc1.js","731b917fe2592d2fd9a4281132909fcf"],["/js/54.ce431eb1cd413b0d8cc1.js","4e41372356928f4581c6103aff67d605"],["/js/55.ce431eb1cd413b0d8cc1.js","f617f890d9f583023fafb1c785e76057"],["/js/56.ce431eb1cd413b0d8cc1.js","a0207ed424cf5b6b523f10f2e0b7b063"],["/js/57.ce431eb1cd413b0d8cc1.js","260c1e1e3cc384854a4032d0304517d3"],["/js/58.ce431eb1cd413b0d8cc1.js","917487694dcea6c4483f6225c8bbd5f9"],["/js/59.ce431eb1cd413b0d8cc1.js","1c94d0bba7b694973155bf144191dc2c"],["/js/6.ce431eb1cd413b0d8cc1.js","00c5d45aff34eda03d91deb50bfb64ea"],["/js/60.ce431eb1cd413b0d8cc1.js","8c0aa65594806064e0604a524fa92fda"],["/js/61.ce431eb1cd413b0d8cc1.js","a3cab7993ec96c0f75036dfe748bf469"],["/js/62.ce431eb1cd413b0d8cc1.js","765cfffe6be282067d61be75f6e15682"],["/js/63.ce431eb1cd413b0d8cc1.js","c07281ee87f3745ef7386824860d57d0"],["/js/64.ce431eb1cd413b0d8cc1.js","23d3d9fdc733aee2217fda6986a9c8f2"],["/js/65.ce431eb1cd413b0d8cc1.js","a1a0ffd38f69a0b9a72508f1fe881c3d"],["/js/66.ce431eb1cd413b0d8cc1.js","41ad369b300f77be3e8321832baee2b5"],["/js/67.ce431eb1cd413b0d8cc1.js","c169f6f676f5d39b889f8e491c9532d7"],["/js/68.ce431eb1cd413b0d8cc1.js","22ec60bc41865c2b95bf8fbc4d57bf90"],["/js/69.ce431eb1cd413b0d8cc1.js","b61ffe814910cc9f77640a053bb8cf0b"],["/js/7.ce431eb1cd413b0d8cc1.js","5c095a63862142789ce394322feeca69"],["/js/70.ce431eb1cd413b0d8cc1.js","eebd5e01493519b41efe9cdb13eef190"],["/js/71.ce431eb1cd413b0d8cc1.js","24c57600f388574cfecbe01e1b18b23c"],["/js/72.ce431eb1cd413b0d8cc1.js","028fcfd3cfeb5df76b5ea414a00d70bc"],["/js/73.ce431eb1cd413b0d8cc1.js","ac99aa4a81a63d3df5d45a62a0df21fd"],["/js/74.ce431eb1cd413b0d8cc1.js","c1c4dd3d964c3b953dc8dc5a55fad7bf"],["/js/75.ce431eb1cd413b0d8cc1.js","869c3833b25416fd2763d9c6d013b9b3"],["/js/76.ce431eb1cd413b0d8cc1.js","fd5bedf3e07817bc6645370ca713d862"],["/js/77.ce431eb1cd413b0d8cc1.js","e1c99dbeb9a7f83be8111ad1d5968ef9"],["/js/78.ce431eb1cd413b0d8cc1.js","6e58f98a57b72474410b4157577eeccf"],["/js/79.ce431eb1cd413b0d8cc1.js","b71edbb813df5e0d1769835c2ae7de5b"],["/js/8.ce431eb1cd413b0d8cc1.js","5d6199fd1bbb867b083873d537ca92a1"],["/js/80.ce431eb1cd413b0d8cc1.js","bf34af07fc7ef2e9dc322896290128e3"],["/js/81.ce431eb1cd413b0d8cc1.js","628c9d97d9ab6bc799949a1ae7e3af83"],["/js/82.ce431eb1cd413b0d8cc1.js","c020946573890a29d7a3611dd282c737"],["/js/83.ce431eb1cd413b0d8cc1.js","f8b3900ed88dc670021681506e326eff"],["/js/84.ce431eb1cd413b0d8cc1.js","eebcd3cb0b451b7b8d7b5aad6790872d"],["/js/85.ce431eb1cd413b0d8cc1.js","a9cc9c691c93364fbca573e0b6ff0e7e"],["/js/86.ce431eb1cd413b0d8cc1.js","3c60adc04131a563e70124b498671eab"],["/js/87.ce431eb1cd413b0d8cc1.js","59ec216391fbb59c7944f44767f54c90"],["/js/88.ce431eb1cd413b0d8cc1.js","c42a593aa2f9e934688affbf568f60c9"],["/js/89.ce431eb1cd413b0d8cc1.js","5b82c06b3d541761320b324c5bd0f843"],["/js/9.ce431eb1cd413b0d8cc1.js","94786e15c5ca5c1be3b3a55bc08cb033"],["/js/90.ce431eb1cd413b0d8cc1.js","5d36edeb58e14ccac784e09c7324abec"],["/js/91.ce431eb1cd413b0d8cc1.js","a0408ff531fc81a9c171a83e6d375847"],["/js/92.ce431eb1cd413b0d8cc1.js","ef145fbfa645c3ed4fc37c7d489e3997"],["/js/AccountSignupModal.ce431eb1cd413b0d8cc1.js","53fd5157f51930b684c751a4ba427173"],["/js/ResetPasswordModal.ce431eb1cd413b0d8cc1.js","8a902a1b96fb26e1ebb05ea2cfcdfd99"],["/js/account-info.ce431eb1cd413b0d8cc1.js","4499b6ce3dbbdfe4be34910c65c29ebf"],["/js/account.ce431eb1cd413b0d8cc1.js","5d87e061121ef071f4a97658538d3a06"],["/js/contract.ce431eb1cd413b0d8cc1.js","282e651d330ed936420c81cea422ef78"],["/js/main.ce431eb1cd413b0d8cc1.js","e18453c1abdc0f1a416c22f6d9ca04b0"],["/js/modals.ce431eb1cd413b0d8cc1.js","34569fa4adcec676a7adbfabdbe8ae28"],["/js/mt5.ce431eb1cd413b0d8cc1.js","d612d0342b6bfa0fbcae5cffb8b6f431"],["/js/notification-messages.ce431eb1cd413b0d8cc1.js","7f50d921a40d694786c4c001cf0fa452"],["/js/push-notification.ce431eb1cd413b0d8cc1.js","b78cc6a56d295948714d76c91cbdc10c"],["/js/reports.ce431eb1cd413b0d8cc1.js","ea71330cd807574621550ad598c208e6"],["/js/screen-small.ce431eb1cd413b0d8cc1.js","6c45c37ba091ddb634ee048c6061928c"],["/js/settings-chart.ce431eb1cd413b0d8cc1.js","fc8339b067dc059dcd05aaa4395f4db8"],["/js/settings-language.ce431eb1cd413b0d8cc1.js","ebc8780b6c298b8b4ff7f69456d7112e"],["/js/settings-theme.ce431eb1cd413b0d8cc1.js","557c9d0c07cfd8158a7a7e7f0e377a23"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.ce431eb1cd413b0d8cc1.js","e5b509f9a97df00dbcc0059e12d27701"],["/js/two-month-picker.ce431eb1cd413b0d8cc1.js","8cd662ea79050ef6bf8903f1f04abcc6"],["/js/vendors~smart_chart.ce431eb1cd413b0d8cc1.js","dc4cd12859aefb6d3ced93ab208e035b"],["/js/work-in-progress.ce431eb1cd413b0d8cc1.js","cf0a6c00bb2b4bec4ac904e17985d8ec"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







