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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","d64dbc6ed555f2b62dca17e4d9e91e44"],["/css/app.css","1eb4c00d14572d5bf412ae5e94fb5f97"],["/css/default~open_position~1833eefb.css","8da0918fdacbca5459a66113585fe0e3"],["/css/digits.css","58caa3b1383e3642a2d10c36efde09ab"],["/css/modals.css","22136537dd8ce0b2ba942ed1dff5b222"],["/css/notification-messages.css","374f5607221a5522cd56716d5c85ddd2"],["/css/reports.css","7ce22ea1911714a7dd288be4939ba7f4"],["/css/screen-small.css","b4e5d5fe4a1ca0758f34ac4250558435"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","7fb0c6d69a93aa4b4d2d3c4d168f55a9"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","db5ed06df1283af32d7afe80a350cd8a"],["/js/0.3781c0978168af2f291b.js","bb86cb42c78c0b35b9f2b96005adcebe"],["/js/1.3781c0978168af2f291b.js","15ef93c97c0ee6787750279804da4b0d"],["/js/10.3781c0978168af2f291b.js","f15b80aa82be7ce4e97d8d855008ab96"],["/js/11.3781c0978168af2f291b.js","3c04956cb2f1cca6156ec87bb65bd911"],["/js/12.3781c0978168af2f291b.js","9069b04b0c5850ea0413f1cf863d4ad0"],["/js/13.3781c0978168af2f291b.js","6ef3dae90f99294b2eaf75eae21324e1"],["/js/14.3781c0978168af2f291b.js","043e52e874805ef9dc7435e7e2375cab"],["/js/15.3781c0978168af2f291b.js","f2702c746a93c25dbb9ef55c9439c99b"],["/js/16.3781c0978168af2f291b.js","ecc8637493532599b933f3d120e333e7"],["/js/17.3781c0978168af2f291b.js","ba27201b9138385985b0a21fa7b7cbf5"],["/js/18.3781c0978168af2f291b.js","6a3849c408932c062b32ee7813775b26"],["/js/19.3781c0978168af2f291b.js","fd16f7595071fdc9b385800626447eb5"],["/js/2.3781c0978168af2f291b.js","c11335a53d22d204adf6a4b496979285"],["/js/20.3781c0978168af2f291b.js","f1970902713bc84f91be612714d474b3"],["/js/21.3781c0978168af2f291b.js","3ed1027c05c54491d136aec2f6abc8a9"],["/js/22.3781c0978168af2f291b.js","9ca95790b1a77ab35907302938217f95"],["/js/23.3781c0978168af2f291b.js","b0848d8186c74897977460b4536e4fab"],["/js/24.3781c0978168af2f291b.js","d5c1b71a874f646b3bcb020abde47f2b"],["/js/25.3781c0978168af2f291b.js","c1a534e7154e4aba0f40fdbcef16cc8c"],["/js/26.3781c0978168af2f291b.js","758b498f0d721a1a26a52b316ab201d2"],["/js/27.3781c0978168af2f291b.js","8f125b61c8eec3015c20741e8ea532c0"],["/js/28.3781c0978168af2f291b.js","1ac85f99666d7af7dafeec3bfcf97c31"],["/js/29.3781c0978168af2f291b.js","ebbc0a4353ac5e80ca2ea47b9452e533"],["/js/3.3781c0978168af2f291b.js","018f44299699b0a508b0d90ff3e0c056"],["/js/30.3781c0978168af2f291b.js","dbd2b90539fc6c51575ed576560a4dec"],["/js/31.3781c0978168af2f291b.js","44bc31dd534aa62d79694cd2294daea6"],["/js/32.3781c0978168af2f291b.js","6dec3d28f067d9d98e3e9b554b7e6f60"],["/js/33.3781c0978168af2f291b.js","7fac526c3a907a09f207c19d92f4a0a0"],["/js/34.3781c0978168af2f291b.js","9056609f73e7ab18785c93e998ecd906"],["/js/35.3781c0978168af2f291b.js","d3cf220480eef248ecadf4394ecd8544"],["/js/36.3781c0978168af2f291b.js","4c9a1e6aee51d3f8a7af7ab56d97dfd4"],["/js/37.3781c0978168af2f291b.js","53827e5005a33e458839afaf7212af88"],["/js/38.3781c0978168af2f291b.js","271dcc741df65c282da2e29957e79070"],["/js/39.3781c0978168af2f291b.js","2540738aa04ee7179e7fc78cffb7f578"],["/js/4.3781c0978168af2f291b.js","14885d5093d8c67d2a2ccccdb0136353"],["/js/40.3781c0978168af2f291b.js","3da2aff796bb8872d471a065b6b7a214"],["/js/404.3781c0978168af2f291b.js","088c8957ceccd5040ca2aa042f21dcba"],["/js/41.3781c0978168af2f291b.js","c06aa80173e8a0a21430fc7e222e4453"],["/js/42.3781c0978168af2f291b.js","7dc68cf57cbb414e3b950debddfa3aa8"],["/js/43.3781c0978168af2f291b.js","42343716fa82c0455921f4bbaa8be4bd"],["/js/44.3781c0978168af2f291b.js","411b65a8eb0bf821615845356a99de7c"],["/js/45.3781c0978168af2f291b.js","4b3b1406f89fc448344056ce07723486"],["/js/46.3781c0978168af2f291b.js","ebb74c52cc6395280c3d6430228643be"],["/js/47.3781c0978168af2f291b.js","113777446bc00523d6f99eb0433f6499"],["/js/48.3781c0978168af2f291b.js","d8ce49ee6ee4ab3adc5d036612c368cb"],["/js/49.3781c0978168af2f291b.js","7859ec04249862b7632fbe354d621858"],["/js/5.3781c0978168af2f291b.js","ab47c937d8cb35593cc6fd13f321e3df"],["/js/50.3781c0978168af2f291b.js","41f32d667b052f41145b0adc1efa03f3"],["/js/51.3781c0978168af2f291b.js","5cbcc8b6d278fb1b1aaa21a78894ea08"],["/js/52.3781c0978168af2f291b.js","fbc925fec94da776167db26c03dd1f67"],["/js/53.3781c0978168af2f291b.js","8658ec405e5c7353503ceebea7c11437"],["/js/54.3781c0978168af2f291b.js","e675f440020f22a7776391377f43ebfe"],["/js/55.3781c0978168af2f291b.js","467466c462c34fa0b8717267e8829376"],["/js/56.3781c0978168af2f291b.js","0f9d082164e2668c0fa1e1e417706dd2"],["/js/57.3781c0978168af2f291b.js","b04d7f0e3ce302d2bd7f7e8be9a86478"],["/js/58.3781c0978168af2f291b.js","82cd7b02120551a2b108b915f8045815"],["/js/59.3781c0978168af2f291b.js","497084934e123b56720ccc49af424bdd"],["/js/6.3781c0978168af2f291b.js","5686fccbdaf423f39cd62fef489dfd9a"],["/js/60.3781c0978168af2f291b.js","764b9825d9efd8ed9c9d3280c4befd01"],["/js/61.3781c0978168af2f291b.js","46fea22ad29eb92f60491288db13868f"],["/js/62.3781c0978168af2f291b.js","4477540a5be922f6cb6cafe5cb7380c2"],["/js/63.3781c0978168af2f291b.js","d97ab7f30ddf83805054e3cb7f1b202f"],["/js/64.3781c0978168af2f291b.js","767e9cd10e10c9d4acf4c3ec2d0e8b36"],["/js/65.3781c0978168af2f291b.js","d3f95deb3a1c6d7f23835b6714ec220f"],["/js/66.3781c0978168af2f291b.js","f9440a6179e408b5d684623839e1fd31"],["/js/67.3781c0978168af2f291b.js","684eb81dbc8a93d5186ed3b401f77cc7"],["/js/68.3781c0978168af2f291b.js","3ffcbeb04ce22934dd43ee0d02992ad7"],["/js/69.3781c0978168af2f291b.js","35fc3ecdd4899595e645f05aa2e41d70"],["/js/7.3781c0978168af2f291b.js","e590735512de4eb6d1bdd22a2e6fcab1"],["/js/70.3781c0978168af2f291b.js","76cc718e73f6e193480de0ce73a4180f"],["/js/71.3781c0978168af2f291b.js","029e3ab6516a922292f4c93c8ded9b6c"],["/js/8.3781c0978168af2f291b.js","6c86ce4d82ceaa33fadf4e48a57aa2a0"],["/js/9.3781c0978168af2f291b.js","ab45f45e0db1ce187fb1e7620bd06b52"],["/js/AccountSignupModal.3781c0978168af2f291b.js","8eb412b5fe4b503e228442feabbff141"],["/js/account-info.3781c0978168af2f291b.js","3c21cfad55deb44d04b8a69d9d7dc04b"],["/js/contract.3781c0978168af2f291b.js","519c87e6cab9472f6d9feb3f734606c0"],["/js/default~open_position~1833eefb.3781c0978168af2f291b.js","8565801a9ee238c2dc29e8ffa79c3aae"],["/js/digits.3781c0978168af2f291b.js","a7e56a4d5e1e39a2a031197459268214"],["/js/info-box.3781c0978168af2f291b.js","0ae0af4043caccf750d27c2a22fd52ee"],["/js/main.3781c0978168af2f291b.js","41efd804d9651136b3bfd81ee89b51b8"],["/js/modals.3781c0978168af2f291b.js","8d499f5946e5e5b185314be709b1125c"],["/js/notification-messages.3781c0978168af2f291b.js","bd5508e40279bba971f2aadddf887750"],["/js/open_positions.3781c0978168af2f291b.js","5f19b45d38e69993a3f35b4eebda826d"],["/js/profit_table.3781c0978168af2f291b.js","05d053894cc0560fb2c68ab2fb4f13cd"],["/js/push-notification.3781c0978168af2f291b.js","3764f917e4a5445387fd3906394c4173"],["/js/reports.3781c0978168af2f291b.js","1cf9870ed8af44a2b9ea15b757adc9b5"],["/js/screen-small.3781c0978168af2f291b.js","0f7d89e6138dc8343e72193ac3387fcb"],["/js/settings-chart.3781c0978168af2f291b.js","ac8faece8bddb99b1ea40d4ec612aaa0"],["/js/settings-language.3781c0978168af2f291b.js","dff7fd95cb738768e5695291de0755e4"],["/js/settings-theme.3781c0978168af2f291b.js","cce4e76b68dfb8877a22c9960e1d8dee"],["/js/smart_chart.3781c0978168af2f291b.js","2f016f70d80da2f259455d0c15f4e623"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.3781c0978168af2f291b.js","e91bdcd18d6583e4f26bacbdc8c9e0ca"],["/js/toggle-menu-drawer.3781c0978168af2f291b.js","893deadfeee4cdbb7cc68c80b71a4c8d"],["/js/two-month-picker.3781c0978168af2f291b.js","2791ae7e0d8bac7fe26b6eb8e4294183"],["/js/vendors~AccountSignupModal.3781c0978168af2f291b.js","c86d0118cdfa4751f2000279aa62db70"],["/js/vendors~digits~info-b~897959f6.3781c0978168af2f291b.js","f1c02ce9509f0d5a33ba70145711e04f"],["/js/vendors~main.3781c0978168af2f291b.js","782fad655fcd52176da9cf38754e6f91"],["/js/vendors~open_position~7c650be5.3781c0978168af2f291b.js","b44e22402f237927c37a02adae956db5"],["/js/vendors~smart_chart.3781c0978168af2f291b.js","0eab25c5efef36f4d1ea7c1e12f1289e"],["/js/work-in-progress.3781c0978168af2f291b.js","601c72bd771cf8c9620467dbb9ed1594"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







