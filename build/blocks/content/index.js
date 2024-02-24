(()=>{var e={967:(e,t)=>{var r;!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,n(r)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)l.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},t={};function r(l){var o=t[l];if(void 0!==o)return o.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/content","version":"0.1.0","title":"Content block","category":"wp-custom-blocks","description":"Content block","supports":{"html":false},"textdomain":"content-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=r(967),n=r.n(o);const s=window.wp.blockEditor,a=window.wp.components,c=window.wp.element,i=window.wp.i18n,m=({attributes:e,setAttributes:t})=>{const{isReverse:r}=e;return(0,l.createElement)(s.InspectorControls,null,(0,l.createElement)(a.PanelBody,{title:(0,i.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(a.ToggleControl,{label:(0,i.__)("Reverse blocks","wp-custom-blocks"),checked:r,onChange:()=>t({isReverse:!r})})))},{name:u,...d}=t;(0,e.registerBlockType)(u,{...d,icon:"align-left",attributes:{isReverse:{type:"boolean"},image:{type:"object",default:{}}},edit:({attributes:e,setAttributes:t})=>{const{isReverse:r,image:o}=e,u=(0,s.useBlockProps)({className:n()("flex flex-col items-center gap-6 md:!flex-row",{"flex-col-reverse":r,"md:!flex-row-reverse":r})});return(0,l.createElement)(c.Fragment,null,(0,l.createElement)(m,{attributes:e,setAttributes:t}),o.id&&(0,l.createElement)(s.BlockControls,{controls:[]},(0,l.createElement)(a.ToolbarGroup,null,(0,l.createElement)(s.MediaUploadCheck,null,(0,l.createElement)(s.MediaUpload,{onSelect:e=>t({image:e}),allowedTypes:["image"],value:o.id,render:({open:e})=>(0,l.createElement)(a.ToolbarButton,{label:(0,i.__)("Edit image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,i.__)("Edit image","wp-custom-blocks")})})))),(0,l.createElement)("div",{...u},(0,l.createElement)("div",{className:"overflow-hidden basis-full w-full md:!basis-1/2 md:!w-auto"},o.url?(0,l.createElement)("img",{className:"w-full object-cover object-center",src:o.url,alt:o.alt}):(0,l.createElement)(s.MediaPlaceholder,{onSelect:e=>t({image:e}),allowedTypes:["image"],multiple:!1,labels:{title:(0,i.__)("Image","wp-custom-blocks"),instructions:(0,i.__)("Upload image","wp-custom-blocks")},icon:"format-image",onHTMLDrop:void 0})),(0,l.createElement)("div",{className:"basis-full w-full md:!basis-1/2 md:!w-auto"},(0,l.createElement)(s.InnerBlocks,{renderAppender:()=>(0,l.createElement)(s.InnerBlocks.ButtonBlockAppender,null)}))))},save:({attributes:e})=>{const{image:t,isReverse:r}=e,o=s.useBlockProps.save({className:n()("flex flex-col items-center gap-6 md:!flex-row",{"flex-col-reverse":r,"md:!flex-row-reverse":r})});return(0,l.createElement)("div",{...o},(0,l.createElement)("div",{className:"overflow-hidden basis-full w-full md:!basis-1/2 md:!w-auto"},t.url&&(0,l.createElement)("img",{className:"w-full object-cover object-center",src:t.url,alt:t.alt})),(0,l.createElement)("div",{className:"basis-full w-full md:!basis-1/2 md:!w-auto [&>*]:my-7"},(0,l.createElement)(s.InnerBlocks.Content,null)))}})})()})();