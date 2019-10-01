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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","8dda3685135a540704bd543726a1cb90"],["/css/app.css","b005d2fcc8f2493fa45fcf2c748bcfb2"],["/css/modals.css","828256690638c40e408e14600775ca10"],["/css/mt5.css","0276cd45fe1c0b7921ef30318bdf9f8d"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","23900488ab16254eb197993f11936cac"],["/js/0.ea86af5d218186006eff.js","1d2bcbb6f62f1912631058c136cef673"],["/js/1.ea86af5d218186006eff.js","f15de137a246be6922fc29670f3a6d44"],["/js/10.ea86af5d218186006eff.js","a5487781c68594d86a745d1f98f923be"],["/js/11.ea86af5d218186006eff.js","ed3c35951a1203018499cdd91d7a6465"],["/js/12.ea86af5d218186006eff.js","157fb909cff93154c7631c03461bf160"],["/js/13.ea86af5d218186006eff.js","49c11ce169ddf09b628e8d7c80b2bcc5"],["/js/14.ea86af5d218186006eff.js","80c0f8a6df115e3e1c7685cd5ec54db0"],["/js/15.ea86af5d218186006eff.js","ff293a107f547e0e95fd59c8e86f037a"],["/js/16.ea86af5d218186006eff.js","133542d7c386a6a0c1c3da5b9b222f07"],["/js/17.ea86af5d218186006eff.js","db694bd2e35294f72460d0e65f03524c"],["/js/18.ea86af5d218186006eff.js","b4b98e8881340ffcfe918452dd48a863"],["/js/19.ea86af5d218186006eff.js","058fe071fcebc6a34f48df5c056f192c"],["/js/2.ea86af5d218186006eff.js","47428638d338f6349c9ad4f74a895f14"],["/js/20.ea86af5d218186006eff.js","56b6f8ed650a09a7f5c6f694791c24cc"],["/js/21.ea86af5d218186006eff.js","70375c3725c1a5d9f6b7e1b1ad4c9c80"],["/js/22.ea86af5d218186006eff.js","ba45b16e2c23c34cb82df8b42a680b9d"],["/js/23.ea86af5d218186006eff.js","a04f3541b22942abf5daaab40e07b941"],["/js/24.ea86af5d218186006eff.js","4b648427e97e1e547eedceee192665e5"],["/js/25.ea86af5d218186006eff.js","a056cec2c17c6841f5f056044cde21b5"],["/js/26.ea86af5d218186006eff.js","4c8f919c1dee2678c8cc942b960944b7"],["/js/27.ea86af5d218186006eff.js","5b663863ca076b5f3eb8dcc2376ab72f"],["/js/28.ea86af5d218186006eff.js","dda0f4a64f982490755b2eeab94b8b4e"],["/js/29.ea86af5d218186006eff.js","fe4370d45cacbcd70e404cfc68d9c425"],["/js/3.ea86af5d218186006eff.js","895de098dec078f3e2cf40ed167e6f6e"],["/js/30.ea86af5d218186006eff.js","24d69d86c99165a4c535273642fe1b3b"],["/js/31.ea86af5d218186006eff.js","a943467da479cba0783698c4b6a506cb"],["/js/32.ea86af5d218186006eff.js","8fc1b03435ed8e28620dba5906725052"],["/js/33.ea86af5d218186006eff.js","14265ed2e2dbe4a54d2b911c41f0d5a6"],["/js/34.ea86af5d218186006eff.js","fb2082f1c087b50a2b6beaa220806c84"],["/js/35.ea86af5d218186006eff.js","afe223b6725e26aeeaf3a8ae1145caea"],["/js/36.ea86af5d218186006eff.js","0f19ae76f4f09c814bb7cda9f4e2ddcb"],["/js/37.ea86af5d218186006eff.js","2f02973edcfd15fda0fa36bc6a4499ff"],["/js/38.ea86af5d218186006eff.js","4fb0995de107863289656c153d94a7da"],["/js/39.ea86af5d218186006eff.js","310b43f1bd2e1ae8da88c2884f48743d"],["/js/4.ea86af5d218186006eff.js","d3f6ea6602213d1eeac3900ffece0a7f"],["/js/40.ea86af5d218186006eff.js","7b8aa899efd7e4b6fd7a531b0dfc974a"],["/js/404.ea86af5d218186006eff.js","8a5d9d0d1389e214eb62e953773dab0b"],["/js/41.ea86af5d218186006eff.js","afacd66a98bf04e6a10cdf6e862aec48"],["/js/42.ea86af5d218186006eff.js","7e8be9329798516469ddeed72492d8bd"],["/js/43.ea86af5d218186006eff.js","6489d87fa45549e161ccb1bff1b26797"],["/js/44.ea86af5d218186006eff.js","8ca550bbfa50d1d9c9925a446815ac7f"],["/js/45.ea86af5d218186006eff.js","87088f2a54428eefe95ad4c925f426cf"],["/js/46.ea86af5d218186006eff.js","a220912aaae4afb27e8b6d941682001b"],["/js/47.ea86af5d218186006eff.js","eb795e478d8396235110967b19ed73fc"],["/js/48.ea86af5d218186006eff.js","53cb6bbafc352ffc1c081597899d5b33"],["/js/49.ea86af5d218186006eff.js","0766cabae22a135335a1068be12bc88a"],["/js/5.ea86af5d218186006eff.js","ed37736c8ae135aa36a9d99a346ac67b"],["/js/50.ea86af5d218186006eff.js","ea891d9e36c6c0aff69d29c566fa73dc"],["/js/51.ea86af5d218186006eff.js","b713f371a764227055fc5366f3a68e82"],["/js/52.ea86af5d218186006eff.js","ec9a53e306c7e20f6c26576253237235"],["/js/53.ea86af5d218186006eff.js","6f20e87e51fb213dcf9624c4921840fb"],["/js/54.ea86af5d218186006eff.js","607ad80bc023b50787c2c7151b13b6f0"],["/js/55.ea86af5d218186006eff.js","f39a4aaace539460939c972159f06324"],["/js/56.ea86af5d218186006eff.js","02a7e09d827f640f1c6ed914ca4f0faf"],["/js/57.ea86af5d218186006eff.js","ba8ff8f3d5536d417a4215232672521a"],["/js/58.ea86af5d218186006eff.js","22ac8cd50d5a831330f46e67c03bb560"],["/js/59.ea86af5d218186006eff.js","62de17d1cf7d41738200f1ee3bfcdd86"],["/js/6.ea86af5d218186006eff.js","a48553f93c89a5d6b0e1cfb5cee13249"],["/js/60.ea86af5d218186006eff.js","2add6fd45a3cc0da7cfa8a5f0e6157bc"],["/js/61.ea86af5d218186006eff.js","55b7a615ad71e0cd794824b43d3b0949"],["/js/62.ea86af5d218186006eff.js","d539872e50fe54f2bfd3b514ce886def"],["/js/63.ea86af5d218186006eff.js","ffab5e3ee99a1e2a319096869c36a56b"],["/js/64.ea86af5d218186006eff.js","6ad1bf5bc26f78f9627b4b7029be0931"],["/js/65.ea86af5d218186006eff.js","97fbc8f6f9d5c28dd29721a30d69c7ab"],["/js/66.ea86af5d218186006eff.js","a36dd57947ea0ba177fbb4cc048d7a21"],["/js/67.ea86af5d218186006eff.js","99707f3476d62a4c7a8fd98d278566eb"],["/js/68.ea86af5d218186006eff.js","61225051a2aa05e4660ea78a387b7d36"],["/js/69.ea86af5d218186006eff.js","4b0b98ef42878b15461c390c2a7c206d"],["/js/7.ea86af5d218186006eff.js","4630bc5ca2f22b26ae98848c654489de"],["/js/70.ea86af5d218186006eff.js","0d0f9b407be1416ecb49e81fef91a821"],["/js/71.ea86af5d218186006eff.js","02e06503716770d011668e914a6b9783"],["/js/72.ea86af5d218186006eff.js","c6081da77d46ef08072bd6948d725538"],["/js/73.ea86af5d218186006eff.js","db134ca86b61132b548fefd06397b151"],["/js/74.ea86af5d218186006eff.js","ddbebf88c8f7c1bb0b635e9cbae3a691"],["/js/75.ea86af5d218186006eff.js","c5496b4f5e0de3419e1edf6d5fa083b4"],["/js/76.ea86af5d218186006eff.js","f367b840275a2fc10f782babb982981d"],["/js/77.ea86af5d218186006eff.js","3b922682da0b31505a34e6ed23efd826"],["/js/78.ea86af5d218186006eff.js","15f4a51ab0d622eebd4af0279c5e97cb"],["/js/79.ea86af5d218186006eff.js","1b38fae2da760d1ea8e7989d1634fd1d"],["/js/8.ea86af5d218186006eff.js","202a26e843de1fa98d55773bea30e305"],["/js/80.ea86af5d218186006eff.js","42fbf5209a50a598bbbc0bb2a491c28d"],["/js/81.ea86af5d218186006eff.js","8dd2f72c04f194ce68864809f36e39ef"],["/js/82.ea86af5d218186006eff.js","76849e5e239297502f98d5ec2eba1452"],["/js/83.ea86af5d218186006eff.js","c242dafdd9189316eaa4a27acbeed3c1"],["/js/84.ea86af5d218186006eff.js","131833b78318bee2d3e639f6b727afa6"],["/js/85.ea86af5d218186006eff.js","fb4bbb31fd38d7e6cfd3823209861466"],["/js/86.ea86af5d218186006eff.js","c6acf0973dad69ff5763f6ebac20ad84"],["/js/87.ea86af5d218186006eff.js","3dbef2d763fe08cf9d9f026e526a0b56"],["/js/88.ea86af5d218186006eff.js","5ca41e451d2492f608bed7b0e9095f5f"],["/js/89.ea86af5d218186006eff.js","80db7cc39952d9a00aa50eb6b866c84b"],["/js/9.ea86af5d218186006eff.js","6564d7cdd960f28d7910bf9bb147024e"],["/js/90.ea86af5d218186006eff.js","f1a8d79df41db9de5487d6fd6da0f288"],["/js/91.ea86af5d218186006eff.js","07636b7cb8ab59b3d5fe4ab43f8bcc74"],["/js/AccountSignupModal.ea86af5d218186006eff.js","bd60987c687802016cb0e7a3ef185b31"],["/js/ResetPasswordModal.ea86af5d218186006eff.js","58279055489165eaae97817ad8799b3a"],["/js/account-info.ea86af5d218186006eff.js","7f7ed98b36daee7ce97da9ba79771092"],["/js/account.ea86af5d218186006eff.js","5ba735719115b1a0779782d4a072d117"],["/js/contract.ea86af5d218186006eff.js","ddcac649690b08b73a968567b3a7a328"],["/js/modals.ea86af5d218186006eff.js","6f5119d6ea46aae7e79aeae7548d8d7d"],["/js/mt5.ea86af5d218186006eff.js","71bbc8f07dba48be27c0eafc5bc34608"],["/js/notification-messages.ea86af5d218186006eff.js","ad34742f668bba3a33687edb4777f768"],["/js/push-notification.ea86af5d218186006eff.js","c639b38ae22b3ce85f13dbdc9e228632"],["/js/reports.ea86af5d218186006eff.js","513d0f1d1bb6e9a749f8cc84b0ef0f95"],["/js/screen-small.ea86af5d218186006eff.js","09fae68668af15920a51ff81a8132c2f"],["/js/settings-chart.ea86af5d218186006eff.js","64a4bedafc8eee46c8bd3c8ef6bdb764"],["/js/settings-language.ea86af5d218186006eff.js","13954ecc252b7ae20ed12a649ad60e55"],["/js/settings-theme.ea86af5d218186006eff.js","1facae49b087b98105a3289ae22bbb14"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.ea86af5d218186006eff.js","8c1f11d7eeb40bde5378919a2c70e181"],["/js/two-month-picker.ea86af5d218186006eff.js","0ad20fd7943fbcfa9d77c3a6afb6f15a"],["/js/vendors~main.ea86af5d218186006eff.js","b354af0eb76bbec7a876ec40f5dc0ea0"],["/js/vendors~smart_chart.ea86af5d218186006eff.js","7765688120bbbb8c182a1e20205bf8c0"],["/js/work-in-progress.ea86af5d218186006eff.js","012a020f767d2937fccc2369028d0088"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







