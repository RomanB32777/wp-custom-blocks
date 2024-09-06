(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=n(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=n(t,l));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return l[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var r=Object.create(null);a.r(r);var n={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&l;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>n[e]=()=>l[e]));return n.default=()=>l,a.d(r,n),r},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/advantage","version":"0.1.0","title":"Advantage item","category":"wp-custom-blocks","description":"Advantage item block","parent":["wp-custom-blocks/template"],"supports":{"html":false},"textdomain":"advantage-item-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=a(967),r=a.n(o);const n=window.wp.blockEditor,c=window.wp.components,i=window.wp.element,s=window.wp.i18n,u="slider-template-card",m="template-rounded",d=window.wp.compose,b=(e,t)=>e[t].default,p=[{name:(0,s.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,s.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,s.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,s.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,s.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,s.__)("Blue","wp-custom-blocks"),color:"#1fb1c1"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#d63031"}],f=({label:e,name:t,disabled:o,attributes:a,defaultAttributes:n,setAttributes:u})=>{const[m,g]=(0,i.useState)(!1),v=`color-control-${(0,d.useInstanceId)(f)}`,w=a[t],_=e=>u({[t]:e});return(0,l.createElement)(c.Flex,null,(0,l.createElement)(c.FlexBlock,null,(0,l.createElement)(c.BaseControl,{id:v,label:e,className:r()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(c.FlexItem,null,(0,l.createElement)(c.Button,{icon:"image-rotate",iconSize:14,label:(0,s.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>_(String(b(n,t))),className:r()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:w,disabled:!w})})),(0,l.createElement)(c.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:r()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>g(!0)},(0,l.createElement)(c.ColorIndicator,{colorValue:w})),m&&(0,l.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>g(!1),offset:5},(0,l.createElement)(c.ColorPicker,{color:w,onChange:e=>_(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,s.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},p.map(((e,t)=>(0,l.createElement)(c.ColorIndicator,{className:r()({active:e.color===w}),title:e.name,key:t,colorValue:e.color,onClick:()=>_(e.color)}))))))))};let g=function(e){return e.Left="left",e.Center="center",e.Right="right",e}({});const v=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var w=a.t(v,2);const _=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var h=a.t(_,2);const k=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var y=a.t(k,2);const E={DEFAULT:"#1fb1c1",grizzly:"#a5d6c6",light:"#e6f4f1",brightest:"#f3eff9",dark:"#106c77",text:"#324b4f"},C={DEFAULT:"#121212",grizzly:"#4e4e53",opacity:"#000c"},x=(Array.from(h),Array.from(y),Array.from(w),Object.entries(g).map((([e,t])=>({value:t,label:e}))),{uniqueId:{type:"string"},blockStyle:{type:"object"},title:{type:"string"},titleColor:{type:"string",default:C.DEFAULT},backgroundColor:{type:"string",default:E.light},image:{type:"object",default:{}},horizontalPosition:{type:"number",default:0},verticalPosition:{type:"number",default:0}}),P=({attributes:e,setAttributes:t})=>{const{horizontalPosition:o,verticalPosition:a}=e,r={attributes:e,defaultAttributes:x,setAttributes:t};return(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(c.PanelBody,{title:(0,s.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(f,{name:"backgroundColor",label:(0,s.__)("Background Color","wp-custom-blocks"),...r}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(f,{name:"titleColor",label:(0,s.__)("Title color","wp-custom-blocks"),...r}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(c.RangeControl,{label:(0,s.__)("Horizontal position","wp-custom-blocks"),value:o,onChange:e=>t({horizontalPosition:e}),step:1,min:-200,max:200,allowReset:!0,resetFallbackValue:Number(b(x,"horizontalPosition"))}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(c.RangeControl,{label:(0,s.__)("Vertical position","wp-custom-blocks"),value:a,onChange:e=>t({verticalPosition:e}),step:1,min:-200,max:200,allowReset:!0,resetFallbackValue:Number(b(x,"verticalPosition"))})))},{name:N,...S}=t;(0,e.registerBlockType)(N,{...S,icon:"star-filled",attributes:x,edit:({attributes:e,setAttributes:t,clientId:o})=>{const{uniqueId:a,title:d,titleColor:b,backgroundColor:p,image:f,horizontalPosition:g,verticalPosition:v}=e,w=(0,n.useBlockProps)({className:r()(u,a,"w-full h-full"),style:{margin:0}});return(0,i.useEffect)((()=>{a||t({uniqueId:"advantage-"+o.slice(0,8)})}),[o,t,a]),(0,l.createElement)(i.Fragment,null,(0,l.createElement)(P,{attributes:e,setAttributes:t}),(0,l.createElement)(n.BlockControls,{controls:void 0},(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(n.MediaUploadCheck,null,(0,l.createElement)(n.MediaUpload,{onSelect:e=>t({image:e}),allowedTypes:["image"],value:f.id,render:({open:e})=>(0,l.createElement)(c.ToolbarButton,{label:(0,s.__)("Edit image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,s.__)("Edit image","wp-custom-blocks")})})))),(0,l.createElement)("div",{...w},(0,l.createElement)("div",{className:r()("relative w-full h-full overflow-hidden p-6",m),style:{backgroundColor:p}},f.url&&(0,l.createElement)("div",{className:"absolute overflow-hidden rounded-xl",style:{right:g,bottom:v}},(0,l.createElement)("img",{className:"!h-full !w-auto !max-w-fit",src:f.url,alt:f.alt,width:f.width,height:f.height})),(0,l.createElement)(n.RichText,{tagName:"p",className:"relative font-medium text-lg xl:!text-base",value:d,onChange:e=>t({title:e}),placeholder:(0,s.__)("Title..","wp-custom-blocks"),style:{color:b}}))))},save:({attributes:e})=>{const{uniqueId:t,title:o,titleColor:a,backgroundColor:c,image:i,horizontalPosition:s,verticalPosition:d}=e,b=n.useBlockProps.save({className:r()(u,t,"swiper-slide")});return(0,l.createElement)("div",{...b},(0,l.createElement)("div",{className:r()("relative w-full h-full overflow-hidden p-6",m),style:{backgroundColor:c}},i.url&&(0,l.createElement)("div",{className:"absolute overflow-hidden rounded-xl",style:{right:s,bottom:d}},(0,l.createElement)("img",{className:"h-full !max-w-fit",src:i.url,alt:i.alt})),(0,l.createElement)(n.RichText.Content,{tagName:"p",className:"elative font-medium text-lg xl:!text-base",value:o,style:{color:a}})))}})})()})();