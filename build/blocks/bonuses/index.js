(()=>{var e,t,l={967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,a(l)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return l[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"==typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"==typeof l.then)return l}var a=Object.create(null);n.r(a);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&l;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>l[e]));return r.default=()=>l,n.d(a,r),a},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/bonuses","version":"0.1.0","title":"Bonuses block","category":"wp-custom-blocks","description":"Bonuses block","supports":{"html":false},"textdomain":"bonuses-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.React;var o=n(967),a=n.n(o);const r=window.wp.blockEditor,s=window.wp.components,c=window.wp.data,i=window.wp.element,m=window.wp.i18n,u=JSON.parse('{"xs":320,"sm":640,"md":768,"xl":1280}'),p=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var b=n.t(p,2);const d=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var w=n.t(d,2);const k=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var g=n.t(k,2);const f={DEFAULT:"#39c7f3",light:"#e3ae6f"},_={DEFAULT:"#d63031"},E=u,h=(Array.from(w),Array.from(g),Array.from(b),window.wp.compose),v=(e,t)=>e[t].default,C=[{name:(0,m.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,m.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,m.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,m.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,m.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,m.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,m.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,m.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,m.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,m.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,m.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,m.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,m.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,m.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,m.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,m.__)("Color","wp-custom-blocks"),color:"#d63031"}],y=({label:e,name:t,disabled:o,attributes:n,defaultAttributes:r,setAttributes:c})=>{const[u,p]=(0,i.useState)(!1),b=`color-control-${(0,h.useInstanceId)(y)}`,d=n[t],w=e=>c({[t]:e});return(0,l.createElement)(s.Flex,null,(0,l.createElement)(s.FlexBlock,null,(0,l.createElement)(s.BaseControl,{id:b,label:e,className:a()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,l.createElement)(s.FlexItem,null,(0,l.createElement)(s.Button,{icon:"image-rotate",iconSize:14,label:(0,m.__)("Reset","wp-custom-blocks"),disabled:o,size:"small",onClick:()=>w(String(v(r,t))),className:a()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:d,disabled:!d})})),(0,l.createElement)(s.FlexItem,null,(0,l.createElement)("button",{disabled:o,className:a()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>p(!0)},(0,l.createElement)(s.ColorIndicator,{colorValue:d})),u&&(0,l.createElement)(s.Popover,{position:"bottom right",onFocusOutside:()=>p(!1),offset:5},(0,l.createElement)(s.ColorPicker,{color:d,onChange:e=>w(e),enableAlpha:!0}),(0,l.createElement)("div",{className:"px-3 pb-3"},(0,l.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,m.__)("Colors Palette","wp-custom-blocks")),(0,l.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},C.map(((e,t)=>(0,l.createElement)(s.ColorIndicator,{className:a()({active:e.color===d}),title:e.name,key:t,colorValue:e.color,onClick:()=>w(e.color)}))))))))},x=({label:e,link:t,linkName:o,setAttributes:n})=>(0,l.createElement)("div",{className:"w-72 p-2"},(0,l.createElement)(s.TextControl,{label:e,value:t.url,onChange:e=>{n({[o]:{...t,url:e}})}}),(0,l.createElement)(s.ToggleControl,{label:(0,m.__)("Open in new tab","wp-custom-blocks"),checked:t&&t.openInNewTab,onChange:()=>{n({[o]:{...t,openInNewTab:!t.openInNewTab}})}})),B=()=>(0,l.createElement)("div",{style:{marginBottom:24}},(0,l.createElement)(s.Tip,null,(0,l.createElement)("p",null,"Mobile display: ",E.xs,"...",E.sm,"px"),(0,l.createElement)("p",null,"Tablet display: ",E.sm,"...",E.md,"px"),(0,l.createElement)("p",null,"Laptop display: ",E.md,"...",E.xl,"px"),(0,l.createElement)("p",null,"Desktop display: ",E.xl,"..."))),P=24,S=350,I={uniqueId:{type:"string"},blockStyle:{type:"object"},buttonText:{type:"string",default:""},buttonTextColor:{type:"string",default:_.DEFAULT},buttonColor:{type:"string",default:f.DEFAULT},link:{type:"object",default:{url:"#",openInNewTab:!0}},isParentStyles:{type:"boolean",default:!0},itemsBackgroundColor:{type:"string",default:_.DEFAULT},itemsTitleColor:{type:"string",default:f.DEFAULT},itemsButtonTextColor:{type:"string",default:_.DEFAULT},itemsButtonColor:{type:"string",default:f.DEFAULT},mobileItemsPerView:{type:"number",default:1},tabletItemsPerView:{type:"number",default:1},laptopItemsPerView:{type:"number",default:2},desktopItemsPerView:{type:"number",default:2},mobileSpaceBetween:{type:"number",default:P},tabletSpaceBetween:{type:"number",default:P},laptopSpaceBetween:{type:"number",default:P},desktopSpaceBetween:{type:"number",default:P},mobileHeight:{type:"number",default:S},tabletHeight:{type:"number",default:S},laptopHeight:{type:"number",default:S},desktopHeight:{type:"number",default:S}},T=({attributes:e,setAttributes:t})=>{const{isParentStyles:o,mobileItemsPerView:n,tabletItemsPerView:a,laptopItemsPerView:c,desktopItemsPerView:u,mobileSpaceBetween:p,tabletSpaceBetween:b,laptopSpaceBetween:d,desktopSpaceBetween:w,mobileHeight:k,tabletHeight:g,laptopHeight:f,desktopHeight:_}=e,[E,h]=(0,i.useState)(o);(0,i.useEffect)((()=>{h(o)}),[o]);const C={attributes:e,defaultAttributes:I,setAttributes:t};return(0,l.createElement)(r.InspectorControls,null,(0,l.createElement)(B,null),(0,l.createElement)(s.PanelBody,{title:(0,m.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(y,{name:"buttonColor",label:(0,m.__)("Button color","wp-custom-blocks"),...C}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(y,{name:"buttonTextColor",label:(0,m.__)("Button text color","wp-custom-blocks"),...C}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(s.ToggleControl,{label:(0,m.__)("Parent styles","wp-custom-blocks"),checked:o,onChange:()=>t({isParentStyles:!o})})),(0,l.createElement)(s.PanelBody,{title:(0,m.__)("Items styles","wp-custom-blocks"),initialOpen:E,opened:E,onToggle:()=>h(!E)},(0,l.createElement)(y,{name:"itemsBackgroundColor",label:(0,m.__)("Items background color","wp-custom-blocks"),disabled:!o,...C}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(y,{name:"itemsTitleColor",label:(0,m.__)("Items title color","wp-custom-blocks"),disabled:!o,...C}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(y,{name:"itemsButtonColor",label:(0,m.__)("Items button color","wp-custom-blocks"),disabled:!o,...C}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(y,{name:"itemsButtonTextColor",label:(0,m.__)("Items button text color","wp-custom-blocks"),disabled:!o,...C})),(0,l.createElement)(s.PanelBody,{title:(0,m.__)("Items per view settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Mobile items per view","wp-custom-blocks"),value:n,onChange:e=>t({mobileItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(v(I,"mobileItemsPerView"))}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Tablet items per view","wp-custom-blocks"),value:a,onChange:e=>t({tabletItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(v(I,"tabletItemsPerView"))}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Laptop items per view","wp-custom-blocks"),value:c,onChange:e=>t({laptopItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(v(I,"laptopItemsPerView"))}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Desktop items per view","wp-custom-blocks"),value:u,onChange:e=>t({desktopItemsPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(v(I,"desktopItemsPerView"))})),(0,l.createElement)(s.PanelBody,{title:(0,m.__)("Items between settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Mobile space between items","wp-custom-blocks"),value:p,onChange:e=>t({mobileSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:P}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Tablet space between items","wp-custom-blocks"),value:b,onChange:e=>t({tabletSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:P}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Laptop space between items","wp-custom-blocks"),value:d,onChange:e=>t({laptopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:P}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Desktop space between items","wp-custom-blocks"),value:w,onChange:e=>t({desktopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:P})),(0,l.createElement)(s.PanelBody,{title:(0,m.__)("Height items settings","wp-custom-blocks"),initialOpen:!0},(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Mobile items height","wp-custom-blocks"),value:k,onChange:e=>t({mobileHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:S}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Tablet items height","wp-custom-blocks"),value:g,onChange:e=>t({tabletHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:S}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Laptop items height","wp-custom-blocks"),value:f,onChange:e=>t({laptopHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:S}),(0,l.createElement)(s.CardDivider,null),(0,l.createElement)(s.RangeControl,{label:(0,m.__)("Desktop items height","wp-custom-blocks"),value:_,onChange:e=>t({desktopHeight:e}),step:1,min:2,max:1e3,allowReset:!0,resetFallbackValue:S})))},N="wp-custom-blocks/bonus",{name:$,...V}=t;(0,e.registerBlockType)($,{...V,icon:"screenoptions",attributes:I,edit:({attributes:e,clientId:t,setAttributes:o})=>{const{uniqueId:n,blockStyle:u,buttonText:p,buttonTextColor:b,buttonColor:d,link:w,isParentStyles:k,itemsBackgroundColor:g,itemsTitleColor:f,itemsButtonTextColor:_,itemsButtonColor:h,mobileItemsPerView:v,tabletItemsPerView:C,laptopItemsPerView:y,desktopItemsPerView:B,mobileSpaceBetween:P,tabletSpaceBetween:S,laptopSpaceBetween:I,desktopSpaceBetween:$,mobileHeight:V,tabletHeight:A,laptopHeight:O,desktopHeight:F}=e,[R,D]=(0,i.useState)(!1),H=(0,r.useBlockProps)({className:a()(n,"wp-custom-blocks-bonuses")}),j=(0,c.select)("core/block-editor").getBlocksByClientId(t)?.[0]?.innerBlocks;(0,i.useEffect)((()=>{n||o({uniqueId:"bonuses-"+t.slice(0,8)})}),[t,n,o]),(0,i.useEffect)((()=>{j?.forEach((e=>{const t={isParentStyles:k};(0,c.dispatch)("core/block-editor").updateBlockAttributes(e.clientId,t)}))}),[j,k]);const L=(0,r.useInnerBlocksProps)({className:"inner-wrapper !grid"},{allowedBlocks:[N],template:[[N]],renderAppender:()=>(0,l.createElement)(r.InnerBlocks.ButtonBlockAppender,null)}),z=`\n\t\t.${n} .inner-wrapper {\n\t\t\tgap: ${S}px;\n\t\t\tgrid-template-columns: repeat(${C}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${n} .bonus {\n\t\t\theight: ${A}px;\n\t\t}\n\t`,M=`\n\t\t.${n} .inner-wrapper {\n\t\t\tgap: ${I}px;\n\t\t\tgrid-template-columns: repeat(${y}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${n} .bonus {\n\t\t\theight: ${O}px;\n\t\t}\n\t`,U=`\n\t\t.${n} .inner-wrapper {\n\t\t\tgap: ${$}px;\n\t\t\tgrid-template-columns: repeat(${B}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${n} .bonus {\n\t\t\theight: ${F}px;\n\t\t}\n\t`,J=`\n\t\t\n\t\t.${n} .bonus {\n\t\t\tbackground-color: ${g};\n\t\t}\n\n\t\t.${n} .bonus .title {\n\t\t\tcolor: ${f};\n\t\t}\n\n\t\t.${n} .bonus .bonus-button {\n\t\t\tbackground-color: ${h};\n\t\t}\n\n\t\t.${n} .bonus .bonus-button .button-text {\n\t\t\tcolor: ${_};\n\t\t}\n\t\n\n\t\t\n\t\t.${n} .inner-wrapper {\n\t\t\tgap: ${P}px;\n\t\t\tgrid-template-columns: repeat(${v}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${n} .bonus {\n\t\t\theight: ${V}px;\n\t\t}\n\n\t\t.${n} .link-button {\n\t\t\tbackground-color: ${d};\n\t\t}\n\t\n\n\t\t@media (min-width: ${E.sm}px) {\n\t\t\t${z}\n\t\t}\n\n\t\t@media (min-width: ${E.md}px) {\n\t\t\t${M}\n\t\t}\n\n\t\t@media (min-width: ${E.xl}px) {\n\t\t\t${U}\n\t\t}\n\t`;return(0,i.useEffect)((()=>{JSON.stringify(u)!==JSON.stringify(J)&&o({blockStyle:J})}),[u,J,o]),(0,l.createElement)(i.Fragment,null,(0,l.createElement)("style",null,`${((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(J)}`),(0,l.createElement)(T,{attributes:e,setAttributes:o}),(0,l.createElement)(r.BlockControls,{controls:void 0},(0,l.createElement)(i.Fragment,null,(0,l.createElement)(s.ToolbarGroup,null,(0,l.createElement)(s.ToolbarButton,{label:(0,m.__)("Add Link","wp-custom-blocks"),onClick:()=>D(!0),icon:"admin-links",placeholder:(0,m.__)("Add Link","wp-custom-blocks")})),R&&(0,l.createElement)(s.Popover,{position:"bottom right",onFocusOutside:()=>D(!1),offset:5},(0,l.createElement)(x,{link:w,linkName:"link",label:(0,m.__)("Link","wp-custom-blocks"),setAttributes:o})))),(0,l.createElement)("div",{...H},(0,l.createElement)("div",{...L}),(0,l.createElement)("div",{className:"mt-6 text-center"},(0,l.createElement)("button",{className:"link-button relative rounded-lg py-5 px-10",type:"button","aria-expanded":"false"},(0,l.createElement)(r.RichText,{tagName:"span",className:"font-roboto text-4xl font-black mx-auto",value:p,onChange:e=>o({buttonText:e}),placeholder:(0,m.__)("Button text..","wp-custom-blocks"),style:{color:b}})))))},save:({attributes:e})=>{const{uniqueId:t,buttonText:o,buttonTextColor:n,link:s}=e,c=r.useBlockProps.save({className:a()(t,"wp-custom-blocks-bonuses")});return(0,l.createElement)("div",{...c},(0,l.createElement)("div",{className:"inner-wrapper !grid"},(0,l.createElement)(r.InnerBlocks.Content,null)),Boolean(o?.length)&&(0,l.createElement)("div",{className:"mt-6 text-center"},(0,l.createElement)("a",{href:s.url,target:s.openInNewTab?"_blank":"_self",rel:s.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline"},(0,l.createElement)("button",{className:"link-button relative rounded-lg py-5 px-10",type:"button","aria-expanded":"false"},(0,l.createElement)(r.RichText.Content,{tagName:"span",className:"font-roboto text-4xl font-black mx-auto",value:o,style:{color:n}})))))}})})()})();