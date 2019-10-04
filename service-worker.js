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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/css/AccountSignupModal.css","a30f9ea7503f584b9910a100dfdf8e5e"],["/css/account.css","0a3a5ac5495c8e95046c28cf0163c178"],["/css/app.css","e8d20088e6d316057a83e821f8448762"],["/css/default~modals~mt5.css","35914afade30258cfe95d2b07c22bcdf"],["/css/modals.css","26414ea9499779d47666f8e94ff53622"],["/css/mt5.css","28309f0f958f52c5b5e8ffc4620ad585"],["/css/notification-messages.css","6a0d670b1dfcacb96b7260efffc6a4f5"],["/css/reports.css","3f379e4798102173a5b10ebc4e400946"],["/css/screen-small.css","e9121bc9b28df9aaf8e5086d03205f6f"],["/css/settings-chart.css","1d871c9430edb2809600ace0624dcb12"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","d304136c80def8ccb0cc73399a71e665"],["/js/0.9ad6ef30372111a43555.js","df21e7e8970bf6bf2d84b85a11f25686"],["/js/1.9ad6ef30372111a43555.js","23e3fff47015c296c14df06237699820"],["/js/10.9ad6ef30372111a43555.js","8da751483b9c93c49fe5e01a8b44a027"],["/js/11.9ad6ef30372111a43555.js","ad43414a8147cd9a2b4fb83557e8cf75"],["/js/12.9ad6ef30372111a43555.js","34601894792510e342f0c4dace0e513c"],["/js/13.9ad6ef30372111a43555.js","c0171cdb6ffd6511e10b5485716e8282"],["/js/14.9ad6ef30372111a43555.js","5d5cb59bda2127865948688259c55cf3"],["/js/15.9ad6ef30372111a43555.js","9dc6fa073aa956341d61355e6812a62c"],["/js/16.9ad6ef30372111a43555.js","277ee5acf2951c60167301457782c5f7"],["/js/17.9ad6ef30372111a43555.js","3d7e3a381980c9c862e0f90f2eb717db"],["/js/18.9ad6ef30372111a43555.js","91141a95852d7393b68624d65b40c98b"],["/js/19.9ad6ef30372111a43555.js","f25c424f5243ba55b9dc534c16f57e96"],["/js/2.9ad6ef30372111a43555.js","4213946c2a58983cd9317a0d6c479070"],["/js/20.9ad6ef30372111a43555.js","5e47f1c08f14c297e7717d02d7233f77"],["/js/21.9ad6ef30372111a43555.js","62e7e13da98d79808842df03b5588561"],["/js/22.9ad6ef30372111a43555.js","a01c3472a56fa1a28e957f9641125d5d"],["/js/23.9ad6ef30372111a43555.js","0e9e81da2bd1efce94e3e86e43819c7e"],["/js/24.9ad6ef30372111a43555.js","2b5bb78bb578ef67da086bb26ef3960e"],["/js/25.9ad6ef30372111a43555.js","9e46974b9e0ee409dc1805b40821b0bf"],["/js/26.9ad6ef30372111a43555.js","514f7e28a730e137d7fd238c900a456b"],["/js/27.9ad6ef30372111a43555.js","84d3fac3068a637e6eafcc811c9eee49"],["/js/28.9ad6ef30372111a43555.js","ff0da931328165fee3b5b6a7a50af09f"],["/js/29.9ad6ef30372111a43555.js","b64f61b614afe79983cb57aa4ed8c11f"],["/js/3.9ad6ef30372111a43555.js","ac8a76edc6c222f9f11e419bd9cf9d5b"],["/js/30.9ad6ef30372111a43555.js","6571fdb559119517d090ad956da45c60"],["/js/31.9ad6ef30372111a43555.js","15de67e53ad27ba314209f9a8ea72102"],["/js/32.9ad6ef30372111a43555.js","ca9a6e3ad4c9b8027b4fd00b829fa6a3"],["/js/33.9ad6ef30372111a43555.js","86eb017544e09d7a94e4ef0691599c4b"],["/js/34.9ad6ef30372111a43555.js","0f80557613eebb8c443571161313c9d0"],["/js/35.9ad6ef30372111a43555.js","274dca5fc7bed5bfaf1c86458c207f4d"],["/js/36.9ad6ef30372111a43555.js","00906c0bbcffc0bf57d46aa5e0b20256"],["/js/37.9ad6ef30372111a43555.js","28e508c67f7090d3031f1e76ac64076f"],["/js/38.9ad6ef30372111a43555.js","69c23912e8d2ab52d254eaabc33e22eb"],["/js/39.9ad6ef30372111a43555.js","adb167d3080c9f3dbbdba68b3fab1687"],["/js/4.9ad6ef30372111a43555.js","eaf7df7b7b87c6a85bb671352fecc667"],["/js/40.9ad6ef30372111a43555.js","c2e593b0ea765651c0623fbfdb72a6c3"],["/js/404.9ad6ef30372111a43555.js","371793e57ac68fb5f03148087c2198a4"],["/js/41.9ad6ef30372111a43555.js","a824e2462f3d2e4e649426d851fa1d7c"],["/js/42.9ad6ef30372111a43555.js","f39adf9c9a6b20c24db079c3b7fdb7dd"],["/js/43.9ad6ef30372111a43555.js","697bc621cbda4f298ce87a74d158bef8"],["/js/44.9ad6ef30372111a43555.js","3dd35e9ffd8485c302e1e82877547a97"],["/js/45.9ad6ef30372111a43555.js","d35107e078e339998eb297b6609313e1"],["/js/46.9ad6ef30372111a43555.js","83a91f221583ba6169319128e2a71150"],["/js/47.9ad6ef30372111a43555.js","23ddd21d86cd9508c9b581a6b35b64de"],["/js/48.9ad6ef30372111a43555.js","d4ea77180c36ca90627cda17a8743950"],["/js/49.9ad6ef30372111a43555.js","c7e7db663fd7ef3828566278b08e415e"],["/js/5.9ad6ef30372111a43555.js","f35f50d805e518c797d03f639faede54"],["/js/50.9ad6ef30372111a43555.js","fb1c9dcafc7cf004c45173e54a9b9532"],["/js/51.9ad6ef30372111a43555.js","24f3d155835d1ed18a8793220d3e6190"],["/js/52.9ad6ef30372111a43555.js","8861bc91a9f706a4a68081422f1adf80"],["/js/53.9ad6ef30372111a43555.js","43315ed89cd663fe0645d16d3e698984"],["/js/54.9ad6ef30372111a43555.js","50c5fa19203f507304737b8383e570f2"],["/js/55.9ad6ef30372111a43555.js","2be52d879214a0f3b024bd52c33625dd"],["/js/56.9ad6ef30372111a43555.js","fea6606c39ad5830ae31e9b8153f0710"],["/js/57.9ad6ef30372111a43555.js","3bac6f1561a689359727ad972a0344cc"],["/js/58.9ad6ef30372111a43555.js","729a682894e50e8a081aabb3ec53f96d"],["/js/59.9ad6ef30372111a43555.js","58b407bd15b67b9551ef671e85208ac2"],["/js/6.9ad6ef30372111a43555.js","8e4ef02db090d14ac383647d905fb691"],["/js/60.9ad6ef30372111a43555.js","9ab5166e507b4d34935758ebf237b987"],["/js/61.9ad6ef30372111a43555.js","3b90cbca4e2495cccfbcd18f5fea00e9"],["/js/62.9ad6ef30372111a43555.js","2685486c3c01a22106644e36e6ef85a4"],["/js/63.9ad6ef30372111a43555.js","260f3853ed5dbae5d02240fa3388845d"],["/js/64.9ad6ef30372111a43555.js","c88b608a8b0fde20b6c4d420fd571c35"],["/js/65.9ad6ef30372111a43555.js","c9cbf21cb7f1d982bcc5dd79aaac2b73"],["/js/66.9ad6ef30372111a43555.js","55f62bd30a9ae51e21622d904ea0add8"],["/js/67.9ad6ef30372111a43555.js","60e6aa44ebc29ea34b57ce3c3ad48979"],["/js/68.9ad6ef30372111a43555.js","7a2713c620fdb1a6e6dd06b095d65370"],["/js/69.9ad6ef30372111a43555.js","0b232977707347e205033003d3f963aa"],["/js/7.9ad6ef30372111a43555.js","264420776467588340cfa5a2dfe6b81b"],["/js/70.9ad6ef30372111a43555.js","6eade06047e36bdbc965ce53f21086e5"],["/js/71.9ad6ef30372111a43555.js","50045af6495781b33134ee98a3e76c98"],["/js/72.9ad6ef30372111a43555.js","29be35dd5b043ff3325f4c060b8d9f23"],["/js/73.9ad6ef30372111a43555.js","aeaa86ee9712f9d3fd692a5ee65493c3"],["/js/74.9ad6ef30372111a43555.js","48a6cc7df58e5282a524131bf6099fa0"],["/js/75.9ad6ef30372111a43555.js","fba583a807bf0dc422b1e2a0296598f6"],["/js/76.9ad6ef30372111a43555.js","1f1ebde440a4efd485e88b3b2a5160c4"],["/js/77.9ad6ef30372111a43555.js","e732b1f403f22c4aa6e9a07b5b449848"],["/js/78.9ad6ef30372111a43555.js","c7d664ae7582c81fe639cde73de3c61b"],["/js/79.9ad6ef30372111a43555.js","3bfd1fd994a4ed9d28b4c7b766871029"],["/js/8.9ad6ef30372111a43555.js","fab1d542730250134d2abf1978c18c02"],["/js/80.9ad6ef30372111a43555.js","7feb3d3595e49522db17db0584252741"],["/js/81.9ad6ef30372111a43555.js","16e98911c1f698dd8d19229285c97d5d"],["/js/82.9ad6ef30372111a43555.js","0438d158505ee7abf5b7c2ba078f8958"],["/js/83.9ad6ef30372111a43555.js","8143018b7909ce2299e2ab888aab0190"],["/js/84.9ad6ef30372111a43555.js","f6887b84c37a70fca5c3b39d02d5a596"],["/js/85.9ad6ef30372111a43555.js","c985eff34f0ff6455fa2fbbda2517270"],["/js/86.9ad6ef30372111a43555.js","c89bc2a5458f1906ebc48f00241ef248"],["/js/87.9ad6ef30372111a43555.js","5a9e0b1ce69a5fd78b615fa6ae2e99cc"],["/js/88.9ad6ef30372111a43555.js","3d5d4ec9da4f6646140e8c4809d2f0d2"],["/js/89.9ad6ef30372111a43555.js","f46a5413a5d16e993c0ba4dedb614122"],["/js/9.9ad6ef30372111a43555.js","95c12b56e9a3983271027a962329d6a1"],["/js/90.9ad6ef30372111a43555.js","8b0acb5eccf6f4ec402624bbb4426e0f"],["/js/91.9ad6ef30372111a43555.js","d3de0719038302dddb0c6d21536dce5b"],["/js/92.9ad6ef30372111a43555.js","6a32c1f7b249d262719acdcf0b5980a9"],["/js/93.9ad6ef30372111a43555.js","60ebda74ccb0d097e825eee044606f0f"],["/js/94.9ad6ef30372111a43555.js","ee30fa04dd9597dfcac943014f55db6b"],["/js/95.9ad6ef30372111a43555.js","694b9649b1f4b1cf28ba2e2c4b986fee"],["/js/96.9ad6ef30372111a43555.js","d361efddff67e8115932913402dbb195"],["/js/AccountSignupModal.9ad6ef30372111a43555.js","00d478e0f041ade6549c1c0ad7cd846d"],["/js/ResetPasswordModal.9ad6ef30372111a43555.js","e10eceef2a73ec1c445de2b8be755c02"],["/js/account-info.9ad6ef30372111a43555.js","f83e8ae2728918e78f454d769768a58a"],["/js/account.9ad6ef30372111a43555.js","80ebc9967cd320f16cd1b29c90882d7f"],["/js/contract.9ad6ef30372111a43555.js","e0c5118a9dac484020a964c901e60694"],["/js/default~modals~mt5.9ad6ef30372111a43555.js","ba7af66c6787bc83c6ee5b71a8a3f83a"],["/js/main.9ad6ef30372111a43555.js","79b1ceb88a5f5df400f565932f36046e"],["/js/modals.9ad6ef30372111a43555.js","55e39419f9e53fe544995f5ee6b81f00"],["/js/mt5.9ad6ef30372111a43555.js","e9ed8bcd404ec05abc6e196d647b6b6f"],["/js/notification-messages.9ad6ef30372111a43555.js","b4ab9c4209070ad467aadc10d0b47168"],["/js/push-notification.9ad6ef30372111a43555.js","a93d891db8585e5a27a942b8a360439b"],["/js/reports.9ad6ef30372111a43555.js","94acd721e6b64ee27d7e0d095805aa3f"],["/js/screen-small.9ad6ef30372111a43555.js","5db4bf7238482206c0a91153dce8c331"],["/js/settings-chart.9ad6ef30372111a43555.js","305147081510c49f160e1386b1ccaefd"],["/js/settings-language.9ad6ef30372111a43555.js","3e00bf128a52175f2fa4a63f38296bfd"],["/js/settings-theme.9ad6ef30372111a43555.js","108cdc07818f6fde708647e03276e28f"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.9ad6ef30372111a43555.js","74522f3dcfca95ee893e235c0c653223"],["/js/two-month-picker.9ad6ef30372111a43555.js","46f10cd085f8d5f2ac99bd487589c059"],["/js/vendors~smart_chart.9ad6ef30372111a43555.js","a9d1e0165b692007b7ee2a54483f02bc"],["/js/work-in-progress.9ad6ef30372111a43555.js","644ea156a949d28d0c03be3cc338f165"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







