(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=i(e,a(l)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=i(t,l));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return l[e](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&l;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>l[e]));return i.default=()=>l,r.d(a,i),a},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/template-image","version":"0.1.0","title":"Image item","category":"wp-custom-blocks","description":"Image item block","parent":["wp-custom-blocks/template"],"supports":{"html":false},"textdomain":"image-template-item-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=r(967),a=r.n(o);const i=window.wp.blockEditor,s=window.wp.components,n=window.wp.element,c=window.wp.i18n,u="slider-template-card",p=({attributes:e,setAttributes:t})=>{const{isEnableOpenInModal:o}=e;return(0,l.createElement)(i.InspectorControls,null,(0,l.createElement)(s.PanelBody,{title:(0,c.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(s.ToggleControl,{label:(0,c.__)("Enable opening in modal mode","wp-custom-blocks"),checked:o,onChange:()=>t({isEnableOpenInModal:!o})})))},m=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var d=r.t(m,2);const b=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var f=r.t(b,2);const g=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var w=r.t(g,2);const _={DEFAULT:"#121212",grizzly:"#4e4e53",opacity:"#000c"},k={DEFAULT:"#faf8fb",light:"#f0eff8",opacity:"#f2eff833",standard:"#fff"},v={DEFAULT:"#acacb5",light:"#7f8c8d",dark:"#9797b2"},y=(Array.from(f),Array.from(w),Array.from(d),_.DEFAULT,_.DEFAULT,v.dark,v.dark,k.light,window.wp.compose,(0,c.__)("Black","wp-custom-blocks"),(0,c.__)("White","wp-custom-blocks"),(0,c.__)("Green","wp-custom-blocks"),(0,c.__)("Purple","wp-custom-blocks"),(0,c.__)("Purple black","wp-custom-blocks"),(0,c.__)("Blue","wp-custom-blocks"),(0,c.__)("Color","wp-custom-blocks"),(0,c.__)("Color","wp-custom-blocks"),(0,c.__)("Color","wp-custom-blocks"),(0,c.__)("Color","wp-custom-blocks"),(0,c.__)("Color","wp-custom-blocks"),(0,c.__)("Color","wp-custom-blocks"),(0,c.__)("Color","wp-custom-blocks"),(0,c.__)("Color","wp-custom-blocks"),(0,c.__)("Color","wp-custom-blocks"),(0,c.__)("Color","wp-custom-blocks"),{uniqueId:{type:"string"},modificatorClass:{type:"string"},isSlideItem:{type:"boolean",default:!1},image:{type:"object",default:{}},isEnableOpenInModal:{type:"boolean",default:!0}}),{name:h,...E}=t;(0,e.registerBlockType)(h,{...E,icon:"format-image",attributes:y,edit:({attributes:e,setAttributes:t,clientId:o})=>{const{image:r,uniqueId:m,isSlideItem:d,modificatorClass:b}=e,f=(0,i.useBlockProps)({className:a()(u,b,{"h-full":d,"w-full":!d,[m]:!d}),style:{margin:0}});return(0,n.useEffect)((()=>{m||t({uniqueId:"image-"+o.slice(0,8)})}),[o,t,m]),(0,l.createElement)(n.Fragment,null,(0,l.createElement)(p,{attributes:e,setAttributes:t}),r.id&&(0,l.createElement)(i.BlockControls,{controls:void 0},(0,l.createElement)(s.ToolbarGroup,null,(0,l.createElement)(i.MediaUploadCheck,null,(0,l.createElement)(i.MediaUpload,{onSelect:e=>{t({image:e})},allowedTypes:["image"],value:r.id,render:({open:e})=>(0,l.createElement)(s.ToolbarButton,{label:(0,c.__)("Edit image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,c.__)("Edit image","wp-custom-blocks")})})))),(0,l.createElement)("div",{...f},r.url?(0,l.createElement)("img",{className:"!h-full w-full object-cover rounded-lg",src:r.url,alt:r.alt,width:r.width,height:r.height}):(0,l.createElement)(i.MediaPlaceholder,{onSelect:e=>t({image:e}),allowedTypes:["image"],multiple:!1,labels:{title:(0,c.__)("Image","wp-custom-blocks"),instructions:(0,c.__)("Upload image","wp-custom-blocks")},icon:"format-image",onHTMLDrop:void 0})))},save:({attributes:e})=>{const{uniqueId:t,image:o,isEnableOpenInModal:r,isSlideItem:s}=e,n=i.useBlockProps.save({className:a()(u,{"swiper-slide":s,[t]:!s})});return(0,l.createElement)("div",{...n},o.url&&(0,l.createElement)("img",{className:a()("slide-image h-full w-full object-cover rounded-lg",{"light-modal-image":r}),src:o.url,alt:o.alt,width:o.width,height:o.height}))}})})()})();