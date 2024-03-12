(()=>{var e,t,l,a={275:(e,t,l)=>{"use strict";const a=window.wp.blocks,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/banner","version":"0.1.0","title":"Main banner","category":"wp-custom-blocks","description":"Main banner","supports":{"html":false},"textdomain":"banner-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./init-banner-sliders.js"}'),r=window.React;var n=l(967),s=l.n(n);const i=window.wp.blockEditor,c=window.wp.components,m=window.wp.element,d=window.wp.i18n,p=JSON.parse('{"xs":320,"sm":640,"md":768,"lg":1024,"xl":1280}'),u=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var b=l.t(u,2);const w=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var g=l.t(w,2);const f=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var v=l.t(f,2);const k={DEFAULT:"#621fbe",grizzly:"#a5d6c6",light:"#e1d1f1",brightest:"#f3eff9"},x={DEFAULT:"#121212",grizzly:"#4e4e53",opacity:"#000c"},E={DEFAULT:"#faf8fb",light:"#f0eff8",opacity:"#f2eff833",standard:"#fff"},h={DEFAULT:"#acacb5",light:"#7f8c8d",dark:"#9797b2"},y=p,C=(Array.from(g),Array.from(v),Array.from(b),window.wp.compose),_=[{name:(0,d.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,d.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,d.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,d.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,d.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,d.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#d63031"}],N=({label:e,name:t,disabled:l,attributes:a,defaultAttributes:o,setAttributes:n})=>{const[i,p]=(0,m.useState)(!1),u=`color-control-${(0,C.useInstanceId)(N)}`,b=a[t],w=e=>n({[t]:e});return(0,r.createElement)(c.Flex,null,(0,r.createElement)(c.FlexBlock,null,(0,r.createElement)(c.BaseControl,{id:u,label:e,className:s()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,r.createElement)(c.FlexItem,null,(0,r.createElement)(c.Button,{icon:"image-rotate",iconSize:14,label:(0,d.__)("Reset","wp-custom-blocks"),disabled:l,size:"small",onClick:()=>w(String(((e,t)=>e[t].default)(o,t))),className:s()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:b,disabled:!b})})),(0,r.createElement)(c.FlexItem,null,(0,r.createElement)("button",{disabled:l,className:s()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>p(!0)},(0,r.createElement)(c.ColorIndicator,{colorValue:b})),i&&(0,r.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>p(!1),offset:5},(0,r.createElement)(c.ColorPicker,{color:b,onChange:e=>w(e),enableAlpha:!0}),(0,r.createElement)("div",{className:"px-3 pb-3"},(0,r.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,d.__)("Colors Palette","wp-custom-blocks")),(0,r.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},_.map(((e,t)=>(0,r.createElement)(c.ColorIndicator,{className:s()({active:e.color===b}),title:e.name,key:t,colorValue:e.color,onClick:()=>w(e.color)}))))))))},S=({label:e,link:t,linkName:l,setAttributes:a})=>(0,r.createElement)("div",{className:"w-72 p-2"},(0,r.createElement)(c.TextControl,{label:e,value:t.url,onChange:e=>{a({[l]:{...t,url:e}})}}),(0,r.createElement)(c.ToggleControl,{label:(0,d.__)("Open in new tab","wp-custom-blocks"),checked:t&&t.openInNewTab,onChange:()=>{a({[l]:{...t,openInNewTab:!t.openInNewTab}})}})),T=(e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""),D=(x.DEFAULT,x.DEFAULT,h.dark,h.dark,E.light,()=>(0,r.createElement)("div",{style:{marginBottom:24}},(0,r.createElement)(c.Tip,null,(0,r.createElement)("p",null,"Mobile display: ",y.xs,"...",y.sm,"px"),(0,r.createElement)("p",null,"Tablet display: ",y.sm,"...",y.md,"px"),(0,r.createElement)("p",null,"Laptop display: ",y.md,"...",y.xl,"px"),(0,r.createElement)("p",null,"Desktop display: ",y.xl,"...")))),B={uniqueId:{type:"string"},blockStyle:{type:"object"},backgroundColor:{type:"string",default:x.grizzly},backgroundImage:{type:"object",default:{}},title:{type:"string"},titleColor:{type:"string",default:E.DEFAULT},description:{type:"string"},descriptionColor:{type:"string",default:E.DEFAULT},sportsTitle:{type:"string"},sportsTitleColor:{type:"string",default:E.DEFAULT},sportsDescription:{type:"string"},sportsDescriptionColor:{type:"string",default:E.DEFAULT},buttonLink:{type:"object",default:{url:"#",openInNewTab:!0}},buttonText:{type:"string",default:""},buttonTextColor:{type:"string",default:E.DEFAULT},buttonColor:{type:"string",default:k.DEFAULT},desktopItemsCount:{type:"number",default:3},desktopSpaceBetweenItems:{type:"number",default:24},isEnableSlider:{type:"boolean",default:!1},isLoopSlider:{type:"boolean",default:!0},isDisableAutoplay:{type:"boolean",default:!1},sliderAutoplayDelay:{type:"number",default:5e3},sliderMobileSlidesPerView:{type:"number",default:1},sliderTabletSlidesPerView:{type:"number",default:2},sliderLaptopSlidesPerView:{type:"number",default:3},sliderMobileSpaceBetween:{type:"number",default:24},sliderTabletSpaceBetween:{type:"number",default:24},sliderLaptopSpaceBetween:{type:"number",default:24},adviceBackgroundColor:{type:"string",default:k.DEFAULT},adviceBackgroundImage:{type:"object",default:{}},adviceTitle:{type:"string"},adviceTitleColor:{type:"string",default:E.DEFAULT},adviceDescription:{type:"string"},adviceDescriptionColor:{type:"string",default:E.DEFAULT}},A=({attributes:e,setAttributes:t})=>{const{desktopItemsCount:l,desktopSpaceBetweenItems:a,isLoopSlider:o,isDisableAutoplay:n,sliderAutoplayDelay:s,sliderMobileSlidesPerView:m,sliderTabletSlidesPerView:p,sliderLaptopSlidesPerView:u,sliderMobileSpaceBetween:b,sliderTabletSpaceBetween:w,sliderLaptopSpaceBetween:g}=e,f={attributes:e,defaultAttributes:B,setAttributes:t};return(0,r.createElement)(i.InspectorControls,null,(0,r.createElement)(D,null),(0,r.createElement)(c.PanelBody,{title:(0,d.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,r.createElement)(N,{name:"backgroundColor",label:(0,d.__)("Background Color","wp-custom-blocks"),...f}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(N,{name:"titleColor",label:(0,d.__)("Title Color","wp-custom-blocks"),...f}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(N,{name:"descriptionColor",label:(0,d.__)("Description color","wp-custom-blocks"),...f}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(N,{name:"sportsTitleColor",label:(0,d.__)("Sports title color","wp-custom-blocks"),...f}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(N,{name:"buttonColor",label:(0,d.__)("Button color","wp-custom-blocks"),...f}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(N,{name:"buttonTextColor",label:(0,d.__)("Button text color","wp-custom-blocks"),...f}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(c.RangeControl,{label:(0,d.__)("Desktop items count","wp-custom-blocks"),value:l,onChange:e=>t({desktopItemsCount:e}),step:1,min:1,max:12,allowReset:!0,resetFallbackValue:3}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(c.RangeControl,{label:(0,d.__)("Desktop space between items","wp-custom-blocks"),value:a,onChange:e=>t({desktopSpaceBetweenItems:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:24}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(N,{name:"sportsDescriptionColor",label:(0,d.__)("Sports description color","wp-custom-blocks"),...f}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(N,{name:"adviceBackgroundColor",label:(0,d.__)("Advice background color","wp-custom-blocks"),...f}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(N,{name:"adviceTitleColor",label:(0,d.__)("Advice title color","wp-custom-blocks"),...f}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(N,{name:"adviceDescriptionColor",label:(0,d.__)("Advice description color","wp-custom-blocks"),...f})),(0,r.createElement)(c.PanelBody,{title:(0,d.__)("Slider settings","wp-custom-blocks"),initialOpen:!0},(0,r.createElement)(c.ToggleControl,{label:(0,d.__)("Slider loop","wp-custom-blocks"),checked:o,onChange:()=>t({isLoopSlider:!o})}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(c.ToggleControl,{label:(0,d.__)("Disable slider autoplay","wp-custom-blocks"),checked:n,onChange:()=>t({isDisableAutoplay:!n})}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(c.RangeControl,{label:(0,d.__)("Slider autoplay delay","wp-custom-blocks"),value:s,onChange:e=>t({sliderAutoplayDelay:e}),disabled:n,step:500,min:0,max:3e4,allowReset:!0,resetFallbackValue:5e3}),(0,r.createElement)(c.PanelBody,{title:(0,d.__)("Slides per view settings","wp-custom-blocks"),initialOpen:!1},(0,r.createElement)(c.RangeControl,{label:(0,d.__)("Mobile slides per view","wp-custom-blocks"),value:m,onChange:e=>t({sliderMobileSlidesPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:1}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(c.RangeControl,{label:(0,d.__)("Tablet slides per view","wp-custom-blocks"),value:p,onChange:e=>t({sliderTabletSlidesPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:1}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(c.RangeControl,{label:(0,d.__)("Laptop slides per view","wp-custom-blocks"),value:u,onChange:e=>t({sliderLaptopSlidesPerView:e}),step:1,min:1,max:10,allowReset:!0,resetFallbackValue:1})),(0,r.createElement)(c.PanelBody,{title:(0,d.__)("Slides between settings","wp-custom-blocks"),initialOpen:!1},(0,r.createElement)(c.RangeControl,{label:(0,d.__)("Mobile space between slides","wp-custom-blocks"),value:b,onChange:e=>t({sliderMobileSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:24}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(c.RangeControl,{label:(0,d.__)("Tablet space between slides","wp-custom-blocks"),value:w,onChange:e=>t({sliderTabletSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:24}),(0,r.createElement)(c.CardDivider,null),(0,r.createElement)(c.RangeControl,{label:(0,d.__)("Laptop space between slides","wp-custom-blocks"),value:g,onChange:e=>t({sliderLaptopSpaceBetween:e}),step:2,min:4,max:64,allowReset:!0,resetFallbackValue:24}))))},L="slider-banner-cards",P="wp-custom-blocks/sport-card",{name:I,...O}=o;(0,a.registerBlockType)(I,{...O,icon:"welcome-widgets-menus",attributes:B,edit:({attributes:e,setAttributes:t,clientId:l})=>{const{uniqueId:a,blockStyle:o,backgroundColor:n,backgroundImage:p,title:u,titleColor:b,description:w,descriptionColor:g,sportsTitle:f,sportsTitleColor:v,sportsDescription:k,sportsDescriptionColor:x,buttonLink:h,buttonText:C,buttonTextColor:_,buttonColor:N,desktopItemsCount:D,desktopSpaceBetweenItems:B,sliderMobileSlidesPerView:I,sliderTabletSlidesPerView:O,sliderLaptopSlidesPerView:R,sliderMobileSpaceBetween:F,sliderTabletSpaceBetween:j,sliderLaptopSpaceBetween:V,adviceBackgroundColor:$,adviceBackgroundImage:M,adviceTitle:U,adviceTitleColor:z,adviceDescription:H,adviceDescriptionColor:J}=e,[q,G]=(0,m.useState)(!1),W=(0,i.useBlockProps)({className:s()(a,"bg-white-standard"),style:{maxWidth:"none",margin:0}}),K=(0,i.useInnerBlocksProps)({className:"slider-wrapper flex flex-wrap overflow-hidden lg:!grid"},{allowedBlocks:[P],template:[[P,{linkText:"See more"}]],renderAppender:()=>(0,r.createElement)("div",{style:{background:E.light}},(0,r.createElement)(i.InnerBlocks.ButtonBlockAppender,null))});(0,m.useEffect)((()=>{a||t({uniqueId:"banner"+l.slice(0,8)})}),[l,t,a]);const Y=`\n\t\t.${a} .slider-wrapper {\n\t\t\tgap: ${j}px;\n\t\t}\n\n\t\t.${a} .slider-item {\n\t\t\tflex-basis: calc(${100/O}% - ${j}px);\n\t\t}\n\t`,Z=`\n\t\t.${a} .slider-wrapper {\n\t\t\tgap: ${V}px;\n\t\t}\n\n\t\t.${a} .slider-item {\n\t\t\tflex-basis: calc(${100/R}% - ${V}px);\n\t\t}\n\t`,Q=`\n\t\t\n\t\t.${a} .slider-wrapper {\n\t\t\tgap: ${F}px;\n\t\t}\n\n\t\t.${a} .slider-item {\n\t\t\tflex-basis: calc(${100/I}% - ${F}px);\n\t\t}\n\t\n\n\t\t@media (min-width: ${y.sm}px) {\n\t\t\t${Y}\n\t\t}\n\n\t\t@media (min-width: ${y.md}px) {\n\t\t\t${Z}\n\t\t}\n\t`,X=`\n\t\t@media (min-width: ${y.lg}px) {\n\t\t\t.${a} .slider-wrapper {\n\t\t\t\tgap: ${B}px;\n\t\t\t\tgrid-template-columns: repeat(${D}, minmax(0, 1fr));\n\t\t\t}\n\t\t}\n\t`;return(0,m.useEffect)((()=>{JSON.stringify(o)!==JSON.stringify(X)&&t({blockStyle:X})}),[o,X,t]),(0,r.createElement)(m.Fragment,null,(0,r.createElement)("style",null,`${T(Q)}`),(0,r.createElement)("style",null,`${T(X)}`),(0,r.createElement)(A,{attributes:e,setAttributes:t}),(0,r.createElement)(i.BlockControls,{controls:[]},(0,r.createElement)(c.ToolbarGroup,null,(0,r.createElement)(i.MediaUploadCheck,null,(0,r.createElement)(i.MediaUpload,{onSelect:e=>t({backgroundImage:e}),allowedTypes:["image"],value:p.id,render:({open:e})=>(0,r.createElement)(c.ToolbarButton,{label:(0,d.__)("Edit background image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,d.__)("Edit background image","wp-custom-blocks")})})),(0,r.createElement)(i.MediaUploadCheck,null,(0,r.createElement)(i.MediaUpload,{onSelect:e=>t({adviceBackgroundImage:e}),allowedTypes:["image"],value:M.id,render:({open:e})=>(0,r.createElement)(c.ToolbarButton,{label:(0,d.__)("Edit advice background image","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,d.__)("Edit advice background image","wp-custom-blocks")})})))),(0,r.createElement)(i.BlockControls,{controls:[]},(0,r.createElement)(m.Fragment,null,(0,r.createElement)(c.ToolbarGroup,null,(0,r.createElement)(c.ToolbarButton,{label:(0,d.__)("Add Link","wp-custom-blocks"),onClick:()=>G(!0),icon:"admin-links",placeholder:(0,d.__)("Add Link","wp-custom-blocks")})),q&&(0,r.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>G(!1),offset:5},(0,r.createElement)(S,{link:h,linkName:"link",label:(0,d.__)("Link","wp-custom-blocks"),setAttributes:t})))),(0,r.createElement)("div",{...W},(0,r.createElement)("div",{className:"relative md:mb-28"},(0,r.createElement)("div",{className:"relative isolate py-16 lg:py-32",style:{backgroundColor:n}},p.url&&(0,r.createElement)("img",{className:"absolute inset-0 -z-10 !h-full w-full object-cover md:object-center",src:p.url,alt:p.alt,width:p.width,height:p.height}),(0,r.createElement)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},(0,r.createElement)("div",{className:"mx-auto mb-10 lg:mx-0"},(0,r.createElement)("h1",{className:"font-notoSans font-black uppercase"},(0,r.createElement)("span",{className:"text-base italic  text-white tracking-wide lg:text-2xl lg:tracking-widest"},"Welcome to"),(0,r.createElement)(i.RichText,{tagName:"span",className:"mb-5 text-5xl lg:text-9xl block",value:u,onChange:e=>t({title:e}),placeholder:(0,d.__)("Site name..","wp-custom-blocks"),style:{color:b}})),(0,r.createElement)(i.RichText,{tagName:"p",className:"font-notoSans text-base max-w-2xl mb-10",value:w,onChange:e=>t({description:e}),placeholder:(0,d.__)("Description title..","wp-custom-blocks"),style:{color:g}}),(0,r.createElement)("button",{className:"relative flex text-white text-base italic font-black w-fit",type:"button","aria-expanded":"false"},(0,r.createElement)("div",{className:"absolute w-full h-full rounded-lg transform -skew-x-12",style:{backgroundColor:N}}),(0,r.createElement)(i.RichText,{tagName:"span",className:"font-notoSans relative uppercase py-5 px-8 mx-auto",value:C,onChange:e=>t({buttonText:e}),placeholder:(0,d.__)("Button text..","wp-custom-blocks"),style:{color:_}}))),(0,r.createElement)("div",{className:"mx-auto mb-11 lg:mx-0"},(0,r.createElement)(i.RichText,{tagName:"h4",className:"font-notoSans mb-6 text-base font-black text-white uppercase italic lg:text-2xl",value:f,onChange:e=>t({sportsTitle:e}),placeholder:(0,d.__)("Title sports title..","wp-custom-blocks"),style:{color:v}}),(0,r.createElement)(i.RichText,{tagName:"p",className:"font-notoSans text-base text-white max-w-2xl lg:mb-10",value:k,onChange:e=>t({sportsDescription:e}),placeholder:(0,d.__)("Description sports description..","wp-custom-blocks"),style:{color:x}})),(0,r.createElement)("div",{className:"relative md:mb-28"},(0,r.createElement)("div",{className:"overflow-hidden pb-14 lg:pb-0"},(0,r.createElement)("div",{className:s()(L,"w-full h-full"),id:a},(0,r.createElement)("div",{...K})))))),(0,r.createElement)("div",{className:"md:absolute md:inset-x-0 md:-bottom-28"},(0,r.createElement)("div",{className:"relative px-0 mx-auto max-w-7xl md:px-6 lg:px-8"},(0,r.createElement)("div",{className:"border-hex bg-white-standard w-full h-full absolute inset-x-0 -top-2 hidden md:!block"}),(0,r.createElement)("div",{className:"mask-hex relative isolate overflow-hidden w-full",style:{backgroundColor:$}},M.url&&(0,r.createElement)("img",{className:"absolute inset-0 -z-10 !h-full w-full object-cover md:object-center",src:M.url,alt:M.alt,width:M.width,height:M.height}),(0,r.createElement)("div",{className:"max-w-3xl p-6 md:py-12 md:px-24"},(0,r.createElement)(i.RichText,{tagName:"h5",className:"font-notoSans mb-6 text-base font-black italic md:text-2xl",value:U,onChange:e=>t({adviceTitle:e}),placeholder:(0,d.__)("Advice title..","wp-custom-blocks"),style:{color:z}}),(0,r.createElement)(i.RichText,{tagName:"p",className:"font-notoSans text-base mb-1.5 md:mb-0",value:H,onChange:e=>t({adviceDescription:e}),placeholder:(0,d.__)("Advice description..","wp-custom-blocks"),style:{color:J}}))))))))},save:({attributes:e})=>{const{uniqueId:t,backgroundColor:l,backgroundImage:a,title:o,description:n,titleColor:c,descriptionColor:m,sportsTitle:d,sportsTitleColor:p,sportsDescription:u,sportsDescriptionColor:b,buttonLink:w,buttonText:g,buttonTextColor:f,buttonColor:v,isLoopSlider:k,isDisableAutoplay:x,sliderAutoplayDelay:E,sliderMobileSlidesPerView:h,sliderTabletSlidesPerView:y,sliderLaptopSlidesPerView:C,sliderMobileSpaceBetween:_,sliderTabletSpaceBetween:N,sliderLaptopSpaceBetween:S,adviceTitle:T,adviceBackgroundColor:D,adviceBackgroundImage:B,adviceTitleColor:A,adviceDescription:P,adviceDescriptionColor:I}=e,O=i.useBlockProps.save({className:s()(t,"!mt-0","md:!mb-32")}),R={"data-slider-loop":k,"data-slider-disable-autoplay":x,"data-slider-autoplay-delay":E,"data-slides-per-view-xs":h,"data-slides-per-view-sm":y,"data-slides-per-view-md":C,"data-slides-space-between-xs":_,"data-slides-space-between-sm":N,"data-slides-space-between-md":S};return(0,r.createElement)("div",{...O},(0,r.createElement)("div",{className:"relative md:mb-28"},(0,r.createElement)("div",{className:"relative isolate py-16 lg:py-32",style:{backgroundColor:l}},a.url&&(0,r.createElement)("img",{className:"absolute inset-0 -z-10 h-full w-full object-cover md:object-center",src:a.url,alt:a.alt,width:a.width,height:a.height}),(0,r.createElement)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},(0,r.createElement)("div",{className:"mx-auto mb-10 lg:mx-0"},(0,r.createElement)("h1",{className:"font-notoSans font-black uppercase"},(0,r.createElement)("span",{className:"text-base italic text-white tracking-wide lg:text-2xl lg:tracking-widest"},"Welcome to"),(0,r.createElement)(i.RichText.Content,{tagName:"span",className:"mb-5 text-5xl lg:text-9xl block",value:o,style:{color:c}})),(0,r.createElement)(i.RichText.Content,{tagName:"p",className:"font-notoSans text-base max-w-2xl mb-10",value:n,style:{color:m}}),g&&(0,r.createElement)("a",{href:w.url,target:w.openInNewTab?"_blank":"_self",rel:w.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline inline-block"},(0,r.createElement)("button",{className:"relative flex text-white text-base italic font-black w-fit",type:"button","aria-expanded":"false"},(0,r.createElement)("div",{className:"absolute w-full h-full rounded-lg transform -skew-x-12",style:{backgroundColor:v}}),(0,r.createElement)(i.RichText.Content,{tagName:"span",className:"font-notoSans relative uppercase py-5 px-8 mx-auto",value:g,style:{color:f}})))),(0,r.createElement)("div",{className:"mx-auto mb-11 lg:mx-0"},(0,r.createElement)(i.RichText.Content,{tagName:"h4",className:"font-notoSans mb-6 text-base font-black text-white uppercase italic lg:text-2xl",value:d,style:{color:p}}),(0,r.createElement)(i.RichText.Content,{tagName:"p",className:"font-notoSans text-base text-white max-w-2xl lg:mb-10",value:u,style:{color:b}})),(0,r.createElement)("div",{className:"relative md:mb-28"},(0,r.createElement)("div",{className:"overflow-hidden pb-14 lg:pb-0"},(0,r.createElement)("div",{className:s()(L,"w-full h-full"),id:t,...R},(0,r.createElement)("div",{className:"swiper-wrapper slider-wrapper lg:!grid"},(0,r.createElement)(i.InnerBlocks.Content,null)),(0,r.createElement)("div",{className:"swiper-pagination [&>*]:mr-3 [&>*:last-child]:mr-0 lg:!hidden"})))))),(T||P)&&(0,r.createElement)("div",{className:"md:absolute md:inset-x-0 md:-bottom-28"},(0,r.createElement)("div",{className:"relative px-0 mx-auto max-w-7xl md:px-6 lg:px-8"},(0,r.createElement)("div",{className:"border-hex bg-white-standard w-full h-full absolute inset-x-0 -top-2 hidden md:!block"}),(0,r.createElement)("div",{className:"mask-hex relative isolate overflow-hidden w-full",style:{backgroundColor:D}},B&&(0,r.createElement)("img",{className:"absolute inset-0 -z-10 h-full w-full object-cover md:object-center",src:B.url,alt:B.alt,width:B.width,height:B.height}),(0,r.createElement)("div",{className:"max-w-3xl p-6 md:!py-12 md:!px-24"},(0,r.createElement)(i.RichText.Content,{tagName:"h5",className:"font-notoSans mb-6 text-base font-black italic md:!text-2xl",value:T,style:{color:A}}),(0,r.createElement)(i.RichText.Content,{tagName:"p",className:"font-notoSans text-base mb-1.5 md:!mb-0",value:P,style:{color:I}})))))))}})},967:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=n(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=n(t,l));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var l=o[e]={exports:{}};return a[e](l,l.exports,r),l.exports}r.m=a,e=[],r.O=(t,l,a,o)=>{if(!l){var n=1/0;for(m=0;m<e.length;m++){for(var[l,a,o]=e[m],s=!0,i=0;i<l.length;i++)(!1&o||n>=o)&&Object.keys(r.O).every((e=>r.O[e](l[i])))?l.splice(i--,1):(s=!1,o<n&&(n=o));if(s){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[l,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},l=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);r.r(o);var n={};t=t||[null,l({}),l([]),l(l)];for(var s=2&a&&e;"object"==typeof s&&!~t.indexOf(s);s=l(s))Object.getOwnPropertyNames(s).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,r.d(o,n),o},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={180:0,296:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var a,o,[n,s,i]=l,c=0;if(n.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(i)var m=i(r)}for(t&&t(l);c<n.length;c++)o=n[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},l=globalThis.webpackChunkwp_custom_blocks=globalThis.webpackChunkwp_custom_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=r.O(void 0,[296],(()=>r(275)));n=r.O(n)})();