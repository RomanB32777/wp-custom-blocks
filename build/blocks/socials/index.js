(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=n(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=n(t,l));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return l[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var r=Object.create(null);a.r(r);var n={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&l;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>n[e]=()=>l[e]));return n.default=()=>l,a.d(r,n),r},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/socials","version":"0.1.0","title":"Socials block","category":"wp-custom-blocks","description":"Socials block","supports":{"html":false},"textdomain":"socials-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React,o=window.wp.blockEditor,r=window.wp.element,n=window.wp.components,s=window.wp.i18n,c=JSON.parse('{"xs":320,"sm":640,"md":768,"xl":1280}'),i=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var m=a.t(i,2);const u=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var p=a.t(u,2);const b=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var d=a.t(b,2);const f=c,w=(Array.from(p),Array.from(d),Array.from(m),()=>(0,l.createElement)("div",{style:{marginBottom:24}},(0,l.createElement)(n.Tip,null,(0,l.createElement)("p",null,"Mobile display: ",f.xs,"...",f.sm,"px"),(0,l.createElement)("p",null,"Tablet display: ",f.sm,"...",f.md,"px"),(0,l.createElement)("p",null,"Laptop display: ",f.md,"...",f.xl,"px"),(0,l.createElement)("p",null,"Desktop display: ",f.xl,"..."))));var k=a(967),g=a.n(k);const _=window.wp.compose,v=(e,t)=>e[t].default,y=[{name:(0,s.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,s.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,s.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,s.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,s.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,s.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,s.__)("Color","wp-custom-blocks"),color:"#d63031"}],E=({label:e,name:t,disabled:o,attributes:a,defaultAttributes:c,setAttributes:i})=>{const[m,u]=(0,r.useState)(!1),p=`color-control-${(0,_.useInstanceId)(E)}`,b=a[t],d=e=>i({[t]:e});return(0,l.createElement)(n.Flex,null,(0,l.createElement)(n.FlexBlock,null,(0,l.createElement)(n.BaseControl,{id:p,label:e,className:g()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(n.FlexItem,null,(0,l.createElement)(n.Button,{icon:"image-rotate",iconSize:14,label:(0,s.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>d(String(v(c,t))),className:g()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:b,disabled:!b})})),(0,l.createElement)(n.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:g()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>u(!0)},(0,l.createElement)(n.ColorIndicator,{colorValue:b})),m&&(0,l.createElement)(n.Popover,{position:"bottom right",onFocusOutside:()=>u(!1),offset:5},(0,l.createElement)(n.ColorPicker,{color:b,onChange:e=>d(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,s.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},y.map(((e,t)=>(0,l.createElement)(n.ColorIndicator,{className:g()({active:e.color===b}),title:e.name,key:t,colorValue:e.color,onClick:()=>d(e.color)}))))))))},x={uniqueId:{type:"string"},blockStyle:{type:"string"},itemsColor:{type:"string",default:"#fff"},itemsSize:{type:"number",default:32},itemsPadding:{type:"number",default:0},spaceBetween:{type:"number",default:24}},S=({attributes:e,setAttributes:t})=>{const{itemsSize:a,itemsPadding:r,spaceBetween:c}=e,i={attributes:e,defaultAttributes:x,setAttributes:t};return(0,l.createElement)(o.InspectorControls,null,(0,l.createElement)(w,null),(0,l.createElement)(n.PanelBody,{title:(0,s.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(E,{name:"itemsColor",label:(0,s.__)("Items background color","wp-custom-blocks"),...i}),(0,l.createElement)(n.CardDivider,null),(0,l.createElement)(n.RangeControl,{label:(0,s.__)("Items size","wp-custom-blocks"),value:a,onChange:e=>t({itemsSize:e}),step:2,min:4,max:128,allowReset:!0,resetFallbackValue:Number(v(x,"itemsSize"))}),(0,l.createElement)(n.CardDivider,null),(0,l.createElement)(n.RangeControl,{label:(0,s.__)("Items padding","wp-custom-blocks"),value:r,onChange:e=>t({itemsPadding:e}),step:1,min:0,max:64,allowReset:!0,resetFallbackValue:Number(v(x,"itemsPadding"))}),(0,l.createElement)(n.CardDivider,null),(0,l.createElement)(n.RangeControl,{label:(0,s.__)("Items Space Between","wp-custom-blocks"),value:c,onChange:e=>t({spaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:Number(v(x,"spaceBetween"))})))},h="wp-custom-blocks/social-network",{name:C,...B}=t;(0,e.registerBlockType)(C,{...B,icon:"share",attributes:x,edit:({attributes:e,clientId:t,setAttributes:a})=>{const{uniqueId:n,blockStyle:s,itemsColor:c,itemsSize:i,itemsPadding:m,spaceBetween:u}=e,p=(0,o.useBlockProps)({className:n});(0,r.useEffect)((()=>{n||a({uniqueId:"socials-"+t.slice(0,8)})}),[t,n,a]);const b=(0,o.useInnerBlocksProps)({className:"flex flex-wrap items-center",style:{gap:u}},{allowedBlocks:[h],template:[[h]],renderAppender:()=>(0,l.createElement)(o.InnerBlocks.ButtonBlockAppender,null)}),d=`\n\t\t.${n} .social-network {\n\t\t\tbackground-color: ${c};\n\t\t\tpadding: ${m}px;\n\t\t\twidth: ${i}px;\n\t\t\theight: ${i}px;\n\t\t}\n\t`;return(0,l.createElement)(r.Fragment,null,(0,l.createElement)("style",null,d),(0,l.createElement)(S,{attributes:e,setAttributes:e=>{const t=((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(d);s!==t&&(e.blockStyle=t),a(e)}}),(0,l.createElement)("div",{...p},(0,l.createElement)("div",{...b})))},save:({attributes:e})=>{const{uniqueId:t,spaceBetween:a}=e,r=o.useBlockProps.save({className:t});return(0,l.createElement)("div",{...r},(0,l.createElement)("div",{className:"flex flex-wrap items-center",style:{gap:a}},(0,l.createElement)(o.InnerBlocks.Content,null)))}})})()})();