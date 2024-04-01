(()=>{var e,t,o,r={893:(e,t,o)=>{"use strict";const r=window.wp.blocks,l=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/author","version":"0.1.0","title":"Author","category":"wp-custom-blocks","description":"Author block","supports":{"html":false},"textdomain":"author-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),a=window.React;var s=o(967),c=o.n(s);const n=window.wp.blockEditor,i=window.wp.coreData,u=window.wp.data,m=window.wp.element,d=window.wp.i18n,p=window.wp.components,b=window.wp.compose,f=[{name:(0,d.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,d.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,d.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,d.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,d.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,d.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#d63031"}],v=({label:e,name:t,disabled:o,attributes:r,defaultAttributes:l,setAttributes:s})=>{const[n,i]=(0,m.useState)(!1),u=`color-control-${(0,b.useInstanceId)(v)}`,w=r[t],g=e=>s({[t]:e});return(0,a.createElement)(p.Flex,null,(0,a.createElement)(p.FlexBlock,null,(0,a.createElement)(p.BaseControl,{id:u,label:e,className:c()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,a.createElement)(p.FlexItem,null,(0,a.createElement)(p.Button,{icon:"image-rotate",iconSize:14,label:(0,d.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>g(String(((e,t)=>e[t].default)(l,t))),className:c()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:w,disabled:!w})})),(0,a.createElement)(p.FlexItem,null,(0,a.createElement)("button",{disabled:o,className:c()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>i(!0)},(0,a.createElement)(p.ColorIndicator,{colorValue:w})),n&&(0,a.createElement)(p.Popover,{position:"bottom right",onFocusOutside:()=>i(!1),offset:5},(0,a.createElement)(p.ColorPicker,{color:w,onChange:e=>g(e),enableAlpha:!0}),(0,a.createElement)("div",{className:"px-3 pb-3"},(0,a.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,d.__)("Colors Palette","wp-custom-blocks")),(0,a.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},f.map(((e,t)=>(0,a.createElement)(p.ColorIndicator,{className:c()({active:e.color===w}),title:e.name,key:t,colorValue:e.color,onClick:()=>g(e.color)}))))))))},w=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var g=o.t(w,2);const _=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var h=o.t(_,2);const y=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var k=o.t(y,2);const C={DEFAULT:"#a689ff",grizzly:"#a689ff80",light:"#c1adff",brightest:"#a689ff00"},E={DEFAULT:"#fff",light:"#b2bec3",opacity:"#f2eff833"},x=(Array.from(h),Array.from(k),Array.from(g),{uniqueId:{type:"string"},description:{type:"string"},author:{type:"object",default:{}},backgroundColor:{type:"string",default:C.DEFAULT},avatarBorderColor:{type:"string",default:"#ffffff80"},descriptionColor:{type:"string",default:E.DEFAULT}}),O=({attributes:e,setAttributes:t})=>{const o={attributes:e,defaultAttributes:x,setAttributes:t};return(0,a.createElement)(n.InspectorControls,null,(0,a.createElement)(p.PanelBody,{title:(0,d.__)("Colors","wp-custom-blocks"),initialOpen:!0},(0,a.createElement)(v,{name:"backgroundColor",label:(0,d.__)("Background Color","wp-custom-blocks"),...o}),(0,a.createElement)(p.CardDivider,null),(0,a.createElement)(v,{name:"avatarBorderColor",label:(0,d.__)("Avatar Border Color","wp-custom-blocks"),...o}),(0,a.createElement)(p.CardDivider,null),(0,a.createElement)(v,{name:"descriptionColor",label:(0,d.__)("Description Color","wp-custom-blocks"),...o})))},{name:N,...A}=l;(0,r.registerBlockType)(N,{...A,icon:"format-status",attributes:x,edit:({attributes:e,clientId:t,setAttributes:o})=>{const{uniqueId:r,author:l,description:s,backgroundColor:p,avatarBorderColor:b,descriptionColor:f}=e,v=(0,n.useBlockProps)({className:c()(r,"wp-custom-blocks-author font-roboto flex items-center p-4 rounded-lg md:!p-7"),style:{backgroundColor:p}}),w=(0,u.select)("core/editor").getCurrentPostAttribute("author"),g=(0,u.useSelect)((e=>e(i.store).getEntityRecord("root","user",w)),[w]);return(0,m.useEffect)((()=>{g&&o({author:g})}),[g,o]),(0,m.useEffect)((()=>{r||o({uniqueId:"banner-"+t.slice(0,8)})}),[t,r,o]),(0,a.createElement)(m.Fragment,null,(0,a.createElement)(O,{attributes:e,setAttributes:o}),(0,a.createElement)("div",{...v},(0,a.createElement)("div",{className:"avatar relative"},(0,a.createElement)("div",{className:"border1 absolute opacity-30 rounded-full",style:{borderColor:b}}),(0,a.createElement)("div",{className:"border2 absolute opacity-20 rounded-full",style:{borderColor:b}}),(0,a.createElement)("img",{src:l.avatar_urls?.[48],alt:l.name,width:"48",height:"48",className:"w-[60px] !h-[60px] !max-w-none object-cover border-[5px] rounded-full",style:{borderColor:b}})),(0,a.createElement)(n.RichText,{tagName:"p",className:"ml-5 my-0 mr-0 p-0 text-sm md:!ml-6 md:!text-base",value:s,onChange:e=>o({description:e}),placeholder:(0,d.__)("Description..","wp-custom-blocks"),style:{color:f}})))},save:({attributes:e})=>{const{uniqueId:t,description:o,author:r,backgroundColor:l,avatarBorderColor:s,descriptionColor:i}=e,u=n.useBlockProps.save({className:c()(t,"wp-custom-blocks-author flex items-center p-4 rounded-lg md:!p-7"),style:{backgroundColor:l}});return(0,a.createElement)("div",{...u},(0,a.createElement)("div",{className:"avatar relative"},(0,a.createElement)("div",{className:"border1 absolute opacity-30 rounded-full",style:{borderColor:s}}),(0,a.createElement)("div",{className:"border2 absolute opacity-20 rounded-full",style:{borderColor:s}}),(0,a.createElement)("img",{src:r.avatar_urls?.[48],alt:r.name,width:"48",height:"48",className:"w-[60px] !h-[60px] !max-w-none object-cover border-[5px] rounded-full",style:{borderColor:s}})),(0,a.createElement)(n.RichText.Content,{tagName:"p",className:"ml-5 text-sm md:!ml-6 md:!text-base",value:o,style:{color:i}}))}})},967:(e,t)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=s(e,a(o)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)r.call(e,o)&&e[o]&&(t=s(t,o));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()}},l={};function a(e){var t=l[e];if(void 0!==t)return t.exports;var o=l[e]={exports:{}};return r[e](o,o.exports,a),o.exports}a.m=r,e=[],a.O=(t,o,r,l)=>{if(!o){var s=1/0;for(u=0;u<e.length;u++){for(var[o,r,l]=e[u],c=!0,n=0;n<o.length;n++)(!1&l||s>=l)&&Object.keys(a.O).every((e=>a.O[e](o[n])))?o.splice(n--,1):(c=!1,l<s&&(s=l));if(c){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,r,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);a.r(l);var s={};t=t||[null,o({}),o([]),o(o)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=o(c))Object.getOwnPropertyNames(c).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,a.d(l,s),l},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={702:0,296:0};a.O.j=t=>0===e[t];var t=(t,o)=>{var r,l,[s,c,n]=o,i=0;if(s.some((t=>0!==e[t]))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(n)var u=n(a)}for(t&&t(o);i<s.length;i++)l=s[i],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},o=globalThis.webpackChunkwp_custom_blocks=globalThis.webpackChunkwp_custom_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=a.O(void 0,[296],(()=>a(893)));s=a.O(s)})();