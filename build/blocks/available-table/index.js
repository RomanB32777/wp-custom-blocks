(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=c(e,a(l)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=c(t,l));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return l[e](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var a=Object.create(null);r.r(a);var c={};e=e||[null,t({}),t([]),t(t)];for(var n=2&o&&l;"object"==typeof n&&!~e.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((e=>c[e]=()=>l[e]));return c.default=()=>l,r.d(a,c),a},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/available-table","version":"0.1.0","title":"Available table","category":"wp-custom-blocks","description":"Available table block","supports":{"html":false},"textdomain":"available-table-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=r(967),a=r.n(o);const c=window.wp.blockEditor,n=window.wp.components,s=window.wp.element,i=window.wp.i18n,m=window.wp.compose,u=(e,t)=>e[t].default,d=[{name:(0,i.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,i.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,i.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,i.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,i.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,i.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,i.__)("Color","wp-custom-blocks"),color:"#d63031"}],b=({label:e,name:t,disabled:o,attributes:r,defaultAttributes:c,setAttributes:p})=>{const[f,w]=(0,s.useState)(!1),y=`color-control-${(0,m.useInstanceId)(b)}`,v=r[t],k=e=>p({[t]:e});return(0,l.createElement)(n.Flex,null,(0,l.createElement)(n.FlexBlock,null,(0,l.createElement)(n.BaseControl,{id:y,label:e,className:a()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(n.FlexItem,null,(0,l.createElement)(n.Button,{icon:"image-rotate",iconSize:14,label:(0,i.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>k(String(u(c,t))),className:a()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:v,disabled:!v})})),(0,l.createElement)(n.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:a()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>w(!0)},(0,l.createElement)(n.ColorIndicator,{colorValue:v})),f&&(0,l.createElement)(n.Popover,{position:"bottom right",onFocusOutside:()=>w(!1),offset:5},(0,l.createElement)(n.ColorPicker,{color:v,onChange:e=>k(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,i.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},d.map(((e,t)=>(0,l.createElement)(n.ColorIndicator,{className:a()({active:e.color===v}),title:e.name,key:t,colorValue:e.color,onClick:()=>k(e.color)}))))))))},p=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var f=r.t(p,2);const w=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var y=r.t(w,2);const v=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var k=r.t(v,2);const g={DEFAULT:"#5db24e",grizzly:"#a689ff80",light:"#c1adff",brightest:"#a689ff00"},E={DEFAULT:"#000",grizzly:"#2a2a2a",opacity:"#000c"},h={DEFAULT:"#fff",light:"#f8f8f8",opacity:"#f2eff833"},_=(Array.from(y),Array.from(k),Array.from(f),String(Math.random())),C={uniqueId:{type:"string"},blockStyle:{type:"object"},columns:{type:"object",default:{[_]:""}},rows:{type:"object",default:{[String(Math.random())]:{[_]:""}}},backgroundOddColor:{type:"string",default:g.light},backgroundEvenColor:{type:"string",default:h.DEFAULT},borderRadius:{type:"number",default:8},rowColor:{type:"string",default:E.DEFAULT},columnColor:{type:"string",default:E.DEFAULT},activeIcon:{type:"object",default:{}},inactiveIcon:{type:"object",default:{}}},O=({attributes:e,setAttributes:t})=>{const{borderRadius:o}=e,r={attributes:e,defaultAttributes:C,setAttributes:t};return(0,l.createElement)(c.InspectorControls,null,(0,l.createElement)(n.PanelBody,{title:(0,i.__)("Table settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(b,{name:"backgroundOddColor",label:(0,i.__)("Background odd rows color","wp-custom-blocks"),...r}),(0,l.createElement)(n.CardDivider,null),(0,l.createElement)(b,{name:"backgroundEvenColor",label:(0,i.__)("Background even rows color","wp-custom-blocks"),...r}),(0,l.createElement)(n.CardDivider,null),(0,l.createElement)(b,{name:"columnColor",label:(0,i.__)("Column color","wp-custom-blocks"),...r}),(0,l.createElement)(n.CardDivider,null),(0,l.createElement)(b,{name:"rowColor",label:(0,i.__)("Row color","wp-custom-blocks"),...r}),(0,l.createElement)(n.CardDivider,null),(0,l.createElement)(n.RangeControl,{label:(0,i.__)("Block radius","wp-custom-blocks"),value:o,onChange:e=>t({borderRadius:e}),step:1,min:0,max:100,allowReset:!0,resetFallbackValue:Number(u(C,"borderRadius"))})))},{name:x,...I}=t;(0,e.registerBlockType)(x,{...I,icon:"editor-table",attributes:C,edit:({attributes:e,setAttributes:t,clientId:o})=>{const{rows:r,columns:m,uniqueId:u,blockStyle:d,backgroundOddColor:b,backgroundEvenColor:p,columnColor:f,rowColor:w,borderRadius:y,activeIcon:v,inactiveIcon:k}=e,g=(0,c.useBlockProps)({className:a()(u,"font-inter"),style:{marginRight:0,marginLeft:0,maxWidth:"none"}}),[E,h]=(0,s.useState)((()=>new Set(Object.keys(r)))),[_,C]=(0,s.useState)((()=>new Set(Object.keys(m)))),[x,I]=(0,s.useState)(),j=[{icon:"table-row-after",title:(0,i.__)("Insert row","wp-custom-blocks"),onClick:()=>{const e=String(Math.random());E.has(e)||(h(E.add(e)),t({rows:{...r,[e]:Object.fromEntries(Object.keys(m).map(((e,t)=>[e,0===t&&""])))}}))}},{icon:"table-row-delete",title:(0,i.__)("Delete row","wp-custom-blocks"),isDisabled:!x?.rowId,onClick:()=>{x?.rowId&&(h((e=>(e.delete(x.rowId),e))),t({rows:Object.fromEntries(Object.entries(r).filter((([e])=>e!==x.rowId)))}),I(void 0))}},{icon:"table-col-after",title:(0,i.__)("Insert column","wp-custom-blocks"),onClick:()=>{const e=String(Math.random());if(!_.has(e)){C(_.add(e));const l=Object.entries(r).map((([t,l])=>[t,{...l,[e]:1===_.size&&""}]));t({rows:Object.fromEntries(l)}),t({columns:{...m,[e]:""}})}}},{icon:"table-col-delete",title:(0,i.__)("Delete column","wp-custom-blocks"),isDisabled:!x?.colId,onClick:()=>{x?.colId&&(C((e=>(e.delete(x.colId),e))),t({columns:Object.fromEntries(Object.entries(m).filter((([e])=>e!==x.colId))),rows:Object.fromEntries(Object.entries(r).map((([e,t])=>[e,Object.fromEntries(Object.entries(t).filter((([e])=>e!==x.colId)))])))}),I(void 0))}}],S=`\n\t\t.${u} tbody tr:nth-child(odd) > * {\n\t\t\tbackground-color: ${b};\n\t\t}\n\n\t\t.${u} tbody tr:nth-child(even) > * {\n\t\t\tbackground-color: ${p};\n\t\t}\n\t`;return(0,s.useEffect)((()=>{JSON.stringify(d)!==JSON.stringify(S)&&t({blockStyle:S})}),[d,S,t]),(0,s.useEffect)((()=>{u||t({uniqueId:"available-table-"+o.slice(0,8)})}),[o,t,u]),(0,l.createElement)(s.Fragment,null,(0,l.createElement)("style",null,`${((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(S)}`),(0,l.createElement)(O,{attributes:e,setAttributes:t}),(0,l.createElement)(c.BlockControls,{controls:[]},(0,l.createElement)(n.ToolbarGroup,null,(0,l.createElement)(c.MediaUploadCheck,null,(0,l.createElement)(c.MediaUpload,{onSelect:e=>t({activeIcon:e}),allowedTypes:["image"],value:v.id,render:({open:e})=>(0,l.createElement)(n.ToolbarButton,{label:(0,i.__)("Edit Active Icon","wp-custom-blocks"),placeholder:(0,i.__)("Edit Active Icon","wp-custom-blocks"),onClick:e,icon:"yes"})})),(0,l.createElement)(c.MediaUploadCheck,null,(0,l.createElement)(c.MediaUpload,{onSelect:e=>t({inactiveIcon:e}),allowedTypes:["image"],value:k.id,render:({open:e})=>(0,l.createElement)(n.ToolbarButton,{label:(0,i.__)("Edit Inactive Icon","wp-custom-blocks"),placeholder:(0,i.__)("Edit Inactive Icon","wp-custom-blocks"),onClick:e,icon:"no"})})))),(0,l.createElement)(c.BlockControls,{controls:void 0,children:(0,l.createElement)(n.ToolbarGroup,null,(0,l.createElement)(n.DropdownMenu,{controls:j,icon:"grid-view",label:"Select a direction."}))}),(0,l.createElement)("div",{...g},(0,l.createElement)("div",{className:"relative overflow-x-auto"},(0,l.createElement)("table",{className:"available-table w-full text-base"},(0,l.createElement)("thead",{className:"text-base font-medium"},(0,l.createElement)("tr",null,Object.entries(m).map((([e,o],r)=>(0,l.createElement)("th",{key:e,className:a()("p-2",r>0?"text-center":"text-left"),scope:"col",onClick:()=>I({colId:r>0?e:void 0,rowId:void 0})},(0,l.createElement)(c.RichText,{tagName:"span",value:o,onChange:l=>{t({columns:{...m,[e]:l}})},placeholder:(0,i.__)("Column text..","wp-custom-blocks"),style:{color:f}})))))),(0,l.createElement)("tbody",null,Array.from(E).map(((e,o,s)=>{const m=r[e];return(0,l.createElement)("tr",{key:e,className:a()("font-semibold text-base",{"border-4 border-red":x?.rowId===e})},Object.entries(m).map((([m,u],d,b)=>{const p=r[e],f=0===d,v=d===b.length-1,k={className:a()("p-2 text-left relative",{"border-x-4 border-red":x?.colId===m})};f?(k.scope="row",0===o&&(k.style={...k.style,borderTopLeftRadius:y}),o===s.length-1&&(k.style={...k.style,borderBottomLeftRadius:y})):k.onClick=()=>I({colId:m,rowId:e}),v&&(0===o&&(k.style={...k.style,borderTopRightRadius:y}),o===s.length-1&&(k.style={...k.style,borderBottomRightRadius:y}));const g=f?"th":"td",E=l=>{p[m]=l,t({rows:{...r,[e]:p}})};return(0,l.createElement)(g,{key:d,...k},"boolean"==typeof u?(0,l.createElement)(n.CheckboxControl,{checked:u,onChange:E,className:"flex justify-center"}):(0,l.createElement)(c.RichText,{tagName:"span",value:u,onChange:E,placeholder:(0,i.__)("Row name..","wp-custom-blocks"),style:{color:w}}))})))})))))))},save:({attributes:e})=>{const{rows:t,columns:o,uniqueId:r,columnColor:n,rowColor:s,borderRadius:i,activeIcon:m,inactiveIcon:u}=e,d=c.useBlockProps.save({className:r});return(0,l.createElement)("div",{...d},(0,l.createElement)("div",{className:"relative overflow-x-auto"},(0,l.createElement)("table",{className:"available-table w-full text-base"},(0,l.createElement)("thead",{className:"text-base font-medium",style:{color:n}},(0,l.createElement)("tr",null,Object.entries(o).map((([e,t],o)=>(0,l.createElement)("th",{key:e,className:a()("p-2",o>0?"text-center":"text-left"),scope:"col"},t))))),(0,l.createElement)("tbody",null,Object.entries(t).map((([e,t],o,r)=>(0,l.createElement)("tr",{key:e,className:"font-semibold text-base"},Object.values(t).map(((e,t,a)=>{const c=0===t,n=t===a.length-1,d={className:"p-2",style:{color:s}};c&&(d.scope="row",0===o&&(d.style={...d.style,borderTopLeftRadius:i}),o===r.length-1&&(d.style={...d.style,borderBottomLeftRadius:i})),n&&(0===o&&(d.style={...d.style,borderTopRightRadius:i}),o===r.length-1&&(d.style={...d.style,borderBottomRightRadius:i}));const b=c?"th":"td";let p=null;if("boolean"==typeof e){const t=e?m:u;p=t.url?(0,l.createElement)("div",{className:"flex justify-center"},(0,l.createElement)("div",{className:"min-w-6 min-h-6 w-6 h-6 overflow-hidden"},(0,l.createElement)("img",{className:"!w-full !h-full",src:t.url,alt:t.alt,width:t.width,height:t.height}))):String(e)}else p=e;return(0,l.createElement)(b,{key:t,...d},(0,l.createElement)("div",{className:c?"text-left":"text-center"},p))})))))))))}})})()})();