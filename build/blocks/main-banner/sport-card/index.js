(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=n(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=n(t,l));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return l[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var r=Object.create(null);a.r(r);var n={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&l;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>n[e]=()=>l[e]));return n.default=()=>l,a.d(r,n),r},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/sport-card","version":"0.1.0","title":"Banner sport card","category":"wp-custom-blocks","description":"Banner sport card","parent":["wp-custom-blocks/banner"],"supports":{"html":false},"textdomain":"sport-card","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=a(967),r=a.n(o);const n=window.wp.blockEditor,c=window.wp.components,s=window.wp.element,i=window.wp.i18n,m=window.wp.compose,u=[{name:(0,i.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,i.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,i.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,i.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,i.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,i.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#d63031"}],p=({label:e,name:t,disabled:o,attributes:a,defaultAttributes:n,setAttributes:d})=>{const[b,f]=(0,s.useState)(!1),g=`color-control-${(0,m.useInstanceId)(p)}`,w=a[t],k=e=>d({[t]:e});return(0,l.createElement)(c.Flex,null,(0,l.createElement)(c.FlexBlock,null,(0,l.createElement)(c.BaseControl,{id:g,label:e,className:r()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(c.FlexItem,null,(0,l.createElement)(c.Button,{icon:"image-rotate",iconSize:14,label:(0,i.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>k(String(((e,t)=>e[t].default)(n,t))),className:r()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:w,disabled:!w})})),(0,l.createElement)(c.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:r()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>f(!0)},(0,l.createElement)(c.ColorIndicator,{colorValue:w})),b&&(0,l.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>f(!1),offset:5},(0,l.createElement)(c.ColorPicker,{color:w,onChange:e=>k(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,i.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},u.map(((e,t)=>(0,l.createElement)(c.ColorIndicator,{className:r()({active:e.color===w}),title:e.name,key:t,colorValue:e.color,onClick:()=>k(e.color)}))))))))},d=({label:e,link:t,linkName:o,setAttributes:a})=>(0,l.createElement)("div",{className:"w-72 p-2"},(0,l.createElement)(c.TextControl,{label:e,value:t.url,onChange:e=>{a({[o]:{...t,url:e}})}}),(0,l.createElement)(c.ToggleControl,{label:(0,i.__)("Open in new tab","wp-custom-blocks"),checked:t&&t.openInNewTab,onChange:()=>{a({[o]:{...t,openInNewTab:!t.openInNewTab}})}})),b="slider-sport-card",f=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var g=a.t(f,2);const w=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var k=a.t(w,2);const v=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var h=a.t(v,2);const E={DEFAULT:"#621fbe",grizzly:"#a5d6c6",light:"#e1d1f1",brightest:"#f3eff9"},_={DEFAULT:"#121212",grizzly:"#4e4e53",opacity:"#000c"},C=(Array.from(k),Array.from(h),Array.from(g),{name:{type:"string"},nameColor:{type:"string",default:_.DEFAULT},link:{type:"object",default:{url:"#",openInNewTab:!0}},linkText:{type:"string"},linkColor:{type:"string",default:E.DEFAULT},backgroundImg:{type:"object",default:{}},icon:{type:"object",default:{}},arrowColor:{type:"string",default:E.DEFAULT}}),y=({attributes:e,setAttributes:t})=>{const{linkText:o}=e,a={attributes:e,defaultAttributes:C,setAttributes:t};return(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(c.PanelBody,{title:(0,i.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(p,{name:"nameColor",label:(0,i.__)("Name Color","wp-custom-blocks"),...a}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(p,{name:"arrowColor",label:(0,i.__)("Arrow Color","wp-custom-blocks"),...a}),(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(c.ToggleControl,{label:(0,i.__)("With only text","wp-custom-blocks"),checked:!!o,onChange:()=>t({linkText:o?"":"See more"})}),o&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.CardDivider,null),(0,l.createElement)(p,{name:"linkColor",label:(0,i.__)("Link Color","wp-custom-blocks"),...a}))))},{name:x,...N}=t;(0,e.registerBlockType)(x,{...N,icon:"block-default",attributes:C,edit:({attributes:e,setAttributes:t})=>{const{name:o,nameColor:a,backgroundImg:m,link:u,icon:p,arrowColor:f,linkText:g,linkColor:w}=e,[k,v]=(0,s.useState)(!1),h=()=>v((e=>!e)),E=(0,n.useBlockProps)({className:r()(b,"slider-item w-full"),style:{margin:0}});return(0,l.createElement)(s.Fragment,null,(0,l.createElement)(y,{attributes:e,setAttributes:t}),(0,l.createElement)(n.BlockControls,{controls:[]},(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(n.MediaUploadCheck,null,(0,l.createElement)(n.MediaUpload,{onSelect:e=>t({backgroundImg:e}),allowedTypes:["image"],value:m.id,render:({open:e})=>(0,l.createElement)(c.ToolbarButton,{label:(0,i.__)("Edit background image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,i.__)("Edit background image","wp-custom-blocks")})})))),!g&&(0,l.createElement)(n.BlockControls,{controls:[]},(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(n.MediaUploadCheck,null,(0,l.createElement)(n.MediaUpload,{onSelect:e=>t({icon:e}),allowedTypes:["image"],value:p&&p.id,render:({open:e})=>(0,l.createElement)(c.ToolbarButton,{label:(0,i.__)("Edit icon","wp-custom-blocks"),onClick:e,icon:"info-outline",placeholder:(0,i.__)("Edit icon","wp-custom-blocks")})})))),(0,l.createElement)(n.BlockControls,{controls:[]},(0,l.createElement)(s.Fragment,null,(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(c.ToolbarButton,{label:(0,i.__)("Add Link","wp-custom-blocks"),onClick:h,icon:"admin-links",placeholder:(0,i.__)("Add Link","wp-custom-blocks")})),k&&(0,l.createElement)(c.Popover,{position:"bottom right",onFocusOutside:h,offset:5},(0,l.createElement)(d,{link:u,linkName:"link",label:(0,i.__)("Link","wp-custom-blocks"),setAttributes:t})))),(0,l.createElement)("div",{...E},(0,l.createElement)("div",{className:"group relative"},(0,l.createElement)("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none h-96"},m?(0,l.createElement)("img",{className:"!h-full w-full object-cover object-center",src:m.url,alt:m.alt}):(0,l.createElement)("div",{className:"h-96 w-96 bg-gray-200"})),g?(0,l.createElement)("div",{className:"absolute inset-0 flex items-center"},(0,l.createElement)(n.RichText,{tagName:"span",className:"mx-auto font-black italic text-base uppercase no-underline",value:g,onChange:e=>t({linkText:e}),placeholder:(0,i.__)("Link text..","wp-custom-blocks"),style:{color:w}})):(0,l.createElement)("div",{className:"absolute inset-x-0 bottom-0 bg-white mx-4 mb-4 rounded-lg lg:mx-6 lg:mb-6"},(0,l.createElement)("div",{className:"px-4 py-3 flex justify-between items-center"},(0,l.createElement)("div",{className:"flex items-center"},(0,l.createElement)("div",{className:"bg-primary overflow-hidden rounded-md w-10 h-10 mr-3 p-2"},p&&(0,l.createElement)("img",{className:"!h-full w-full object-cover object-center",src:p.url,alt:p.alt})),(0,l.createElement)(n.RichText,{tagName:"p",className:"ml-3 text-sm font-semibold italic lg:text-lg",value:o,onChange:e=>t({name:e}),placeholder:(0,i.__)("Sport name..","wp-custom-blocks"),style:{color:a}})),(0,l.createElement)("div",{className:"rotate-6",style:{color:f}},(0,l.createElement)("svg",{width:"9",height:"13",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z",fill:"currentColor"}))))))))},save:({attributes:e})=>{const{name:t,nameColor:o,backgroundImg:a,link:c,icon:s,arrowColor:i,linkText:m,linkColor:u}=e,p=n.useBlockProps.save({className:r()(b,"swiper-slide")});return(0,l.createElement)("div",{...p},(0,l.createElement)("div",{className:"group relative"},(0,l.createElement)("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 h-96 lg:aspect-none"},a.url&&(0,l.createElement)("img",{className:"h-full w-full object-cover object-center",src:a.url,alt:a.alt,width:a.width,height:a.height})),m?(0,l.createElement)("div",{className:"absolute inset-0 flex items-center"},(0,l.createElement)("a",{href:c.url,target:c.openInNewTab?"_blank":"_self",rel:c.openInNewTab?"noopener noreferrer":"noopener",className:"mx-auto text-primary font-black italic text-base uppercase no-underline"},(0,l.createElement)(n.RichText.Content,{tagName:"span",value:m,style:{color:u}}))):(0,l.createElement)("div",{className:"absolute inset-x-0 bottom-0 bg-white mx-4 mb-4 rounded-lg lg:mx-6 lg:mb-6"},(0,l.createElement)("a",{href:c.url,target:c.openInNewTab?"_blank":"_self",rel:c.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline"},(0,l.createElement)("div",{className:"px-4 py-3 flex justify-between items-center"},(0,l.createElement)("div",{className:"flex items-center"},s.url&&(0,l.createElement)("div",{className:"bg-primary overflow-hidden rounded-md w-10 h-10 mr-3 p-2"},(0,l.createElement)("img",{className:"h-full w-full object-cover object-center",src:s.url,alt:s.alt,width:s.width,height:s.height})),(0,l.createElement)(n.RichText.Content,{tagName:"p",className:"text-sm font-semibold italic lg:text-lg",value:t,style:{color:o}})),(0,l.createElement)("div",{className:"rotate-6",style:{color:i}},(0,l.createElement)("svg",{width:"9",height:"13",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z",fill:"currentColor"}))))))))}})})()})();