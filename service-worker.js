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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/css/AccountSignupModal.css","fd506e50c770af4843fb5e2e5add1789"],["/css/account.css","0a3a5ac5495c8e95046c28cf0163c178"],["/css/app.css","83652ff957658a987e8b9f1ef1d035d5"],["/css/default~modals~mt5.css","35914afade30258cfe95d2b07c22bcdf"],["/css/modals.css","26414ea9499779d47666f8e94ff53622"],["/css/mt5.css","28309f0f958f52c5b5e8ffc4620ad585"],["/css/notification-messages.css","6a0d670b1dfcacb96b7260efffc6a4f5"],["/css/reports.css","3f379e4798102173a5b10ebc4e400946"],["/css/screen-small.css","e9121bc9b28df9aaf8e5086d03205f6f"],["/css/settings-chart.css","1d871c9430edb2809600ace0624dcb12"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","9e85df96c8a731029f791e0014c52dbb"],["/js/0.bc7b064c6fa5082a9403.js","d05b4f606c74cfd304c216e41063f962"],["/js/1.bc7b064c6fa5082a9403.js","1ef9bf4e2bac29d56623db664abf874d"],["/js/10.bc7b064c6fa5082a9403.js","5db0317654355e30f53613b14188e729"],["/js/11.bc7b064c6fa5082a9403.js","1f10b4bfd9fb9d7b37cf3dcf396edfa7"],["/js/12.bc7b064c6fa5082a9403.js","24566d78d57bcbca1c45e584f1285e9f"],["/js/13.bc7b064c6fa5082a9403.js","06dae3bf2a1531d41bafe2893be97111"],["/js/14.bc7b064c6fa5082a9403.js","5d263a62e4cd43f3e052cfe2adb8ed46"],["/js/15.bc7b064c6fa5082a9403.js","a2ea75935c68e182578fe196286d2af4"],["/js/16.bc7b064c6fa5082a9403.js","6b8f8e9060bbb310ea19753ca934f88e"],["/js/17.bc7b064c6fa5082a9403.js","ee0b9fc98abdd20609201669adf185a9"],["/js/18.bc7b064c6fa5082a9403.js","f3b79aeb567b7f6c49e35f5592b89dcb"],["/js/19.bc7b064c6fa5082a9403.js","bb4dde6b7c9be0ec3e14fe8ab5af8f9d"],["/js/2.bc7b064c6fa5082a9403.js","9797ca586ddc7de093c1281bbf0f8f59"],["/js/20.bc7b064c6fa5082a9403.js","a8c47c4cfe6fbe6eee0961468790c77c"],["/js/21.bc7b064c6fa5082a9403.js","8ba22b7721503a5ec4f233e5d8a7dd95"],["/js/22.bc7b064c6fa5082a9403.js","1d23d989f50f4160994bb5e6c29bb4f9"],["/js/23.bc7b064c6fa5082a9403.js","1b512df1f4c9e8d96bedf0b30206708b"],["/js/24.bc7b064c6fa5082a9403.js","29926609f716256cc258df96859d318d"],["/js/25.bc7b064c6fa5082a9403.js","f8d2988e3ad3f51e9ac97e4315fbb61f"],["/js/26.bc7b064c6fa5082a9403.js","8fc04519e6a5f91b57187b11743f48bf"],["/js/27.bc7b064c6fa5082a9403.js","545bb03c432f3c0ab1e55602a61e8dff"],["/js/28.bc7b064c6fa5082a9403.js","a7d7328e2b6c75010bc3210f05aa03c2"],["/js/29.bc7b064c6fa5082a9403.js","f538e1a70ad8cb23f7a0f7d415a2d332"],["/js/3.bc7b064c6fa5082a9403.js","849fa73d4705a30b96b22d8f4a733c4d"],["/js/30.bc7b064c6fa5082a9403.js","1d131b2d59db3cf1f0a90d7d914f3d23"],["/js/31.bc7b064c6fa5082a9403.js","14a89e3d0bc7eb5937ce2a35a44fc1c5"],["/js/32.bc7b064c6fa5082a9403.js","f0c747f59ad47ffdb160b21d07b01c33"],["/js/33.bc7b064c6fa5082a9403.js","42bd1810d4c4555fff24406d8e1add5d"],["/js/34.bc7b064c6fa5082a9403.js","261f8ece3d4fa360b40db67695e6606d"],["/js/35.bc7b064c6fa5082a9403.js","1969174a88fff75ee7b7fd808f160a22"],["/js/36.bc7b064c6fa5082a9403.js","d1e2ffd69bc066f69a0d1e055fa76fb0"],["/js/37.bc7b064c6fa5082a9403.js","02a97428a4d744d28901a08e252d7b42"],["/js/38.bc7b064c6fa5082a9403.js","c9001e726a5ad277724b989d21ee1b6e"],["/js/39.bc7b064c6fa5082a9403.js","06085db40378f0b94ece80a6477474d4"],["/js/4.bc7b064c6fa5082a9403.js","b18e73ab46e14df1c71d43eee73477a8"],["/js/40.bc7b064c6fa5082a9403.js","9e162cbe8ea8ca5b6f1dd336783abfce"],["/js/404.bc7b064c6fa5082a9403.js","2726d215442196292a743007c04b7816"],["/js/41.bc7b064c6fa5082a9403.js","b6518817eea53558b8ce6af081105da2"],["/js/42.bc7b064c6fa5082a9403.js","0c1b8b731f01dc48a72ce0b1a87d47fb"],["/js/43.bc7b064c6fa5082a9403.js","303de45016c8d5a4a66a183eed269027"],["/js/44.bc7b064c6fa5082a9403.js","97910432f326adc07751ef7c36a20469"],["/js/45.bc7b064c6fa5082a9403.js","4f00d82185ead410d70c3ee4e2f9c68b"],["/js/46.bc7b064c6fa5082a9403.js","0d6f1cda12953b355cc7febbf484959b"],["/js/47.bc7b064c6fa5082a9403.js","aa1a19c24981742609aa64c18e99f00e"],["/js/48.bc7b064c6fa5082a9403.js","188966a2b0e20d343f6c20e9490725c1"],["/js/49.bc7b064c6fa5082a9403.js","9641d7ab55f741ed7e3ee6a6d9699e42"],["/js/5.bc7b064c6fa5082a9403.js","8680380190d708e31e49bf415327abf3"],["/js/50.bc7b064c6fa5082a9403.js","0258a2dc1bb177f233e0275d7157c9a1"],["/js/51.bc7b064c6fa5082a9403.js","3634d2766e08496a96221d8afd782614"],["/js/52.bc7b064c6fa5082a9403.js","de251ef24aa758c794c9f4f2836153cc"],["/js/53.bc7b064c6fa5082a9403.js","1a326bbb7fdbd18cd1e9419888f4dd71"],["/js/54.bc7b064c6fa5082a9403.js","9c8512d898d05875426657c1f1e57c9d"],["/js/55.bc7b064c6fa5082a9403.js","8ece255d0d3e53129978a0f5ca9cc597"],["/js/56.bc7b064c6fa5082a9403.js","b546fa12283bfe5eba0aa906b491b0aa"],["/js/57.bc7b064c6fa5082a9403.js","6a9b2b9a55d19b4f4a340ec5b97b5eea"],["/js/58.bc7b064c6fa5082a9403.js","df8fdd78f5ea44234c9e3804f51974d9"],["/js/59.bc7b064c6fa5082a9403.js","d1880a116a53c9f2f9d3ec77566c353c"],["/js/6.bc7b064c6fa5082a9403.js","24c8cce0dacd49ebffe4c1b40f58749d"],["/js/60.bc7b064c6fa5082a9403.js","06aacc3aee6cfb9886a88bb83e754c67"],["/js/61.bc7b064c6fa5082a9403.js","d39e4af7dfe44ab95018c89192e87d38"],["/js/62.bc7b064c6fa5082a9403.js","b7c38962c48c63120becc9590481bd1b"],["/js/63.bc7b064c6fa5082a9403.js","2a3af1c9e5478aaaafe2484ac67a9c8f"],["/js/64.bc7b064c6fa5082a9403.js","df52b235a8cb0d0f8a1b033fb44fc58f"],["/js/65.bc7b064c6fa5082a9403.js","b817162df2eca7a8689b8be4cd877108"],["/js/66.bc7b064c6fa5082a9403.js","6c4631d119b5afb93b10467b274788ae"],["/js/67.bc7b064c6fa5082a9403.js","f74891016afd58d561a259352ef51566"],["/js/68.bc7b064c6fa5082a9403.js","ba90eec58fbd6ec87817e91f9f790cd1"],["/js/69.bc7b064c6fa5082a9403.js","b144f8ee229f83f6dadfb8202e9e3302"],["/js/7.bc7b064c6fa5082a9403.js","92fe485abae5019015f0c786d6c85f94"],["/js/70.bc7b064c6fa5082a9403.js","f7c97355ce0ddf073f54c417555f38f1"],["/js/71.bc7b064c6fa5082a9403.js","04aa1c33f5b5162584359584c038a3b4"],["/js/72.bc7b064c6fa5082a9403.js","fdb309103ef30b5f766c083fa870dc52"],["/js/73.bc7b064c6fa5082a9403.js","aa3e2fa44747b636e55d27830e560f76"],["/js/74.bc7b064c6fa5082a9403.js","6510aa331f2ec0016e7de6876bfb0837"],["/js/75.bc7b064c6fa5082a9403.js","9578b04b0d06c95f524b75c8e2c226a4"],["/js/76.bc7b064c6fa5082a9403.js","ee5766840de1f50b441c86139f7d1c98"],["/js/77.bc7b064c6fa5082a9403.js","2b6380c515837fd304ffca6c34be006e"],["/js/78.bc7b064c6fa5082a9403.js","4037069882b6c3787001338c6fafaa9f"],["/js/79.bc7b064c6fa5082a9403.js","d3e3c4a7c84ad01fd5ba43c0a1aadd17"],["/js/8.bc7b064c6fa5082a9403.js","fe0ad15f9aeb4a9761c64f07fe06fdf1"],["/js/80.bc7b064c6fa5082a9403.js","5fa6c9249e84ce7ed43d0a6b69e57bcf"],["/js/81.bc7b064c6fa5082a9403.js","e4fc16397584cb61c71f79737ea907c1"],["/js/82.bc7b064c6fa5082a9403.js","44f41dcc155b0687519f63bc7b8bfe04"],["/js/83.bc7b064c6fa5082a9403.js","e9e6900acce611c459f5d7ed32c26b9e"],["/js/84.bc7b064c6fa5082a9403.js","6990d9b71ba2d40aa10327b1c70dfd15"],["/js/85.bc7b064c6fa5082a9403.js","f47e32de0d1fa01ba89322083e26098a"],["/js/86.bc7b064c6fa5082a9403.js","fa53ae7f40cac2107b67a713b6af0cf9"],["/js/87.bc7b064c6fa5082a9403.js","eeadeea07e24738114e4ec5d8c35c58e"],["/js/88.bc7b064c6fa5082a9403.js","59b7f411b9eded7b3ac7fb0905eefd51"],["/js/89.bc7b064c6fa5082a9403.js","910a09d2edd66eb0cffb2ed3b68b68ba"],["/js/9.bc7b064c6fa5082a9403.js","b9876394380d06ca0b950351b131f190"],["/js/90.bc7b064c6fa5082a9403.js","f162b01d90d9e8e17fabb03bf10ca96a"],["/js/91.bc7b064c6fa5082a9403.js","2906f7a9a35161fe674e29fee94dfa69"],["/js/92.bc7b064c6fa5082a9403.js","7a2df1d9679ccda8895ee217223b1ea4"],["/js/93.bc7b064c6fa5082a9403.js","d4fd10192c798fc9f0d6b6fd44d115b0"],["/js/AccountSignupModal.bc7b064c6fa5082a9403.js","bbfb6e25a842632029bc746c84b9960a"],["/js/ResetPasswordModal.bc7b064c6fa5082a9403.js","4bb1223a5170eb6d884d8e490db6eedd"],["/js/account-info.bc7b064c6fa5082a9403.js","0a1a966705e418ebba978776f7c134d2"],["/js/account.bc7b064c6fa5082a9403.js","0335df42246928cba180deb0bf5c992e"],["/js/contract.bc7b064c6fa5082a9403.js","73469e96b7c342e44ddcbb4c46f904a9"],["/js/default~modals~mt5.bc7b064c6fa5082a9403.js","7166a078801bdfd4cc65a5d1374b1541"],["/js/main.bc7b064c6fa5082a9403.js","f0a218e9bfc909c12d06fe9b3b314627"],["/js/modals.bc7b064c6fa5082a9403.js","43867cc35649f2f0801ae840b3979bf2"],["/js/mt5.bc7b064c6fa5082a9403.js","69ac97616b9a394f953ddd16bd546fbf"],["/js/notification-messages.bc7b064c6fa5082a9403.js","72a2890c2b0e11fe89e29cdec36b929c"],["/js/push-notification.bc7b064c6fa5082a9403.js","3b625b4ec381c8dfd5387fe061f214ab"],["/js/reports.bc7b064c6fa5082a9403.js","95227198cc03d15f38ac5f92ee69982f"],["/js/screen-small.bc7b064c6fa5082a9403.js","fbb77377369a073d1c7b51b1c7b7fc46"],["/js/settings-chart.bc7b064c6fa5082a9403.js","27e49525afa70730697209432f28250e"],["/js/settings-language.bc7b064c6fa5082a9403.js","5eb535cf93ac1c5cea61dd07c06f1ab6"],["/js/settings-theme.bc7b064c6fa5082a9403.js","58b35b46f2e45f26c2c0577f425667f8"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.bc7b064c6fa5082a9403.js","952525073b7ee8341d2aabb160158158"],["/js/two-month-picker.bc7b064c6fa5082a9403.js","d60e392acbcb7b24429d3910ce06b871"],["/js/vendors~smart_chart.bc7b064c6fa5082a9403.js","056e0add7228d3d90e558099816909b5"],["/js/work-in-progress.bc7b064c6fa5082a9403.js","348283a7cd51cfd1457b25e80dfd77a7"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







