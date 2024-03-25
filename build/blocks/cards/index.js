(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,n(l)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return l[e](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(l,a){if(1&a&&(l=this(l)),8&a)return l;if("object"==typeof l&&l){if(4&a&&l.__esModule)return l;if(16&a&&"function"==typeof l.then)return l}var n=Object.create(null);o.r(n);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&l;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>l[e]));return r.default=()=>l,o.d(n,r),n},o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/cards","version":"0.1.0","title":"Cards block","category":"wp-custom-blocks","description":"Cards block","supports":{"html":false},"textdomain":"cards-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var a=o(967),n=o.n(a);const r=window.wp.blockEditor,s=window.wp.data,c=window.wp.element,i=window.wp.i18n,m=JSON.parse('{"xs":320,"sm":640,"md":768,"xl":1280}'),p=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var u=o.t(p,2);const b=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var d=o.t(b,2);const w=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var g=o.t(w,2);const f={DEFAULT:"#a689ff",grizzly:"#a689ff80",light:"#c1adff",brightest:"#a689ff00"},k={DEFAULT:"#fff",light:"#b2bec3",opacity:"#f2eff833"},_=m,h=(Array.from(d),Array.from(g),Array.from(u),window.wp.components),y=()=>(0,l.createElement)("div",{style:{marginBottom:24}},(0,l.createElement)(h.Tip,null,(0,l.createElement)("p",null,"Mobile display: ",_.xs,"...",_.sm,"px"),(0,l.createElement)("p",null,"Tablet display: ",_.sm,"...",_.md,"px"),(0,l.createElement)("p",null,"Laptop display: ",_.md,"...",_.xl,"px"),(0,l.createElement)("p",null,"Desktop display: ",_.xl,"..."))),E=window.wp.compose,v=(e,t)=>e[t].default,C=[{name:(0,i.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,i.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,i.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,i.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,i.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,i.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#d63031"}],x=({label:e,name:t,disabled:a,attributes:o,defaultAttributes:r,setAttributes:s})=>{const[m,p]=(0,c.useState)(!1),u=`color-control-${(0,E.useInstanceId)(x)}`,b=o[t],d=e=>s({[t]:e});return(0,l.createElement)(h.Flex,null,(0,l.createElement)(h.FlexBlock,null,(0,l.createElement)(h.BaseControl,{id:u,label:e,className:n()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(h.FlexItem,null,(0,l.createElement)(h.Button,{icon:"image-rotate",iconSize:14,label:(0,i.__)("Reset","wp-custom-blocks"),disabled:a,size:"small",onClick:()=>d(String(v(r,t))),className:n()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:b,disabled:!b})})),(0,l.createElement)(h.FlexItem,null,(0,l.createElement)("button",{disabled:a,className:n()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>p(!0)},(0,l.createElement)(h.ColorIndicator,{colorValue:b})),m&&(0,l.createElement)(h.Popover,{position:"bottom right",onFocusOutside:()=>p(!1),offset:5},(0,l.createElement)(h.ColorPicker,{color:b,onChange:e=>d(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,i.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},C.map(((e,t)=>(0,l.createElement)(h.ColorIndicator,{className:n()({active:e.color===b}),title:e.name,key:t,colorValue:e.color,onClick:()=>d(e.color)}))))))))},P=24,S=200,B={uniqueId:{type:"string"},blockStyle:{type:"object"},title:{type:"string"},titleColor:{type:"string",default:k.DEFAULT},isParentStyles:{type:"boolean",default:!0},itemsTitleColor:{type:"string",default:k.DEFAULT},itemsButtonTextColor:{type:"string",default:k.DEFAULT},itemsButtonColor:{type:"string",default:f.DEFAULT},mobileItemsPerView:{type:"number",default:2},tabletItemsPerView:{type:"number",default:3},laptopItemsPerView:{type:"number",default:4},desktopItemsPerView:{type:"number",default:6},mobileSpaceBetween:{type:"number",default:P},tabletSpaceBetween:{type:"number",default:P},laptopSpaceBetween:{type:"number",default:P},desktopSpaceBetween:{type:"number",default:P},mobileHeight:{type:"number",default:S},tabletHeight:{type:"number",default:S},laptopHeight:{type:"number",default:S},desktopHeight:{type:"number",default:S}},I=({attributes:e,setAttributes:t})=>{const{isParentStyles:a,mobileItemsPerView:o,tabletItemsPerView:n,laptopItemsPerView:s,desktopItemsPerView:m,mobileSpaceBetween:p,tabletSpaceBetween:u,laptopSpaceBetween:b,desktopSpaceBetween:d,mobileHeight:w,tabletHeight:g,laptopHeight:f,desktopHeight:k}=e,[_,E]=(0,c.useState)(a);(0,c.useEffect)((()=>{E(a)}),[a]);const C={attributes:e,defaultAttributes:B,setAttributes:t};return(0,l.createElement)(r.InspectorControls,null,(0,l.createElement)(y,null),(0,l.createElement)(h.PanelBody,{title:(0,i.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(x,{name:"titleColor",label:(0,i.__)("Title Color","wp-custom-blocks"),...C}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(h.ToggleControl,{label:(0,i.__)("Parent styles","wp-custom-blocks"),checked:a,onChange:()=>t({isParentStyles:!a})})),(0,l.createElement)(h.PanelBody,{title:(0,i.__)("Items styles","wp-custom-blocks"),initialOpen:_,opened:_,onToggle:()=>E(!_)},(0,l.createElement)(x,{name:"itemsTitleColor",label:(0,i.__)("Items title color","wp-custom-blocks"),disabled:!a,...C}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(x,{name:"itemsButtonColor",label:(0,i.__)("Items button color","wp-custom-blocks"),disabled:!a,...C}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(x,{name:"itemsButtonTextColor",label:(0,i.__)("Items button text color","wp-custom-blocks"),disabled:!a,...C})),(0,l.createElement)(h.PanelBody,{title:(0,i.__)("Items per view settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Mobile items per view","wp-custom-blocks"),value:o,onChange:e=>t({mobileItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(v(B,"mobileItemsPerView"))}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Tablet items per view","wp-custom-blocks"),value:n,onChange:e=>t({tabletItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(v(B,"tabletItemsPerView"))}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Laptop items per view","wp-custom-blocks"),value:s,onChange:e=>t({laptopItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(v(B,"laptopItemsPerView"))}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Desktop items per view","wp-custom-blocks"),value:m,onChange:e=>t({desktopItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(v(B,"desktopItemsPerView"))})),(0,l.createElement)(h.PanelBody,{title:(0,i.__)("Items between settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Mobile space between items","wp-custom-blocks"),value:p,onChange:e=>t({mobileSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:P}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Tablet space between items","wp-custom-blocks"),value:u,onChange:e=>t({tabletSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:P}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Laptop space between items","wp-custom-blocks"),value:b,onChange:e=>t({laptopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:P}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Desktop space between items","wp-custom-blocks"),value:d,onChange:e=>t({desktopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:P})),(0,l.createElement)(h.PanelBody,{title:(0,i.__)("Height items settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Mobile items height","wp-custom-blocks"),value:w,onChange:e=>t({mobileHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:S}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Tablet items height","wp-custom-blocks"),value:g,onChange:e=>t({tabletHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:S}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Laptop items height","wp-custom-blocks"),value:f,onChange:e=>t({laptopHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:S}),(0,l.createElement)(h.CardDivider,null),(0,l.createElement)(h.RangeControl,{label:(0,i.__)("Desktop items height","wp-custom-blocks"),value:k,onChange:e=>t({desktopHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:S})))},V="wp-custom-blocks/card",{name:$,...N}=t;(0,e.registerBlockType)($,{...N,icon:"admin-page",attributes:B,edit:({attributes:e,clientId:t,setAttributes:a})=>{const{uniqueId:o,blockStyle:m,title:p,titleColor:u,isParentStyles:b,itemsTitleColor:d,itemsButtonTextColor:w,itemsButtonColor:g,mobileItemsPerView:f,tabletItemsPerView:k,laptopItemsPerView:h,desktopItemsPerView:y,mobileSpaceBetween:E,tabletSpaceBetween:v,laptopSpaceBetween:C,desktopSpaceBetween:x,mobileHeight:P,tabletHeight:S,laptopHeight:B,desktopHeight:$}=e,N=(0,r.useBlockProps)({className:n()(o,"wp-custom-blocks-cards")}),O=(0,s.select)("core/block-editor").getBlocksByClientId(t)?.[0]?.innerBlocks;(0,c.useEffect)((()=>{o||a({uniqueId:"cards-"+t.slice(0,8)})}),[t,o,a]);const R=(0,r.useInnerBlocksProps)({className:"inner-wrapper !grid"},{allowedBlocks:[V],template:[[V]],renderAppender:()=>(0,l.createElement)(r.InnerBlocks.ButtonBlockAppender,null)});(0,c.useEffect)((()=>{O?.forEach((e=>{const t={isParentStyles:b};(0,s.dispatch)("core/block-editor").updateBlockAttributes(e.clientId,t)}))}),[O,b]);const T=`\n\t\t.${o} .inner-wrapper {\n\t\t\tgap: ${v}px;\n\t\t\tgrid-template-columns: repeat(${k}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${o} .item-card {\n\t\t\theight: ${S}px;\n\t\t}\n\t`,H=`\n\t\t.${o} .inner-wrapper {\n\t\t\tgap: ${C}px;\n\t\t\tgrid-template-columns: repeat(${h}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${o} .item-card {\n\t\t\theight: ${B}px;\n\t\t}\n\t`,A=`\n\t\t.${o} .inner-wrapper {\n\t\t\tgap: ${x}px;\n\t\t\tgrid-template-columns: repeat(${y}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${o} .item-card {\n\t\t\theight: ${$}px;\n\t\t}\n\t`,F=`\n\t\t\n\t\t.${o} .item-card .title {\n\t\t\tcolor: ${d};\n\t\t}\n\n\t\t.${o} .item-card button {\n\t\t\tbackground-color: ${g};\n\t\t}\n\n\t\t.${o} .item-card button span {\n\t\t\tcolor: ${w};\n\t\t}\n\t\n\n\t\t\n\t\t.${o} .inner-wrapper {\n\t\t\tgap: ${E}px;\n\t\t\tgrid-template-columns: repeat(${f}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${o} .item-card {\n\t\t\theight: ${P}px;\n\t\t}\n\t\n\n\t\t@media (min-width: ${_.sm}px) {\n\t\t\t${T}\n\t\t}\n\n\t\t@media (min-width: ${_.md}px) {\n\t\t\t${H}\n\t\t}\n\n\t\t@media (min-width: ${_.xl}px) {\n\t\t\t${A}\n\t\t}\n\t`;return(0,c.useEffect)((()=>{JSON.stringify(m)!==JSON.stringify(F)&&a({blockStyle:F})}),[m,F,a]),(0,l.createElement)(c.Fragment,null,(0,l.createElement)("style",null,`${((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(F)}`),(0,l.createElement)(I,{attributes:e,setAttributes:a}),(0,l.createElement)("div",{...N},(0,l.createElement)(r.RichText,{tagName:"h2",className:"font-roboto text-2xl font-black mb-4 md:text-3xl",value:p,onChange:e=>a({title:e}),placeholder:(0,i.__)("Cards title..","wp-custom-blocks"),style:{color:u}}),(0,l.createElement)("div",{...R})))},save:({attributes:e})=>{const{uniqueId:t,title:a,titleColor:o}=e,s=r.useBlockProps.save({className:n()(t,"wp-custom-blocks-cards")});return(0,l.createElement)("div",{...s},(0,l.createElement)(r.RichText.Content,{tagName:"h2",className:"font-roboto text-2xl font-black mb-4 md:text-3xl",value:a,style:{color:o}}),(0,l.createElement)("div",{className:"inner-wrapper !grid"},(0,l.createElement)(r.InnerBlocks.Content,null)))}})})()})();