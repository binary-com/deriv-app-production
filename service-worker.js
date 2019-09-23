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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","5b27732c6acd66f9087b26930992bf0a"],["/css/account.css","9b31754fe2f321e55c0059f2f129cf59"],["/css/app.css","de035a18b965aa06354124df3d0b5dd7"],["/css/modals.css","dadb9cacf094faee7d056ddf52c92de9"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","fc25e385cdd846cce00c0342bebb38f8"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","19967b6ade3519fb419501dafdaa5282"],["/js/0.93ab3f87e8577635a8ff.js","8136ebdf4d7ea5d1f782354cf877ffa1"],["/js/1.93ab3f87e8577635a8ff.js","c6d892c35325d50c030f4ab7158453b1"],["/js/10.93ab3f87e8577635a8ff.js","739a6cd2443122f4693757f6dd466d17"],["/js/11.93ab3f87e8577635a8ff.js","ce7389b802dade2ecc1519307b82cc70"],["/js/12.93ab3f87e8577635a8ff.js","24a0161cd6ab5455de8330f0f31d4e0c"],["/js/13.93ab3f87e8577635a8ff.js","2dc9056c474cc90d1b0a211140ca1ccf"],["/js/14.93ab3f87e8577635a8ff.js","1529627b851d054df9d09d47cb28996d"],["/js/15.93ab3f87e8577635a8ff.js","868eed3dce48fb83ad8060ba4d993fc7"],["/js/16.93ab3f87e8577635a8ff.js","91815ef37183e751e3847fc244b4fa1d"],["/js/17.93ab3f87e8577635a8ff.js","98fa0ac0afcf341ed931c5106abdd696"],["/js/18.93ab3f87e8577635a8ff.js","64634e904d1ce1b79a4fdc912c1e4ef5"],["/js/19.93ab3f87e8577635a8ff.js","ea57ec9bc0977c37d66dc850456257e3"],["/js/2.93ab3f87e8577635a8ff.js","b0d8cb8a4fa7dea985f521895d2bf83e"],["/js/20.93ab3f87e8577635a8ff.js","a0e2624b5ba0089444338ab03e0a52c5"],["/js/21.93ab3f87e8577635a8ff.js","e9152ce5bb73acd15d484a84c51aa7e6"],["/js/22.93ab3f87e8577635a8ff.js","5bda662a7b3dbdfa72cb0aa8cbfda147"],["/js/23.93ab3f87e8577635a8ff.js","6c0917dd759f2561094699acdd19d7d8"],["/js/24.93ab3f87e8577635a8ff.js","141acbad36ae0c84e9ba5c618eb68950"],["/js/25.93ab3f87e8577635a8ff.js","a0917c4d32636190b0e12e5e07c14111"],["/js/26.93ab3f87e8577635a8ff.js","cc0e5c525d81c8510a52b666920b94e2"],["/js/27.93ab3f87e8577635a8ff.js","f505f209c830af96530428f6a18a8aff"],["/js/28.93ab3f87e8577635a8ff.js","da983cea42a663e6c1548cca6be64c67"],["/js/29.93ab3f87e8577635a8ff.js","15927edafe2ce95b58229b48a4ae80c8"],["/js/3.93ab3f87e8577635a8ff.js","33c9d522393d8178765663591a61e477"],["/js/30.93ab3f87e8577635a8ff.js","f302258c892cb4f2498de96550ce25d4"],["/js/31.93ab3f87e8577635a8ff.js","b6f449be82691c7cdd916be3a1b3fc15"],["/js/32.93ab3f87e8577635a8ff.js","2abeb0a9cb580928e6ebf9302e0aa544"],["/js/33.93ab3f87e8577635a8ff.js","7c9f34b1d18dc7f0b982be6077cce719"],["/js/34.93ab3f87e8577635a8ff.js","c208258b88c4a198cc3296ddffbe6059"],["/js/35.93ab3f87e8577635a8ff.js","45498c2147a1c104fb085fedc921668d"],["/js/36.93ab3f87e8577635a8ff.js","2c54536f798377046a0e6a5a0e6e836e"],["/js/37.93ab3f87e8577635a8ff.js","74420bc289e7a8e1666347e9f316133d"],["/js/38.93ab3f87e8577635a8ff.js","c397edf45dfb115cc32eb2b69e9229b0"],["/js/39.93ab3f87e8577635a8ff.js","a69f368884fcdcdd6ffd69ee24900890"],["/js/4.93ab3f87e8577635a8ff.js","fd3cf07c293af24890b2c4e4b15cbcda"],["/js/40.93ab3f87e8577635a8ff.js","4ab00d72813ab54ab7b1a564dcaef618"],["/js/404.93ab3f87e8577635a8ff.js","b494ea61d16aba619e34315987058417"],["/js/41.93ab3f87e8577635a8ff.js","76c90143523a9bd71efbedaaf4789ae8"],["/js/42.93ab3f87e8577635a8ff.js","b298bd48da18bd02ada3bed0383e9281"],["/js/43.93ab3f87e8577635a8ff.js","b1bf5f504f778b452bc944f3342ba3f7"],["/js/44.93ab3f87e8577635a8ff.js","6b4f436d743d5048ec7a4e53469a10b5"],["/js/45.93ab3f87e8577635a8ff.js","550d5c98c590e46fd966bda4a5373433"],["/js/46.93ab3f87e8577635a8ff.js","b1225473519158e247e565d6fdfc5ce1"],["/js/47.93ab3f87e8577635a8ff.js","aa6097cc22bced34e406bf9b415e5d65"],["/js/48.93ab3f87e8577635a8ff.js","0038344df04de373613979ff4bc2df49"],["/js/49.93ab3f87e8577635a8ff.js","91ce4ad9c572e084a58008d97845134f"],["/js/5.93ab3f87e8577635a8ff.js","5847f2a000093817019bc7c751762267"],["/js/50.93ab3f87e8577635a8ff.js","8b5f2882bfd2e297da0187548d3dff28"],["/js/51.93ab3f87e8577635a8ff.js","d51f6c9a6b45f0a0c1983d0d993ddda3"],["/js/52.93ab3f87e8577635a8ff.js","500bd0bb69b61833c0d84024b34e7994"],["/js/53.93ab3f87e8577635a8ff.js","e84faaca68ad5f9405d016bf4e915d84"],["/js/54.93ab3f87e8577635a8ff.js","c548eef33dd736e9790670662af43dc0"],["/js/55.93ab3f87e8577635a8ff.js","5c5f604a20a549eba7a5b63cf7d0527f"],["/js/56.93ab3f87e8577635a8ff.js","3156b73b9fa2e4abaa73b833a1b74b2e"],["/js/57.93ab3f87e8577635a8ff.js","90d1ff6c03e5123d6a1505bca1430eb1"],["/js/58.93ab3f87e8577635a8ff.js","820fac8d307f6a05ce6e4735e7608511"],["/js/59.93ab3f87e8577635a8ff.js","ad105e9c95281c4e72130df0fdd8c136"],["/js/6.93ab3f87e8577635a8ff.js","ac8ba15152161618a6517640ec27e970"],["/js/60.93ab3f87e8577635a8ff.js","4706357120a6cf29cb01b3f172e23cbb"],["/js/61.93ab3f87e8577635a8ff.js","3e8198d314f46bfc88d2a9d5f7085f36"],["/js/62.93ab3f87e8577635a8ff.js","d3330a0e39a5593c8a25ca837ada4d2e"],["/js/63.93ab3f87e8577635a8ff.js","54d9d7ed1da148e206522bebda4004dd"],["/js/64.93ab3f87e8577635a8ff.js","d3f05b8654574907f997d55c7db2aa6a"],["/js/65.93ab3f87e8577635a8ff.js","2585bb4b32d57dd10d19f7c88040eafa"],["/js/66.93ab3f87e8577635a8ff.js","3425fc9718b5d36a3d9d32dd927a07b8"],["/js/67.93ab3f87e8577635a8ff.js","74faff43767ff244a7e94d4252065d74"],["/js/68.93ab3f87e8577635a8ff.js","de17a1e35b45dfc48bc67306c779421a"],["/js/69.93ab3f87e8577635a8ff.js","de4cd6c83d3523fe7576d91fcf56fc69"],["/js/7.93ab3f87e8577635a8ff.js","9f6475e5737d9fc1293284e6729120eb"],["/js/70.93ab3f87e8577635a8ff.js","a66883e45f3df4992e2aeb5d74071dc9"],["/js/71.93ab3f87e8577635a8ff.js","eeed5e05b90759c24244352b70dda931"],["/js/72.93ab3f87e8577635a8ff.js","f83c3346a6285420fc2520afa8118e61"],["/js/73.93ab3f87e8577635a8ff.js","766070a98b223e7ddaaef573ebaa454c"],["/js/74.93ab3f87e8577635a8ff.js","e4e7cb1d9105dc60ebcb1e455cca9fa6"],["/js/75.93ab3f87e8577635a8ff.js","fe23a6ef1cba34ce55fe0006c382a3e6"],["/js/76.93ab3f87e8577635a8ff.js","ecbad8dc306c119025ee1b21ab738c18"],["/js/77.93ab3f87e8577635a8ff.js","4fec534a2b076c22d5bcdc2fbc573cac"],["/js/78.93ab3f87e8577635a8ff.js","174d0396d427b609b9fa2181af7e1b61"],["/js/79.93ab3f87e8577635a8ff.js","51a2e80c5e31171e8ebc5d3a7a9ac51b"],["/js/8.93ab3f87e8577635a8ff.js","5ef48a70f72c7b35acd398863778b37b"],["/js/80.93ab3f87e8577635a8ff.js","9054280cadd327ff6fc824e8babd781f"],["/js/81.93ab3f87e8577635a8ff.js","570aa8c49c23af13e48546f77fe4780b"],["/js/82.93ab3f87e8577635a8ff.js","5bcc57efc8ed5f489809876929b836e1"],["/js/83.93ab3f87e8577635a8ff.js","3b08dec71daa4eab42459d65fbe4e955"],["/js/84.93ab3f87e8577635a8ff.js","71e13088cd9d72b4ad1e3582654e9faf"],["/js/85.93ab3f87e8577635a8ff.js","7fd0252fb8a783c9699c2853188398cd"],["/js/86.93ab3f87e8577635a8ff.js","27a822b5e954621bc23f79716eee6430"],["/js/87.93ab3f87e8577635a8ff.js","bef3a9e571eea2ef64b5d45f0e237b8e"],["/js/88.93ab3f87e8577635a8ff.js","2d58f0192e8d751c978bee2514b737e2"],["/js/9.93ab3f87e8577635a8ff.js","3b3a62747d543e3b9dcfad7aa6d506ab"],["/js/AccountSignupModal.93ab3f87e8577635a8ff.js","59f6d36be9b176464dcf8ff51af69e7b"],["/js/account-info.93ab3f87e8577635a8ff.js","263aa7fa4d3f3e6feb2433e3c9025a51"],["/js/account.93ab3f87e8577635a8ff.js","8aa80ba712a3392ec265ac88b6888031"],["/js/contract.93ab3f87e8577635a8ff.js","407bb00fba382f31d93399831c4bbd2a"],["/js/modals.93ab3f87e8577635a8ff.js","642cb844f81b970c7d84ba19a85bad7d"],["/js/notification-messages.93ab3f87e8577635a8ff.js","45e91dfd50e2020f4040f71010009d32"],["/js/push-notification.93ab3f87e8577635a8ff.js","b83393e299b8bfc6121cf1cc5affb164"],["/js/reports.93ab3f87e8577635a8ff.js","ec8e91686ebe7860442a01ca79fa652b"],["/js/screen-small.93ab3f87e8577635a8ff.js","0022e7410b4f737e6f3d28f18c0d8310"],["/js/settings-chart.93ab3f87e8577635a8ff.js","4d6c5d086ee3ab4f9404086d9d9a7564"],["/js/settings-language.93ab3f87e8577635a8ff.js","4175903822f6160581463c6bcfeba566"],["/js/settings-theme.93ab3f87e8577635a8ff.js","63d2c758d73eb9fdc9d467f149da4949"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.93ab3f87e8577635a8ff.js","e17d126f2b9cdf9d2c09252664140cec"],["/js/two-month-picker.93ab3f87e8577635a8ff.js","22b0d57022a3135211abb40ac3aa0e35"],["/js/vendors~main.93ab3f87e8577635a8ff.js","10e877113b3ef40d86826805c2d1f59e"],["/js/vendors~smart_chart.93ab3f87e8577635a8ff.js","fe3e44b92f2f2a30310f10eceaf18da1"],["/js/work-in-progress.93ab3f87e8577635a8ff.js","dd024d568db6034ee7c51c86350ac835"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







