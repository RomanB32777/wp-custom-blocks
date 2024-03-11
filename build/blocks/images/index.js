(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,n(l)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return l[e](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(l,a){if(1&a&&(l=this(l)),8&a)return l;if("object"==typeof l&&l){if(4&a&&l.__esModule)return l;if(16&a&&"function"==typeof l.then)return l}var n=Object.create(null);o.r(n);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&l;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>l[e]));return r.default=()=>l,o.d(n,r),n},o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/images","version":"0.1.0","title":"Images block","category":"wp-custom-blocks","description":"Images block","supports":{"html":false},"textdomain":"images-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React,a=window.wp.blockEditor,n=window.wp.element,r=JSON.parse('{"xs":320,"sm":640,"md":768,"lg":1024,"xl":1280}'),s=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var i=o.t(s,2);const c=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var m=o.t(c,2);const p=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var u=o.t(p,2);const b={DEFAULT:"#121212",grizzly:"#4e4e53",opacity:"#000c"},d={DEFAULT:"#faf8fb",light:"#f0eff8",opacity:"#f2eff833",standard:"#fff"},w={DEFAULT:"#acacb5",light:"#7f8c8d",dark:"#9797b2"},g=r,f=(Array.from(m),Array.from(u),Array.from(i),window.wp.components),k=window.wp.i18n;b.DEFAULT,b.DEFAULT,w.dark,w.dark,d.light;var _=o(967),h=o.n(_);const v=window.wp.compose,y=[{name:(0,k.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,k.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,k.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,k.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,k.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,k.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#d63031"}],E=(0,v.withInstanceId)((({label:e,color:t,onChange:a,disabled:o,instanceId:r})=>{const[s,i]=(0,n.useState)(!1),c=`color-control-${r}`;return(0,l.createElement)(f.Flex,null,(0,l.createElement)(f.FlexBlock,null,(0,l.createElement)(f.BaseControl,{id:c,label:e,className:h()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(f.FlexItem,null,(0,l.createElement)(f.Button,{icon:"image-rotate",iconSize:14,label:(0,k.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>a(""),className:h()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:t,disabled:!t})})),(0,l.createElement)(f.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:h()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>i(!0)},(0,l.createElement)(f.ColorIndicator,{colorValue:t})),s&&(0,l.createElement)(f.Popover,{position:"bottom right",onFocusOutside:()=>i(!1),offset:5},(0,l.createElement)(f.ColorPicker,{color:t,onChange:e=>a(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,k.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},y?.map(((e,o)=>(0,l.createElement)(f.ColorIndicator,{className:h()({active:e.color===t}),title:e.name,key:o,colorValue:e.color,onClick:()=>a(e.color)}))))))))})),C=()=>(0,l.createElement)("div",{style:{marginBottom:24}},(0,l.createElement)(f.Tip,null,(0,l.createElement)("p",null,"Mobile display: ",g.xs,"...",g.sm,"px"),(0,l.createElement)("p",null,"Tablet display: ",g.sm,"...",g.md,"px"),(0,l.createElement)("p",null,"Laptop display: ",g.md,"...",g.xl,"px"),(0,l.createElement)("p",null,"Desktop display: ",g.xl,"..."))),x=24,P=200,S={uniqueId:{type:"string"},blockStyle:{type:"object"},itemsTitleColor:{type:"string",default:d.DEFAULT},mobileItemsPerView:{type:"number",default:2},tabletItemsPerView:{type:"number",default:3},laptopItemsPerView:{type:"number",default:4},desktopItemsPerView:{type:"number",default:6},mobileSpaceBetween:{type:"number",default:x},tabletSpaceBetween:{type:"number",default:x},laptopSpaceBetween:{type:"number",default:x},desktopSpaceBetween:{type:"number",default:x},mobileHeight:{type:"number",default:P},tabletHeight:{type:"number",default:P},laptopHeight:{type:"number",default:P},desktopHeight:{type:"number",default:P}},I=({attributes:e,setAttributes:t})=>{const{itemsTitleColor:o,mobileItemsPerView:n,tabletItemsPerView:r,laptopItemsPerView:s,desktopItemsPerView:i,mobileSpaceBetween:c,tabletSpaceBetween:m,laptopSpaceBetween:p,desktopSpaceBetween:u,mobileHeight:b,tabletHeight:d,laptopHeight:w,desktopHeight:g}=e;return(0,l.createElement)(a.InspectorControls,null,(0,l.createElement)(C,null),(0,l.createElement)(f.PanelBody,{title:(0,k.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(E,{label:(0,k.__)("Items title color","wp-custom-blocks"),color:o,onChange:e=>t({itemsTitleColor:e})})),(0,l.createElement)(f.PanelBody,{title:(0,k.__)("Items per view settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Mobile items per view","wp-custom-blocks"),value:n,onChange:e=>t({mobileItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(S.mobileItemsPerView?.default)}),(0,l.createElement)(f.CardDivider,null),(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Tablet items per view","wp-custom-blocks"),value:r,onChange:e=>t({tabletItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(S.tabletItemsPerView?.default)}),(0,l.createElement)(f.CardDivider,null),(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Laptop items per view","wp-custom-blocks"),value:s,onChange:e=>t({laptopItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(S.laptopItemsPerView?.default)}),(0,l.createElement)(f.CardDivider,null),(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Desktop items per view","wp-custom-blocks"),value:i,onChange:e=>t({desktopItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(S.desktopItemsPerView?.default)})),(0,l.createElement)(f.PanelBody,{title:(0,k.__)("Items between settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Mobile space between items","wp-custom-blocks"),value:c,onChange:e=>t({mobileSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:x}),(0,l.createElement)(f.CardDivider,null),(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Tablet space between items","wp-custom-blocks"),value:m,onChange:e=>t({tabletSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:x}),(0,l.createElement)(f.CardDivider,null),(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Laptop space between items","wp-custom-blocks"),value:p,onChange:e=>t({laptopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:x}),(0,l.createElement)(f.CardDivider,null),(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Desktop space between items","wp-custom-blocks"),value:u,onChange:e=>t({desktopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:x})),(0,l.createElement)(f.PanelBody,{title:(0,k.__)("Height items settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Mobile items height","wp-custom-blocks"),value:b,onChange:e=>t({mobileHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:P}),(0,l.createElement)(f.CardDivider,null),(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Tablet items height","wp-custom-blocks"),value:d,onChange:e=>t({tabletHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:P}),(0,l.createElement)(f.CardDivider,null),(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Laptop items height","wp-custom-blocks"),value:w,onChange:e=>t({laptopHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:P}),(0,l.createElement)(f.CardDivider,null),(0,l.createElement)(f.RangeControl,{label:(0,k.__)("Desktop items height","wp-custom-blocks"),value:g,onChange:e=>t({desktopHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:P})))},B="wp-custom-blocks/image",{name:V,...$}=t;(0,e.registerBlockType)(V,{...$,icon:"format-gallery",attributes:S,edit:({attributes:e,clientId:t,setAttributes:o})=>{const{uniqueId:r,blockStyle:s,itemsTitleColor:i,mobileItemsPerView:c,tabletItemsPerView:m,laptopItemsPerView:p,desktopItemsPerView:u,mobileSpaceBetween:b,tabletSpaceBetween:d,laptopSpaceBetween:w,desktopSpaceBetween:f,mobileHeight:k,tabletHeight:_,laptopHeight:h,desktopHeight:v}=e,y=(0,a.useBlockProps)({className:r});(0,n.useEffect)((()=>{r||o({uniqueId:"images-"+t.slice(0,8)})}),[t,r,o]);const E=(0,a.useInnerBlocksProps)({className:"inner-wrapper !grid"},{allowedBlocks:[B],template:[[B]],renderAppender:()=>(0,l.createElement)(a.InnerBlocks.ButtonBlockAppender,null)}),C=`\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${d}px;\n\t\t\tgrid-template-columns: repeat(${m}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${r} .image {\n\t\t\theight: ${_}px;\n\t\t}\n\t`,x=`\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${w}px;\n\t\t\tgrid-template-columns: repeat(${p}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${r} .image {\n\t\t\theight: ${h}px;\n\t\t}\n\t`,P=`\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${f}px;\n\t\t\tgrid-template-columns: repeat(${u}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${r} .image {\n\t\t\theight: ${v}px;\n\t\t}\n\t`,S=`\n\t\t\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${b}px;\n\t\t\tgrid-template-columns: repeat(${c}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${r} .image {\n\t\t\theight: ${k}px;\n\t\t}\n\n\t\t.${r} .image .title {\n\t\t\tcolor: ${i};\n\t\t}\n\t\n\n\t\t@media (min-width: ${g.sm}px) {\n\t\t\t${C}\n\t\t}\n\n\t\t@media (min-width: ${g.md}px) {\n\t\t\t${x}\n\t\t}\n\n\t\t@media (min-width: ${g.xl}px) {\n\t\t\t${P}\n\t\t}\n\t`;return(0,n.useEffect)((()=>{JSON.stringify(s)!==JSON.stringify(S)&&o({blockStyle:S})}),[s,S,o]),(0,l.createElement)(n.Fragment,null,(0,l.createElement)("style",null,`${((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(S)}`),(0,l.createElement)(I,{attributes:e,setAttributes:o}),(0,l.createElement)("div",{...y},(0,l.createElement)("div",{...E})))},save:({attributes:e})=>{const{uniqueId:t}=e,o=a.useBlockProps.save({className:t});return(0,l.createElement)("div",{...o},(0,l.createElement)("div",{className:"inner-wrapper !grid"},(0,l.createElement)(a.InnerBlocks.Content,null)))}})})()})();