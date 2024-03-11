(()=>{var e,t,o={967:(e,t)=>{var o;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=r(e,n(o)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)l.call(e,o)&&e[o]&&(t=r(t,o));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()}},l={};function a(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(o,l){if(1&l&&(o=this(o)),8&l)return o;if("object"==typeof o&&o){if(4&l&&o.__esModule)return o;if(16&l&&"function"==typeof o.then)return o}var n=Object.create(null);a.r(n);var r={};e=e||[null,t({}),t([]),t(t)];for(var c=2&l&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>r[e]=()=>o[e]));return r.default=()=>o,a.d(n,r),n},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/button","version":"0.1.0","title":"Button block","category":"wp-custom-blocks","description":"Button block","supports":{"html":false},"textdomain":"button-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),o=window.React,l=window.wp.blockEditor,n=window.wp.components,r=window.wp.element,c=window.wp.i18n;var s=a(967),i=a.n(s);const u=window.wp.compose,m=[{name:(0,c.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,c.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,c.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,c.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,c.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,c.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,c.__)("Color","wp-custom-blocks"),color:"#d63031"}],b=(0,u.withInstanceId)((({label:e,color:t,onChange:l,disabled:a,instanceId:s})=>{const[u,b]=(0,r.useState)(!1),p=`color-control-${s}`;return(0,o.createElement)(n.Flex,null,(0,o.createElement)(n.FlexBlock,null,(0,o.createElement)(n.BaseControl,{id:p,label:e,className:i()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,o.createElement)(n.FlexItem,null,(0,o.createElement)(n.Button,{icon:"image-rotate",iconSize:14,label:(0,c.__)("Reset","wp-custom-blocks"),disabled:a,size:"small",onClick:()=>l(""),className:i()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:t,disabled:!t})})),(0,o.createElement)(n.FlexItem,null,(0,o.createElement)("button",{disabled:a,className:i()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>b(!0)},(0,o.createElement)(n.ColorIndicator,{colorValue:t})),u&&(0,o.createElement)(n.Popover,{position:"bottom right",onFocusOutside:()=>b(!1),offset:5},(0,o.createElement)(n.ColorPicker,{color:t,onChange:e=>l(e),enableAlpha:!0}),(0,o.createElement)("div",{className:"px-3 pb-3"},(0,o.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,c.__)("Colors Palette","wp-custom-blocks")),(0,o.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},m?.map(((e,a)=>(0,o.createElement)(n.ColorIndicator,{className:i()({active:e.color===t}),title:e.name,key:a,colorValue:e.color,onClick:()=>l(e.color)}))))))))})),p=({label:e,link:t,linkName:l,setAttributes:a})=>(0,o.createElement)("div",{className:"w-72 p-2"},(0,o.createElement)(n.TextControl,{label:e,value:t.url,onChange:e=>{a({[l]:{...t,url:e}})}}),(0,o.createElement)(n.ToggleControl,{label:(0,c.__)("Open in new tab","wp-custom-blocks"),checked:t&&t.openInNewTab,onChange:()=>{a({[l]:{...t,openInNewTab:!t.openInNewTab}})}})),f=({attributes:e,setAttributes:t})=>{const{buttonTextColor:a,buttonColor:r}=e;return(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(n.PanelBody,{title:(0,c.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,o.createElement)(b,{label:(0,c.__)("Button color","wp-custom-blocks"),color:r,onChange:e=>t({buttonColor:e})}),(0,o.createElement)(n.CardDivider,null),(0,o.createElement)(b,{label:(0,c.__)("Button text color","wp-custom-blocks"),color:a,onChange:e=>t({buttonTextColor:e})})))},d=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var w=a.t(d,2);const k=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var _=a.t(k,2);const g=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var v=a.t(g,2);const y={DEFAULT:"#621fbe",grizzly:"#a5d6c6",light:"#e1d1f1",brightest:"#f3eff9"},x={DEFAULT:"#faf8fb",light:"#f0eff8",opacity:"#f2eff833",standard:"#fff"},h=(Array.from(_),Array.from(v),Array.from(w),{link:{type:"object",default:{url:"#",openInNewTab:!0}},buttonText:{type:"string"},buttonTextColor:{type:"string",default:x.DEFAULT},buttonColor:{type:"string",default:y.DEFAULT}}),{name:E,...C}=t;(0,e.registerBlockType)(E,{...C,icon:"button",attributes:h,edit:({attributes:e,setAttributes:t})=>{const{link:a,buttonText:s,buttonTextColor:i,buttonColor:u}=e,[m,b]=(0,r.useState)(!1),d=(0,l.useBlockProps)({className:"item-button"});return(0,o.createElement)(r.Fragment,null,(0,o.createElement)(f,{attributes:e,setAttributes:t}),(0,o.createElement)(l.BlockControls,{controls:void 0},(0,o.createElement)(r.Fragment,null,(0,o.createElement)(n.ToolbarGroup,null,(0,o.createElement)(n.ToolbarButton,{label:(0,c.__)("Add Link","wp-custom-blocks"),onClick:()=>b(!0),icon:"admin-links",placeholder:(0,c.__)("Add Link","wp-custom-blocks")})),m&&(0,o.createElement)(n.Popover,{position:"bottom right",onFocusOutside:()=>b(!1),offset:5},(0,o.createElement)(p,{link:a,linkName:"link",label:(0,c.__)("Link","wp-custom-blocks"),setAttributes:t})))),(0,o.createElement)("div",{...d},(0,o.createElement)("button",{className:"relative flex text-base italic font-black w-fit mx-auto",type:"button","aria-expanded":"false"},(0,o.createElement)("div",{className:"absolute w-full h-full rounded-lg transform -skew-x-12",style:{backgroundColor:u}}),(0,o.createElement)(l.RichText,{tagName:"span",className:"font-notoSans relative py-5 px-8 mx-auto",value:s,onChange:e=>t({buttonText:e}),placeholder:(0,c.__)("Button text..","wp-custom-blocks"),style:{color:i}}))))},save:({attributes:e})=>{const{link:t,buttonText:a,buttonTextColor:n,buttonColor:r}=e,c=l.useBlockProps.save({className:"item-button"});return(0,o.createElement)("div",{...c},(0,o.createElement)("a",{href:t.url,target:t.openInNewTab?"_blank":"_self",rel:t.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline"},(0,o.createElement)("button",{className:"relative flex text-base italic font-black w-fit mx-auto",type:"button","aria-expanded":"false"},(0,o.createElement)("div",{className:"absolute w-full h-full rounded-lg transform -skew-x-12",style:{backgroundColor:r}}),(0,o.createElement)(l.RichText.Content,{tagName:"span",className:"font-notoSans relative py-5 px-8 mx-auto",value:a,style:{color:n}}))))}})})()})();