(()=>{"use strict";var e,r={977:()=>{const e=window.wp.blocks,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/wrapper","version":"0.1.0","title":"Wrapper block","category":"wp-custom-blocks","description":"Wrapper block","supports":{"html":false},"textdomain":"wrapper-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),t=window.React,o=window.wp.blockEditor,{name:n,...s}=r;(0,e.registerBlockType)(n,{...s,icon:"align-wide",attributes:{},edit:function(){const e=(0,o.useBlockProps)({className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-96"});return(0,t.createElement)("div",{...e},(0,t.createElement)(o.InnerBlocks,{renderAppender:()=>(0,t.createElement)(o.InnerBlocks.ButtonBlockAppender,null)}))},save:function(){const e=o.useBlockProps.save({className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"});return(0,t.createElement)("div",{...e},(0,t.createElement)(o.InnerBlocks.Content,null))}})}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var s=t[e]={exports:{}};return r[e](s,s.exports,o),s.exports}o.m=r,e=[],o.O=(r,t,n,s)=>{if(!t){var l=1/0;for(p=0;p<e.length;p++){for(var[t,n,s]=e[p],c=!0,a=0;a<t.length;a++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](t[a])))?t.splice(a--,1):(c=!1,s<l&&(l=s));if(c){e.splice(p--,1);var i=n();void 0!==i&&(r=i)}}return r}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[t,n,s]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={681:0,296:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,s,[l,c,a]=t,i=0;if(l.some((r=>0!==e[r]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(a)var p=a(o)}for(r&&r(t);i<l.length;i++)s=l[i],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(p)},t=globalThis.webpackChunkwp_custom_blocks=globalThis.webpackChunkwp_custom_blocks||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[296],(()=>o(977)));n=o.O(n)})();