(window.webpackJsonp=window.webpackJsonp||[]).push([["settings-language"],{598:function(e,a,n){"use strict";n.r(a);var t=n(4),g=n.n(t),l=n(1),s=n.n(l),c=n(0),r=n.n(c),i=n(19),u=n(7),m=n(237),_=function(e){return e===m.a},o=function(e){var a=e.children,n=e.lang;return r.a.createElement("div",{className:g()("settings-language__language-link",{"settings-language__language-link--active":_(n)})},a)},p=function(e){var a=e.lang;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{icon:"IconCountryFlag",className:"settings-language__language-link-flag settings-language__language-flag",type:a.replace(/(\s|_)/,"-").toLowerCase()}),r.a.createElement("span",{className:g()("settings-language__language-name",{"settings-language__language-name--active":_(a)})},Object(m.b)()[a]))};p.propTypes={lang:s.a.string},o.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,lang:s.a.string},a.default=function(){return r.a.createElement("div",{className:"settings-language"},r.a.createElement("div",{className:"settings-language__language-header"},r.a.createElement("span",null,r.a.createElement(i.a,{i18n_default_text:"Select language"}))),r.a.createElement("div",{className:"settings-language__language-container"},Object.keys(Object(m.b)()).map(function(e){return _(e)?r.a.createElement(o,{lang:e,key:e},r.a.createElement(p,{lang:e})):r.a.createElement("a",{key:e,href:Object(m.c)(e),className:g()("settings-language__language-link",{"settings-language__language-link--active":_(e)})},r.a.createElement(p,{lang:e,key:e}))})))}}}]);
//# sourceMappingURL=settings-language.8d80b11c6ac6ffb87751.js.map