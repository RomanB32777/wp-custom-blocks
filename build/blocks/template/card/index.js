(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=n(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=n(t,l));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return l[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var r=Object.create(null);a.r(r);var n={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&l;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>n[e]=()=>l[e]));return n.default=()=>l,a.d(r,n),r},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var l=t.getElementsByTagName("script");if(l.length)for(var o=l.length-1;o>-1&&!e;)e=l[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../../"})(),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/card","version":"0.1.0","title":"Card item block","category":"wp-custom-blocks","description":"Card item block","parent":["wp-custom-blocks/template"],"supports":{"html":false},"textdomain":"card-item-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=a(967),r=a.n(o);const n=window.wp.blockEditor,c=window.wp.components,s=window.wp.element,i=window.wp.i18n,m=window.wp.compose,u=[{name:(0,i.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,i.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,i.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,i.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,i.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,i.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#d63031"}],p=({label:e,name:t,disabled:o,attributes:a,defaultAttributes:n,setAttributes:d})=>{const[b,f]=(0,s.useState)(!1),g=`color-control-${(0,m.useInstanceId)(p)}`,w=a[t],E=e=>d({[t]:e});return(0,l.createElement)(c.Flex,null,(0,l.createElement)(c.FlexBlock,null,(0,l.createElement)(c.BaseControl,{id:g,label:e,className:r()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(c.FlexItem,null,(0,l.createElement)(c.Button,{icon:"image-rotate",iconSize:14,label:(0,i.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>E(String(((e,t)=>e[t].default)(n,t))),className:r()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:w,disabled:!w})})),(0,l.createElement)(c.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:r()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>f(!0)},(0,l.createElement)(c.ColorIndicator,{colorValue:w})),b&&(0,l.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>f(!1),offset:5},(0,l.createElement)(c.ColorPicker,{color:w,onChange:e=>E(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,i.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},u.map(((e,t)=>(0,l.createElement)(c.ColorIndicator,{className:r()({active:e.color===w}),title:e.name,key:t,colorValue:e.color,onClick:()=>E(e.color)}))))))))},d=({label:e,link:t,linkName:o,setAttributes:a})=>(0,l.createElement)("div",{className:"w-72 p-2"},(0,l.createElement)(c.TextControl,{label:e,value:t.url,onChange:e=>{a({[o]:{...t,url:e}})}}),(0,l.createElement)(c.ToggleControl,{label:(0,i.__)("Open in new tab","wp-custom-blocks"),checked:t&&t.openInNewTab,onChange:()=>{a({[o]:{...t,openInNewTab:!t.openInNewTab}})}})),b="slider-template-card",f="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNy4wMzIgMTUuNUg0LjAzNmMtLjI3NSAwLS41LjI4MS0uNS42MjV2MS4yNWMwIC4zNDQuMjI1LjYyNS41LjYyNWgxMi45OTZjLjI3NSAwIC41LS4yODEuNS0uNjI1di0xLjI1YzAtLjM0NC0uMjI1LS42MjUtLjUtLjYyNVptMi0xMi41Yy0uODI4IDAtMS41Ljg0LTEuNSAxLjg3NSAwIC4yNzcuMDUuNTM1LjEzNy43NzNsLTIuMjYxIDEuNjk2Yy0uNDgyLjM2LTEuMTAzLjE1Ni0xLjM4MS0uNDUzTDExLjQ4IDEuMzJjLjMzNC0uMzQ0LjU1My0uODYuNTUzLTEuNDQ2IDAtMS4wMzUtLjY3Mi0xLjg3NS0xLjUtMS44NzVzLTEuNS44NC0xLjUgMS44NzVjMCAuNTg2LjIyIDEuMTAyLjU1MyAxLjQ0NUw3LjA0MSA2Ljg5Yy0uMjc4LjYxLS45MDIuODEzLTEuMzguNDU0TDMuNCA1LjY0OGMuMDg1LS4yMzQuMTM4LS40OTYuMTM4LS43NzNDMy41NCAzLjg0IDIuODY4IDMgMi4wNCAzIDEuMjEzIDMgLjUzOCAzLjg0LjUzOCA0Ljg3NWMwIDEuMDM1LjY3MiAxLjg3NSAxLjUgMS44NzUuMDggMCAuMTYyLS4wMTYuMjQtLjAzMWwyLjI1OSA3LjUzMWgxMS45OTZsMi4yNTktNy41MzFjLjA3OC4wMTUuMTYuMDMxLjI0LjAzMS44MjggMCAxLjUtLjg0IDEuNS0xLjg3NSAwLTEuMDM1LS42NzItMS44NzUtMS41LTEuODc1WiIgZmlsbD0iI0ZBRjhGQiIvPgo8L3N2Zz4K",g=a.p+"images/flag-primary.89be1440.png",w=a.p+"images/flag.2e6995dd.png",E=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var N=a.t(E,2);const h=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var y=a.t(h,2);const v=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var x=a.t(v,2);const k={DEFAULT:"#621fbe",grizzly:"#a5d6c6",light:"#e1d1f1",brightest:"#f3eff9"},j={DEFAULT:"#121212",grizzly:"#4e4e53",opacity:"#000c"},M={DEFAULT:"#faf8fb",light:"#f0eff8",opacity:"#f2eff833",standard:"#fff"},C={DEFAULT:"#acacb5",light:"#7f8c8d",dark:"#9797b2"},_={DEFAULT:"#f9b15c",light:"#e3ae6f"},L=(Array.from(y),Array.from(x),Array.from(N),j.DEFAULT,j.DEFAULT,C.dark,C.dark,M.light,{uniqueId:{type:"string"},modificatorClass:{type:"string"},isSlideItem:{type:"boolean",default:!1},index:{type:"number",default:0},isWithIndex:{type:"boolean",default:!1},link:{type:"object",default:{url:"#",openInNewTab:!0}},title:{type:"string"},titleColor:{type:"string",default:M.DEFAULT},category:{type:"string"},categoryColor:{type:"string",default:_.DEFAULT},buttonText:{type:"string",default:"Play now"},buttonTextColor:{type:"string",default:M.DEFAULT},buttonColor:{type:"string",default:k.DEFAULT},review:{type:"string",default:"Read Review"},reviewColor:{type:"string",default:C.DEFAULT},image:{type:"object",default:{}}}),T=({attributes:e,setAttributes:t})=>{const o={attributes:e,defaultAttributes:L,setAttributes:t};return(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(c.PanelBody,{title:(0,i.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(p,{name:"titleColor",label:(0,i.__)("Title color","wp-custom-blocks"),...o}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(p,{name:"categoryColor",label:(0,i.__)("Category color","wp-custom-blocks"),...o}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(p,{name:"buttonColor",label:(0,i.__)("Button color","wp-custom-blocks"),...o}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(p,{name:"buttonTextColor",label:(0,i.__)("Button text color","wp-custom-blocks"),...o}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(p,{name:"reviewColor",label:(0,i.__)("Review color","wp-custom-blocks"),...o})))},{name:S,...I}=t;(0,e.registerBlockType)(S,{...I,icon:"block-default",attributes:L,edit:({attributes:e,setAttributes:t,clientId:o})=>{const{uniqueId:a,modificatorClass:m,index:u,isWithIndex:p,isSlideItem:E,link:N,title:h,titleColor:y,category:v,categoryColor:x,buttonText:k,buttonTextColor:j,buttonColor:M,review:C,reviewColor:_,image:L}=e,[S,I]=(0,s.useState)(!1),A=(0,n.useBlockProps)({className:r()(b,m,{"h-96":E,"w-full":!E,[a]:!E}),style:{margin:0}});return(0,s.useEffect)((()=>{a||t({uniqueId:"card-"+o.slice(0,8)})}),[o,t,a]),(0,l.createElement)(s.Fragment,null,(0,l.createElement)(T,{attributes:e,setAttributes:t}),(0,l.createElement)(n.BlockControls,{controls:void 0},(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(n.MediaUploadCheck,null,(0,l.createElement)(n.MediaUpload,{onSelect:e=>t({image:e}),allowedTypes:["image"],value:L.id,render:({open:e})=>(0,l.createElement)(c.ToolbarButton,{label:(0,i.__)("Edit image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,i.__)("Edit image","wp-custom-blocks")})})))),(0,l.createElement)(n.BlockControls,{controls:void 0},(0,l.createElement)(s.Fragment,null,(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(c.ToolbarButton,{label:(0,i.__)("Add Link","wp-custom-blocks"),onClick:()=>I(!0),icon:"admin-links",placeholder:(0,i.__)("Add Link","wp-custom-blocks")})),S&&(0,l.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>I(!1),offset:5},(0,l.createElement)(d,{link:N,linkName:"link",label:(0,i.__)("Link","wp-custom-blocks"),setAttributes:t})))),(0,l.createElement)("div",{...A},(0,l.createElement)("div",{className:"group relative h-full"},(0,l.createElement)("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 h-full lg:aspect-none group-hover:opacity-75"},L.url&&(0,l.createElement)("img",{className:"!h-full w-full object-cover object-center",src:L.url,alt:L.alt,width:L.width,height:L.height})),p&&(0,l.createElement)("div",{className:"absolute -top-2 left-2.5"},0===u?(0,l.createElement)(s.Fragment,null,(0,l.createElement)("img",{src:g,alt:"flag alt",width:52,height:67}),(0,l.createElement)("div",{className:"absolute left-0 bottom-0 flex items-center justify-center right-1 -top-1"},(0,l.createElement)("img",{src:f,alt:"crown",width:21,height:18}))):(0,l.createElement)(s.Fragment,null,(0,l.createElement)("img",{src:w,alt:"flag alt",width:52,height:56}),(0,l.createElement)("div",{className:"absolute left-0 bottom-0 flex items-center justify-center -top-1.5 right-1.5"},(0,l.createElement)("p",{className:"font-notoSans font-black text-2xl text-white italic"},u+1)))),(0,l.createElement)("div",{className:"absolute inset-x-0 bottom-0"},(0,l.createElement)("div",{className:"mx-4"},(0,l.createElement)("div",{className:"mx-7"},(0,l.createElement)(n.RichText,{tagName:"p",className:"font-notoSans mb-2 text-xs font-semibold italic",value:v,onChange:e=>t({category:e}),placeholder:(0,i.__)("Category name..","wp-custom-blocks"),style:{color:x}}),(0,l.createElement)(n.RichText,{tagName:"p",className:"font-notoSans mb-6 text-base font-semibold italic",value:h,onChange:e=>t({title:e}),placeholder:(0,i.__)("Title name..","wp-custom-blocks"),style:{color:y}})),(0,l.createElement)("button",{className:"relative flex text-base italic font-black w-full",type:"button","aria-expanded":"false"},(0,l.createElement)("div",{className:"absolute w-full h-full rounded-lg transform -skew-x-12",style:{backgroundColor:M}}),(0,l.createElement)(n.RichText,{tagName:"span",className:"font-notoSans relative uppercase py-5 mx-auto",value:k,onChange:e=>t({buttonText:e}),placeholder:(0,i.__)("Button text..","wp-custom-blocks"),style:{color:j}})),(0,l.createElement)("div",{className:"text-center py-5"},(0,l.createElement)("div",{className:"text-sm font-medium no-underline"},(0,l.createElement)(n.RichText,{tagName:"span",className:"font-notoSans",value:C,onChange:e=>t({review:e}),placeholder:(0,i.__)("Review text..","wp-custom-blocks"),style:{color:_}}))))))))},save:({attributes:e})=>{const{uniqueId:t,index:o,isWithIndex:a,isSlideItem:c,link:s,title:i,titleColor:m,category:u,categoryColor:p,buttonText:d,buttonTextColor:E,buttonColor:N,review:h,reviewColor:y,image:v}=e,x=n.useBlockProps.save({className:r()(b,{"swiper-slide":c,[t]:!c})});return(0,l.createElement)("div",{...x},(0,l.createElement)("div",{className:"group relative h-full"},(0,l.createElement)("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 h-full lg:aspect-none group-hover:opacity-75"},v.url&&(0,l.createElement)("img",{className:"h-full w-full object-cover object-center",src:v.url,alt:v.alt,width:v.width,height:v.height})),a&&(0,l.createElement)("div",{className:"absolute -top-2 left-2.5"},0===o?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("img",{src:g,alt:"flag alt",width:52,height:67}),(0,l.createElement)("div",{className:"absolute left-0 bottom-0 flex items-center justify-center right-1 -top-1"},(0,l.createElement)("img",{src:f,alt:"crown",width:21,height:18}))):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("img",{src:w,alt:"flag alt",width:52,height:56}),(0,l.createElement)("div",{className:"absolute left-0 bottom-0 flex items-center justify-center -top-1.5 right-1.5"},(0,l.createElement)("p",{className:"font-notoSans font-black text-2xl text-white italic"},o+1)))),(0,l.createElement)("div",{className:"absolute inset-x-0 bottom-0"},(0,l.createElement)("div",{className:"mx-4"},(0,l.createElement)("div",{className:"mx-7"},(0,l.createElement)(n.RichText.Content,{tagName:"p",className:"font-notoSans mb-2 text-xs font-semibold italic",value:u,style:{color:p}}),(0,l.createElement)(n.RichText.Content,{tagName:"p",className:"font-notoSans mb-6 text-base font-semibold italic",value:i,style:{color:m}})),(0,l.createElement)("a",{href:s.url,target:s.openInNewTab?"_blank":"_self",rel:s.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline"},(0,l.createElement)("button",{className:"relative flex text-base italic font-black w-full",type:"button","aria-expanded":"false"},(0,l.createElement)("div",{className:"absolute w-full h-full rounded-lg transform -skew-x-12",style:{backgroundColor:N}}),(0,l.createElement)(n.RichText.Content,{tagName:"span",className:"font-notoSans relative uppercase py-5 mx-auto",value:d,style:{color:E}}))),(0,l.createElement)("div",{className:"text-center py-5"},(0,l.createElement)("a",{href:s.url,target:s.openInNewTab?"_blank":"_self",rel:s.openInNewTab?"noopener noreferrer":"noopener",className:"text-sm font-medium no-underline"},(0,l.createElement)(n.RichText.Content,{tagName:"span",className:"font-notoSans",value:h,style:{color:y}})))))))}})})()})();