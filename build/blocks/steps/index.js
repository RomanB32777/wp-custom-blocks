(()=>{var e,t,o={967:(e,t)=>{var o;!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=s(e,n(o)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)l.call(e,o)&&e[o]&&(t=s(t,o));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},l={};function r(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return o[e](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,l){if(1&l&&(o=this(o)),8&l)return o;if("object"==typeof o&&o){if(4&l&&o.__esModule)return o;if(16&l&&"function"==typeof o.then)return o}var n=Object.create(null);r.r(n);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&l&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>o[e]));return s.default=()=>o,r.d(n,s),n},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/steps","version":"0.1.0","title":"Steps","category":"wp-custom-blocks","description":"Steps block","supports":{"html":false},"textdomain":"steps-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),o=window.React;var l=r(967),n=r.n(l);const s=window.wp.blockEditor,a=window.wp.data,c=window.wp.element,i=window.wp.components,u=window.wp.i18n,p=window.wp.compose,m=[{name:(0,u.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,u.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,u.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,u.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,u.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,u.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,u.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,u.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,u.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,u.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,u.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,u.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,u.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,u.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,u.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,u.__)("Color","wp-custom-blocks"),color:"#d63031"}],b=({label:e,name:t,disabled:l,attributes:r,defaultAttributes:s,setAttributes:a})=>{const[d,f]=(0,c.useState)(!1),k=`color-control-${(0,p.useInstanceId)(b)}`,_=r[t],w=e=>a({[t]:e});return(0,o.createElement)(i.Flex,null,(0,o.createElement)(i.FlexBlock,null,(0,o.createElement)(i.BaseControl,{id:k,label:e,className:n()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,o.createElement)(i.FlexItem,null,(0,o.createElement)(i.Button,{icon:"image-rotate",iconSize:14,label:(0,u.__)("Reset","wp-custom-blocks"),disabled:l,size:"small",onClick:()=>w(String(((e,t)=>e[t].default)(s,t))),className:n()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:_,disabled:!_})})),(0,o.createElement)(i.FlexItem,null,(0,o.createElement)("button",{disabled:l,className:n()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>f(!0)},(0,o.createElement)(i.ColorIndicator,{colorValue:_})),d&&(0,o.createElement)(i.Popover,{position:"bottom right",onFocusOutside:()=>f(!1),offset:5},(0,o.createElement)(i.ColorPicker,{color:_,onChange:e=>w(e),enableAlpha:!0}),(0,o.createElement)("div",{className:"px-3 pb-3"},(0,o.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,u.__)("Colors Palette","wp-custom-blocks")),(0,o.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},m.map(((e,t)=>(0,o.createElement)(i.ColorIndicator,{className:n()({active:e.color===_}),title:e.name,key:t,colorValue:e.color,onClick:()=>w(e.color)}))))))))},d=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var f=r.t(d,2);const k=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var _=r.t(k,2);const w=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var y=r.t(w,2);const g={DEFAULT:"#a689ff",grizzly:"#a689ff80",light:"#c1adff",brightest:"#a689ff00"},v={DEFAULT:"#fff",light:"#b2bec3",opacity:"#f2eff833"};Array.from(_),Array.from(y),Array.from(f);let C=function(e){return e.Solid="solid",e.Dotted="dotted",e.Dashed="dashed",e.Double="double",e.Groove="groove",e.Ridge="ridge",e.Inset="inset",e.Outset="outset",e}({});const E={uniqueId:{type:"string"},blockStyle:{type:"object"},mainColor:{type:"string",default:g.DEFAULT},stepColor:{type:"string",default:v.DEFAULT},titleColor:{type:"string",default:v.DEFAULT},descriptionColor:{type:"string",default:v.DEFAULT},borderColor:{type:"string",default:g.grizzly},lineType:{type:"string",default:C.Solid},isOnlyText:{type:"boolean",default:!1}},h=({attributes:e,clientId:t,setAttributes:l})=>{const{isOnlyText:r,lineType:n}=e,p={attributes:e,defaultAttributes:E,setAttributes:l};return(0,o.createElement)(s.InspectorControls,null,(0,o.createElement)(i.PanelBody,{title:(0,u.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,o.createElement)(i.ToggleControl,{label:(0,u.__)("Only text","wp-custom-blocks"),checked:r,onChange:()=>{const e=!r;l({isOnlyText:e}),t&&(0,a.dispatch)("core/block-editor").updateBlockAttributes(t,{isOnlyText:e})}})),(0,o.createElement)(i.PanelBody,{title:(0,u.__)("Step settings","wp-custom-blocks"),initialOpen:!0},(0,o.createElement)(b,{name:"mainColor",label:(0,u.__)("Main Color","wp-custom-blocks"),...p}),(0,o.createElement)(i.CardDivider,null),(0,o.createElement)(b,{name:"stepColor",label:(0,u.__)("Step Color","wp-custom-blocks"),...p}),(0,o.createElement)(i.CardDivider,null),(0,o.createElement)(b,{name:"titleColor",label:(0,u.__)("Title Color","wp-custom-blocks"),...p}),(0,o.createElement)(i.CardDivider,null),(0,o.createElement)(b,{name:"descriptionColor",label:(0,u.__)("Description Color","wp-custom-blocks"),...p}),(0,o.createElement)(i.CardDivider,null),(0,o.createElement)(i.SelectControl,{label:(0,u.__)("Select Line type","wp-custom-blocks"),value:n,options:Object.entries(C).map((([e,t])=>({label:e,value:t}))),onChange:e=>{l({lineType:e})}}),r&&(0,o.createElement)(c.Fragment,null,(0,o.createElement)(i.CardDivider,null),(0,o.createElement)(b,{name:"borderColor",label:(0,u.__)("Border Color","wp-custom-blocks"),...p}))))},S="wp-custom-blocks/step",{name:O,...x}=t;(0,e.registerBlockType)(O,{...x,icon:"editor-ol",attributes:E,edit:({attributes:e,clientId:t,setAttributes:l})=>{const{uniqueId:r,blockStyle:i,mainColor:u,stepColor:p,titleColor:m,descriptionColor:b,borderColor:d,lineType:f,isOnlyText:k}=e,_=(0,s.useBlockProps)({className:n()(r,"wp-custom-blocks-steps font-roboto")}),w=(0,a.select)("core/block-editor").getBlocksByClientId(t)?.[0]?.innerBlocks;(0,c.useEffect)((()=>{w?.forEach(((e,t)=>{(0,a.dispatch)("core/block-editor").updateBlockAttributes(e.clientId,{isOnlyText:k,step:t+1})}))}),[w,k]),(0,c.useEffect)((()=>{r||l({uniqueId:"steps-"+t.slice(0,8)})}),[t,r,l]);const y=`\n\t\t.${r} .step .number {\n\t\t\tbackground-color: ${u};\n\t\t}\n\n\t\t.${r} .step .line {\n\t\t\tborder: 2px ${f} ${u};\n\t\t}\n\n\t\t.${r} .step .number {\n\t\t\tcolor: ${p};\n\t\t}\n\n\t\t.${r} .step .title {\n\t\t\tcolor: ${m};\n\t\t}\n\n\t\t.${r} .step .description {\n\t\t\tcolor: ${b};\n\t\t\tborder-color: ${d};\n\t\t}\n\t`;return(0,c.useEffect)((()=>{JSON.stringify(i)!==JSON.stringify(y)&&l({blockStyle:y})}),[i,y,l]),(0,o.createElement)(c.Fragment,null,(0,o.createElement)("style",null,`${((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(y)}`),(0,o.createElement)(h,{attributes:e,setAttributes:l,clientId:t}),(0,o.createElement)("div",{..._},(0,o.createElement)(s.InnerBlocks,{allowedBlocks:[S],template:[[S]],renderAppender:()=>(0,o.createElement)(s.InnerBlocks.ButtonBlockAppender,null)})))},save:({attributes:{uniqueId:e}})=>{const t=s.useBlockProps.save({className:n()(e,"wp-custom-blocks-steps")});return(0,o.createElement)("div",{...t},(0,o.createElement)(s.InnerBlocks.Content,null))}})})()})();