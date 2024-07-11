(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=n(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=n(t,l));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return l[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var r=Object.create(null);a.r(r);var n={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&l;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>n[e]=()=>l[e]));return n.default=()=>l,a.d(r,n),r},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/bonus","version":"0.1.0","title":"Bonus item","category":"wp-custom-blocks","description":"Bonus item block","parent":["wp-custom-blocks/bonuses"],"supports":{"html":false},"textdomain":"bonus-item-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=a(967),r=a.n(o);const n=window.wp.blockEditor,c=window.wp.components,s=window.wp.element,i=window.wp.i18n,u=window.wp.compose,m=[{name:(0,i.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,i.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,i.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,i.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,i.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,i.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#d63031"}],b=({label:e,name:t,disabled:o,attributes:a,defaultAttributes:n,setAttributes:d})=>{const[p,f]=(0,s.useState)(!1),w=`color-control-${(0,u.useInstanceId)(b)}`,g=a[t],k=e=>d({[t]:e});return(0,l.createElement)(c.Flex,null,(0,l.createElement)(c.FlexBlock,null,(0,l.createElement)(c.BaseControl,{id:w,label:e,className:r()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(c.FlexItem,null,(0,l.createElement)(c.Button,{icon:"image-rotate",iconSize:14,label:(0,i.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>k(String(((e,t)=>e[t].default)(n,t))),className:r()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:g,disabled:!g})})),(0,l.createElement)(c.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:r()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>f(!0)},(0,l.createElement)(c.ColorIndicator,{colorValue:g})),p&&(0,l.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>f(!1),offset:5},(0,l.createElement)(c.ColorPicker,{color:g,onChange:e=>k(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,i.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},m.map(((e,t)=>(0,l.createElement)(c.ColorIndicator,{className:r()({active:e.color===g}),title:e.name,key:t,colorValue:e.color,onClick:()=>k(e.color)}))))))))},d=({label:e,link:t,linkName:o,setAttributes:a})=>(0,l.createElement)("div",{className:"w-72 p-2"},(0,l.createElement)(c.TextControl,{label:e,value:t.url,onChange:e=>{a({[o]:{...t,url:e}})}}),(0,l.createElement)(c.ToggleControl,{label:(0,i.__)("Open in new tab","wp-custom-blocks"),checked:t&&t.openInNewTab,onChange:()=>{a({[o]:{...t,openInNewTab:!t.openInNewTab}})}})),p=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var f=a.t(p,2);const w=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var g=a.t(w,2);const k=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var _=a.t(k,2);const v={DEFAULT:"#39c7f3",light:"#e3ae6f"},E={DEFAULT:"#d63031"},x=(Array.from(g),Array.from(_),Array.from(f),{uniqueId:{type:"string"},link:{type:"object",default:{url:"#",openInNewTab:!0}},isParentStyles:{type:"boolean",default:!0},backgroundColor:{type:"string",default:E.DEFAULT},title:{type:"string"},titleColor:{type:"string",default:v.DEFAULT},buttonText:{type:"string",default:"Sign Up Now"},buttonTextColor:{type:"string",default:E.DEFAULT},buttonColor:{type:"string",default:v.DEFAULT},image:{type:"object",default:{}}}),h=({attributes:e,setAttributes:t})=>{const{isParentStyles:o}=e,a={attributes:e,defaultAttributes:x,setAttributes:t};return(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(c.PanelBody,{title:(0,i.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(b,{name:"backgroundColor",label:(0,i.__)("Background color","wp-custom-blocks"),disabled:o,...a}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(b,{name:"titleColor",label:(0,i.__)("Title color","wp-custom-blocks"),disabled:o,...a}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(b,{name:"buttonColor",label:(0,i.__)("Button color","wp-custom-blocks"),disabled:o,...a}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(b,{name:"buttonTextColor",label:(0,i.__)("Button text color","wp-custom-blocks"),disabled:o,...a})))},{name:y,...C}=t;(0,e.registerBlockType)(y,{...C,attributes:x,edit:({attributes:e,setAttributes:t,clientId:o})=>{const{uniqueId:a,link:u,isParentStyles:m,backgroundColor:b,title:p,titleColor:f,buttonText:w,buttonTextColor:g,buttonColor:k,image:_}=e,[v,E]=(0,s.useState)(!1),x=(0,n.useBlockProps)({className:r()(a,"bonus w-full p-2 rounded-xl md:!rounded-3xl"),style:{backgroundColor:m?void 0:b,margin:0}});return(0,s.useEffect)((()=>{a||t({uniqueId:"bonus-"+o.slice(0,8)})}),[o,t,a]),(0,l.createElement)(s.Fragment,null,(0,l.createElement)(h,{attributes:e,setAttributes:t}),_.id&&(0,l.createElement)(n.BlockControls,{controls:[]},(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(n.MediaUploadCheck,null,(0,l.createElement)(n.MediaUpload,{onSelect:e=>t({image:e}),allowedTypes:["image"],value:_.id,render:({open:e})=>(0,l.createElement)(c.ToolbarButton,{label:(0,i.__)("Edit image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,i.__)("Edit image","wp-custom-blocks")})})))),(0,l.createElement)(n.BlockControls,{controls:void 0},(0,l.createElement)(s.Fragment,null,(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(c.ToolbarButton,{label:(0,i.__)("Add Link","wp-custom-blocks"),onClick:()=>E(!0),icon:"admin-links",placeholder:(0,i.__)("Add Link","wp-custom-blocks")})),v&&(0,l.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>E(!1),offset:5},(0,l.createElement)(d,{link:u,linkName:"link",label:(0,i.__)("Link","wp-custom-blocks"),setAttributes:t})))),(0,l.createElement)("div",{...x},(0,l.createElement)("div",{className:"relative h-full flex flex-col items-center justify-between"},_.url?(0,l.createElement)("div",{className:"overflow-hidden max-h-48 w-full rounded-xl"},(0,l.createElement)("img",{className:"!h-full w-full object-cover object-center",src:_.url,alt:_.alt,width:_.width,height:_.height})):(0,l.createElement)(n.MediaPlaceholder,{onSelect:e=>t({image:e}),allowedTypes:["image"],multiple:!1,labels:{title:(0,i.__)("Image","wp-custom-blocks"),instructions:(0,i.__)("Upload image","wp-custom-blocks")},icon:"format-image",onHTMLDrop:void 0}),(0,l.createElement)(n.RichText,{tagName:"p",className:"title m-0 text-3xl font-semibold text-center",value:p,onChange:e=>t({title:e}),placeholder:(0,i.__)("Title name..","wp-custom-blocks"),style:{color:m?void 0:f}}),(0,l.createElement)("button",{className:"bonus-button relative rounded-xl py-5 px-10",type:"button","aria-expanded":"false",style:{backgroundColor:m?void 0:k}},(0,l.createElement)(n.RichText,{tagName:"span",className:"button-text text-4xl font-black mx-auto",value:w,onChange:e=>t({buttonText:e}),placeholder:(0,i.__)("Button text..","wp-custom-blocks"),style:{color:m?void 0:g}})))))},save:({attributes:e})=>{const{uniqueId:t,link:o,isParentStyles:a,backgroundColor:c,title:s,titleColor:i,buttonText:u,buttonTextColor:m,buttonColor:b,image:d}=e,p=n.useBlockProps.save({className:r()(t,"bonus w-full p-2 rounded-xl md:!rounded-3xl"),style:{backgroundColor:a?void 0:c}});return(0,l.createElement)("div",{...p},(0,l.createElement)("div",{className:"relative h-full flex flex-col items-center justify-between"},d.url&&(0,l.createElement)("div",{className:"overflow-hidden max-h-48 w-full rounded-xl"},(0,l.createElement)("a",{href:o.url,target:o.openInNewTab?"_blank":"_self",rel:o.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline"},(0,l.createElement)("img",{className:"!h-full w-full object-cover object-center",src:d.url,alt:d.alt,width:d.width,height:d.height}))),(0,l.createElement)(n.RichText.Content,{tagName:"p",className:"title m-0 text-3xl font-semibold text-center",value:s,style:{color:a?void 0:i}}),(0,l.createElement)("a",{href:o.url,target:o.openInNewTab?"_blank":"_self",rel:o.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline"},(0,l.createElement)("button",{className:"bonus-button relative rounded-xl py-5 px-10",type:"button","aria-expanded":"false",style:{backgroundColor:a?void 0:b}},(0,l.createElement)(n.RichText.Content,{tagName:"span",className:"button-text text-4xl font-black mx-auto",value:u,style:{color:a?void 0:m}})))))}})})()})();