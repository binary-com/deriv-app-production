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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","c90a510a87be14bb0c25de73992a5e49"],["/css/app.css","c34882250b0d7870a955a76bdefcadbe"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","fdf1fd7ea62a03cb4b9850a9962d8d67"],["/js/0.7cfb87bc00eee432d9d6.js","964a81c66261ee9008707d016e5dae06"],["/js/1.7cfb87bc00eee432d9d6.js","795afd3383156ec7c15c26a78e77e9bb"],["/js/10.7cfb87bc00eee432d9d6.js","014c1a44e511e9ac2405820fcbe5ca0f"],["/js/11.7cfb87bc00eee432d9d6.js","48ccad49ca606a0024d9305af052d5f4"],["/js/12.7cfb87bc00eee432d9d6.js","c51b1831e7543c986b1b2e9b8f8aa284"],["/js/13.7cfb87bc00eee432d9d6.js","128cccbb5dcbbed1fe4bafbc05fddc5d"],["/js/14.7cfb87bc00eee432d9d6.js","07dec13e5f700e8a6d30936f802d69b9"],["/js/15.7cfb87bc00eee432d9d6.js","6f3112e05ec0ba96bf712d29cae16ef3"],["/js/16.7cfb87bc00eee432d9d6.js","3090b9d82e50527887a6da34fa4626c9"],["/js/17.7cfb87bc00eee432d9d6.js","3776bc68a9205a9e10c466c42f6e38c8"],["/js/18.7cfb87bc00eee432d9d6.js","a422054db54f71599d4c9314d369ae03"],["/js/19.7cfb87bc00eee432d9d6.js","03cc9e18eaed8ce9cc1fe031f775daee"],["/js/2.7cfb87bc00eee432d9d6.js","637abe2f2d5e2c37c3ff6058af407d21"],["/js/20.7cfb87bc00eee432d9d6.js","9ce63c35c7ee78b52bea091ef9422eb4"],["/js/21.7cfb87bc00eee432d9d6.js","8aebce170c37cd8561c6874d41234e20"],["/js/22.7cfb87bc00eee432d9d6.js","ee86e445a3f22c980af66d86a4253807"],["/js/23.7cfb87bc00eee432d9d6.js","de25db544aef52468a4d28b34d321bfd"],["/js/24.7cfb87bc00eee432d9d6.js","a33294eb0d36dbc38d1ac950494e7041"],["/js/25.7cfb87bc00eee432d9d6.js","a91dd02fba08ed0174375b02289a0421"],["/js/26.7cfb87bc00eee432d9d6.js","fd947d5da589a2883bd689b86b510efb"],["/js/27.7cfb87bc00eee432d9d6.js","432b7c47d7993d4e33a420ad6c0f595f"],["/js/28.7cfb87bc00eee432d9d6.js","81af6dd8ddb1e66d11c10d183d4fd7ab"],["/js/29.7cfb87bc00eee432d9d6.js","1cb28f9eaba3c7c4b418c9fd7053a52b"],["/js/3.7cfb87bc00eee432d9d6.js","da473d63c209330976005a498ceb41e7"],["/js/30.7cfb87bc00eee432d9d6.js","3af5b6234931257ad95e707a30acf195"],["/js/31.7cfb87bc00eee432d9d6.js","82be65513c8cf2b87c8368618a79656e"],["/js/32.7cfb87bc00eee432d9d6.js","aa07baf4d429809092b850ed43b71767"],["/js/33.7cfb87bc00eee432d9d6.js","9c86e001431ef02fe09703eac73cc5f4"],["/js/34.7cfb87bc00eee432d9d6.js","84ad9bd3a90fd8d463be40c43d93abd2"],["/js/35.7cfb87bc00eee432d9d6.js","f6724133c4615834c0b78c3710861ccc"],["/js/36.7cfb87bc00eee432d9d6.js","ccca50a653b428db45ca37dd7acf6b6d"],["/js/37.7cfb87bc00eee432d9d6.js","692382e4be2063073f00c346a7bc8a9b"],["/js/38.7cfb87bc00eee432d9d6.js","635cd8262986827e85dced67999f4671"],["/js/39.7cfb87bc00eee432d9d6.js","de043d284a170d925304a7957cfc0cd0"],["/js/4.7cfb87bc00eee432d9d6.js","6ddb9c40f0363d0800126dc179e539eb"],["/js/40.7cfb87bc00eee432d9d6.js","b70eacc8399626ced7ad0f4217c62894"],["/js/404.7cfb87bc00eee432d9d6.js","88c051b883d3dfe31d05cc45515a7fc4"],["/js/41.7cfb87bc00eee432d9d6.js","a2f5331c4c7eb83292a99aa58fc0d535"],["/js/42.7cfb87bc00eee432d9d6.js","0c668f9f2cb9b5625704eccd48bf8162"],["/js/43.7cfb87bc00eee432d9d6.js","11b4e9ae11efd734fc997163d4568d9c"],["/js/44.7cfb87bc00eee432d9d6.js","d3dd8d8afa3b3c5da8f8ec9eac86f8df"],["/js/45.7cfb87bc00eee432d9d6.js","4225213db07f7edbf9a1d4788d35ba8b"],["/js/46.7cfb87bc00eee432d9d6.js","1c0167ee181979bc4ae25c199fd5f893"],["/js/47.7cfb87bc00eee432d9d6.js","04303d17190ee6fecad0a3463ad33017"],["/js/48.7cfb87bc00eee432d9d6.js","b82813998bccf13ac7610dc6ae30113d"],["/js/49.7cfb87bc00eee432d9d6.js","1e7719c953ec1d4e24ba0484c3defc43"],["/js/5.7cfb87bc00eee432d9d6.js","c767067b7f73f52abf25ca094e34939d"],["/js/50.7cfb87bc00eee432d9d6.js","0342a5b6f83b26f4ea710cda04207be6"],["/js/51.7cfb87bc00eee432d9d6.js","553f47485b03a1686bc40e40d43577b7"],["/js/52.7cfb87bc00eee432d9d6.js","e775d07228d008f338393e6751c0f11f"],["/js/53.7cfb87bc00eee432d9d6.js","1dbff34b7595e0d1aa719f18850beb6d"],["/js/54.7cfb87bc00eee432d9d6.js","19b604db326560cd79e587a544ee343b"],["/js/55.7cfb87bc00eee432d9d6.js","cbe33008f1cedb26ed6b89bd03c2cae3"],["/js/56.7cfb87bc00eee432d9d6.js","da1f7dae014e7871e8de84bfc524e86e"],["/js/57.7cfb87bc00eee432d9d6.js","fcdd8505115c41fa15c8366960d4ad7a"],["/js/58.7cfb87bc00eee432d9d6.js","8774d5700bd45f77c988a212abbfac3f"],["/js/59.7cfb87bc00eee432d9d6.js","e8dbeb25af9dc1a9c287aea8a46332cf"],["/js/6.7cfb87bc00eee432d9d6.js","120f750d234ff8002967cc83e3c3e180"],["/js/60.7cfb87bc00eee432d9d6.js","1a3d5e03d3b9c1655dcc7fbcbbc8011b"],["/js/61.7cfb87bc00eee432d9d6.js","63be84a86ca3ddf59779c6ffa63f608b"],["/js/62.7cfb87bc00eee432d9d6.js","83c085a9aaf40b97ce860c2e58504dc7"],["/js/63.7cfb87bc00eee432d9d6.js","f2d4b3a3263b9c5ca46eccb131dac0d0"],["/js/64.7cfb87bc00eee432d9d6.js","49dc14ed9e7b538adc165873049a84c4"],["/js/65.7cfb87bc00eee432d9d6.js","8196bc84311fc9ddc251536bed2f745b"],["/js/66.7cfb87bc00eee432d9d6.js","dcf33ee0a3fda9015b50127a41035d0b"],["/js/67.7cfb87bc00eee432d9d6.js","50f2eb035092b375cd2da35e6e05f6c0"],["/js/68.7cfb87bc00eee432d9d6.js","fb6220aad22a7699a32a3ae1c77f5042"],["/js/69.7cfb87bc00eee432d9d6.js","119d82668c264e9d8de37ea8e2b1b567"],["/js/7.7cfb87bc00eee432d9d6.js","d96d25cd10c88c9ac4c17677fe97a039"],["/js/70.7cfb87bc00eee432d9d6.js","0b28480a04199ed612b59e2654cea8a1"],["/js/71.7cfb87bc00eee432d9d6.js","113f7d1712488a46dae6299a01d792d8"],["/js/8.7cfb87bc00eee432d9d6.js","2574f93c6b08ab8062099d5d375bf220"],["/js/9.7cfb87bc00eee432d9d6.js","d9d03ef654e4e4935dfdcbb81a91a592"],["/js/AccountSignupModal.7cfb87bc00eee432d9d6.js","187daa4a94b64057dde2ff1ce3978ad7"],["/js/account-info.7cfb87bc00eee432d9d6.js","c566ce4b5dba9bae8963208f60f25301"],["/js/contract.7cfb87bc00eee432d9d6.js","230ffd7ea29d31532aa08127c1935540"],["/js/default~open_position~1833eefb.7cfb87bc00eee432d9d6.js","20e9214e4d3a46551827855c7ee3ccfd"],["/js/digits.7cfb87bc00eee432d9d6.js","725c2c5a02765deb321b9f1921b2ee26"],["/js/info-box.7cfb87bc00eee432d9d6.js","94286f64eec15f0bb127f02c75545f4d"],["/js/main.7cfb87bc00eee432d9d6.js","1decbd2a225eb3568448533826f61ec2"],["/js/modals.7cfb87bc00eee432d9d6.js","ae1ddbbbcc325cc4e5c7d4d542844e96"],["/js/notification-messages.7cfb87bc00eee432d9d6.js","4a484864843d37f815d555c09d0fd1fd"],["/js/open_positions.7cfb87bc00eee432d9d6.js","dc12c6aa4a53accb6f2cba203dba7b2d"],["/js/profit_table.7cfb87bc00eee432d9d6.js","b97f17bd9e775e685698bcc519180ebc"],["/js/push-notification.7cfb87bc00eee432d9d6.js","254d2bdf367c08afdb336f6ca600fdaa"],["/js/reports.7cfb87bc00eee432d9d6.js","88cecb504b25e7bb02e9cb62e3a5229b"],["/js/screen-small.7cfb87bc00eee432d9d6.js","fab4686b459eaf6ba4f684dac3b0d658"],["/js/settings-chart.7cfb87bc00eee432d9d6.js","ad4c54f64b56ac9cab3b67674ddf883a"],["/js/settings-language.7cfb87bc00eee432d9d6.js","017634f7a413da8b00453d7829659742"],["/js/settings-theme.7cfb87bc00eee432d9d6.js","b4e3e51ee319d1944846cc9d699b6fea"],["/js/smart_chart.7cfb87bc00eee432d9d6.js","17902437b10dc09e3f9494039dd0d52c"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.7cfb87bc00eee432d9d6.js","a0e5f2733f4586613306bc322fb45bd9"],["/js/toggle-menu-drawer.7cfb87bc00eee432d9d6.js","210d6c64896ec302ae4f9d04542e6a97"],["/js/two-month-picker.7cfb87bc00eee432d9d6.js","9e1cbbe7d03b9aa5d085257f96ca4911"],["/js/vendors~AccountSignupModal.7cfb87bc00eee432d9d6.js","dd93b6ff31aea5067da64c8996a2c061"],["/js/vendors~main.7cfb87bc00eee432d9d6.js","cebfab14639546c84e971c679577f36e"],["/js/vendors~open_position~7c650be5.7cfb87bc00eee432d9d6.js","02eb150aeec9266b0c0ec51ba9fcb957"],["/js/vendors~smart_chart.7cfb87bc00eee432d9d6.js","d886851cf2b860b9e10652e63d203625"],["/js/work-in-progress.7cfb87bc00eee432d9d6.js","f605c3dcca26084944960690ee4df600"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







