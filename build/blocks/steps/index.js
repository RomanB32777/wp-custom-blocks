(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=a(e,n(l)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=a(t,l));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return l[e](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var n=Object.create(null);r.r(n);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&l;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>l[e]));return a.default=()=>l,r.d(n,a),n},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/steps","version":"0.1.0","title":"Steps","category":"wp-custom-blocks","description":"Steps block","supports":{"html":false},"textdomain":"steps-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=r(967),n=r.n(o);const a=window.wp.blockEditor,s=window.wp.data,c=window.wp.element,i=window.wp.i18n,p=window.wp.components,u=window.wp.compose,m=[{name:(0,i.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,i.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,i.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,i.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,i.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,i.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#d63031"}],d=({label:e,name:t,disabled:o,attributes:r,defaultAttributes:a,setAttributes:s})=>{const[b,f]=(0,c.useState)(!1),y=`color-control-${(0,u.useInstanceId)(d)}`,g=r[t],w=e=>s({[t]:e});return(0,l.createElement)(p.Flex,null,(0,l.createElement)(p.FlexBlock,null,(0,l.createElement)(p.BaseControl,{id:y,label:e,className:n()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(p.FlexItem,null,(0,l.createElement)(p.Button,{icon:"image-rotate",iconSize:14,label:(0,i.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>w(String(((e,t)=>e[t].default)(a,t))),className:n()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:g,disabled:!g})})),(0,l.createElement)(p.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:n()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>f(!0)},(0,l.createElement)(p.ColorIndicator,{colorValue:g})),b&&(0,l.createElement)(p.Popover,{position:"bottom right",onFocusOutside:()=>f(!1),offset:5},(0,l.createElement)(p.ColorPicker,{color:g,onChange:e=>w(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,i.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},m.map(((e,t)=>(0,l.createElement)(p.ColorIndicator,{className:n()({active:e.color===g}),title:e.name,key:t,colorValue:e.color,onClick:()=>w(e.color)}))))))))},b=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var f=r.t(b,2);const y=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var g=r.t(y,2);const w=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var _=r.t(w,2);const k={DEFAULT:"#5db24e",grizzly:"#a689ff80",light:"#c1adff",brightest:"#a689ff00"},v={DEFAULT:"#000",grizzly:"#2a2a2a",opacity:"#000c"},E={DEFAULT:"#fff",light:"#f8f8f8",opacity:"#f2eff833"};Array.from(g),Array.from(_),Array.from(f);let C=function(e){return e.Solid="solid",e.Dotted="dotted",e.Dashed="dashed",e.Double="double",e.Groove="groove",e.Ridge="ridge",e.Inset="inset",e.Outset="outset",e}({});const x={uniqueId:{type:"string"},blockStyle:{type:"object"},mainColor:{type:"string",default:k.DEFAULT},description:{type:"string"},stepColor:{type:"string",default:E.DEFAULT},titleColor:{type:"string",default:v.DEFAULT},descriptionColor:{type:"string",default:v.DEFAULT},borderColor:{type:"string",default:k.grizzly},lineType:{type:"string",default:C.Solid},isOnlyText:{type:"boolean",default:!1}},h=({attributes:e,clientId:t,setAttributes:o})=>{const{isOnlyText:r,lineType:n}=e,u={attributes:e,defaultAttributes:x,setAttributes:o};return(0,l.createElement)(a.InspectorControls,null,(0,l.createElement)(p.PanelBody,{title:(0,i.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(p.ToggleControl,{label:(0,i.__)("Only text","wp-custom-blocks"),checked:r,onChange:()=>{const e=!r;o({isOnlyText:e}),t&&(0,s.dispatch)("core/block-editor").updateBlockAttributes(t,{isOnlyText:e})}})),(0,l.createElement)(p.PanelBody,{title:(0,i.__)("Step settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(d,{name:"mainColor",label:(0,i.__)("Main Color","wp-custom-blocks"),...u}),(0,l.createElement)(p.CardDivider,null),(0,l.createElement)(d,{name:"stepColor",label:(0,i.__)("Step Color","wp-custom-blocks"),...u}),(0,l.createElement)(p.CardDivider,null),(0,l.createElement)(d,{name:"titleColor",label:(0,i.__)("Title Color","wp-custom-blocks"),...u}),(0,l.createElement)(p.CardDivider,null),(0,l.createElement)(d,{name:"descriptionColor",label:(0,i.__)("Description Color","wp-custom-blocks"),...u}),(0,l.createElement)(p.CardDivider,null),(0,l.createElement)(p.SelectControl,{label:(0,i.__)("Select Line type","wp-custom-blocks"),value:n,options:Object.entries(C).map((([e,t])=>({label:e,value:t}))),onChange:e=>{o({lineType:e})}}),r&&(0,l.createElement)(c.Fragment,null,(0,l.createElement)(p.CardDivider,null),(0,l.createElement)(d,{name:"borderColor",label:(0,i.__)("Border Color","wp-custom-blocks"),...u}))))},S="wp-custom-blocks/step",{name:O,...T}=t;(0,e.registerBlockType)(O,{...T,icon:"editor-ol",attributes:x,edit:({attributes:e,clientId:t,setAttributes:o})=>{const{uniqueId:r,blockStyle:p,description:u,mainColor:m,stepColor:d,titleColor:b,descriptionColor:f,borderColor:y,lineType:g,isOnlyText:w}=e,_=(0,a.useBlockProps)({className:n()(r,"wp-custom-blocks-steps font-inter bg-white rounded-xl py-6 px-4 md:!p-8 md:!rounded-3xl")}),k=(0,s.select)("core/block-editor").getBlocksByClientId(t)?.[0]?.innerBlocks;(0,c.useEffect)((()=>{k?.forEach(((e,t)=>{(0,s.dispatch)("core/block-editor").updateBlockAttributes(e.clientId,{isOnlyText:w,step:t+1})}))}),[k,w]),(0,c.useEffect)((()=>{r||o({uniqueId:"steps-"+t.slice(0,8)})}),[t,r,o]);const v=`\n\t\t.${r} .step .number {\n\t\t\tbackground-color: ${m};\n\t\t}\n\n\t\t.${r} .step .line {\n\t\t\tborder: 2px ${g} ${m};\n\t\t}\n\n\t\t.${r} .step .number {\n\t\t\tcolor: ${d};\n\t\t}\n\n\t\t.${r} .step .title {\n\t\t\tcolor: ${b};\n\t\t}\n\n\t\t.${r} .step .description {\n\t\t\tcolor: ${f};\n\t\t\tborder-color: ${y};\n\t\t}\n\t`;return(0,c.useEffect)((()=>{JSON.stringify(p)!==JSON.stringify(v)&&o({blockStyle:v})}),[p,v,o]),(0,l.createElement)(c.Fragment,null,(0,l.createElement)("style",null,`${((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(v)}`),(0,l.createElement)(h,{attributes:e,setAttributes:o,clientId:t}),(0,l.createElement)("div",{..._},(0,l.createElement)("div",{className:"divide-y divide-primary flex flex-col gap-4 md:!gap-6"},(0,l.createElement)(a.RichText,{tagName:"p",className:"text-base md:!text-lg",value:u,onChange:e=>o({description:e}),placeholder:(0,i.__)("Description text..","wp-custom-blocks"),style:{color:f}}),(0,l.createElement)(a.InnerBlocks,{allowedBlocks:[S],template:[[S]]}))))},save:({attributes:{uniqueId:e,description:t,descriptionColor:o}})=>{const r=a.useBlockProps.save({className:n()(e,"wp-custom-blocks-steps bg-white rounded-xl py-6 px-4 md:!p-8 md:!rounded-3xl")});return(0,l.createElement)("div",{...r},(0,l.createElement)("div",{className:"divide-y divide-primary flex flex-col gap-4 md:!gap-6"},t&&(0,l.createElement)(a.RichText.Content,{tagName:"p",className:"text-base md:!text-lg",value:t,style:{color:o}}),(0,l.createElement)("div",{className:"pt-4 md:!pt-6"},(0,l.createElement)(a.InnerBlocks.Content,null))))}})})()})();