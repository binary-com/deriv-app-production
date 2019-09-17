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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","d41189d8806f56f1463127370e1838ae"],["/css/app.css","3b8d59b501368195404548f227c0b89c"],["/css/default~open_position~1833eefb.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/modals.css","668d5cf1cfa647323db17743796aa846"],["/css/notification-messages.css","dac80b30ba994467f0a6728fedeff734"],["/css/reports.css","7498e4187031158a51cc5b892a627563"],["/css/screen-small.css","8df5f45913657b686502a08650feab1d"],["/css/settings-chart.css","ceb11571f9c9738be0db7907c0dcc419"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","cb30d66e5d8cd0bbd8c8ad6015ab755f"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","e09d6215633cd5d9dd0f9d5030744350"],["/js/0.30272fbd5264fb7df15d.js","096a106fcc256fca8982171a683d3edd"],["/js/1.30272fbd5264fb7df15d.js","695a28900fc81e9ef3392e1a72137d42"],["/js/10.30272fbd5264fb7df15d.js","30eb097f6fd989b894f653227025e16d"],["/js/11.30272fbd5264fb7df15d.js","9289c077c43450ae96f3796a33e176eb"],["/js/12.30272fbd5264fb7df15d.js","ec068bbc69342e96237925e3d34c09c6"],["/js/13.30272fbd5264fb7df15d.js","9b69f4c28b44bff36fb3006b62b35af3"],["/js/14.30272fbd5264fb7df15d.js","8cbf2ca7c1e3bb044536c13651bafd7d"],["/js/15.30272fbd5264fb7df15d.js","739e262635ac7a956e8c9b8fb04509c8"],["/js/16.30272fbd5264fb7df15d.js","84d15fadb25e0ddc89c54be9bb33a831"],["/js/17.30272fbd5264fb7df15d.js","c3303adb84dc2fe5bf43eee438d5c9e2"],["/js/18.30272fbd5264fb7df15d.js","31390aa0ad3596a5dda34cb9d6c0941d"],["/js/19.30272fbd5264fb7df15d.js","d0a57e95b250e5f52009c9e0148801d8"],["/js/2.30272fbd5264fb7df15d.js","89df6ab921e176b7e6e087ddc619d98b"],["/js/20.30272fbd5264fb7df15d.js","6b82812e10c4c11f4ad41961737d6091"],["/js/21.30272fbd5264fb7df15d.js","ae9f4374a4370b6d77de5444a87791c5"],["/js/22.30272fbd5264fb7df15d.js","29e67f213dfcdf419f39f9a2f4298373"],["/js/23.30272fbd5264fb7df15d.js","1eeb13035fdb32b869f9c0677c1ea234"],["/js/24.30272fbd5264fb7df15d.js","0aebdba5d44198735cd899979694afef"],["/js/25.30272fbd5264fb7df15d.js","a0e29627a6bb70bcebe0f5ffa475d8fd"],["/js/26.30272fbd5264fb7df15d.js","3207d52795e728f8511e32078eed848e"],["/js/27.30272fbd5264fb7df15d.js","6b21675bdaef2ebc246f0425ff8b3262"],["/js/28.30272fbd5264fb7df15d.js","9f64523a78299b2949ee8f89481c7ef8"],["/js/29.30272fbd5264fb7df15d.js","f933463470dab4ede6983ff22bbb10e3"],["/js/3.30272fbd5264fb7df15d.js","032dd8cbf6782cc41857e3c85533efe2"],["/js/30.30272fbd5264fb7df15d.js","2cd952fd2321192f180e0248b5477db3"],["/js/31.30272fbd5264fb7df15d.js","7eb30af48fbea709f4b605cc031a2af7"],["/js/32.30272fbd5264fb7df15d.js","5d47d1cf7ae6c9184ac778e45871bc1b"],["/js/33.30272fbd5264fb7df15d.js","fb59dfe817a391d349369209e634ebfe"],["/js/34.30272fbd5264fb7df15d.js","8e5aede10b80f18970167245a948261a"],["/js/35.30272fbd5264fb7df15d.js","26a65826c5f86baa3e3169cdb69a003c"],["/js/36.30272fbd5264fb7df15d.js","c9adb70388fedad81ec53876379e6bfc"],["/js/37.30272fbd5264fb7df15d.js","20a413591d1bad156bb6ad8ebda333b4"],["/js/38.30272fbd5264fb7df15d.js","9e76bb50d5dd5c4a1bc6dc810966d8e9"],["/js/39.30272fbd5264fb7df15d.js","18070b860d9ac45b343e17f5f41e981c"],["/js/4.30272fbd5264fb7df15d.js","b26142cdf5399fa48199d55d2dc930a2"],["/js/40.30272fbd5264fb7df15d.js","41df27f52cc7ba77c021604f4bc88612"],["/js/404.30272fbd5264fb7df15d.js","6a507199ff34c1afff05c1805c3d2baa"],["/js/41.30272fbd5264fb7df15d.js","62f06ccefb3f30882ac9fccf2eaa19e8"],["/js/42.30272fbd5264fb7df15d.js","5d5babe8e5212e26fe3840b60dfb027e"],["/js/43.30272fbd5264fb7df15d.js","c636801bde1efb8c5caffd7c3fd6394c"],["/js/44.30272fbd5264fb7df15d.js","0341a7536240cabb7dbc73036d6cd445"],["/js/45.30272fbd5264fb7df15d.js","327dd1b5021251ca7bc665993860240d"],["/js/46.30272fbd5264fb7df15d.js","06cfb5312e4c01664f1696ab5caf7ae2"],["/js/47.30272fbd5264fb7df15d.js","78b0f31de86f47382d581673acf9a201"],["/js/48.30272fbd5264fb7df15d.js","b03f4bc46f166ab831c33f39631c3773"],["/js/49.30272fbd5264fb7df15d.js","7fe1d82096f1e6414c2455ac85b15f68"],["/js/5.30272fbd5264fb7df15d.js","dfe7cfdc117d8ec62302c8e580da2c60"],["/js/50.30272fbd5264fb7df15d.js","c25296429b12100d3c13b5c238324686"],["/js/51.30272fbd5264fb7df15d.js","0a8fa0bc9061831c2d2963070cc7ff4a"],["/js/52.30272fbd5264fb7df15d.js","06b6ca32318499656651c14fd060e245"],["/js/53.30272fbd5264fb7df15d.js","e74ae371d5f7cfbacfe5b1d1c4f5eaa2"],["/js/54.30272fbd5264fb7df15d.js","4ec64a903a237e9cd538169352a8e314"],["/js/55.30272fbd5264fb7df15d.js","d0c4cfceccec766e1b9d8dd2d49738db"],["/js/56.30272fbd5264fb7df15d.js","827319cef6f3b01af722c1939f85813c"],["/js/57.30272fbd5264fb7df15d.js","5f0ac5853e737369c741de7a9f67c4e5"],["/js/58.30272fbd5264fb7df15d.js","a52026c801d6827b48693b75d2c3896e"],["/js/59.30272fbd5264fb7df15d.js","6687474edfb13cc531edc301006c4aac"],["/js/6.30272fbd5264fb7df15d.js","2c205e56479f45ea7f6e86eff6b378bb"],["/js/60.30272fbd5264fb7df15d.js","dd40d986f52ae3c274d50b98f176de7d"],["/js/61.30272fbd5264fb7df15d.js","2f4142dfa8f81317a5c0dd5d6b442ba5"],["/js/62.30272fbd5264fb7df15d.js","68ca9a0d0b9ffd23ec5aa4d73e66f265"],["/js/63.30272fbd5264fb7df15d.js","dd625b647f7504f61b415b68f1ff4d1c"],["/js/64.30272fbd5264fb7df15d.js","ec4b70bb6cdd0f052836efd36a050e8a"],["/js/65.30272fbd5264fb7df15d.js","120795926dee38af2fd060b9d4715baf"],["/js/66.30272fbd5264fb7df15d.js","9fd02ac0e6e6744b8645802008c07116"],["/js/67.30272fbd5264fb7df15d.js","f7dfa5cff9abfde91bfc230e78183126"],["/js/68.30272fbd5264fb7df15d.js","9a3129e00c9f78371678659964c2d69c"],["/js/69.30272fbd5264fb7df15d.js","f2bc4c706b4317a10413e802b65991dc"],["/js/7.30272fbd5264fb7df15d.js","b095777c5cd3e7257afcd2bbffd771b8"],["/js/70.30272fbd5264fb7df15d.js","d6e0db5b255d9fe760b7274be4660b51"],["/js/71.30272fbd5264fb7df15d.js","0ca1031dc4310e8032d24e63eaa4ebd5"],["/js/72.30272fbd5264fb7df15d.js","d278a1e0f07641206e0d7cec4ae509b2"],["/js/73.30272fbd5264fb7df15d.js","3664119ffc1ca9c9e248ea55e864043e"],["/js/74.30272fbd5264fb7df15d.js","8a2b58bb265a863322693e75c4d68d37"],["/js/75.30272fbd5264fb7df15d.js","c3436819c3022504c8c86ae14aac5afc"],["/js/76.30272fbd5264fb7df15d.js","13db6c792b1dcd6626399464a71bbb1a"],["/js/77.30272fbd5264fb7df15d.js","411422c43671f662fa4ba622eb5188b2"],["/js/8.30272fbd5264fb7df15d.js","6c643a5a519552bcb562e6373048ffee"],["/js/9.30272fbd5264fb7df15d.js","86983a355c36bc896b0d9c32cde0d749"],["/js/AccountSignupModal.30272fbd5264fb7df15d.js","258a91853e0816298def35c84cf7ebdb"],["/js/account-info.30272fbd5264fb7df15d.js","99a81f3062706a38482e80b7e0db42b2"],["/js/contract.30272fbd5264fb7df15d.js","551623168217297e158157265308e205"],["/js/default~open_position~1833eefb.30272fbd5264fb7df15d.js","62fce6ec1ac8c0869e82a1c6437705e9"],["/js/main.30272fbd5264fb7df15d.js","bf80e7ae283fc0bec1605c19190019b1"],["/js/modals.30272fbd5264fb7df15d.js","de89c7f15670bde866e4b529fc82b951"],["/js/notification-messages.30272fbd5264fb7df15d.js","ed1134b054dded248cd63c5693667458"],["/js/open_positions.30272fbd5264fb7df15d.js","1a36055393dde2335602896425801f0b"],["/js/profit_table.30272fbd5264fb7df15d.js","8ed8ff5ca2217af4efadfa6b28b02d76"],["/js/push-notification.30272fbd5264fb7df15d.js","addd12deba9e5369a4be2a8470565883"],["/js/reports.30272fbd5264fb7df15d.js","df0c3728007ece4b2e6ef77aba393efa"],["/js/screen-small.30272fbd5264fb7df15d.js","5529c3628efaff8891598952a5f03f49"],["/js/settings-chart.30272fbd5264fb7df15d.js","d3cb6cffd5b017a471d588ccb783860f"],["/js/settings-language.30272fbd5264fb7df15d.js","f7910da554fe7e63e2e6bb2503da0165"],["/js/settings-theme.30272fbd5264fb7df15d.js","274be040899f802c8c08f2e080b458cb"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/statement.30272fbd5264fb7df15d.js","13c107ca026b87be5032fb65c2046f56"],["/js/toggle-menu-drawer.30272fbd5264fb7df15d.js","78143861edc15b897cec3d68f33c433f"],["/js/two-month-picker.30272fbd5264fb7df15d.js","60263a44d680271c7061f07d6ee30723"],["/js/vendors~AccountSignupModal.30272fbd5264fb7df15d.js","11de541af9ce4771289ed2e0fe00a059"],["/js/vendors~main.30272fbd5264fb7df15d.js","2a78f4ae540a13370c774a3224583115"],["/js/vendors~open_position~7c650be5.30272fbd5264fb7df15d.js","4e457e85d5aed01b76c808b9e2ae2562"],["/js/vendors~smart_chart.30272fbd5264fb7df15d.js","94346f06b2f90c3fa33eb15daba1a2ce"],["/js/work-in-progress.30272fbd5264fb7df15d.js","83eadccc5dcb9c6a60f63366d020c32b"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







