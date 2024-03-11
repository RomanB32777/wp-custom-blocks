(()=>{"use strict";var e,t,a,r={919:(e,t,a)=>{const r=JSON.parse('{"xs":320,"sm":640,"md":768,"lg":1024,"xl":1280}'),l=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var s=a.t(l,2);const i=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var o=a.t(i,2);const n=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var u=a.t(n,2);const b=r;Array.from(o),Array.from(u),Array.from(s);var p=a(652),d=a(678);document.querySelectorAll(".slider-table-cards").forEach((e=>{const{id:t}=e;if(t){const a="true"===e.getAttribute("data-slider-loop"),r=e.getAttribute("data-slider-disable-autoplay"),l=e.getAttribute("data-slider-autoplay-delay"),s=e.getAttribute("data-slides-per-view-xs"),i=e.getAttribute("data-slides-per-view-sm"),o=e.getAttribute("data-slides-per-view-md"),n=e.getAttribute("data-slides-space-between-xs"),u=e.getAttribute("data-slides-space-between-sm"),c=e.getAttribute("data-slides-space-between-md"),v=24;((e,t={})=>{const{breakpoints:a,pagination:r,...l}=t,s="object"==typeof r?r:{};new p.Z(e,{modules:[d.W_,d.tl,d.pt],slidesPerView:4,spaceBetween:24,autoplay:{delay:5e3},pagination:{clickable:!0,el:".swiper-pagination",bulletClass:"group w-3 h-3",bulletActiveClass:"nav-active",renderBullet:(e,t)=>`\n\t\t\t\t\t<button class="${t}">\n\t\t\t\t\t\t<span class="inline-block w-full h-full duration-200 rounded-full bg-primary-brightest hover:bg-primary group-[.nav-active]:bg-primary"></span>\n\t\t\t\t\t</button>\n\t\t\t\t`,...s},navigation:{nextEl:`.arrow-right-${e.replace(/[#.]/gm,"")}`,prevEl:`.arrow-left-${e.replace(/[#.]/gm,"")}`,disabledClass:"nav-disabled"},breakpoints:{[b.xs]:{slidesPerView:1},[b.sm]:{slidesPerView:2},[b.md]:{slidesPerView:3},[b.xl]:{slidesPerView:4,spaceBetween:24},...a},...l})})(`#${t}`,{loop:a,breakpoints:{[b.xs]:{slidesPerView:Number(s)||1,spaceBetween:Number(n)||v},[b.sm]:{slidesPerView:Number(i)||2,spaceBetween:Number(u)||v},[b.md]:{slidesPerView:Number(o)||3,spaceBetween:Number(c)||v}},autoplay:"true"!==r&&{delay:Number(l)||5e3}})}}))}},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={exports:{}};return r[e](a,a.exports,s),a.exports}s.m=r,e=[],s.O=(t,a,r,l)=>{if(!a){var i=1/0;for(b=0;b<e.length;b++){for(var[a,r,l]=e[b],o=!0,n=0;n<a.length;n++)(!1&l||i>=l)&&Object.keys(s.O).every((e=>s.O[e](a[n])))?a.splice(n--,1):(o=!1,l<i&&(i=l));if(o){e.splice(b--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var b=e.length;b>0&&e[b-1][2]>l;b--)e[b]=e[b-1];e[b]=[a,r,l]},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);s.r(l);var i={};t=t||[null,a({}),a([]),a(a)];for(var o=2&r&&e;"object"==typeof o&&!~t.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,s.d(l,i),l},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={620:0};s.O.j=t=>0===e[t];var t=(t,a)=>{var r,l,[i,o,n]=a,u=0;if(i.some((t=>0!==e[t]))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(n)var b=n(s)}for(t&&t(a);u<i.length;u++)l=i[u],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(b)},a=globalThis.webpackChunkwp_custom_blocks=globalThis.webpackChunkwp_custom_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=s.O(void 0,[390],(()=>s(919)));i=s.O(i)})();