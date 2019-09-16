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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","d64dbc6ed555f2b62dca17e4d9e91e44"],["/css/app.css","1eb4c00d14572d5bf412ae5e94fb5f97"],["/css/default~open_position~1833eefb.css","8da0918fdacbca5459a66113585fe0e3"],["/css/digits.css","58caa3b1383e3642a2d10c36efde09ab"],["/css/modals.css","22136537dd8ce0b2ba942ed1dff5b222"],["/css/notification-messages.css","374f5607221a5522cd56716d5c85ddd2"],["/css/reports.css","7ce22ea1911714a7dd288be4939ba7f4"],["/css/screen-small.css","b4e5d5fe4a1ca0758f34ac4250558435"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","7fb0c6d69a93aa4b4d2d3c4d168f55a9"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","34e1765e26d61e30b893d69634a9d955"],["/js/0.1b65f1fd9093f90cdbec.js","370bc09d02963917e9e7837dde6397c9"],["/js/1.1b65f1fd9093f90cdbec.js","d6c01102618d56f4528b0f1f3befbdc9"],["/js/10.1b65f1fd9093f90cdbec.js","72cadb074f25a5d0f4c39d748c6de33c"],["/js/11.1b65f1fd9093f90cdbec.js","4695c051aa2ac4100f6996d802bca9a3"],["/js/12.1b65f1fd9093f90cdbec.js","94fa0fecbf3da54da22fec785b98d1b5"],["/js/13.1b65f1fd9093f90cdbec.js","d9902ab2a188d5cfcd598b685b008534"],["/js/14.1b65f1fd9093f90cdbec.js","04daeca0f48cd4f3db992a68ebead6c2"],["/js/15.1b65f1fd9093f90cdbec.js","d3191e501cfbc761a2aa9b4d8957ff92"],["/js/16.1b65f1fd9093f90cdbec.js","48abc3fbf0f3c6df3fc51a72a342941d"],["/js/17.1b65f1fd9093f90cdbec.js","04fe34ab934ceb880c6b903277ea3d3f"],["/js/18.1b65f1fd9093f90cdbec.js","bfab9289809e66ef53970b3a1c5d9d23"],["/js/19.1b65f1fd9093f90cdbec.js","7513703e65a6b490c8cd293fca8b0553"],["/js/2.1b65f1fd9093f90cdbec.js","7807d4e8edf1b34c0078c0184fc82959"],["/js/20.1b65f1fd9093f90cdbec.js","e6ac6fc80a4697eb40fd2947fda95351"],["/js/21.1b65f1fd9093f90cdbec.js","445e05b942261c8970be0de3320676e6"],["/js/22.1b65f1fd9093f90cdbec.js","2151282c5f16f65dd9fdb2dc15a38ed6"],["/js/23.1b65f1fd9093f90cdbec.js","2f54666014a4616fe0071cf5dcebb090"],["/js/24.1b65f1fd9093f90cdbec.js","25340b880f64020c2d75578eb63e0204"],["/js/25.1b65f1fd9093f90cdbec.js","08cdabd45530cda514b1af7d6f3933ca"],["/js/26.1b65f1fd9093f90cdbec.js","ce7b43681294f0cb0616415ce402f9fe"],["/js/27.1b65f1fd9093f90cdbec.js","47d327f6c6d3f58d42c02ac7630205ad"],["/js/28.1b65f1fd9093f90cdbec.js","dea12e92b973cea3395e031cc5e7ec5b"],["/js/29.1b65f1fd9093f90cdbec.js","92aadc7e408eae3b4bc06c419ce53250"],["/js/3.1b65f1fd9093f90cdbec.js","0bffff35d93b14bf96148fce4b831b7f"],["/js/30.1b65f1fd9093f90cdbec.js","904759f09e8313fffb1d745f66e489b2"],["/js/31.1b65f1fd9093f90cdbec.js","4fdadcf18f499d0ce21fa9087d1676be"],["/js/32.1b65f1fd9093f90cdbec.js","50098655fa415d83ccc59fc1d934a697"],["/js/33.1b65f1fd9093f90cdbec.js","f71fe2caae59c43ad7e0071daa94be82"],["/js/34.1b65f1fd9093f90cdbec.js","8bddaaaa54f4b5ac415d4cf7c1b3ccdc"],["/js/35.1b65f1fd9093f90cdbec.js","339c209ca493e21c940abf158cfe058f"],["/js/36.1b65f1fd9093f90cdbec.js","1d6a19d4c5885ae46d653d1ccd8e96b3"],["/js/37.1b65f1fd9093f90cdbec.js","805c5872a1dd471d58215c3851dae3df"],["/js/38.1b65f1fd9093f90cdbec.js","74d777f80e13cfca17bdf04db5a04372"],["/js/39.1b65f1fd9093f90cdbec.js","8f155bc24f6af59f2889db0f96f4413a"],["/js/4.1b65f1fd9093f90cdbec.js","38460524cd01ef326d33dfeece6cd458"],["/js/40.1b65f1fd9093f90cdbec.js","64aeb908cde4821e2d07ef51d7df7f5b"],["/js/404.1b65f1fd9093f90cdbec.js","0636b563559d75ea2b759580ffa90c13"],["/js/41.1b65f1fd9093f90cdbec.js","875f712023c1a738f4cd62f6241b62d6"],["/js/42.1b65f1fd9093f90cdbec.js","83771af927f58e68cd729f4f6c58cb66"],["/js/43.1b65f1fd9093f90cdbec.js","a74f18bba59ae89d3426ff659ec07a8a"],["/js/44.1b65f1fd9093f90cdbec.js","a58ba4203932f8495b060604303e262f"],["/js/45.1b65f1fd9093f90cdbec.js","636ba3d890549f44e6451798604c8701"],["/js/46.1b65f1fd9093f90cdbec.js","1c6fc0888d0f86a38854989bef473f16"],["/js/47.1b65f1fd9093f90cdbec.js","8dff100b65f93dd4fe37f81707eee3d2"],["/js/48.1b65f1fd9093f90cdbec.js","152603e16880625c17d3e932545b5097"],["/js/49.1b65f1fd9093f90cdbec.js","3c57afc7b777cb2738505c9353dc8db5"],["/js/5.1b65f1fd9093f90cdbec.js","20d2dc76a79665c5615f3aee3245da6f"],["/js/50.1b65f1fd9093f90cdbec.js","d48a2dd60ca7a1e43178d7a716781d9e"],["/js/51.1b65f1fd9093f90cdbec.js","df7ebf7829eed8ca8665f1ae90700202"],["/js/52.1b65f1fd9093f90cdbec.js","ba2d83b8994d310137363f28fcbf67ba"],["/js/53.1b65f1fd9093f90cdbec.js","f3f72dc96e8fe58228a1202878074b58"],["/js/54.1b65f1fd9093f90cdbec.js","8a8218d2c808ba1cd72542fd593daac4"],["/js/55.1b65f1fd9093f90cdbec.js","ee534109eeddce80518a3b0ecfabeaaf"],["/js/56.1b65f1fd9093f90cdbec.js","8e308d4fdcc6e7af9d3a63c693fa61c1"],["/js/57.1b65f1fd9093f90cdbec.js","a8edbd5a30f498cbaee38d36fbd83a3a"],["/js/58.1b65f1fd9093f90cdbec.js","15bfd9d0229d423426c67185a3b8d8e7"],["/js/59.1b65f1fd9093f90cdbec.js","02ff12ae271cf1f43179e7fa1cb3edbe"],["/js/6.1b65f1fd9093f90cdbec.js","20cf401a1fbd301b6e0b91c52f7623cd"],["/js/60.1b65f1fd9093f90cdbec.js","751be4504d31015421775afdb8f46323"],["/js/61.1b65f1fd9093f90cdbec.js","e4915b2baa7ba8c3864bfb3504607544"],["/js/62.1b65f1fd9093f90cdbec.js","2447f3af49c441d23976df7bd9d9d9c5"],["/js/63.1b65f1fd9093f90cdbec.js","f28e38d80456cc756fe2fbdffaac1691"],["/js/64.1b65f1fd9093f90cdbec.js","702f4d855ade343d5bec6f42ce9c79ad"],["/js/65.1b65f1fd9093f90cdbec.js","65b7bb0d41fca871a07579a5e3aa7983"],["/js/66.1b65f1fd9093f90cdbec.js","b64f8f622d17572562de68e7e2b6c507"],["/js/67.1b65f1fd9093f90cdbec.js","cbccc33d54654067efe4ccb13e0ecaab"],["/js/68.1b65f1fd9093f90cdbec.js","5486d240793d75d59e579117cea9d720"],["/js/69.1b65f1fd9093f90cdbec.js","72bbedff4a504885839d682beeb619db"],["/js/7.1b65f1fd9093f90cdbec.js","71346e4199496a98cfb451f6103d31c9"],["/js/70.1b65f1fd9093f90cdbec.js","486855e5b8dc748d247fb29bcb1844cf"],["/js/71.1b65f1fd9093f90cdbec.js","6ab06b4d68aa345a505d30de7e478a0a"],["/js/8.1b65f1fd9093f90cdbec.js","3f2e37f7df4beb6b03ac834fe27980c5"],["/js/9.1b65f1fd9093f90cdbec.js","6533fb2b4685f9f69ab3918e97ed1867"],["/js/AccountSignupModal.1b65f1fd9093f90cdbec.js","620d4755dee26ea829db93dcbe1c9f0f"],["/js/account-info.1b65f1fd9093f90cdbec.js","02d86e4327a03d7b482b41f37c68a269"],["/js/contract.1b65f1fd9093f90cdbec.js","2ccf8736d2eb227074ba4364dd426496"],["/js/default~open_position~1833eefb.1b65f1fd9093f90cdbec.js","e5e40ed30df8cb16e4b8d1768acda14a"],["/js/digits.1b65f1fd9093f90cdbec.js","9164c54bba8931d1d0eea6fef6a936c7"],["/js/info-box.1b65f1fd9093f90cdbec.js","b840bd0774d17eafd52f730a9776790c"],["/js/main.1b65f1fd9093f90cdbec.js","9b7dff207fe7dced47ad0e1462cdf790"],["/js/modals.1b65f1fd9093f90cdbec.js","e225f6f50b2d383865c81268c914671b"],["/js/notification-messages.1b65f1fd9093f90cdbec.js","4e3a009aedda28dc006621811768209f"],["/js/open_positions.1b65f1fd9093f90cdbec.js","deb6bc10cc37c5a744206c839badf8bc"],["/js/profit_table.1b65f1fd9093f90cdbec.js","e8bb40639f2a42c4e79f49f25da5e4c6"],["/js/push-notification.1b65f1fd9093f90cdbec.js","38d24d720529c95ca52dfbfca82e7a6e"],["/js/reports.1b65f1fd9093f90cdbec.js","77e9cb9e121a949e487ab1dcd70c9f91"],["/js/screen-small.1b65f1fd9093f90cdbec.js","e6b3a4ff49b25e76f3ee8b55b5ce9b80"],["/js/settings-chart.1b65f1fd9093f90cdbec.js","3d6a606aaf3f4f1b9861d4dd50fbaf08"],["/js/settings-language.1b65f1fd9093f90cdbec.js","120725de25d6b9bf6c087aae5568bfe5"],["/js/settings-theme.1b65f1fd9093f90cdbec.js","726db932b87995f483b91bc3323d9412"],["/js/smart_chart.1b65f1fd9093f90cdbec.js","e2c2643872be8453f3a0b8973d8c0bb6"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.1b65f1fd9093f90cdbec.js","a0de6954e3daae8052f29d42bb2938ac"],["/js/toggle-menu-drawer.1b65f1fd9093f90cdbec.js","95b4b21745ad1bfd4f89ebd6d0cbe9a5"],["/js/two-month-picker.1b65f1fd9093f90cdbec.js","4b2bf4d624388a459073f10d8c520bcf"],["/js/vendors~AccountSignupModal.1b65f1fd9093f90cdbec.js","a273a06bf1e555f06964a4a8cbc399cc"],["/js/vendors~digits~info-b~897959f6.1b65f1fd9093f90cdbec.js","f2d3d4c09e89008272c57fc69d537a60"],["/js/vendors~main.1b65f1fd9093f90cdbec.js","5ffbd74c3d8e3a538b60b13f6091ad57"],["/js/vendors~open_position~7c650be5.1b65f1fd9093f90cdbec.js","a2bc8de3331090e133609654b140dca4"],["/js/vendors~smart_chart.1b65f1fd9093f90cdbec.js","369437c237002b3d20a83f6e4f6ffbcc"],["/js/work-in-progress.1b65f1fd9093f90cdbec.js","69beec724c4f811a5cde33f30ece9f5b"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







