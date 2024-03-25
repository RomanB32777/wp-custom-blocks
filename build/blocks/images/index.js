(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,o(l)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return l[e](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(l,a){if(1&a&&(l=this(l)),8&a)return l;if("object"==typeof l&&l){if(4&a&&l.__esModule)return l;if(16&a&&"function"==typeof l.then)return l}var o=Object.create(null);n.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&l;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>l[e]));return r.default=()=>l,n.d(o,r),o},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/images","version":"0.1.0","title":"Images block","category":"wp-custom-blocks","description":"Images block","supports":{"html":false},"textdomain":"images-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React,a=window.wp.blockEditor,o=window.wp.element,r=JSON.parse('{"xs":320,"sm":640,"md":768,"xl":1280}'),s=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var i=n.t(s,2);const c=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var m=n.t(c,2);const p=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var u=n.t(p,2);const b=r,d=(Array.from(m),Array.from(u),Array.from(i),window.wp.components),w=window.wp.i18n,g=()=>(0,l.createElement)("div",{style:{marginBottom:24}},(0,l.createElement)(d.Tip,null,(0,l.createElement)("p",null,"Mobile display: ",b.xs,"...",b.sm,"px"),(0,l.createElement)("p",null,"Tablet display: ",b.sm,"...",b.md,"px"),(0,l.createElement)("p",null,"Laptop display: ",b.md,"...",b.xl,"px"),(0,l.createElement)("p",null,"Desktop display: ",b.xl,"...")));var k=n(967),f=n.n(k);const _=window.wp.compose,h=(e,t)=>e[t].default,v=[{name:(0,w.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,w.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,w.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,w.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,w.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,w.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,w.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,w.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,w.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,w.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,w.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,w.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,w.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,w.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,w.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,w.__)("Color","wp-custom-blocks"),color:"#d63031"}],y=({label:e,name:t,disabled:a,attributes:n,defaultAttributes:r,setAttributes:s})=>{const[i,c]=(0,o.useState)(!1),m=`color-control-${(0,_.useInstanceId)(y)}`,p=n[t],u=e=>s({[t]:e});return(0,l.createElement)(d.Flex,null,(0,l.createElement)(d.FlexBlock,null,(0,l.createElement)(d.BaseControl,{id:m,label:e,className:f()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(d.FlexItem,null,(0,l.createElement)(d.Button,{icon:"image-rotate",iconSize:14,label:(0,w.__)("Reset","wp-custom-blocks"),disabled:a,size:"small",onClick:()=>u(String(h(r,t))),className:f()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:p,disabled:!p})})),(0,l.createElement)(d.FlexItem,null,(0,l.createElement)("button",{disabled:a,className:f()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>c(!0)},(0,l.createElement)(d.ColorIndicator,{colorValue:p})),i&&(0,l.createElement)(d.Popover,{position:"bottom right",onFocusOutside:()=>c(!1),offset:5},(0,l.createElement)(d.ColorPicker,{color:p,onChange:e=>u(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,w.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},v.map(((e,t)=>(0,l.createElement)(d.ColorIndicator,{className:f()({active:e.color===p}),title:e.name,key:t,colorValue:e.color,onClick:()=>u(e.color)}))))))))},E=24,C=200,x={uniqueId:{type:"string"},blockStyle:{type:"object"},itemsTitleColor:{type:"string",default:"#fff"},mobileItemsPerView:{type:"number",default:2},tabletItemsPerView:{type:"number",default:3},laptopItemsPerView:{type:"number",default:4},desktopItemsPerView:{type:"number",default:6},mobileSpaceBetween:{type:"number",default:E},tabletSpaceBetween:{type:"number",default:E},laptopSpaceBetween:{type:"number",default:E},desktopSpaceBetween:{type:"number",default:E},mobileHeight:{type:"number",default:C},tabletHeight:{type:"number",default:C},laptopHeight:{type:"number",default:C},desktopHeight:{type:"number",default:C}},S=({attributes:e,setAttributes:t})=>{const{mobileItemsPerView:n,tabletItemsPerView:o,laptopItemsPerView:r,desktopItemsPerView:s,mobileSpaceBetween:i,tabletSpaceBetween:c,laptopSpaceBetween:m,desktopSpaceBetween:p,mobileHeight:u,tabletHeight:b,laptopHeight:k,desktopHeight:f}=e,_={attributes:e,defaultAttributes:x,setAttributes:t};return(0,l.createElement)(a.InspectorControls,null,(0,l.createElement)(g,null),(0,l.createElement)(d.PanelBody,{title:(0,w.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(y,{name:"itemsTitleColor",label:(0,w.__)("Items title color","wp-custom-blocks"),..._})),(0,l.createElement)(d.PanelBody,{title:(0,w.__)("Items per view settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Mobile items per view","wp-custom-blocks"),value:n,onChange:e=>t({mobileItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(h(x,"mobileItemsPerView"))}),(0,l.createElement)(d.CardDivider,null),(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Tablet items per view","wp-custom-blocks"),value:o,onChange:e=>t({tabletItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(h(x,"tabletItemsPerView"))}),(0,l.createElement)(d.CardDivider,null),(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Laptop items per view","wp-custom-blocks"),value:r,onChange:e=>t({laptopItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(h(x,"laptopItemsPerView"))}),(0,l.createElement)(d.CardDivider,null),(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Desktop items per view","wp-custom-blocks"),value:s,onChange:e=>t({desktopItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(h(x,"desktopItemsPerView"))})),(0,l.createElement)(d.PanelBody,{title:(0,w.__)("Items between settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Mobile space between items","wp-custom-blocks"),value:i,onChange:e=>t({mobileSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:E}),(0,l.createElement)(d.CardDivider,null),(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Tablet space between items","wp-custom-blocks"),value:c,onChange:e=>t({tabletSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:E}),(0,l.createElement)(d.CardDivider,null),(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Laptop space between items","wp-custom-blocks"),value:m,onChange:e=>t({laptopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:E}),(0,l.createElement)(d.CardDivider,null),(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Desktop space between items","wp-custom-blocks"),value:p,onChange:e=>t({desktopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:E})),(0,l.createElement)(d.PanelBody,{title:(0,w.__)("Height items settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Mobile items height","wp-custom-blocks"),value:u,onChange:e=>t({mobileHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:C}),(0,l.createElement)(d.CardDivider,null),(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Tablet items height","wp-custom-blocks"),value:b,onChange:e=>t({tabletHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:C}),(0,l.createElement)(d.CardDivider,null),(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Laptop items height","wp-custom-blocks"),value:k,onChange:e=>t({laptopHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:C}),(0,l.createElement)(d.CardDivider,null),(0,l.createElement)(d.RangeControl,{label:(0,w.__)("Desktop items height","wp-custom-blocks"),value:f,onChange:e=>t({desktopHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:C})))},P="wp-custom-blocks/image",{name:I,...B}=t;(0,e.registerBlockType)(I,{...B,icon:"format-gallery",attributes:x,edit:({attributes:e,clientId:t,setAttributes:n})=>{const{uniqueId:r,blockStyle:s,itemsTitleColor:i,mobileItemsPerView:c,tabletItemsPerView:m,laptopItemsPerView:p,desktopItemsPerView:u,mobileSpaceBetween:d,tabletSpaceBetween:w,laptopSpaceBetween:g,desktopSpaceBetween:k,mobileHeight:f,tabletHeight:_,laptopHeight:h,desktopHeight:v}=e,y=(0,a.useBlockProps)({className:r});(0,o.useEffect)((()=>{r||n({uniqueId:"images-"+t.slice(0,8)})}),[t,r,n]);const E=(0,a.useInnerBlocksProps)({className:"inner-wrapper !grid"},{allowedBlocks:[P],template:[[P]],renderAppender:()=>(0,l.createElement)(a.InnerBlocks.ButtonBlockAppender,null)}),C=`\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${w}px;\n\t\t\tgrid-template-columns: repeat(${m}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${r} .image {\n\t\t\theight: ${_}px;\n\t\t}\n\t`,x=`\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${g}px;\n\t\t\tgrid-template-columns: repeat(${p}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${r} .image {\n\t\t\theight: ${h}px;\n\t\t}\n\t`,I=`\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${k}px;\n\t\t\tgrid-template-columns: repeat(${u}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${r} .image {\n\t\t\theight: ${v}px;\n\t\t}\n\t`,B=`\n\t\t\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${d}px;\n\t\t\tgrid-template-columns: repeat(${c}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${r} .image {\n\t\t\theight: ${f}px;\n\t\t}\n\n\t\t.${r} .image .title {\n\t\t\tcolor: ${i};\n\t\t}\n\t\n\n\t\t@media (min-width: ${b.sm}px) {\n\t\t\t${C}\n\t\t}\n\n\t\t@media (min-width: ${b.md}px) {\n\t\t\t${x}\n\t\t}\n\n\t\t@media (min-width: ${b.xl}px) {\n\t\t\t${I}\n\t\t}\n\t`;return(0,o.useEffect)((()=>{JSON.stringify(s)!==JSON.stringify(B)&&n({blockStyle:B})}),[s,B,n]),(0,l.createElement)(o.Fragment,null,(0,l.createElement)("style",null,`${((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(B)}`),(0,l.createElement)(S,{attributes:e,setAttributes:n}),(0,l.createElement)("div",{...y},(0,l.createElement)("div",{...E})))},save:({attributes:e})=>{const{uniqueId:t}=e,n=a.useBlockProps.save({className:t});return(0,l.createElement)("div",{...n},(0,l.createElement)("div",{className:"inner-wrapper !grid"},(0,l.createElement)(a.InnerBlocks.Content,null)))}})})()})();