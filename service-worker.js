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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","888c9596a2b40b1fb3a8f82f8be67a97"],["/css/deriv-components.css","7e7e0c92ef9e6d5ea08b4cb675a97ac3"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","6a8e8a0ef7d5d5e51cb94c680e3f039f"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","7cce3a2373a45582bb0f81bc25c1a444"],["/js/0.83d586de0580c06c2de6.js","5b17d7f51e8604504a1fe990bd3ec769"],["/js/1.83d586de0580c06c2de6.js","e312dd751c65f90d085e32768b1e1b13"],["/js/10.83d586de0580c06c2de6.js","6b5d29d40bba06438fc1775003d55028"],["/js/11.83d586de0580c06c2de6.js","7672dee055ee1683b89ce2f40259679c"],["/js/12.83d586de0580c06c2de6.js","8c863959000c044ca4cff297975266b8"],["/js/13.83d586de0580c06c2de6.js","00b48e8f49c3356abc50b3c150200a65"],["/js/14.83d586de0580c06c2de6.js","1c53e4470ad66d95eda780f570971d4f"],["/js/15.83d586de0580c06c2de6.js","86809128596ca9db7ee9444c7bb30126"],["/js/16.83d586de0580c06c2de6.js","28aa322409903b4e6315d724d37f8ad5"],["/js/17.83d586de0580c06c2de6.js","f3f73aa239aef19c94f4e8a965ab10a6"],["/js/18.83d586de0580c06c2de6.js","0fdbd84eee1ee618b40e68461a36b4ef"],["/js/19.83d586de0580c06c2de6.js","c7a78c8e9b3e8ef8499157a563191476"],["/js/2.83d586de0580c06c2de6.js","b5c8b8f34f111854d132c26d08f6cc97"],["/js/20.83d586de0580c06c2de6.js","3d3326f09489caf329d52c9af525e6a4"],["/js/21.83d586de0580c06c2de6.js","ea443769a63df745cae2c1908a5b5228"],["/js/22.83d586de0580c06c2de6.js","8423df32c07974a05abd12555fe8c887"],["/js/23.83d586de0580c06c2de6.js","e8fc66abe0b3fd93c82e2355dcd0904d"],["/js/24.83d586de0580c06c2de6.js","03a8bcb4c4266c9eec3a14968ee86b7c"],["/js/25.83d586de0580c06c2de6.js","4db479215154b46e7d197b55117995bf"],["/js/26.83d586de0580c06c2de6.js","98a9a0d3e15b43892c3f1b7317e395a4"],["/js/27.83d586de0580c06c2de6.js","b2c42cce1115b7066a82cc40b0ea3d08"],["/js/28.83d586de0580c06c2de6.js","2f2c0e6738497f8603a1f9aba7a62466"],["/js/29.83d586de0580c06c2de6.js","3aaa0a2f69f449084ac859d94d8c370c"],["/js/3.83d586de0580c06c2de6.js","d458a0b71e383789f36df2c7a98916e1"],["/js/30.83d586de0580c06c2de6.js","e6bc0ed6a87f177e3d54f95c02a75686"],["/js/31.83d586de0580c06c2de6.js","301bf04afac85a7c0d81d449173585fc"],["/js/32.83d586de0580c06c2de6.js","d48338bc09055f47fbd77aed23d3df0b"],["/js/33.83d586de0580c06c2de6.js","6aad2a485e8b8a86a0fb0b677e2641d8"],["/js/34.83d586de0580c06c2de6.js","866b5aa2fe06ea04270c24bcb7a1bc47"],["/js/35.83d586de0580c06c2de6.js","37c2b5fc1c98b177ca6d9d3c0bc2ebd7"],["/js/36.83d586de0580c06c2de6.js","07dd837d39fc1c8aa801082cb43d9272"],["/js/37.83d586de0580c06c2de6.js","43924ae1d5468ea984ea327e000eca34"],["/js/38.83d586de0580c06c2de6.js","76d49ab82b89b0798ff70ab459f35fdc"],["/js/39.83d586de0580c06c2de6.js","54cd64a1846a7ef135903d54f23a6a7a"],["/js/4.83d586de0580c06c2de6.js","4e32b603be256ce5fde497dfbfc677d0"],["/js/40.83d586de0580c06c2de6.js","7c7beb0bf6dbcf4f6ccb9d35cb24beeb"],["/js/404.83d586de0580c06c2de6.js","10645acd5021b21fc408c0cf36abae64"],["/js/41.83d586de0580c06c2de6.js","db2423fd97a5ced819a9ecde66a86241"],["/js/42.83d586de0580c06c2de6.js","d841f4761d6eaea5a35bcb157eab992a"],["/js/43.83d586de0580c06c2de6.js","593461754feada6151a9592e12d60a73"],["/js/44.83d586de0580c06c2de6.js","383a7c756782eedef6c2cf59b9441873"],["/js/45.83d586de0580c06c2de6.js","ef0f01f3caab8e4091b510b7e942ca70"],["/js/46.83d586de0580c06c2de6.js","3ca99bc010cdc44654e1d29d5966bc35"],["/js/47.83d586de0580c06c2de6.js","d67c97cae23b09b2562674410b348fa7"],["/js/48.83d586de0580c06c2de6.js","d7af85d66a1e2294c10eabe112ff0b49"],["/js/49.83d586de0580c06c2de6.js","7b1028f6a20118e15ebf515a98174a96"],["/js/5.83d586de0580c06c2de6.js","97fd8509b168f207c19aeed0ba8983a2"],["/js/50.83d586de0580c06c2de6.js","f5f64953fb073070dfc457bae3cb5251"],["/js/51.83d586de0580c06c2de6.js","24ac9417e74c5b18a505252444f90989"],["/js/52.83d586de0580c06c2de6.js","2f650ba937182310fdb5b1e402ac8b96"],["/js/53.83d586de0580c06c2de6.js","3e3ed917a1c942e8c8d7a0d2c6518365"],["/js/54.83d586de0580c06c2de6.js","4477cde13e06f64ca7f3fca7a7ff340b"],["/js/55.83d586de0580c06c2de6.js","47e7c45e89159481a541ba1f79c6f85f"],["/js/56.83d586de0580c06c2de6.js","ca729c8bfe59eaecbd13f14623310ab8"],["/js/57.83d586de0580c06c2de6.js","37941fb2382716e2a131f89beacaa33e"],["/js/58.83d586de0580c06c2de6.js","2ab7e04e72b9e230fa0efe17ebe40f56"],["/js/59.83d586de0580c06c2de6.js","c5011ddff6d4e2302374c9613915a58a"],["/js/6.83d586de0580c06c2de6.js","ba0ea56a372445f6d876dfd75bce0e1b"],["/js/60.83d586de0580c06c2de6.js","589afee5a871dc36d1c4960966c15e11"],["/js/61.83d586de0580c06c2de6.js","81aa3cf699f9db1e71d004d79fdf03ff"],["/js/62.83d586de0580c06c2de6.js","2af4b39e57a5962c89f07cb7cbafcc06"],["/js/63.83d586de0580c06c2de6.js","255720a00414402584499adfdd575db1"],["/js/64.83d586de0580c06c2de6.js","85ded3c4a763e73702de5ff9d40c6b00"],["/js/65.83d586de0580c06c2de6.js","aaa302dc91e2f14fe57e6b1fb22124d2"],["/js/66.83d586de0580c06c2de6.js","52d244902b52c2b6b9fd81836d8444d3"],["/js/67.83d586de0580c06c2de6.js","a69f225788cf73532408e1159aacba53"],["/js/68.83d586de0580c06c2de6.js","71748a12a5b907d81a30a3ef9ce60b70"],["/js/69.83d586de0580c06c2de6.js","dc03562b05e575a6458e71d6693ab857"],["/js/7.83d586de0580c06c2de6.js","8ef7524020d56a44dbb851b8d386dbc7"],["/js/70.83d586de0580c06c2de6.js","fd3ecb5a053587651f44c0b7e9956221"],["/js/71.83d586de0580c06c2de6.js","cf11dfe9a3e4c0895da4376957ebbc44"],["/js/8.83d586de0580c06c2de6.js","76992d3e3fc49d733de9d16bd9b65ee3"],["/js/9.83d586de0580c06c2de6.js","da63192ea2fd7ad37667f37242231f87"],["/js/account-info.83d586de0580c06c2de6.js","6db92304637f16b7554c3672adb8bd1e"],["/js/contract.83d586de0580c06c2de6.js","fd43115f7cab71565435f531b404059d"],["/js/default~open_position~1833eefb.83d586de0580c06c2de6.js","c3df452a2eb972c79a5d6c1a84dedf8d"],["/js/digits.83d586de0580c06c2de6.js","2220c79b417ff9cf48f92e46ce381a76"],["/js/info-box.83d586de0580c06c2de6.js","c35577db85cc0f41d36a762fa9d056b2"],["/js/main.83d586de0580c06c2de6.js","8e502297c13edd7d3f2daab1c4015620"],["/js/modals.83d586de0580c06c2de6.js","c8ff8748b43d2e34290e75decd3774ea"],["/js/notification-messages.83d586de0580c06c2de6.js","f496af81ead359d498cf301c56d0431d"],["/js/open_positions.83d586de0580c06c2de6.js","6196526100bb2f1018df618553b42c59"],["/js/profit_table.83d586de0580c06c2de6.js","7aaa2c6e5ff8610941fdbb7b53a281be"],["/js/push-notification.83d586de0580c06c2de6.js","237965293b0102823e04005859983277"],["/js/reports.83d586de0580c06c2de6.js","72da0d0fe8fac963513e0c0511c34c4c"],["/js/screen-small.83d586de0580c06c2de6.js","3f11161bb65c6d29289bcc8d7450cba5"],["/js/settings-chart.83d586de0580c06c2de6.js","f3b9ed9270ad8b65a9134a6c5f43c1e9"],["/js/settings-language.83d586de0580c06c2de6.js","303ad1b78b23b131cb71401dac166fd2"],["/js/settings-theme.83d586de0580c06c2de6.js","20b77c7066b241e99e003f072b5d715d"],["/js/smart_chart.83d586de0580c06c2de6.js","07a25ed2aa3827b888485cfc19872f82"],["/js/smartcharts/chartiq-5bb834.smartcharts.js","55b80fceca4ae8de1bbccab6307f03b3"],["/js/smartcharts/de-po-4ebb0d.smartcharts.js","c82388fdf51df760211407057a634f47"],["/js/smartcharts/es-po-c179ee.smartcharts.js","4c1f372f7e674856da87a05da0b27ee0"],["/js/smartcharts/fr-po-b390e4.smartcharts.js","946e71b243e29758a36392ed2004a25b"],["/js/smartcharts/html2canvas-7f0471.smartcharts.js","522651dbbc71ec8c5eca49dfec519476"],["/js/smartcharts/id-po-ee47a9.smartcharts.js","97dc6ca0d1c7bbf575d6d5279bf12223"],["/js/smartcharts/it-po-2f06e4.smartcharts.js","6d18c8d9e4aa76e553e09b50b91b8440"],["/js/smartcharts/nl-po-321630.smartcharts.js","baa11b7e5cf5d1b4ffb250c67af2fd88"],["/js/smartcharts/pl-po-229aeb.smartcharts.js","57548b7ceb5d3173c95ae4d384cad280"],["/js/smartcharts/pt-po-10fbc7.smartcharts.js","eaef7d5d7611189c23d43b3b289a0f6e"],["/js/smartcharts/ru-po-d3ee8c.smartcharts.js","311d37ef72cb9607535669d1e7c74be7"],["/js/smartcharts/sprite-835a41.smartcharts.svg","46891affbcfa9519efa030f5249200ae"],["/js/smartcharts/th-po-1e8510.smartcharts.js","c9ab0a99c8be1b9cf7ecc652549f9494"],["/js/smartcharts/vendors~resize-observer-polyfill-c5c154.smartcharts.js","ccc9eb227784346282ba1d2511f8ba51"],["/js/smartcharts/vi-po-faa561.smartcharts.js","61e682c04c8cd5e0cdee1e22d4916234"],["/js/smartcharts/zh_cn-po-9bf3c6.smartcharts.js","cc14a3e3e274b09a3661ad94d2cd03ac"],["/js/smartcharts/zh_tw-po-68a36e.smartcharts.js","27cd6c639e741588dd99bfe4f5f8bbdd"],["/js/statement.83d586de0580c06c2de6.js","ecd3b4fc18dafb872461809760c71e03"],["/js/toggle-menu-drawer.83d586de0580c06c2de6.js","1d14f1b32573e2e72600467d705755bb"],["/js/two-month-picker.83d586de0580c06c2de6.js","487e6ab39ad28207c6586f5bcbdd5088"],["/js/vendors~main.83d586de0580c06c2de6.js","b53cfd1b29fca6b688a9e8f76d193421"],["/js/vendors~open_position~7c650be5.83d586de0580c06c2de6.js","a5c40385befc8c596dd0a3f0331dd297"],["/js/vendors~smart_chart.83d586de0580c06c2de6.js","1b15f092e33a41f3e9bd781c1bd5e1c5"],["/js/work-in-progress.83d586de0580c06c2de6.js","8e89d7c7f585fa8c9bbeac08e5886303"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







