(()=>{var e={967:(e,t)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=n(e,a(o)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)r.call(e,o)&&e[o]&&(t=n(t,o));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()}},t={};function o(r){var l=t[r];if(void 0!==l)return l.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/image","version":"0.1.0","title":"Image item block","category":"wp-custom-blocks","description":"Image item block","parent":["wp-custom-blocks/images"],"supports":{"html":false},"textdomain":"image-item-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),r=window.React;var l=o(967),a=o.n(l);const n=window.wp.blockEditor,i=window.wp.components,s=window.wp.element,c=window.wp.i18n,{name:m,...u}=t;(0,e.registerBlockType)(m,{...u,icon:"format-image",attributes:{uniqueId:{type:"string"},image:{type:"object",default:{}}},edit:({attributes:e,setAttributes:t,clientId:o})=>{const{uniqueId:l,image:m}=e,u=(0,n.useBlockProps)({className:a()(l,"image w-full relative"),style:{margin:0}});return(0,s.useEffect)((()=>{l||t({uniqueId:"image-"+o.slice(0,8)})}),[o,t,l]),(0,r.createElement)(s.Fragment,null,m.id&&(0,r.createElement)(n.BlockControls,{controls:void 0},(0,r.createElement)(i.ToolbarGroup,null,(0,r.createElement)(n.MediaUploadCheck,null,(0,r.createElement)(n.MediaUpload,{onSelect:e=>{t({image:e})},allowedTypes:["image"],value:m.id,render:({open:e})=>(0,r.createElement)(i.ToolbarButton,{label:(0,c.__)("Edit image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,c.__)("Edit image","wp-custom-blocks")})})))),(0,r.createElement)("div",{...u},m.url?(0,r.createElement)(s.Fragment,null,(0,r.createElement)("img",{className:"!h-full w-full object-cover rounded-lg",src:m.url,alt:m.alt,width:m.width,height:m.height}),(0,r.createElement)("div",{className:"absolute inset-x-0 bottom-0"},(0,r.createElement)("p",{className:"title font-notoSans m-0 px-3 pb-1 text-base font-semibold"},m.alt))):(0,r.createElement)(n.MediaPlaceholder,{onSelect:e=>t({image:e}),allowedTypes:["image"],multiple:!1,labels:{title:(0,c.__)("Image","wp-custom-blocks"),instructions:(0,c.__)("Upload image","wp-custom-blocks")},icon:"format-image",onHTMLDrop:void 0})))},save:({attributes:e})=>{const{uniqueId:t,image:o}=e,l=n.useBlockProps.save({className:a()(t,"image w-full relative")});return(0,r.createElement)("div",{...l},o.url&&(0,r.createElement)(s.Fragment,null,(0,r.createElement)("img",{className:"!h-full w-full object-cover rounded-lg",src:o.url,alt:o.alt,width:o.width,height:o.height}),(0,r.createElement)("div",{className:"absolute inset-x-0 bottom-0"},(0,r.createElement)("p",{className:"title font-notoSans m-0 px-3 pb-1 text-base font-semibold"},o.alt))))}})})()})();