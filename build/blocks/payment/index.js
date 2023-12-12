(()=>{"use strict";var e,t={613:()=>{const e=window.wp.blocks,t=window.React,o=window.wp.blockEditor,l=window.wp.components,{__}=wp.i18n,{InspectorControls:n}=wp.blockEditor,{PanelBody:a}=wp.components,r=({attributes:e,setAttributes:o})=>{const{name:r}=e;return(0,t.createElement)(n,null,(0,t.createElement)(a,{title:__("Payment Name","top-blocks"),initialOpen:!0},(0,t.createElement)(l.TextControl,{value:r,onChange:e=>o({name:e}),label:__("Payment name","top-blocks"),className:"name"})))},{Fragment:c,useEffect:i}=wp.element,{__:s}=wp.i18n,p=JSON.parse('{"u2":"topbook-block/payment"}');(0,e.registerBlockType)(p.u2,{attributes:{uniqueID:{type:"string"},photo:{type:"object"},name:{type:"string"}},icon:"embed-photo",edit:function({attributes:e,setAttributes:n,clientId:a}){const{uniqueId:p,photo:u,name:m}=e;i((()=>{p||n({uniqueId:"payment-"+a.slice(0,8)})}),[]);const b=(0,o.useBlockProps)({className:p});return(0,t.createElement)(c,null,(0,t.createElement)(r,{attributes:e,setAttributes:n}),u&&(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(l.ToolbarGroup,null,(0,t.createElement)(o.MediaUploadCheck,null,(0,t.createElement)(o.MediaUpload,{onSelect:e=>n({photo:e}),allowedTypes:["image"],value:u&&u.id,render:({open:e})=>(0,t.createElement)(l.ToolbarButton,{label:s("Edit Logo","top-blocks"),onClick:e,icon:"edit"})})))),(0,t.createElement)("div",{...b},(0,t.createElement)("div",{className:"photo"},u?(0,t.createElement)("img",{src:u.url,alt:u.alt||m}):(0,t.createElement)(o.MediaPlaceholder,{onSelect:e=>n({photo:e}),allowedTypes:["image"],multiple:!1,labels:{title:s("Logo","top-blocks"),instructions:s("Upload logo","top-blocks")},icon:"format-image"}))))},save:function({attributes:e}){const{uniqueId:l,photo:n,name:a}=e,r=o.useBlockProps.save({className:l});return(0,t.createElement)("div",{...r},n&&(0,t.createElement)("div",{className:"photo"},(0,t.createElement)("img",{src:n.url,alt:n.alt||a})))}})}},o={};function l(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,o,n,a)=>{if(!o){var r=1/0;for(p=0;p<e.length;p++){for(var[o,n,a]=e[p],c=!0,i=0;i<o.length;i++)(!1&a||r>=a)&&Object.keys(l.O).every((e=>l.O[e](o[i])))?o.splice(i--,1):(c=!1,a<r&&(r=a));if(c){e.splice(p--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,n,a]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={206:0,247:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[r,c,i]=o,s=0;if(r.some((t=>0!==e[t]))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(i)var p=i(l)}for(t&&t(o);s<r.length;s++)a=r[s],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(p)},o=globalThis.webpackChunkwp_blocks=globalThis.webpackChunkwp_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=l.O(void 0,[247],(()=>l(613)));n=l.O(n)})();