(()=>{var e,t,o,l={118:(e,t,o)=>{"use strict";const l=window.wp.blocks,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/author","version":"0.1.0","title":"Author","category":"wp-custom-blocks","description":"Author block","supports":{"html":false},"textdomain":"author-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),a=window.React;var n=o(967),c=o.n(n);const s=window.wp.blockEditor,i=window.wp.coreData,u=window.wp.data,d=window.wp.element,m=window.wp.i18n,p=window.wp.components,b=window.wp.compose,f=[{name:(0,m.__)("Black","wp-landing-block"),color:"#000"},{name:(0,m.__)("White","wp-landing-block"),color:"#fff"},{name:(0,m.__)("Green","wp-landing-block"),color:"#17946d"},{name:(0,m.__)("Purple","wp-landing-block"),color:"#a689ff"},{name:(0,m.__)("Purple black","wp-landing-block"),color:"#1c1230"},{name:(0,m.__)("Blue","wp-landing-block"),color:"#3070e8"},{name:(0,m.__)("Color","wp-landing-block"),color:"#a97bff"},{name:(0,m.__)("Color","wp-landing-block"),color:"#bdabda"},{name:(0,m.__)("Color","wp-landing-block"),color:"#f5eeff"},{name:(0,m.__)("Color","wp-landing-block"),color:"#343741"},{name:(0,m.__)("Color","wp-landing-block"),color:"#2b39b4"},{name:(0,m.__)("Color","wp-landing-block"),color:"#2e3246"},{name:(0,m.__)("Color","wp-landing-block"),color:"#34495e"},{name:(0,m.__)("Color","wp-landing-block"),color:"#ff2453"},{name:(0,m.__)("Color","wp-landing-block"),color:"#ffd32a"},{name:(0,m.__)("Color","wp-landing-block"),color:"#d63031"}],g=(0,b.withInstanceId)((({label:e,color:t,onChange:o,disabled:l,instanceId:r})=>{const[n,s]=(0,d.useState)(!1),i=`color-control-${r}`;return(0,a.createElement)(p.Flex,null,(0,a.createElement)(p.FlexBlock,null,(0,a.createElement)(p.BaseControl,{id:i,label:e,className:c()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,a.createElement)(p.FlexItem,null,(0,a.createElement)(p.Button,{icon:"image-rotate",iconSize:14,label:(0,m.__)("Reset","wp-landing-block"),disabled:l,size:"small",onClick:()=>o(""),className:c()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:t,disabled:!t})})),(0,a.createElement)(p.FlexItem,null,(0,a.createElement)("button",{disabled:l,className:c()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>s(!0)},(0,a.createElement)(p.ColorIndicator,{colorValue:t})),n&&(0,a.createElement)(p.Popover,{position:"bottom right",onFocusOutside:()=>s(!1),offset:5},(0,a.createElement)(p.ColorPicker,{color:t,onChange:e=>o(e),enableAlpha:!0}),(0,a.createElement)("div",{className:"px-3 pb-3"},(0,a.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,m.__)("Colors Palette","wp-landing-block")),(0,a.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},f?.map(((e,l)=>(0,a.createElement)(p.ColorIndicator,{className:c()({active:e.color===t}),title:e.name,key:l,colorValue:e.color,onClick:()=>o(e.color)}))))))))})),v=({attributes:e,setAttributes:t})=>{const{backgroundColor:o,avatarBorderColor:l,descriptionColor:r}=e;return(0,a.createElement)(s.InspectorControls,null,(0,a.createElement)(p.PanelBody,{title:(0,m.__)("Colors","wp-custom-blocks"),initialOpen:!0},(0,a.createElement)(g,{label:(0,m.__)("Background Color","wp-custom-blocks"),color:o,onChange:e=>t({backgroundColor:e})}),(0,a.createElement)(p.CardDivider,null),(0,a.createElement)(g,{label:(0,m.__)("Avatar Border Color","wp-custom-blocks"),color:l,onChange:e=>t({avatarBorderColor:e})}),(0,a.createElement)(p.CardDivider,null),(0,a.createElement)(g,{label:(0,m.__)("Description Color","wp-custom-blocks"),color:r,onChange:e=>t({descriptionColor:e})})))},w=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var y=o.t(w,2);const _=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var k=o.t(_,2);const h=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var C=o.t(h,2);const E={DEFAULT:"#17946d",grizzly:"#a5d6c6",light:"#ceede3",brightest:"#f1fbf8"},O={DEFAULT:"#fff",light:"#f0eff8",opacity:"#f2eff833"},N=(Array.from(k),Array.from(C),Array.from(y),{uniqueId:{type:"string"},blockStyle:{type:"object"},description:{type:"string"},author:{type:"object",default:{}},backgroundColor:{type:"string",default:E.DEFAULT},avatarBorderColor:{type:"string",default:"#ffffff80"},descriptionColor:{type:"string",default:O.DEFAULT}}),{name:x,...S}=r;(0,l.registerBlockType)(x,{...S,icon:"format-status",attributes:N,edit:({attributes:e,clientId:t,setAttributes:o})=>{const{uniqueId:l,blockStyle:r,author:n,description:p,backgroundColor:b,avatarBorderColor:f,descriptionColor:g}=e,w=(0,s.useBlockProps)({className:c()(l,"wp-custom-blocks-author flex items-center p-4 rounded-lg md:!p-7")}),y=(0,u.select)("core/editor").getCurrentPostAttribute("author"),_=(0,u.useSelect)((e=>e(i.store).getEntityRecord("root","user",y)),[y]);(0,d.useEffect)((()=>{_&&o({author:_})}),[_,o]),(0,d.useEffect)((()=>{l||o({uniqueId:"banner-"+t.slice(0,8)})}),[t,l,o]);const k=`\n\t\t.${l} {\n\t\t\tbackground-color: ${b};\n\t\t}\n\t`;return(0,d.useEffect)((()=>{JSON.stringify(r)!==JSON.stringify(k)&&o({blockStyle:k})}),[r,k,o]),(0,a.createElement)(d.Fragment,null,(0,a.createElement)("style",null,`${((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(k)}`),(0,a.createElement)(v,{attributes:e,setAttributes:o}),(0,a.createElement)("div",{...w},(0,a.createElement)("div",{className:"avatar relative"},(0,a.createElement)("div",{className:"border1 absolute opacity-30 rounded-full",style:{borderColor:f}}),(0,a.createElement)("div",{className:"border2 absolute opacity-20 rounded-full",style:{borderColor:f}}),(0,a.createElement)("img",{src:n.avatar_urls?.[48],alt:n.name,className:"rounded-full",style:{borderColor:f}})),(0,a.createElement)(s.RichText,{tagName:"p",className:"ml-5 my-0 mr-0 p-0 text-sm md:!ml-6 md:!text-base",value:p,onChange:e=>o({description:e}),placeholder:(0,m.__)("Description..","wp-custom-blocks"),style:{color:g}})))},save:({attributes:e})=>{const{uniqueId:t,description:o,author:l,avatarBorderColor:r,descriptionColor:n}=e,i=s.useBlockProps.save({className:c()(t,"wp-custom-blocks-author flex items-center p-4 rounded-lg md:!p-7")});return(0,a.createElement)("div",{...i},(0,a.createElement)("div",{className:"avatar relative"},(0,a.createElement)("div",{className:"border1 absolute opacity-30 rounded-full",style:{borderColor:r}}),(0,a.createElement)("div",{className:"border2 absolute opacity-20 rounded-full",style:{borderColor:r}}),(0,a.createElement)("img",{src:l.avatar_urls?.[48],alt:l.name,className:"rounded-full",style:{borderColor:r}})),(0,a.createElement)(s.RichText.Content,{tagName:"p",className:"ml-5 text-sm md:!ml-6 md:!text-base",value:o,style:{color:n}}))}})},967:(e,t)=>{var o;!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=n(e,a(o)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)l.call(e,o)&&e[o]&&(t=n(t,o));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return l[e](o,o.exports,a),o.exports}a.m=l,e=[],a.O=(t,o,l,r)=>{if(!o){var n=1/0;for(u=0;u<e.length;u++){for(var[o,l,r]=e[u],c=!0,s=0;s<o.length;s++)(!1&r||n>=r)&&Object.keys(a.O).every((e=>a.O[e](o[s])))?o.splice(s--,1):(c=!1,r<n&&(n=r));if(c){e.splice(u--,1);var i=l();void 0!==i&&(t=i)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,l,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,l){if(1&l&&(e=this(e)),8&l)return e;if("object"==typeof e&&e){if(4&l&&e.__esModule)return e;if(16&l&&"function"==typeof e.then)return e}var r=Object.create(null);a.r(r);var n={};t=t||[null,o({}),o([]),o(o)];for(var c=2&l&&e;"object"==typeof c&&!~t.indexOf(c);c=o(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,a.d(r,n),r},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={702:0,296:0};a.O.j=t=>0===e[t];var t=(t,o)=>{var l,r,[n,c,s]=o,i=0;if(n.some((t=>0!==e[t]))){for(l in c)a.o(c,l)&&(a.m[l]=c[l]);if(s)var u=s(a)}for(t&&t(o);i<n.length;i++)r=n[i],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},o=globalThis.webpackChunkwp_custom_blocks=globalThis.webpackChunkwp_custom_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=a.O(void 0,[296],(()=>a(118)));n=a.O(n)})();