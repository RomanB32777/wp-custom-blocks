(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=n(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=n(t,l));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return l[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var r=Object.create(null);a.r(r);var n={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&l;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>n[e]=()=>l[e]));return n.default=()=>l,a.d(r,n),r},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/card","version":"0.1.0","title":"Card item block","category":"wp-custom-blocks","description":"Card item block","parent":["wp-custom-blocks/cards"],"supports":{"html":false},"textdomain":"card-item-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=a(967),r=a.n(o);const n=window.wp.blockEditor,c=window.wp.components,s=window.wp.element,i=window.wp.i18n,u=window.wp.compose,m=[{name:(0,i.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,i.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,i.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,i.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,i.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,i.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#d63031"}],b=({label:e,name:t,disabled:o,attributes:a,defaultAttributes:n,setAttributes:d})=>{const[p,f]=(0,s.useState)(!1),g=`color-control-${(0,u.useInstanceId)(b)}`,w=a[t],v=e=>d({[t]:e});return(0,l.createElement)(c.Flex,null,(0,l.createElement)(c.FlexBlock,null,(0,l.createElement)(c.BaseControl,{id:g,label:e,className:r()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(c.FlexItem,null,(0,l.createElement)(c.Button,{icon:"image-rotate",iconSize:14,label:(0,i.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>v(String(((e,t)=>e[t].default)(n,t))),className:r()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:w,disabled:!w})})),(0,l.createElement)(c.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:r()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>f(!0)},(0,l.createElement)(c.ColorIndicator,{colorValue:w})),p&&(0,l.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>f(!1),offset:5},(0,l.createElement)(c.ColorPicker,{color:w,onChange:e=>v(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,i.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},m.map(((e,t)=>(0,l.createElement)(c.ColorIndicator,{className:r()({active:e.color===w}),title:e.name,key:t,colorValue:e.color,onClick:()=>v(e.color)}))))))))},d=({label:e,link:t,linkName:o,setAttributes:a})=>(0,l.createElement)("div",{className:"w-72 p-2"},(0,l.createElement)(c.TextControl,{label:e,value:t.url,onChange:e=>{a({[o]:{...t,url:e}})}}),(0,l.createElement)(c.ToggleControl,{label:(0,i.__)("Open in new tab","wp-custom-blocks"),checked:t&&t.openInNewTab,onChange:()=>{a({[o]:{...t,openInNewTab:!t.openInNewTab}})}})),p=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var f=a.t(p,2);const g=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var w=a.t(g,2);const v=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var k=a.t(v,2);const _={DEFAULT:"#a689ff",grizzly:"#a689ff80",light:"#c1adff",brightest:"#a689ff00"},h={DEFAULT:"#fff",light:"#b2bec3",opacity:"#f2eff833"},y=(Array.from(w),Array.from(k),Array.from(f),{uniqueId:{type:"string"},link:{type:"object",default:{url:"#",openInNewTab:!0}},title:{type:"string"},isParentStyles:{type:"boolean",default:!0},titleColor:{type:"string",default:h.DEFAULT},buttonText:{type:"string",default:"Play"},buttonTextColor:{type:"string",default:h.DEFAULT},buttonColor:{type:"string",default:_.DEFAULT},image:{type:"object",default:{}}}),E=({attributes:e,setAttributes:t})=>{const{isParentStyles:o}=e,a={attributes:e,defaultAttributes:y,setAttributes:t};return(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(c.PanelBody,{title:(0,i.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(b,{name:"titleColor",label:(0,i.__)("Title color","wp-custom-blocks"),disabled:o,...a}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(b,{name:"buttonColor",label:(0,i.__)("Button color","wp-custom-blocks"),disabled:o,...a}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(b,{name:"buttonTextColor",label:(0,i.__)("Button text color","wp-custom-blocks"),disabled:o,...a})))},{name:C,...x}=t;(0,e.registerBlockType)(C,{...x,attributes:y,edit:({attributes:e,setAttributes:t,clientId:o})=>{const{uniqueId:a,link:u,title:m,isParentStyles:b,titleColor:p,buttonText:f,buttonTextColor:g,buttonColor:w,image:v}=e,[k,_]=(0,s.useState)(!1),h=(0,n.useBlockProps)({className:r()(a,"item-card w-full"),style:{margin:0}});return(0,s.useEffect)((()=>{a||t({uniqueId:"card-"+o.slice(0,8)})}),[o,t,a]),(0,l.createElement)(s.Fragment,null,(0,l.createElement)(E,{attributes:e,setAttributes:t}),(0,l.createElement)(n.BlockControls,{controls:[]},(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(n.MediaUploadCheck,null,(0,l.createElement)(n.MediaUpload,{onSelect:e=>t({image:e}),allowedTypes:["image"],value:v.id,render:({open:e})=>(0,l.createElement)(c.ToolbarButton,{label:(0,i.__)("Edit image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,i.__)("Edit image","wp-custom-blocks")})})))),(0,l.createElement)(n.BlockControls,{controls:void 0},(0,l.createElement)(s.Fragment,null,(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(c.ToolbarButton,{label:(0,i.__)("Add Link","wp-custom-blocks"),onClick:()=>_(!0),icon:"admin-links",placeholder:(0,i.__)("Add Link","wp-custom-blocks")})),k&&(0,l.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>_(!1),offset:5},(0,l.createElement)(d,{link:u,linkName:"link",label:(0,i.__)("Link","wp-custom-blocks"),setAttributes:t})))),(0,l.createElement)("div",{...h},(0,l.createElement)("div",{className:"group relative h-full"},(0,l.createElement)("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 h-full lg:aspect-none"},v.url&&(0,l.createElement)("img",{className:"!h-full w-full object-cover object-center",src:v.url,alt:v.alt,width:v.width,height:v.height})),(0,l.createElement)("div",{className:"absolute inset-0 rounded-lg flex justify-center items-center"},(0,l.createElement)("button",{className:"relative rounded-lg p-3 mx-3 min-w-28",type:"button","aria-expanded":"false",style:{backgroundColor:b?void 0:w}},(0,l.createElement)(n.RichText,{tagName:"span",className:"font-roboto text-base font-black mx-auto",value:f,onChange:e=>t({buttonText:e}),placeholder:(0,i.__)("Button text..","wp-custom-blocks"),style:{color:b?void 0:g}}))),(0,l.createElement)("div",{className:"absolute inset-x-0 bottom-0"},(0,l.createElement)(n.RichText,{tagName:"p",className:"title font-roboto m-0 px-3 pb-1 text-base font-semibold",value:m,onChange:e=>t({title:e}),placeholder:(0,i.__)("Title name..","wp-custom-blocks"),style:{color:b?void 0:p}})))))},save:({attributes:e})=>{const{uniqueId:t,link:o,title:a,isParentStyles:c,titleColor:s,buttonText:i,buttonTextColor:u,buttonColor:m,image:b}=e,d=n.useBlockProps.save({className:r()(t,"item-card w-full")});return(0,l.createElement)("div",{...d},(0,l.createElement)("div",{className:"group relative h-full"},(0,l.createElement)("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 h-full lg:aspect-none"},b.url&&(0,l.createElement)("img",{className:"!h-full w-full object-cover object-center",src:b.url,alt:b.alt,width:b.width,height:b.height})),(0,l.createElement)("div",{className:"absolute inset-x-0 bottom-0"},(0,l.createElement)(n.RichText.Content,{tagName:"p",className:"title font-roboto m-0 px-3 pb-1 text-base font-semibold",value:a,style:{color:c?void 0:s}})),(0,l.createElement)("div",{className:"absolute inset-0 rounded-lg flex justify-center items-center invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-dark-opacity duration-200"},(0,l.createElement)("a",{href:o.url,target:o.openInNewTab?"_blank":"_self",rel:o.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline"},(0,l.createElement)("button",{className:"relative rounded-lg p-3 mx-3 min-w-28",type:"button","aria-expanded":"false",style:{backgroundColor:c?void 0:m}},(0,l.createElement)(n.RichText.Content,{tagName:"span",className:"font-roboto text-base font-black mx-auto",value:i,style:{color:c?void 0:u}}))))))}})})()})();