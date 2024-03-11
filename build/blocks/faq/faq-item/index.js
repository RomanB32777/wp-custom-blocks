(()=>{var e,t,o={967:(e,t)=>{var o;!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=n(e,a(o)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)l.call(e,o)&&e[o]&&(t=n(t,o));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},l={};function r(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={exports:{}};return o[e](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,l){if(1&l&&(o=this(o)),8&l)return o;if("object"==typeof o&&o){if(4&l&&o.__esModule)return o;if(16&l&&"function"==typeof o.then)return o}var a=Object.create(null);r.r(a);var n={};e=e||[null,t({}),t([]),t(t)];for(var s=2&l&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>n[e]=()=>o[e]));return n.default=()=>o,r.d(a,n),a},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/faq-item","version":"0.1.0","title":"Faq item block","category":"wp-custom-blocks","description":"Faq item block","parent":["wp-custom-blocks/faq"],"supports":{"html":false},"textdomain":"faq-item-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),o=window.React,l=window.wp.blockEditor,a=window.wp.element,n=window.wp.i18n,s=window.wp.components;var c=r(967),i=r.n(c);const m=window.wp.compose,u=[{name:(0,n.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,n.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,n.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,n.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,n.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,n.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,n.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,n.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,n.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,n.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,n.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,n.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,n.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,n.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,n.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,n.__)("Color","wp-custom-blocks"),color:"#d63031"}],p=(0,m.withInstanceId)((({label:e,color:t,onChange:l,disabled:r,instanceId:c})=>{const[m,p]=(0,a.useState)(!1),d=`color-control-${c}`;return(0,o.createElement)(s.Flex,null,(0,o.createElement)(s.FlexBlock,null,(0,o.createElement)(s.BaseControl,{id:d,label:e,className:i()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,o.createElement)(s.FlexItem,null,(0,o.createElement)(s.Button,{icon:"image-rotate",iconSize:14,label:(0,n.__)("Reset","wp-custom-blocks"),disabled:r,size:"small",onClick:()=>l(""),className:i()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:t,disabled:!t})})),(0,o.createElement)(s.FlexItem,null,(0,o.createElement)("button",{disabled:r,className:i()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>p(!0)},(0,o.createElement)(s.ColorIndicator,{colorValue:t})),m&&(0,o.createElement)(s.Popover,{position:"bottom right",onFocusOutside:()=>p(!1),offset:5},(0,o.createElement)(s.ColorPicker,{color:t,onChange:e=>l(e),enableAlpha:!0}),(0,o.createElement)("div",{className:"px-3 pb-3"},(0,o.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,n.__)("Colors Palette","wp-custom-blocks")),(0,o.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},u?.map(((e,r)=>(0,o.createElement)(s.ColorIndicator,{className:i()({active:e.color===t}),title:e.name,key:r,colorValue:e.color,onClick:()=>l(e.color)}))))))))})),d=({attributes:e,setAttributes:t})=>{const{isParentStyles:r,questionColor:a,answerColor:c}=e;return(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(s.PanelBody,{title:(0,n.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,o.createElement)(p,{label:(0,n.__)("Question Color","wp-custom-blocks"),color:a,disabled:r,onChange:e=>t({questionColor:e})}),(0,o.createElement)(s.CardDivider,null),(0,o.createElement)(p,{label:(0,n.__)("Answer color","wp-custom-blocks"),color:c,disabled:r,onChange:e=>t({answerColor:e})})))},b=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var f=r.t(b,2);const w=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var v=r.t(w,2);const g=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var y=r.t(g,2);const _={DEFAULT:"#121212",grizzly:"#4e4e53",opacity:"#000c"},h=(Array.from(v),Array.from(y),Array.from(f),{index:{type:"number",default:0},question:{type:"string"},answer:{type:"string"},isParentStyles:{type:"boolean",default:!0},questionColor:{type:"string",default:_.DEFAULT},answerColor:{type:"string",default:_.DEFAULT}}),{name:C,...E}=t;(0,e.registerBlockType)(C,{...E,icon:"plus",attributes:h,edit:({attributes:e,setAttributes:t})=>{const{index:r,question:s,answer:c,isParentStyles:i,questionColor:m,answerColor:u}=e,p=(0,l.useBlockProps)({style:{margin:0}});return(0,o.createElement)(a.Fragment,null,(0,o.createElement)(d,{attributes:e,setAttributes:t}),(0,o.createElement)("div",{...p},(0,o.createElement)("div",{className:"question group border px-6 py-4 rounded-lg duration-200 cursor-pointer","data-question":r},(0,o.createElement)("div",{className:"flex items-start justify-between"},(0,o.createElement)(l.RichText,{tagName:"p",className:"question-title font-notoSans text-base basis-5/6",value:s,onChange:e=>t({question:e}),placeholder:(0,n.__)("Question..","wp-custom-blocks"),style:{color:i?void 0:m}}),(0,o.createElement)("div",{className:"flex justify-end basis-1/6"},(0,o.createElement)("div",{className:"arrow-wrapper rotate-90 duration-200 lg:!rotate-0"},(0,o.createElement)("div",{className:"flex items-center cursor-pointer"},(0,o.createElement)("div",{className:"more-arrow w-6 h-6 rounded-full flex items-center justify-center"},(0,o.createElement)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{d:"M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z",fill:"currentColor"}))))))),(0,o.createElement)(l.RichText,{tagName:"p",className:"question-content font-notoSans text-base mt-4",value:c,onChange:e=>t({answer:e}),placeholder:(0,n.__)("Answer..","wp-custom-blocks"),style:{color:i?void 0:u}}))))},save:({attributes:e})=>{const{index:t,question:r,answer:a,isParentStyles:n,questionColor:s,answerColor:c}=e;return(0,o.createElement)("div",{...l.useBlockProps.save()},(0,o.createElement)("div",{className:"question group border px-6 py-4 rounded-lg duration-200 cursor-pointer","data-question":t},(0,o.createElement)("div",{className:"flex items-start justify-between"},(0,o.createElement)(l.RichText.Content,{tagName:"p",className:"question-title font-notoSans text-base basis-5/6",value:r,style:{color:n?void 0:s}}),(0,o.createElement)("div",{className:"flex justify-end basis-1/6"},(0,o.createElement)("div",{className:"arrow-wrapper rotate-90 duration-200 lg:!rotate-0"},(0,o.createElement)("div",{className:"flex items-center cursor-pointer"},(0,o.createElement)("div",{className:"more-arrow w-6 h-6 rounded-full flex items-center justify-center"},(0,o.createElement)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{d:"M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z",fill:"currentColor"}))))))),(0,o.createElement)("div",{className:"lg:hidden"},(0,o.createElement)(l.RichText.Content,{tagName:"p",className:"question-content font-notoSans text-base mt-4 hidden",value:a,style:{color:n?void 0:c}}))))}})})()})();