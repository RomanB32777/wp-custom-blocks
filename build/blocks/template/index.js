(()=>{var e,t,l,a={205:(e,t,l)=>{"use strict";const a=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/template","version":"0.1.0","title":"Template","category":"wp-custom-blocks","description":"Template block","supports":{"html":false},"textdomain":"template-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":["file:./init-template-sliders.js","file:./init-light-boxes.js"]}'),i=window.React;var o=l(967),s=l.n(o);const r=window.wp.blockEditor,p=window.wp.data,d=window.wp.element;let m=function(e){return e.Left="left",e.Center="center",e.Right="right",e}({});const c=JSON.parse('{"xs":320,"sm":640,"md":768,"lg":1024,"xl":1280}'),u=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var b=l.t(u,2);const w=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var g=l.t(w,2);const h=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var k=l.t(h,2);const v=c,x=(Array.from(g),Array.from(k),Array.from(b),"swiper-slider"),$=(Object.entries(m).map((([e,t])=>({value:t,label:e}))),window.wp.components),f=window.wp.i18n,y=()=>(0,i.createElement)("div",{style:{marginBottom:24}},(0,i.createElement)($.Tip,null,(0,i.createElement)("p",null,"Mobile display: ",v.xs,"...",v.sm,"px"),(0,i.createElement)("p",null,"Tablet display: ",v.sm,"...",v.md,"px"),(0,i.createElement)("p",null,"Laptop display: ",v.md,"...",v.xl,"px"),(0,i.createElement)("p",null,"Desktop display: ",v.xl,"..."))),C=(e,t)=>e[t].default,S=24,E="slider-template-card",_={uniqueId:{type:"string"},blockStyle:{type:"object"},isLoopSlider:{type:"boolean",default:!0},isDisableAutoplay:{type:"boolean",default:!1},sliderAutoplayDelay:{type:"number",default:5e3},disableSliderBreakpoint:{type:"string",default:"none"},sliderMobileSlidesPerView:{type:"number",default:1},sliderTabletSlidesPerView:{type:"number",default:2},sliderLaptopSlidesPerView:{type:"number",default:3},sliderMobileSpaceBetween:{type:"number",default:S},sliderTabletSpaceBetween:{type:"number",default:S},sliderLaptopSpaceBetween:{type:"number",default:S},mobileItemsCount:{type:"number",default:1},tabletItemsCount:{type:"number",default:3},laptopItemsCount:{type:"number",default:4},desktopItemsCount:{type:"number",default:4},mobileSpaceBetween:{type:"number",default:S},tabletSpaceBetween:{type:"number",default:S},laptopSpaceBetween:{type:"number",default:S},desktopSpaceBetween:{type:"number",default:S},mobileHeight:{type:"number",default:354},tabletHeight:{type:"number",default:354},laptopHeight:{type:"number",default:354},desktopHeight:{type:"number",default:354},sliderDesktopSlidesPerView:{type:"number",default:4},sliderDesktopSpaceBetween:{type:"number",default:S},mobileItemHeight:{type:"number",default:235},tabletItemHeight:{type:"number",default:235},laptopItemHeight:{type:"number",default:275},desktopItemHeight:{type:"number",default:275},borderRadius:{type:"number",default:12},isEnableOpenImageInModal:{type:"boolean",default:!0}},B=Object.entries({xs:"Mini",sm:"Mobile",md:"Tablet",lg:"Laptop",xl:"Desktop"}).reduce(((e,[t,l])=>(e.push({label:l,value:t}),e)),[{label:"-",value:"none"}]),I=({attributes:e,setAttributes:t})=>{const{isLoopSlider:l,isDisableAutoplay:a,sliderAutoplayDelay:n,disableSliderBreakpoint:o,sliderMobileSlidesPerView:s,sliderTabletSlidesPerView:p,sliderLaptopSlidesPerView:m,sliderMobileSpaceBetween:c,sliderTabletSpaceBetween:u,sliderLaptopSpaceBetween:b,mobileItemsCount:w,tabletItemsCount:g,laptopItemsCount:h,desktopItemsCount:k,mobileSpaceBetween:x,tabletSpaceBetween:E,desktopSpaceBetween:I,laptopSpaceBetween:R,mobileHeight:D,tabletHeight:V,laptopHeight:H,desktopHeight:P,isEnableOpenImageInModal:O,sliderDesktopSlidesPerView:N,sliderDesktopSpaceBetween:M,mobileItemHeight:T,tabletItemHeight:F,laptopItemHeight:L,desktopItemHeight:j,borderRadius:A}=e,z=o&&"none"!==o,[J,q]=(0,d.useState)(z);(0,d.useEffect)((()=>{q(z)}),[z]);const U=z?v[o]:null,W=U&&U<=v.xs,G=U&&U<=v.sm,K=U&&U<=v.lg,Q=U&&U<=v.xl;return(0,i.createElement)(r.InspectorControls,null,(0,i.createElement)(y,null),(0,i.createElement)($.PanelBody,{title:(0,f.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,i.createElement)($.SelectControl,{label:(0,f.__)("Disable slider breakpoint","wp-custom-blocks"),value:o,options:B,onChange:e=>{t({disableSliderBreakpoint:e})}}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.ToggleControl,{label:(0,f.__)("Enable opening image in modal mode (only for image blocks)","wp-custom-blocks"),checked:O,onChange:()=>t({isEnableOpenImageInModal:!O})})),(0,i.createElement)($.PanelBody,{title:(0,f.__)("Slider settings","wp-custom-blocks"),initialOpen:!0},(0,i.createElement)($.ToggleControl,{label:(0,f.__)("Slider loop","wp-custom-blocks"),checked:l,onChange:()=>t({isLoopSlider:!l})}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.ToggleControl,{label:(0,f.__)("Disable slider autoplay","wp-custom-blocks"),checked:a,onChange:()=>t({isDisableAutoplay:!a})}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Slider autoplay delay","wp-custom-blocks"),value:n,onChange:e=>t({sliderAutoplayDelay:e}),disabled:a,step:500,min:0,max:3e4,allowReset:!0,resetFallbackValue:Number(C(_,"sliderAutoplayDelay"))}),(0,i.createElement)($.PanelBody,{title:(0,f.__)("Slides per view settings","wp-custom-blocks"),initialOpen:!1},(0,i.createElement)($.RangeControl,{label:(0,f.__)("Mobile slides per view","wp-custom-blocks"),value:s,onChange:e=>t({sliderMobileSlidesPerView:e}),step:.5,min:1,max:10,disabled:Boolean(W),allowReset:!0,resetFallbackValue:Number(C(_,"sliderMobileSlidesPerView"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Tablet slides per view","wp-custom-blocks"),value:p,onChange:e=>t({sliderTabletSlidesPerView:e}),step:.5,min:1,max:10,disabled:Boolean(G),allowReset:!0,resetFallbackValue:Number(C(_,"sliderTabletSlidesPerView"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Laptop slides per view","wp-custom-blocks"),value:m,onChange:e=>t({sliderLaptopSlidesPerView:e}),step:.5,min:1,max:10,disabled:Boolean(K),allowReset:!0,resetFallbackValue:Number(C(_,"sliderLaptopSlidesPerView"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Desktop slides per view","wp-custom-blocks"),value:N,onChange:e=>t({sliderDesktopSlidesPerView:e}),step:.5,min:1,max:10,disabled:Boolean(Q),allowReset:!0,resetFallbackValue:Number(C(_,"sliderDesktopSlidesPerView"))})),(0,i.createElement)($.PanelBody,{title:(0,f.__)("Slides between settings","wp-custom-blocks"),initialOpen:!1},(0,i.createElement)($.RangeControl,{label:(0,f.__)("Mobile space between slides","wp-custom-blocks"),value:c,onChange:e=>t({sliderMobileSpaceBetween:e}),step:2,min:4,max:64,disabled:Boolean(W),allowReset:!0,resetFallbackValue:S}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Tablet space between slides","wp-custom-blocks"),value:u,onChange:e=>t({sliderTabletSpaceBetween:e}),step:2,min:4,max:64,disabled:Boolean(G),allowReset:!0,resetFallbackValue:S}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Laptop space between slides","wp-custom-blocks"),value:b,onChange:e=>t({sliderLaptopSpaceBetween:e}),step:2,min:4,max:64,disabled:Boolean(K),allowReset:!0,resetFallbackValue:S}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Desktop space between slides","wp-custom-blocks"),value:M,onChange:e=>t({sliderDesktopSpaceBetween:e}),step:2,min:4,max:64,disabled:Boolean(Q),allowReset:!0,resetFallbackValue:S})),(0,i.createElement)($.PanelBody,{title:(0,f.__)("Height block settings","wp-custom-blocks"),initialOpen:!1},(0,i.createElement)($.RangeControl,{label:(0,f.__)("Mobile block height","wp-custom-blocks"),value:D,onChange:e=>t({mobileHeight:e}),step:1,min:2,max:1e3,disabled:Boolean(W),allowReset:!0,resetFallbackValue:Number(C(_,"mobileHeight"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Tablet block height","wp-custom-blocks"),value:V,onChange:e=>t({tabletHeight:e}),step:1,min:2,max:1e3,disabled:Boolean(G),allowReset:!0,resetFallbackValue:Number(C(_,"tabletHeight"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Laptop block height","wp-custom-blocks"),value:H,onChange:e=>t({laptopHeight:e}),step:1,min:2,max:1e3,disabled:Boolean(K),allowReset:!0,resetFallbackValue:Number(C(_,"laptopHeight"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Desktop block height","wp-custom-blocks"),value:P,onChange:e=>t({desktopHeight:e}),step:1,min:2,max:1e3,disabled:Boolean(Q),allowReset:!0,resetFallbackValue:Number(C(_,"desktopHeight"))}))),(0,i.createElement)($.PanelBody,{title:(0,f.__)("Without slider settings","wp-custom-blocks"),initialOpen:J,opened:J},(0,i.createElement)($.PanelBody,{title:(0,f.__)("Items count","wp-custom-blocks"),initialOpen:!1},(0,i.createElement)($.RangeControl,{label:(0,f.__)("Mobile items count","wp-custom-blocks"),value:w,onChange:e=>t({mobileItemsCount:e}),step:1,min:1,max:12,disabled:!W,allowReset:!0,resetFallbackValue:Number(C(_,"mobileItemsCount"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Tablet items count","wp-custom-blocks"),value:g,onChange:e=>t({tabletItemsCount:e}),step:1,min:1,max:12,disabled:!G,allowReset:!0,resetFallbackValue:Number(C(_,"tabletItemsCount"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Laptop items count","wp-custom-blocks"),value:h,onChange:e=>t({laptopItemsCount:e}),step:1,min:1,max:12,disabled:!K,allowReset:!0,resetFallbackValue:Number(C(_,"laptopItemsCount"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Desktop items count","wp-custom-blocks"),value:k,onChange:e=>t({desktopItemsCount:e}),step:1,min:1,max:12,disabled:!Q,allowReset:!0,resetFallbackValue:Number(C(_,"desktopItemsCount"))})),(0,i.createElement)($.PanelBody,{title:(0,f.__)("Items between settings","wp-custom-blocks"),initialOpen:!1},(0,i.createElement)($.RangeControl,{label:(0,f.__)("Mobile space between items","wp-custom-blocks"),value:x,onChange:e=>t({mobileSpaceBetween:e}),step:2,min:4,max:64,disabled:!W,allowReset:!0,resetFallbackValue:S}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Tablet space between items","wp-custom-blocks"),value:E,onChange:e=>t({tabletSpaceBetween:e}),step:2,min:4,max:64,disabled:!G,allowReset:!0,resetFallbackValue:S}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Laptop space between items","wp-custom-blocks"),value:R,onChange:e=>t({laptopSpaceBetween:e}),step:2,min:4,max:64,disabled:!K,allowReset:!0,resetFallbackValue:S}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Desktop space between items","wp-custom-blocks"),value:I,onChange:e=>t({desktopSpaceBetween:e}),step:2,min:4,max:64,disabled:!Q,allowReset:!0,resetFallbackValue:S})),(0,i.createElement)($.PanelBody,{title:(0,f.__)("Height items settings","wp-custom-blocks"),initialOpen:!1},(0,i.createElement)($.RangeControl,{label:(0,f.__)("Mobile item height","wp-custom-blocks"),value:T,onChange:e=>t({tabletItemHeight:e}),step:1,min:2,max:1e3,disabled:!W,allowReset:!0,resetFallbackValue:Number(C(_,"mobileItemHeight"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Tablet item height","wp-custom-blocks"),value:F,onChange:e=>t({tabletItemHeight:e}),step:1,min:2,max:1e3,disabled:!G,allowReset:!0,resetFallbackValue:Number(C(_,"tabletItemHeight"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Laptop item height","wp-custom-blocks"),value:L,onChange:e=>t({laptopItemHeight:e}),step:1,min:2,max:1e3,disabled:!K,allowReset:!0,resetFallbackValue:Number(C(_,"laptopItemHeight"))}),(0,i.createElement)($.CardDivider,null),(0,i.createElement)($.RangeControl,{label:(0,f.__)("Desktop item height","wp-custom-blocks"),value:j,onChange:e=>t({desktopItemHeight:e}),step:1,min:2,max:1e3,disabled:!Q,allowReset:!0,resetFallbackValue:Number(C(_,"desktopItemHeight"))}))),(0,i.createElement)($.PanelBody,{title:(0,f.__)("Item settings","wp-custom-blocks"),initialOpen:!0},(0,i.createElement)($.RangeControl,{label:(0,f.__)("Item border radius","wp-custom-blocks"),value:A,onChange:e=>t({borderRadius:e}),step:1,min:0,max:50,allowReset:!0,resetFallbackValue:Number(C(_,"borderRadius"))})))},R=["wp-custom-blocks/template-card","wp-custom-blocks/advantage","wp-custom-blocks/template-image"],{name:D,...V}=n;(0,a.registerBlockType)(D,{...V,icon:"slides",attributes:_,edit:({attributes:e,setAttributes:t,clientId:l})=>{const{uniqueId:a,blockStyle:n,mobileHeight:o,tabletHeight:m,laptopHeight:c,desktopHeight:u,disableSliderBreakpoint:b,sliderMobileSlidesPerView:w,sliderTabletSlidesPerView:g,sliderLaptopSlidesPerView:h,sliderDesktopSlidesPerView:k,sliderMobileSpaceBetween:$,sliderTabletSpaceBetween:f,sliderLaptopSpaceBetween:y,sliderDesktopSpaceBetween:C,isEnableOpenImageInModal:S,mobileItemHeight:_,tabletItemHeight:B,laptopItemHeight:D,desktopItemHeight:V,borderRadius:H,mobileItemsCount:P,tabletItemsCount:O,laptopItemsCount:N,desktopItemsCount:M,mobileSpaceBetween:T,tabletSpaceBetween:F,laptopSpaceBetween:L,desktopSpaceBetween:j}=e,A=(0,p.select)("core/block-editor").getBlocksByClientId(l)?.[0]?.innerBlocks;(0,d.useEffect)((()=>{a||t({uniqueId:"template-"+l.slice(0,8)})}),[l,t,a]),(0,d.useEffect)((()=>{A?.forEach((e=>{"wp-custom-blocks/image"===e.name&&(0,p.dispatch)("core/block-editor").updateBlockAttributes(e.clientId,{isEnableOpenInModal:S})}))}),[A,S]);const z=(0,r.useBlockProps)({className:s()(a,"font-roboto")}),J=(0,r.useInnerBlocksProps)({className:"inner-wrapper h-full flex flex-col"},{allowedBlocks:R}),q=b&&"none"!==b?v[b]:null,U=q&&q<=v.xs,W=q&&q<=v.sm,G=q&&q<=v.lg,K=q&&q<=v.xl,Q=`\n\t\t.${a} .inner-wrapper {\n\t\t\tgap: ${U?T:$}px;\n\t\t}\n\n\t\t.${a} .${E} {\n\t\t\theight: ${o}px;\n\t\t}\n\n\t\t.${a} .${E} {\n\t\t\twidth: ${100/(U?P:w)}%;\n\t\t\theight: ${U?_:o}px;\n\t\t}\n\t`,X=`\n\t\t.${a} .inner-wrapper {\n\t\t\tgap: ${W?F:f}px;\n\t\t}\n\n\t\t.${a} .${E} {\n\t\t\twidth: ${100/(W?O:g)}%;\n\t\t\theight: ${W?B:m}px;\n\t\t}\n\t`,Y=`\n\t\t.${a} .inner-wrapper {\n\t\t\tgap: ${G?L:y}px;\n\t\t}\n\n\t\t.${a} .${E} {\n\t\t\twidth: ${100/(G?N:h)}%;\n\t\t\theight: ${G?D:c}px;\n\t\t}\n\t`,Z=`\n\t\t.${a} .inner-wrapper {\n\t\t\tgap: ${K?j:C}px;\n\t\t}\n\n\t\t.${a} .${E} {\n\t\t\twidth: ${100/(K?M:k)}%;\n\t\t\theight: ${K?V:u}px;\n\t\t}\n\t`,ee=`\n\t\t@media (max-width: ${v.sm}px) {\n\t\t\t${Q}\n\t\t}\n\n\t\t@media (min-width: ${v.sm}px) and (max-width: ${v.lg}px) {\n\t\t\t${X}\n\t\t}\n\n\t\t@media (min-width: ${v.lg}px) and (max-width: ${v.xl}px) {\n\t\t\t${Y}\n\t\t}\n\n\t\t@media (min-width: ${v.xl}px) {\n\t\t\t${Z}\n\t\t}\n\t`,te=`\n\t\t.${a} .${x} {\n\t\t\theight: ${o}px;\n\t\t}\n\n\t\t${U?`\n\t\t\t\t\t.${a} .inner-wrapper {\n\t\t\t\t\t\tgap: ${T}px;\n\t\t\t\t\t}\n\t\t\t\t`:""}\n\t`,le=`\n\t\t.${a} .${x} {\n\t\t\theight: ${m}px;\n\t\t}\n\n\t\t${W?`\n\t\t\t\t\t.${a} .inner-wrapper {\n\t\t\t\t\t\tgap: ${F}px;\n\t\t\t\t\t}\n\t\t\t\t`:""}\n\t`,ae=`\n\t\t.${a} .${x} {\n\t\t\theight: ${c}px;\n\t\t}\n\n\t\t${G?`\n\t\t\t\t\t.${a} .inner-wrapper {\n\t\t\t\t\t\tgap: ${L}px;\n\t\t\t\t\t}\n\t\t\t\t`:""}\n\t`,ne=`\n\t\t.${a} .${x} {\n\t\t\theight: ${u}px;\n\t\t}\n\n\t\t${K?`\n\t\t\t\t\t.${a} .inner-wrapper {\n\t\t\t\t\t\tgap: ${j}px;\n\t\t\t\t\t}\n\t\t\t\t`:""}\n\t`,ie=`\n\t\t@media (max-width: ${v.sm}px) {\n\t\t\t${te}\n\t\t}\n\n\t\t@media (min-width: ${v.sm}px) and (max-width: ${v.lg}px) {\n\t\t\t${le}\n\t\t}\n\n\t\t@media (min-width: ${v.lg}px) and (max-width: ${v.xl}px) {\n\t\t\t${ae}\n\t\t}\n\n\t\t@media (min-width: ${v.xl}px) {\n\t\t\t${ne}\n\t\t}\n\t`,oe=`\n\t\t.${a} .inner-wrapper {\n\t\t\tgrid-template-columns: repeat(${U?P:w}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${a} .${E} {\n\t\t\theight: ${U?`${_}px`:"auto"};\n\t\t}\n\t`,se=`\n\t\t.${a} .inner-wrapper {\n\t\t\tgrid-template-columns: repeat(${W?O:g}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${a} .${E} {\n\t\t\theight: ${W?`${B}px`:"auto"};\n\t\t}\n\t`,re=`\n\t\t.${a} .inner-wrapper {\n\t\t\tgrid-template-columns: repeat(${G?N:h}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${a} .${E} {\n\t\t\theight: ${G?`${D}px`:"auto"};\n\t\t}\n\t`,pe=`\n\t\t.${a} .inner-wrapper {\n\t\t\tgrid-template-columns: repeat(${K?M:k}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${a} .${E} {\n\t\t\theight: ${K?`${V}px`:"auto"};\n\t\t}\n\t`,de=`\n\t\t.${a} .${E} .template-rounded {\n\t\t\tborder-radius: ${H}px;\n\t\t}\n\n\t\t@media (max-width: ${v.sm}px) {\n\t\t\t${oe}\n\t\t}\n\n\t\t@media (min-width: ${v.sm}px) and (max-width: ${v.lg}px) {\n\t\t\t${se}\n\t\t}\n\n\t\t@media (min-width: ${v.lg}px) and (max-width: ${v.xl}px) {\n\t\t\t${re}\n\t\t}\n\n\t\t@media (min-width: ${v.xl}px) {\n\t\t\t${pe}\n\t\t}\n\t`,me=q?`\n\t\t\t\t@media (min-width: ${q}px) {\n\t\t\t\t\t.${a} .${x} {\n\t\t\t\t\t\theight: auto !important;\n\t\t\t\t\t}\n\n\t\t\t\t\t.${a} .inner-wrapper {\n\t\t\t\t\t\tdisplay: grid !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t`:"";return(0,i.createElement)(d.Fragment,null,(0,i.createElement)("style",null,de),(0,i.createElement)("style",null,ee),(0,i.createElement)(I,{attributes:e,setAttributes:e=>{const l=((e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""))(`\n\t\t\t${de}\n\t\t\t${ie}\n\t\t\t${me}\n\t\t`);n!==l&&(e.blockStyle=l),t(e)}}),(0,i.createElement)("div",{...z},(0,i.createElement)("div",{className:"relative mb-6"},(0,i.createElement)("div",{className:"overflow-hidden"},(0,i.createElement)("div",{className:s()("relative",x),id:a},(0,i.createElement)("div",{...J}))))))},save:({attributes:e})=>{const{uniqueId:t,isLoopSlider:l,isDisableAutoplay:a,sliderAutoplayDelay:n,disableSliderBreakpoint:o,sliderMobileSlidesPerView:p,sliderTabletSlidesPerView:d,sliderLaptopSlidesPerView:m,sliderDesktopSlidesPerView:c,sliderMobileSpaceBetween:u,sliderTabletSpaceBetween:b,sliderLaptopSpaceBetween:w,sliderDesktopSpaceBetween:g}=e,h=r.useBlockProps.save({className:s()(t,"font-roboto")}),k=o&&"none"!==o,v={"data-slider-loop":l,"data-slider-disable-autoplay":a,"data-slider-autoplay-delay":n,"data-slides-per-view-xs":p,"data-slides-per-view-sm":d,"data-slides-per-view-md":m,"data-slides-per-view-xl":c,"data-slides-space-between-xs":u,"data-slides-space-between-sm":b,"data-slides-space-between-md":w,"data-slides-space-between-xl":g,"data-slider-destroy-breakpoint":k?o:void 0};return(0,i.createElement)("div",{...h},(0,i.createElement)("div",{className:"relative"},(0,i.createElement)("div",{className:"overflow-hidden"},(0,i.createElement)("div",{className:s()("relative",x),id:t,...v},(0,i.createElement)("div",{className:s()("swiper-wrapper",{"inner-wrapper":k})},(0,i.createElement)(r.InnerBlocks.Content,null))))))}})},967:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=o(e,i(l)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=o(t,l));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={exports:{}};return a[e](l,l.exports,i),l.exports}i.m=a,e=[],i.O=(t,l,a,n)=>{if(!l){var o=1/0;for(d=0;d<e.length;d++){for(var[l,a,n]=e[d],s=!0,r=0;r<l.length;r++)(!1&n||o>=n)&&Object.keys(i.O).every((e=>i.O[e](l[r])))?l.splice(r--,1):(s=!1,n<o&&(o=n));if(s){e.splice(d--,1);var p=a();void 0!==p&&(t=p)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[l,a,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},l=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var n=Object.create(null);i.r(n);var o={};t=t||[null,l({}),l([]),l(l)];for(var s=2&a&&e;"object"==typeof s&&!~t.indexOf(s);s=l(s))Object.getOwnPropertyNames(s).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,i.d(n,o),n},i.d=(e,t)=>{for(var l in t)i.o(t,l)&&!i.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={690:0,296:0};i.O.j=t=>0===e[t];var t=(t,l)=>{var a,n,[o,s,r]=l,p=0;if(o.some((t=>0!==e[t]))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(r)var d=r(i)}for(t&&t(l);p<o.length;p++)n=o[p],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(d)},l=globalThis.webpackChunkwp_custom_blocks=globalThis.webpackChunkwp_custom_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=i.O(void 0,[296],(()=>i(205)));o=i.O(o)})();