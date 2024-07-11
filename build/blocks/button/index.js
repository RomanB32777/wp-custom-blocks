(()=>{var e,t,o={967:(e,t)=>{var o;!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=a(e,n(o)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)l.call(e,o)&&e[o]&&(t=a(t,o));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},l={};function r(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return o[e](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,l){if(1&l&&(o=this(o)),8&l)return o;if("object"==typeof o&&o){if(4&l&&o.__esModule)return o;if(16&l&&"function"==typeof o.then)return o}var n=Object.create(null);r.r(n);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&l&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,r.d(n,a),n},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/button","version":"0.1.0","title":"Button","category":"wp-custom-blocks","description":"Button block","supports":{"html":false},"textdomain":"button-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),o=window.React,l=window.wp.blockEditor,n=window.wp.components,a=window.wp.element,c=window.wp.i18n;var s=r(967),u=r.n(s);const i=window.wp.compose,m=[{name:(0,c.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,c.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,c.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,c.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,c.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,c.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#d63031"}],b=({label:e,name:t,disabled:l,attributes:r,defaultAttributes:s,setAttributes:p})=>{const[d,f]=(0,a.useState)(!1),w=`color-control-${(0,i.useInstanceId)(b)}`,_=r[t],k=e=>p({[t]:e});return(0,o.createElement)(n.Flex,null,(0,o.createElement)(n.FlexBlock,null,(0,o.createElement)(n.BaseControl,{id:w,label:e,className:u()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,o.createElement)(n.FlexItem,null,(0,o.createElement)(n.Button,{icon:"image-rotate",iconSize:14,label:(0,c.__)("Reset","wp-custom-blocks"),disabled:l,size:"small",onClick:()=>k(String(((e,t)=>e[t].default)(s,t))),className:u()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:_,disabled:!_})})),(0,o.createElement)(n.FlexItem,null,(0,o.createElement)("button",{disabled:l,className:u()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>f(!0)},(0,o.createElement)(n.ColorIndicator,{colorValue:_})),d&&(0,o.createElement)(n.Popover,{position:"bottom right",onFocusOutside:()=>f(!1),offset:5},(0,o.createElement)(n.ColorPicker,{color:_,onChange:e=>k(e),enableAlpha:!0}),(0,o.createElement)("div",{className:"px-3 pb-3"},(0,o.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,c.__)("Colors Palette","wp-custom-blocks")),(0,o.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},m.map(((e,t)=>(0,o.createElement)(n.ColorIndicator,{className:u()({active:e.color===_}),title:e.name,key:t,colorValue:e.color,onClick:()=>k(e.color)}))))))))},p=({label:e,link:t,linkName:l,setAttributes:r})=>(0,o.createElement)("div",{className:"w-72 p-2"},(0,o.createElement)(n.TextControl,{label:e,value:t.url,onChange:e=>{r({[l]:{...t,url:e}})}}),(0,o.createElement)(n.ToggleControl,{label:(0,c.__)("Open in new tab","wp-custom-blocks"),checked:t&&t.openInNewTab,onChange:()=>{r({[l]:{...t,openInNewTab:!t.openInNewTab}})}})),d=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var f=r.t(d,2);const w=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var _=r.t(w,2);const k=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var v=r.t(k,2);const g={DEFAULT:"#39c7f3",light:"#e3ae6f"},y={DEFAULT:"#fff",light:"#b2bec3",opacity:"#f2eff833"},x=(Array.from(_),Array.from(v),Array.from(f),{link:{type:"object",default:{url:"#",openInNewTab:!0}},buttonText:{type:"string"},buttonTextColor:{type:"string",default:y.DEFAULT},buttonColor:{type:"string",default:g.DEFAULT}}),E=({attributes:e,setAttributes:t})=>{const r={attributes:e,defaultAttributes:x,setAttributes:t};return(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(n.PanelBody,{title:(0,c.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,o.createElement)(b,{name:"buttonColor",label:(0,c.__)("Button color","wp-custom-blocks"),...r}),(0,o.createElement)(n.CardDivider,null),(0,o.createElement)(b,{name:"buttonTextColor",label:(0,c.__)("Button text color","wp-custom-blocks"),...r})))},{name:C,...h}=t;(0,e.registerBlockType)(C,{...h,icon:"button",attributes:x,edit:({attributes:e,setAttributes:t})=>{const{link:r,buttonText:s,buttonTextColor:u,buttonColor:i}=e,[m,b]=(0,a.useState)(!1),d=(0,l.useBlockProps)({className:"item-button font-inter w-full text-center"});return(0,o.createElement)(a.Fragment,null,(0,o.createElement)(E,{attributes:e,setAttributes:t}),(0,o.createElement)(l.BlockControls,{controls:void 0},(0,o.createElement)(a.Fragment,null,(0,o.createElement)(n.ToolbarGroup,null,(0,o.createElement)(n.ToolbarButton,{label:(0,c.__)("Add Link","wp-custom-blocks"),onClick:()=>b(!0),icon:"admin-links",placeholder:(0,c.__)("Add Link","wp-custom-blocks")})),m&&(0,o.createElement)(n.Popover,{position:"bottom right",onFocusOutside:()=>b(!1),offset:5},(0,o.createElement)(p,{link:r,linkName:"link",label:(0,c.__)("Link","wp-custom-blocks"),setAttributes:t})))),(0,o.createElement)("div",{...d},(0,o.createElement)("button",{className:"relative rounded-xl py-4 px-7",type:"button","aria-expanded":"false",style:{backgroundColor:i}},(0,o.createElement)(l.RichText,{tagName:"span",className:"text-base font-medium mx-auto",value:s,onChange:e=>t({buttonText:e}),placeholder:(0,c.__)("Button text..","wp-custom-blocks"),style:{color:u}}))))},save:({attributes:e})=>{const{link:t,buttonText:r,buttonTextColor:n,buttonColor:a}=e,c=l.useBlockProps.save({className:"item-button w-full text-center"});return(0,o.createElement)("div",{...c},(0,o.createElement)("a",{href:t.url,target:t.openInNewTab?"_blank":"_self",rel:t.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline"},(0,o.createElement)("button",{className:"relative rounded-xl py-4 px-7",type:"button","aria-expanded":"false",style:{backgroundColor:a}},(0,o.createElement)(l.RichText.Content,{tagName:"span",className:"text-base font-medium mx-auto",value:r,style:{color:n}}))))}})})()})();