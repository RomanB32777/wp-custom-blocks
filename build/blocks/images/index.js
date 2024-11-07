(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,n(l)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return l[e](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(l,a){if(1&a&&(l=this(l)),8&a)return l;if("object"==typeof l&&l){if(4&a&&l.__esModule)return l;if(16&a&&"function"==typeof l.then)return l}var n=Object.create(null);o.r(n);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&l;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>l[e]));return r.default=()=>l,o.d(n,r),n},o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/images","version":"0.1.0","title":"Images","category":"wp-custom-blocks","description":"Images block","supports":{"html":false},"textdomain":"images-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var a=o(967),n=o.n(a);const r=window.wp.blockEditor,s=window.wp.element,i=JSON.parse('{"xs":320,"sm":640,"md":768,"xl":1280}'),c=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var m=o.t(c,2);const p=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var u=o.t(p,2);const b=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var d=o.t(b,2);const w=i,g=(Array.from(u),Array.from(d),Array.from(m),window.wp.components),k=window.wp.i18n,f=()=>(0,l.createElement)("div",{style:{marginBottom:24}},(0,l.createElement)(g.Tip,null,(0,l.createElement)("p",null,"Mobile display: ",w.xs,"...",w.sm,"px"),(0,l.createElement)("p",null,"Tablet display: ",w.sm,"...",w.md,"px"),(0,l.createElement)("p",null,"Laptop display: ",w.md,"...",w.xl,"px"),(0,l.createElement)("p",null,"Desktop display: ",w.xl,"..."))),_=window.wp.compose,h=(e,t)=>e[t].default,v=[{name:(0,k.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,k.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,k.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,k.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,k.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,k.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,k.__)("Color","wp-custom-blocks"),color:"#d63031"}],y=({label:e,name:t,disabled:a,attributes:o,defaultAttributes:r,setAttributes:i})=>{const[c,m]=(0,s.useState)(!1),p=`color-control-${(0,_.useInstanceId)(y)}`,u=o[t],b=e=>i({[t]:e});return(0,l.createElement)(g.Flex,null,(0,l.createElement)(g.FlexBlock,null,(0,l.createElement)(g.BaseControl,{id:p,label:e,className:n()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(g.FlexItem,null,(0,l.createElement)(g.Button,{icon:"image-rotate",iconSize:14,label:(0,k.__)("Reset","wp-custom-blocks"),disabled:a,size:"small",onClick:()=>b(String(h(r,t))),className:n()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:u,disabled:!u})})),(0,l.createElement)(g.FlexItem,null,(0,l.createElement)("button",{disabled:a,className:n()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>m(!0)},(0,l.createElement)(g.ColorIndicator,{colorValue:u})),c&&(0,l.createElement)(g.Popover,{position:"bottom right",onFocusOutside:()=>m(!1),offset:5},(0,l.createElement)(g.ColorPicker,{color:u,onChange:e=>b(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,k.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},v.map(((e,t)=>(0,l.createElement)(g.ColorIndicator,{className:n()({active:e.color===u}),title:e.name,key:t,colorValue:e.color,onClick:()=>b(e.color)}))))))))},E=24,C=200,x={uniqueId:{type:"string"},blockStyle:{type:"string"},itemsTitleColor:{type:"string",default:"#fff"},mobileItemsPerView:{type:"number",default:2},tabletItemsPerView:{type:"number",default:3},laptopItemsPerView:{type:"number",default:4},desktopItemsPerView:{type:"number",default:6},mobileSpaceBetween:{type:"number",default:E},tabletSpaceBetween:{type:"number",default:E},laptopSpaceBetween:{type:"number",default:E},desktopSpaceBetween:{type:"number",default:E},mobileHeight:{type:"number",default:C},tabletHeight:{type:"number",default:C},laptopHeight:{type:"number",default:C},desktopHeight:{type:"number",default:C}},P=({attributes:e,setAttributes:t})=>{const{mobileItemsPerView:a,tabletItemsPerView:o,laptopItemsPerView:n,desktopItemsPerView:s,mobileSpaceBetween:i,tabletSpaceBetween:c,laptopSpaceBetween:m,desktopSpaceBetween:p,mobileHeight:u,tabletHeight:b,laptopHeight:d,desktopHeight:w}=e,_={attributes:e,defaultAttributes:x,setAttributes:t};return(0,l.createElement)(r.InspectorControls,null,(0,l.createElement)(f,null),(0,l.createElement)(g.PanelBody,{title:(0,k.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(y,{name:"itemsTitleColor",label:(0,k.__)("Items title color","wp-custom-blocks"),..._})),(0,l.createElement)(g.PanelBody,{title:(0,k.__)("Items per view settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Mobile items per view","wp-custom-blocks"),value:a,onChange:e=>t({mobileItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(h(x,"mobileItemsPerView"))}),(0,l.createElement)(g.CardDivider,null),(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Tablet items per view","wp-custom-blocks"),value:o,onChange:e=>t({tabletItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(h(x,"tabletItemsPerView"))}),(0,l.createElement)(g.CardDivider,null),(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Laptop items per view","wp-custom-blocks"),value:n,onChange:e=>t({laptopItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(h(x,"laptopItemsPerView"))}),(0,l.createElement)(g.CardDivider,null),(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Desktop items per view","wp-custom-blocks"),value:s,onChange:e=>t({desktopItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(h(x,"desktopItemsPerView"))})),(0,l.createElement)(g.PanelBody,{title:(0,k.__)("Items between settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Mobile space between items","wp-custom-blocks"),value:i,onChange:e=>t({mobileSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:E}),(0,l.createElement)(g.CardDivider,null),(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Tablet space between items","wp-custom-blocks"),value:c,onChange:e=>t({tabletSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:E}),(0,l.createElement)(g.CardDivider,null),(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Laptop space between items","wp-custom-blocks"),value:m,onChange:e=>t({laptopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:E}),(0,l.createElement)(g.CardDivider,null),(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Desktop space between items","wp-custom-blocks"),value:p,onChange:e=>t({desktopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:E})),(0,l.createElement)(g.PanelBody,{title:(0,k.__)("Height items settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Mobile items height","wp-custom-blocks"),value:u,onChange:e=>t({mobileHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:C}),(0,l.createElement)(g.CardDivider,null),(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Tablet items height","wp-custom-blocks"),value:b,onChange:e=>t({tabletHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:C}),(0,l.createElement)(g.CardDivider,null),(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Laptop items height","wp-custom-blocks"),value:d,onChange:e=>t({laptopHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:C}),(0,l.createElement)(g.CardDivider,null),(0,l.createElement)(g.RangeControl,{label:(0,k.__)("Desktop items height","wp-custom-blocks"),value:w,onChange:e=>t({desktopHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:C})))},S="wp-custom-blocks/image",{name:I,...B}=t;(0,e.registerBlockType)(I,{...B,icon:"format-gallery",attributes:x,edit:({attributes:e,clientId:t,setAttributes:a})=>{const{uniqueId:o,blockStyle:i,itemsTitleColor:c,mobileItemsPerView:m,tabletItemsPerView:p,laptopItemsPerView:u,desktopItemsPerView:b,mobileSpaceBetween:d,tabletSpaceBetween:g,laptopSpaceBetween:k,desktopSpaceBetween:f,mobileHeight:_,tabletHeight:h,laptopHeight:v,desktopHeight:y}=e,E=(0,r.useBlockProps)({className:n()(o,"font-inter")});(0,s.useEffect)((()=>{o||a({uniqueId:"images-"+t.slice(0,8)})}),[t,o,a]);const C=(0,r.useInnerBlocksProps)({className:"inner-wrapper !grid"},{allowedBlocks:[S],template:[[S]]}),x=`\n\t\t.${o} .inner-wrapper {\n\t\t\tgap: ${g}px;\n\t\t\tgrid-template-columns: repeat(${p}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${o} .image {\n\t\t\theight: ${h}px;\n\t\t}\n\t`,I=`\n\t\t.${o} .inner-wrapper {\n\t\t\tgap: ${k}px;\n\t\t\tgrid-template-columns: repeat(${u}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${o} .image {\n\t\t\theight: ${v}px;\n\t\t}\n\t`,B=`\n\t\t.${o} .inner-wrapper {\n\t\t\tgap: ${f}px;\n\t\t\tgrid-template-columns: repeat(${b}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${o} .image {\n\t\t\theight: ${y}px;\n\t\t}\n\t`,V=`\n\t\t\n\t\t.${o} .inner-wrapper {\n\t\t\tgap: ${d}px;\n\t\t\tgrid-template-columns: repeat(${m}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${o} .image {\n\t\t\theight: ${_}px;\n\t\t}\n\n\t\t.${o} .image .title {\n\t\t\tcolor: ${c};\n\t\t}\n\t\n\n\t\t@media (min-width: ${w.sm}px) {\n\t\t\t${x}\n\t\t}\n\n\t\t@media (min-width: ${w.md}px) {\n\t\t\t${I}\n\t\t}\n\n\t\t@media (min-width: ${w.xl}px) {\n\t\t\t${B}\n\t\t}\n\t`;return(0,l.createElement)(s.Fragment,null,(0,l.createElement)("style",null,V),(0,l.createElement)(P,{attributes:e,setAttributes:e=>{const t=((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(V);i!==t&&(e.blockStyle=t),a(e)}}),(0,l.createElement)("div",{...E},(0,l.createElement)("div",{...C})))},save:({attributes:e})=>{const{uniqueId:t}=e,a=r.useBlockProps.save({className:t});return(0,l.createElement)("div",{...a},(0,l.createElement)("div",{className:"inner-wrapper !grid"},(0,l.createElement)(r.InnerBlocks.Content,null)))}})})()})();