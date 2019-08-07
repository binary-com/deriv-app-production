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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","dcd7e29b5cd2c8365594ad88bdbc5a2c"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","c367662ce5f8dac40a43b790d9f4efcd"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","6a8e8a0ef7d5d5e51cb94c680e3f039f"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","04c2177e4ccc19452bbb1fb79462c96b"],["/js/0.8d80b11c6ac6ffb87751.js","d7aabf18268aa3e6b774290b96b112ed"],["/js/1.8d80b11c6ac6ffb87751.js","f661bac4db1aa242323a530dea0311c0"],["/js/10.8d80b11c6ac6ffb87751.js","b65b9e91b2ef990a8d84589e632f1a8d"],["/js/11.8d80b11c6ac6ffb87751.js","45a3be82820e2482b6835002f9311226"],["/js/12.8d80b11c6ac6ffb87751.js","a498a60dc1b1beb6cf86613135933a69"],["/js/13.8d80b11c6ac6ffb87751.js","f6ed52e33ec138933046e34a52b1bdaf"],["/js/14.8d80b11c6ac6ffb87751.js","d956e156c3edb888ce6145c708fb39ec"],["/js/15.8d80b11c6ac6ffb87751.js","3cedf2d351e8bff9b0f187b4c100f1d2"],["/js/16.8d80b11c6ac6ffb87751.js","1855d8d632a37c05cbdbb5793d001a30"],["/js/17.8d80b11c6ac6ffb87751.js","812884b5a741ed0d5ba7c12ab3d4250a"],["/js/18.8d80b11c6ac6ffb87751.js","fef67cd28347b748608c181766be2afa"],["/js/19.8d80b11c6ac6ffb87751.js","578a7f9299dddebd5f1647c14d3d7d47"],["/js/2.8d80b11c6ac6ffb87751.js","dc6b89cf6b6b2918b8ba95b0881e6baf"],["/js/20.8d80b11c6ac6ffb87751.js","8d10cf6747b102cdb2fd86dd539f48e6"],["/js/21.8d80b11c6ac6ffb87751.js","bb0a7e2f5e758ac0e71547542cc867c3"],["/js/22.8d80b11c6ac6ffb87751.js","3532702555c0b449db542d69688d944c"],["/js/23.8d80b11c6ac6ffb87751.js","3960d6aed4c7943b3cae9145c83d7d07"],["/js/24.8d80b11c6ac6ffb87751.js","b44ab970f0c6c41b784f4272ec684d7e"],["/js/25.8d80b11c6ac6ffb87751.js","3ef633cc2b623f1e6e6c9c721c7f8f6d"],["/js/26.8d80b11c6ac6ffb87751.js","00ae83c4cd65d446f44d43fd8a9d7e87"],["/js/27.8d80b11c6ac6ffb87751.js","4c5084fe3cd2efdb40094ea0aa98eaac"],["/js/28.8d80b11c6ac6ffb87751.js","99ee771298552c6a67b3fb01b347df8e"],["/js/29.8d80b11c6ac6ffb87751.js","fc492ac015898ece7c5f70bd406b95c2"],["/js/3.8d80b11c6ac6ffb87751.js","b96dde7bfa1cdc6f525b3ff981f19d1d"],["/js/30.8d80b11c6ac6ffb87751.js","9a8adaf584b9589694e0ef5cb1b9dd88"],["/js/31.8d80b11c6ac6ffb87751.js","82913c70c308c5f94792d7a0f43ac7d8"],["/js/32.8d80b11c6ac6ffb87751.js","871476767a69a36a152ac5b7e039ae80"],["/js/33.8d80b11c6ac6ffb87751.js","c05cbdb2141d84a4779ad07aba82a34c"],["/js/34.8d80b11c6ac6ffb87751.js","8d8de180afb9e43c5470ab21a914e8f7"],["/js/35.8d80b11c6ac6ffb87751.js","6f179611fafed882e312b440e9d1e78b"],["/js/36.8d80b11c6ac6ffb87751.js","745b8f392388e3427fe728d0efe70110"],["/js/37.8d80b11c6ac6ffb87751.js","5310378a81b90f436bf06c53d4ef64e0"],["/js/38.8d80b11c6ac6ffb87751.js","585e57e7da5cd63dfa494c2bebbdd856"],["/js/39.8d80b11c6ac6ffb87751.js","556effae4ba4526ef989f7574a5288ec"],["/js/4.8d80b11c6ac6ffb87751.js","bbae5bc7087201daaeb499591d545b4e"],["/js/40.8d80b11c6ac6ffb87751.js","b841141c866bf1b6cbaaf21942620d83"],["/js/404.8d80b11c6ac6ffb87751.js","1add60e3474a3919989f1fe4f7bb1b79"],["/js/41.8d80b11c6ac6ffb87751.js","8a6d4d5b30f85201fa2a86393c216f04"],["/js/42.8d80b11c6ac6ffb87751.js","7aa6f17a37f6df6dc4563b8e9c95f046"],["/js/43.8d80b11c6ac6ffb87751.js","e63c731139d650d1d43dee949e97228f"],["/js/44.8d80b11c6ac6ffb87751.js","f2c46deb30b3083015a25e9272b550c9"],["/js/45.8d80b11c6ac6ffb87751.js","21abdbad74831b0d510f4132a3e8c638"],["/js/46.8d80b11c6ac6ffb87751.js","632c9742974cd99863c82f80bd43acd7"],["/js/47.8d80b11c6ac6ffb87751.js","ca30735d0224466f381ba72ff91541c9"],["/js/48.8d80b11c6ac6ffb87751.js","d4437178c6c0249f679a0ed51572f042"],["/js/49.8d80b11c6ac6ffb87751.js","d4c3b6cb4a13f467b3d8e8382fc84491"],["/js/5.8d80b11c6ac6ffb87751.js","85d2c4b958d4084b97e4de296d65a7b4"],["/js/50.8d80b11c6ac6ffb87751.js","1c5e8a6707bdde4a2ccfb4927eb2771f"],["/js/51.8d80b11c6ac6ffb87751.js","44a098d785ac0e04dfeb78525a88882b"],["/js/52.8d80b11c6ac6ffb87751.js","54d631b2f3f2499e6ee76b370f9ddf6d"],["/js/53.8d80b11c6ac6ffb87751.js","df7986ef6c1d3d2ae36b7d9babc7a6cf"],["/js/54.8d80b11c6ac6ffb87751.js","3ba988916596f2a64d3d74a4a239f50d"],["/js/55.8d80b11c6ac6ffb87751.js","2457ab957a3dd61cca179926945c19ac"],["/js/56.8d80b11c6ac6ffb87751.js","80ca9865ce3a329e41545b59edb9dc51"],["/js/57.8d80b11c6ac6ffb87751.js","d5de86eb24b45b7b3ad1d823ee8ac449"],["/js/58.8d80b11c6ac6ffb87751.js","183a5e06a3968a1712769f4bd524243f"],["/js/59.8d80b11c6ac6ffb87751.js","0a42dd9c398b78aa506bc632e5f075d2"],["/js/6.8d80b11c6ac6ffb87751.js","2563096d555e2719de291d5ff3294c6d"],["/js/60.8d80b11c6ac6ffb87751.js","ebeaddc3d510f2d6a0bdbbc107a9b965"],["/js/61.8d80b11c6ac6ffb87751.js","8d633fdeaaab9c77a4da68e4170e92e4"],["/js/62.8d80b11c6ac6ffb87751.js","c14905e4d9328551b2e61d2d83d125c8"],["/js/63.8d80b11c6ac6ffb87751.js","25aa07fa78cf908c1f8290a87bc7c7da"],["/js/64.8d80b11c6ac6ffb87751.js","2377809e4f9f9b071077122b7e3970fa"],["/js/65.8d80b11c6ac6ffb87751.js","ad0d9050635f35456c5b6f2dfe47cb5c"],["/js/66.8d80b11c6ac6ffb87751.js","3e2984d6df34004c6664f13ad80fe8e2"],["/js/67.8d80b11c6ac6ffb87751.js","0888e392f612f3ed1489025884180802"],["/js/68.8d80b11c6ac6ffb87751.js","7eb734bcb9c3ca172d730de6c0fc4f9b"],["/js/69.8d80b11c6ac6ffb87751.js","ad504553e50b09be2999b9aecee14f88"],["/js/7.8d80b11c6ac6ffb87751.js","4dd3a086bb1e831365a484b117f34fda"],["/js/70.8d80b11c6ac6ffb87751.js","21a0cf833e530b16f276b42b2883c77e"],["/js/71.8d80b11c6ac6ffb87751.js","b51ed21a125b3140d4b88553684ad0b0"],["/js/8.8d80b11c6ac6ffb87751.js","47964f79db29eb0260cb28bd65bc356a"],["/js/9.8d80b11c6ac6ffb87751.js","be92f1c9401d88b859aee29169505dd2"],["/js/DenialOfServiceModal.8d80b11c6ac6ffb87751.js","19b0aa2d49f4eb962afc17d0b9884840"],["/js/MarketUnavailableModal.8d80b11c6ac6ffb87751.js","b387f453143009d10e8217eb2483248c"],["/js/ServicesErrorModal.8d80b11c6ac6ffb87751.js","2d1a0f65a280843ea53a5f7b3139cb46"],["/js/UnsupportedContractModal.8d80b11c6ac6ffb87751.js","14e383b726678ffb1449ee7ee472b8fb"],["/js/account-info.8d80b11c6ac6ffb87751.js","5bdc5e80736672fb02a1f4e660ffa2fc"],["/js/contract.8d80b11c6ac6ffb87751.js","dfef9db711f552a96d93bd9f748d3344"],["/js/default~open_position~1833eefb.8d80b11c6ac6ffb87751.js","7d7b4596c8c15976ca1105e4cfb13d3e"],["/js/digits.8d80b11c6ac6ffb87751.js","be79dba43bf663c7b3bc67d9d11aa228"],["/js/info-box.8d80b11c6ac6ffb87751.js","42a0d15e262a383c6a55113efec394e5"],["/js/main.8d80b11c6ac6ffb87751.js","a7e67e2914b2fa4b3fc61519672329c6"],["/js/notification-messages.8d80b11c6ac6ffb87751.js","ecc46f00ca88d14f518aeb9e3c076f5b"],["/js/open_positions.8d80b11c6ac6ffb87751.js","1e2254763a8a27a658dfc8a52d031aba"],["/js/profit_table.8d80b11c6ac6ffb87751.js","8fefdc99781bccd87c8ca8ed2a93b49f"],["/js/push-notification.8d80b11c6ac6ffb87751.js","c6e8c34a87f0ee16ce40bae420322da8"],["/js/reports.8d80b11c6ac6ffb87751.js","ad373377ef9bf01df0b2b53d2c682093"],["/js/screen-small.8d80b11c6ac6ffb87751.js","206a7708ca419cb96d5b0250631e3dbe"],["/js/settings-chart.8d80b11c6ac6ffb87751.js","532cb21efcf0e91e3b10c132781bf50c"],["/js/settings-language.8d80b11c6ac6ffb87751.js","8721a583d574e67b52053220122ca805"],["/js/settings-theme.8d80b11c6ac6ffb87751.js","50655910f9b73fddf438716afc314af1"],["/js/smart_chart.8d80b11c6ac6ffb87751.js","9d36ee803e7ed3d74c86964f6f26aabb"],["/js/smartcharts/chartiq-5bb834.smartcharts.js","55b80fceca4ae8de1bbccab6307f03b3"],["/js/smartcharts/de-po-4ebb0d.smartcharts.js","c82388fdf51df760211407057a634f47"],["/js/smartcharts/es-po-c179ee.smartcharts.js","4c1f372f7e674856da87a05da0b27ee0"],["/js/smartcharts/fr-po-b390e4.smartcharts.js","946e71b243e29758a36392ed2004a25b"],["/js/smartcharts/html2canvas-7f0471.smartcharts.js","522651dbbc71ec8c5eca49dfec519476"],["/js/smartcharts/id-po-ee47a9.smartcharts.js","97dc6ca0d1c7bbf575d6d5279bf12223"],["/js/smartcharts/it-po-2f06e4.smartcharts.js","6d18c8d9e4aa76e553e09b50b91b8440"],["/js/smartcharts/nl-po-321630.smartcharts.js","baa11b7e5cf5d1b4ffb250c67af2fd88"],["/js/smartcharts/pl-po-229aeb.smartcharts.js","57548b7ceb5d3173c95ae4d384cad280"],["/js/smartcharts/pt-po-10fbc7.smartcharts.js","eaef7d5d7611189c23d43b3b289a0f6e"],["/js/smartcharts/ru-po-d3ee8c.smartcharts.js","311d37ef72cb9607535669d1e7c74be7"],["/js/smartcharts/sprite-835a41.smartcharts.svg","46891affbcfa9519efa030f5249200ae"],["/js/smartcharts/th-po-1e8510.smartcharts.js","c9ab0a99c8be1b9cf7ecc652549f9494"],["/js/smartcharts/vendors~resize-observer-polyfill-c5c154.smartcharts.js","ccc9eb227784346282ba1d2511f8ba51"],["/js/smartcharts/vi-po-faa561.smartcharts.js","61e682c04c8cd5e0cdee1e22d4916234"],["/js/smartcharts/zh_cn-po-9bf3c6.smartcharts.js","cc14a3e3e274b09a3661ad94d2cd03ac"],["/js/smartcharts/zh_tw-po-68a36e.smartcharts.js","27cd6c639e741588dd99bfe4f5f8bbdd"],["/js/statement.8d80b11c6ac6ffb87751.js","3b606c55d9ff6d970b429726ca1459ac"],["/js/toggle-cashier.8d80b11c6ac6ffb87751.js","b39c01964ffc770fb72b7f73197a6007"],["/js/toggle-menu-drawer.8d80b11c6ac6ffb87751.js","94fa7995a3c5cd998238fbbb64597d57"],["/js/two-month-picker.8d80b11c6ac6ffb87751.js","67646cfc6c71b7e92ee69d936f4bbf1c"],["/js/vendors~main.8d80b11c6ac6ffb87751.js","7d61ee177808e88ccbf03e67b7beb15b"],["/js/vendors~open_position~7c650be5.8d80b11c6ac6ffb87751.js","c2774e4b142c353a6a24c7b78ae558c3"],["/js/vendors~smart_chart.8d80b11c6ac6ffb87751.js","1b93301da99c85d601c9444e7468a238"],["/js/wallet-information.8d80b11c6ac6ffb87751.js","73ee5f6ea39690e7989144cec9356bf8"],["/js/work-in-progress.8d80b11c6ac6ffb87751.js","ac86631cbb761de4f96fabf5ea9cdadd"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







