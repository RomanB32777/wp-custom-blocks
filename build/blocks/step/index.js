(()=>{"use strict";var e,t={822:()=>{const e=window.React,t=window.wp.blocks,o=window.wp.blockEditor,l=window.wp.components,{__}=wp.i18n,{InspectorControls:n}=wp.blockEditor,{PanelBody:a,RangeControl:r}=wp.components,s=({attributes:t,setAttributes:o})=>{const{step:l}=t;return(0,e.createElement)(n,null,(0,e.createElement)(a,{title:__("Step Number","top-blocks"),initialOpen:!0},(0,e.createElement)(r,{value:l,onChange:e=>o({step:e}),min:1,max:100,resetFallbackValue:1,allowsReset:!0})))},{Fragment:c,useEffect:i}=wp.element,{__:p}=wp.i18n,u=JSON.parse('{"u2":"topbook-block/step"}');(0,t.registerBlockType)(u.u2,{attributes:{uniqueID:{type:"string"},step:{type:"number",default:1},photo:{type:"object"},title:{type:"string"},description:{type:"string"},isOnlyText:{type:"boolean"}},icon:{src:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M15.874 13C15.4299 14.7252 13.8638 16 12 16C10.1362 16 8.57006 14.7252 8.12602 13H3V11H8.12602C8.57006 9.27477 10.1362 8 12 8C13.8638 8 15.4299 9.27477 15.874 11H21V13H15.874Z"}))},edit:function({attributes:t,setAttributes:n,clientId:a}){const{uniqueId:r,step:u,photo:m,title:d,description:b,isOnlyText:h}=t;i((()=>{r||n({uniqueId:"step-"+a.slice(0,8)})}),[]);const v=(0,o.useBlockProps)({className:r});return(0,e.createElement)(c,null,(0,e.createElement)(s,{attributes:t,setAttributes:n}),m&&(0,e.createElement)(o.BlockControls,null,(0,e.createElement)(l.ToolbarGroup,null,(0,e.createElement)(o.MediaUploadCheck,null,(0,e.createElement)(o.MediaUpload,{onSelect:e=>n({photo:e}),allowedTypes:["image"],value:m&&m.id,render:({open:t})=>(0,e.createElement)(l.ToolbarButton,{label:p("Edit Logo","top-blocks"),onClick:t,icon:"edit"})})))),(0,e.createElement)("div",{...v},(0,e.createElement)("span",{className:"step"},u),(0,e.createElement)(o.RichText,{tagName:"h5",className:"title",value:d,onChange:e=>n({title:e}),placeholder:p("step text..","top-blocks")}),(0,e.createElement)(o.RichText,{tagName:"p",className:(()=>{const e=["description"];return h&&e.push("border"),e.join(" ")})(),value:b,onChange:e=>n({description:e}),placeholder:p("description..","top-blocks")}),!h&&(0,e.createElement)("div",{className:"photo"},m?(0,e.createElement)("img",{src:m.url,alt:m.alt||d}):(0,e.createElement)(o.MediaPlaceholder,{onSelect:e=>n({photo:e}),allowedTypes:["image"],multiple:!1,labels:{title:p("Logo","top-blocks"),instructions:p("Upload your company logo","top-blocks")},icon:"format-image"}))))},save:function({attributes:t}){const{uniqueId:l,step:n,photo:a,title:r,description:s,isOnlyText:c}=t,i=o.useBlockProps.save({className:l});return(0,e.createElement)("div",{...i},n&&(0,e.createElement)("span",{className:"step"},n),r&&(0,e.createElement)(o.RichText.Content,{tagName:"h5",className:"title",value:r}),s&&(0,e.createElement)(o.RichText.Content,{tagName:"p",className:(()=>{const e=["description"];return c&&e.push("border"),e.join(" ")})(),value:s}),a&&!c&&(0,e.createElement)("div",{className:"photo"},(0,e.createElement)("img",{src:a.url,alt:a.alt||r})))}})}},o={};function l(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,o,n,a)=>{if(!o){var r=1/0;for(p=0;p<e.length;p++){for(var[o,n,a]=e[p],s=!0,c=0;c<o.length;c++)(!1&a||r>=a)&&Object.keys(l.O).every((e=>l.O[e](o[c])))?o.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(p--,1);var i=n();void 0!==i&&(t=i)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,n,a]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={733:0,342:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[r,s,c]=o,i=0;if(r.some((t=>0!==e[t]))){for(n in s)l.o(s,n)&&(l.m[n]=s[n]);if(c)var p=c(l)}for(t&&t(o);i<r.length;i++)a=r[i],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(p)},o=globalThis.webpackChunkwp_blocks=globalThis.webpackChunkwp_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=l.O(void 0,[342],(()=>l(822)));n=l.O(n)})();