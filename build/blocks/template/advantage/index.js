(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=c(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=c(t,l));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return l[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var r=Object.create(null);a.r(r);var c={};e=e||[null,t({}),t([]),t(t)];for(var n=2&o&&l;"object"==typeof n&&!~e.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((e=>c[e]=()=>l[e]));return c.default=()=>l,a.d(r,c),r},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/advantage","version":"0.1.0","title":"Advantage item","category":"wp-custom-blocks","description":"Advantage item block","parent":["wp-custom-blocks/template"],"supports":{"html":false},"textdomain":"advantage-item-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=a(967),r=a.n(o);const c=window.wp.blockEditor,n=window.wp.components,s=window.wp.element,i=window.wp.i18n,m=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var u=a.t(m,2);const d=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var p=a.t(d,2);const b=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var f=a.t(b,2);const g={DEFAULT:"#5db24e",grizzly:"#a689ff80",light:"#c1adff",brightest:"#a689ff00"},w={DEFAULT:"#000",grizzly:"#2a2a2a",opacity:"#000c"},_={DEFAULT:"#fff",light:"#f8f8f8",opacity:"#f2eff833"},v={DEFAULT:"#7e7e7e",light:"#f9fafb",dark:"#6b7280"},k=(Array.from(p),Array.from(f),Array.from(u),"slider-template-card"),h="template-rounded",y=(w.DEFAULT,w.DEFAULT,v.dark,v.dark,_.light,window.wp.compose),E=[{name:(0,i.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,i.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,i.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,i.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,i.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,i.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#d63031"}],C=({label:e,name:t,disabled:o,attributes:a,defaultAttributes:c,setAttributes:m})=>{const[u,d]=(0,s.useState)(!1),p=`color-control-${(0,y.useInstanceId)(C)}`,b=a[t],f=e=>m({[t]:e});return(0,l.createElement)(n.Flex,null,(0,l.createElement)(n.FlexBlock,null,(0,l.createElement)(n.BaseControl,{id:p,label:e,className:r()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(n.FlexItem,null,(0,l.createElement)(n.Button,{icon:"image-rotate",iconSize:14,label:(0,i.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>f(String(((e,t)=>e[t].default)(c,t))),className:r()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:b,disabled:!b})})),(0,l.createElement)(n.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:r()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>d(!0)},(0,l.createElement)(n.ColorIndicator,{colorValue:b})),u&&(0,l.createElement)(n.Popover,{position:"bottom right",onFocusOutside:()=>d(!1),offset:5},(0,l.createElement)(n.ColorPicker,{color:b,onChange:e=>f(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,i.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},E.map(((e,t)=>(0,l.createElement)(n.ColorIndicator,{className:r()({active:e.color===b}),title:e.name,key:t,colorValue:e.color,onClick:()=>f(e.color)}))))))))},x={uniqueId:{type:"string"},modificatorClass:{type:"string"},isSlideItem:{type:"boolean",default:!1},title:{type:"string"},titleColor:{type:"string",default:w.DEFAULT},backgroundColor:{type:"string",default:g.brightest},image:{type:"object",default:{}}},S=({attributes:e,setAttributes:t})=>{const o={attributes:e,defaultAttributes:x,setAttributes:t};return(0,l.createElement)(c.InspectorControls,null,(0,l.createElement)(n.PanelBody,{title:(0,i.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(C,{name:"backgroundColor",label:(0,i.__)("Background Color","wp-custom-blocks"),...o}),(0,l.createElement)(n.CardDivider,null),(0,l.createElement)(C,{name:"titleColor",label:(0,i.__)("Title color","wp-custom-blocks"),...o})))},{name:N,...A}=t;(0,e.registerBlockType)(N,{...A,icon:"star-filled",attributes:x,edit:({attributes:e,setAttributes:t,clientId:o})=>{const{uniqueId:a,modificatorClass:m,isSlideItem:u,title:d,titleColor:p,backgroundColor:b,image:f}=e,g=(0,c.useBlockProps)({className:r()(k,m,{"h-full":u,"w-full":!u,[a]:!u}),style:{margin:0}});return(0,s.useEffect)((()=>{a||t({uniqueId:"advantage-"+o.slice(0,8)})}),[o,t,a]),(0,l.createElement)(s.Fragment,null,(0,l.createElement)(S,{attributes:e,setAttributes:t}),f.id&&(0,l.createElement)(c.BlockControls,{controls:void 0},(0,l.createElement)(n.ToolbarGroup,null,(0,l.createElement)(c.MediaUploadCheck,null,(0,l.createElement)(c.MediaUpload,{onSelect:e=>t({image:e}),allowedTypes:["image"],value:f.id,render:({open:e})=>(0,l.createElement)(n.ToolbarButton,{label:(0,i.__)("Edit image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,i.__)("Edit image","wp-custom-blocks")})})))),(0,l.createElement)("div",{...g},(0,l.createElement)("div",{className:r()("w-full h-full overflow-hidden",h),style:{backgroundColor:b}},(0,l.createElement)("div",{className:"bg-white overflow-hidden rounded-full w-28 h-28 mx-auto mt-10 mb-6 flex items-center justify-center"},f.url?(0,l.createElement)("img",{className:"w-8",src:f.url,alt:f.alt,width:f.width,height:f.height}):(0,l.createElement)(c.MediaPlaceholder,{onSelect:e=>t({image:e}),allowedTypes:["image"],multiple:!1,labels:{title:(0,i.__)("Image","wp-custom-blocks"),instructions:(0,i.__)("Upload image","wp-custom-blocks")},icon:"format-image",onHTMLDrop:void 0})),(0,l.createElement)(c.RichText,{tagName:"p",className:"font-bold text-base text-center uppercase px-6",value:d,onChange:e=>t({title:e}),placeholder:(0,i.__)("Title..","wp-custom-blocks"),style:{color:p}}))))},save:({attributes:e})=>{const{uniqueId:t,isSlideItem:o,title:a,titleColor:n,backgroundColor:s,image:i}=e,m=c.useBlockProps.save({className:r()(k,{"swiper-slide":o,[t]:!o})});return(0,l.createElement)("div",{...m},(0,l.createElement)("div",{className:r()("w-full h-full overflow-hidden",h),style:{backgroundColor:s}},(0,l.createElement)("div",{className:"bg-white overflow-hidden rounded-full w-28 h-28 mx-auto mt-10 mb-6 flex items-center justify-center"},i.url&&(0,l.createElement)("img",{className:"w-8",src:i.url,alt:i.alt})),(0,l.createElement)(c.RichText.Content,{tagName:"p",className:"font-bold text-base text-center uppercase px-6",value:a,style:{color:n}})))}})})()})();