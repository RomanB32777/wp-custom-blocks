(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=n(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=n(t,l));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return l[e](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(l,a){if(1&a&&(l=this(l)),8&a)return l;if("object"==typeof l&&l){if(4&a&&l.__esModule)return l;if(16&a&&"function"==typeof l.then)return l}var r=Object.create(null);o.r(r);var n={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&l;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>n[e]=()=>l[e]));return n.default=()=>l,o.d(r,n),r},o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/icon-links","version":"0.1.0","title":"Icon links","category":"wp-custom-blocks","description":"Icon links block","supports":{"html":false},"textdomain":"icon-links-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var a=o(967),r=o.n(a);const n=window.wp.blockEditor,s=window.wp.element,i=JSON.parse('{"xs":320,"sm":640,"md":768,"lg":1024,"xl":1280}'),c=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var m=o.t(c,2);const d=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var u=o.t(d,2);const b=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var p=o.t(b,2);const g={DEFAULT:"#121212",grizzly:"#4e4e53",opacity:"#000c"},f={DEFAULT:"#faf8fb",light:"#f0eff8",opacity:"#f2eff833",standard:"#fff"},k={DEFAULT:"#acacb5",light:"#7f8c8d",dark:"#9797b2"},w=i,_=(Array.from(u),Array.from(p),Array.from(m),window.wp.components),C=window.wp.i18n,E=(g.DEFAULT,g.DEFAULT,k.dark,k.dark,f.light,window.wp.compose),h=(e,t)=>e[t].default,v=[{name:(0,C.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,C.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,C.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,C.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,C.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,C.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,C.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,C.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,C.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,C.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,C.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,C.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,C.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,C.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,C.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,C.__)("Color","wp-custom-blocks"),color:"#d63031"}],y=({label:e,name:t,disabled:a,attributes:o,defaultAttributes:n,setAttributes:i})=>{const[c,m]=(0,s.useState)(!1),d=`color-control-${(0,E.useInstanceId)(y)}`,u=o[t],b=e=>i({[t]:e});return(0,l.createElement)(_.Flex,null,(0,l.createElement)(_.FlexBlock,null,(0,l.createElement)(_.BaseControl,{id:d,label:e,className:r()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(_.FlexItem,null,(0,l.createElement)(_.Button,{icon:"image-rotate",iconSize:14,label:(0,C.__)("Reset","wp-custom-blocks"),disabled:a,size:"small",onClick:()=>b(String(h(n,t))),className:r()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:u,disabled:!u})})),(0,l.createElement)(_.FlexItem,null,(0,l.createElement)("button",{disabled:a,className:r()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>m(!0)},(0,l.createElement)(_.ColorIndicator,{colorValue:u})),c&&(0,l.createElement)(_.Popover,{position:"bottom right",onFocusOutside:()=>m(!1),offset:5},(0,l.createElement)(_.ColorPicker,{color:u,onChange:e=>b(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,C.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},v.map(((e,t)=>(0,l.createElement)(_.ColorIndicator,{className:r()({active:e.color===u}),title:e.name,key:t,colorValue:e.color,onClick:()=>b(e.color)}))))))))},x=()=>(0,l.createElement)("div",{style:{marginBottom:24}},(0,l.createElement)(_.Tip,null,(0,l.createElement)("p",null,"Mobile display: ",w.xs,"...",w.sm,"px"),(0,l.createElement)("p",null,"Tablet display: ",w.sm,"...",w.md,"px"),(0,l.createElement)("p",null,"Laptop display: ",w.md,"...",w.xl,"px"),(0,l.createElement)("p",null,"Desktop display: ",w.xl,"..."))),B={uniqueId:{type:"string"},blockStyle:{type:"object"},backgroundColor:{type:"string",default:f.DEFAULT},paddingX:{type:"number",default:0},paddingY:{type:"number",default:0},mobilePaddingX:{type:"number",default:0},mobilePaddingY:{type:"number",default:0},borderRadius:{type:"number",default:0},itemsColor:{type:"string",default:f.DEFAULT},itemsTitleColor:{type:"string",default:g.DEFAULT},itemsWidth:{type:"number",default:32},itemsHeight:{type:"number",default:32},itemsPaddingX:{type:"number",default:0},itemsPaddingY:{type:"number",default:0},itemsBorderWidth:{type:"number",default:0},itemsBorderRadius:{type:"number",default:100},itemsBorderColor:{type:"string",default:f.DEFAULT},spaceBetween:{type:"number",default:24},isFillItemsWidth:{type:"boolean",default:!1}},P=({attributes:e,setAttributes:t})=>{const{paddingX:a,paddingY:o,mobilePaddingX:r,mobilePaddingY:s,borderRadius:i,itemsWidth:c,itemsHeight:m,itemsPaddingX:d,itemsPaddingY:u,itemsBorderRadius:b,itemsBorderWidth:p,spaceBetween:g,isFillItemsWidth:f}=e,k={attributes:e,defaultAttributes:B,setAttributes:t};return(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(x,null),(0,l.createElement)(_.PanelBody,{title:(0,C.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(y,{name:"backgroundColor",label:(0,C.__)("Block background color","wp-custom-blocks"),...k}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Block padding x","wp-custom-blocks"),value:a,onChange:e=>t({paddingX:e}),step:1,min:0,max:128,allowReset:!0,resetFallbackValue:Number(h(B,"paddingX"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Block padding y","wp-custom-blocks"),value:o,onChange:e=>t({paddingY:e}),step:1,min:0,max:128,allowReset:!0,resetFallbackValue:Number(h(B,"paddingY"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Block mobile padding x","wp-custom-blocks"),value:r,onChange:e=>t({mobilePaddingX:e}),step:1,min:0,max:128,allowReset:!0,resetFallbackValue:Number(h(B,"mobilePaddingX"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Block mobile padding y","wp-custom-blocks"),value:s,onChange:e=>t({mobilePaddingY:e}),step:1,min:0,max:128,allowReset:!0,resetFallbackValue:Number(h(B,"mobilePaddingY"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Block border radius","wp-custom-blocks"),value:i,onChange:e=>t({borderRadius:e}),step:1,min:0,max:100,allowReset:!0,resetFallbackValue:Number(h(B,"borderRadius"))})),(0,l.createElement)(_.PanelBody,{title:(0,C.__)("Items settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(y,{name:"itemsColor",label:(0,C.__)("Items background color","wp-custom-blocks"),...k}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(y,{name:"itemsTitleColor",label:(0,C.__)("Items title color","wp-custom-blocks"),...k}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Items width","wp-custom-blocks"),value:c,onChange:e=>t({itemsWidth:e}),step:2,min:4,max:200,allowReset:!0,resetFallbackValue:Number(h(B,"itemsWidth"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Items height","wp-custom-blocks"),value:m,onChange:e=>t({itemsHeight:e}),step:2,min:4,max:200,allowReset:!0,resetFallbackValue:Number(h(B,"itemsHeight"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Items padding x","wp-custom-blocks"),value:d,onChange:e=>t({itemsPaddingX:e}),step:1,min:0,max:64,allowReset:!0,resetFallbackValue:Number(h(B,"itemsPaddingX"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Items padding y","wp-custom-blocks"),value:u,onChange:e=>t({itemsPaddingY:e}),step:1,min:0,max:64,allowReset:!0,resetFallbackValue:Number(h(B,"itemsPaddingY"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Items border width","wp-custom-blocks"),value:p,onChange:e=>t({itemsBorderWidth:e}),step:1,min:0,max:100,allowReset:!0,resetFallbackValue:Number(h(B,"itemsBorderWidth"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Items border radius","wp-custom-blocks"),value:b,onChange:e=>t({itemsBorderRadius:e}),step:1,min:0,max:100,allowReset:!0,resetFallbackValue:Number(h(B,"itemsBorderRadius"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(y,{name:"itemsBorderColor",label:(0,C.__)("Items border color","wp-custom-blocks"),...k}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.RangeControl,{label:(0,C.__)("Items Space Between","wp-custom-blocks"),value:g,onChange:e=>t({spaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:Number(h(B,"spaceBetween"))}),(0,l.createElement)(_.CardDivider,null),(0,l.createElement)(_.ToggleControl,{label:(0,C.__)("Fill items width","wp-custom-blocks"),checked:f,onChange:()=>t({isFillItemsWidth:!f})})))},R="wp-custom-blocks/icon-link",{name:F,...N}=t;(0,e.registerBlockType)(F,{...N,icon:"share",attributes:B,edit:({attributes:e,clientId:t,setAttributes:a})=>{const{uniqueId:o,blockStyle:i,backgroundColor:c,paddingX:m,paddingY:d,mobilePaddingX:u,mobilePaddingY:b,borderRadius:p,itemsColor:g,itemsTitleColor:f,itemsWidth:k,itemsHeight:_,itemsPaddingX:C,itemsPaddingY:E,itemsBorderWidth:h,itemsBorderRadius:v,itemsBorderColor:y,spaceBetween:x,isFillItemsWidth:B}=e,F=(0,n.useBlockProps)({className:r()(o,"font-notoSans"),style:{borderRadius:p,backgroundColor:c}});(0,s.useEffect)((()=>{o||a({uniqueId:"icon-links-"+t.slice(0,8)})}),[t,o,a]);const N=(0,n.useInnerBlocksProps)({className:"flex flex-wrap items-stretch",style:{gap:x}},{allowedBlocks:[R],template:[[R]]}),S=`\n\t\t.${o} {\n\t\t\tpadding: ${d}px ${m}px;\n\t\t}\n\t`,I=`\n\t\t\n\t\t.${o} {\n\t\t\tpadding: ${b}px ${u}px;\n\t\t}\n\n\t\t.${o} .icon-link {\n\t\t\tbackground-color: ${g};\n\t\t\tcolor: ${f} !important;\n\t\t\tpadding: ${E}px ${C}px;\n\t\t\tborder-width: ${h}px;\n\t\t\tborder-radius: ${v}px;\n\t\t\tborder-color: ${y};\n\t\t\tflex: ${B?"1 1 0%":"none"};\n\t\t}\n\n\t\t.${o} .icon-link .icon-image {\n\t\t\twidth: ${k}px;\n\t\t\theight: ${_}px;\n\t\t}\n\t\n\n\t\t@media (min-width: ${w.sm}px) {\n\t\t\t${S}\n\t\t}\n\t`;return(0,s.useEffect)((()=>{JSON.stringify(i)!==JSON.stringify(I)&&a({blockStyle:I})}),[i,I,a]),(0,l.createElement)(s.Fragment,null,(0,l.createElement)("style",null,`${((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(I)}`),(0,l.createElement)(P,{attributes:e,setAttributes:a}),(0,l.createElement)("div",{...F},(0,l.createElement)("div",{...N})))},save:({attributes:e})=>{const{uniqueId:t,backgroundColor:a,borderRadius:o,spaceBetween:s}=e,i=n.useBlockProps.save({className:r()(t,"font-notoSans"),style:{borderRadius:o,backgroundColor:a}});return(0,l.createElement)("div",{...i},(0,l.createElement)("div",{className:"flex flex-wrap items-stretch",style:{gap:s}},(0,l.createElement)(n.InnerBlocks.Content,null)))}})})()})();