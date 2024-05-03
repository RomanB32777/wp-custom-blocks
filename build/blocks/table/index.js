(()=>{var e,t,l,a={950:(e,t,l)=>{"use strict";const a=window.wp.blocks,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/table","version":"0.1.0","title":"Table","category":"wp-custom-blocks","description":"Table block","supports":{"html":false},"textdomain":"table-item-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./init-table-sliders.js"}'),n=window.React;var r=l(967),i=l.n(r);const s=window.wp.blockEditor,c=window.wp.components,m=window.wp.compose,d=window.wp.data,u=window.wp.element,p=window.wp.i18n,b=JSON.parse('{"xs":320,"sm":640,"md":768,"lg":1024,"xl":1280}'),w=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var g=l.t(w,2);const f=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var k=l.t(f,2);const E=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var h=l.t(E,2);const v={DEFAULT:"#621fbe",grizzly:"#a5d6c6",light:"#e1d1f1",brightest:"#f3eff9"},C={DEFAULT:"#121212",grizzly:"#4e4e53",opacity:"#000c"},y={DEFAULT:"#faf8fb",light:"#f0eff8",opacity:"#f2eff833",standard:"#fff"},_={DEFAULT:"#acacb5",light:"#7f8c8d",dark:"#9797b2"},x=b,S=Array.from(k),N=Array.from(h),T=Array.from(g),B="swiper-slider",R=24,L={uniqueId:{type:"string"},blockStyle:{type:"object"},title:{type:"string"},titleColor:{type:"string",default:C.DEFAULT},titleTag:{type:"string",default:"h2"},titleSize:{type:"number",default:24},titleLineHeight:{type:"number",default:2},titleMobileSize:{type:"number",default:16},titleMobileLineHeight:{type:"number",default:1.5},titleWeight:{type:"number",default:900},titleTransform:{type:"string",default:"uppercase"},description:{type:"string"},descriptionColor:{type:"string",default:C.DEFAULT},isWithLinkBlock:{type:"boolean",default:!1},link:{type:"object",default:{url:"#",openInNewTab:!0}},linkText:{type:"string"},linkTextColor:{type:"string",default:_.dark},linkBtnArrowColor:{type:"string",default:_.dark},linkBackgroundBtnColor:{type:"string",default:y.light},isEnableSlider:{type:"boolean",default:!0},isLoopSlider:{type:"boolean",default:!0},isDisableAutoplay:{type:"boolean",default:!1},sliderAutoplayDelay:{type:"number",default:5e3},sliderMobileSlidesPerView:{type:"number",default:1},sliderTabletSlidesPerView:{type:"number",default:2},sliderLaptopSlidesPerView:{type:"number",default:3},sliderMobileSpaceBetween:{type:"number",default:R},sliderTabletSpaceBetween:{type:"number",default:R},sliderLaptopSpaceBetween:{type:"number",default:R},mobileItemsCount:{type:"number",default:1},tabletItemsCount:{type:"number",default:3},laptopItemsCount:{type:"number",default:4},mobileSpaceBetween:{type:"number",default:R},tabletSpaceBetween:{type:"number",default:R},laptopSpaceBetween:{type:"number",default:R}},O=(e,t)=>e[t].default,I=[{name:(0,p.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,p.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,p.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,p.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,p.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,p.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,p.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,p.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,p.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,p.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,p.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,p.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,p.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,p.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,p.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,p.__)("Color","wp-custom-blocks"),color:"#d63031"}],P=({label:e,name:t,disabled:l,attributes:a,defaultAttributes:o,setAttributes:r})=>{const[s,d]=(0,u.useState)(!1),b=`color-control-${(0,m.useInstanceId)(P)}`,w=a[t],g=e=>r({[t]:e});return(0,n.createElement)(c.Flex,null,(0,n.createElement)(c.FlexBlock,null,(0,n.createElement)(c.BaseControl,{id:b,label:e,className:i()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,n.createElement)(c.FlexItem,null,(0,n.createElement)(c.Button,{icon:"image-rotate",iconSize:14,label:(0,p.__)("Reset","wp-custom-blocks"),disabled:l,size:"small",onClick:()=>g(String(O(o,t))),className:i()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:w,disabled:!w})})),(0,n.createElement)(c.FlexItem,null,(0,n.createElement)("button",{disabled:l,className:i()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>d(!0)},(0,n.createElement)(c.ColorIndicator,{colorValue:w})),s&&(0,n.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>d(!1),offset:5},(0,n.createElement)(c.ColorPicker,{color:w,onChange:e=>g(e),enableAlpha:!0}),(0,n.createElement)("div",{className:"px-3 pb-3"},(0,n.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,p.__)("Colors Palette","wp-custom-blocks")),(0,n.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},I.map(((e,t)=>(0,n.createElement)(c.ColorIndicator,{className:i()({active:e.color===w}),title:e.name,key:t,colorValue:e.color,onClick:()=>g(e.color)}))))))))},D=({label:e,link:t,linkName:l,setAttributes:a})=>(0,n.createElement)("div",{className:"w-72 p-2"},(0,n.createElement)(c.TextControl,{label:e,value:t.url,onChange:e=>{a({[l]:{...t,url:e}})}}),(0,n.createElement)(c.ToggleControl,{label:(0,p.__)("Open in new tab","wp-custom-blocks"),checked:t&&t.openInNewTab,onChange:()=>{a({[l]:{...t,openInNewTab:!t.openInNewTab}})}})),j=({attributes:{title:e,titleColor:t,titleTag:l,description:a,descriptionColor:o,link:r,isWithLinkBlock:i,linkText:m,linkTextColor:d,linkBtnArrowColor:b,linkBackgroundBtnColor:w},setAttributes:g,blockProps:f,children:k})=>{const[E,h]=(0,u.useState)(!1);return(0,n.createElement)(u.Fragment,null,i&&(0,n.createElement)(s.BlockControls,{controls:void 0},(0,n.createElement)(u.Fragment,null,(0,n.createElement)(c.ToolbarGroup,null,(0,n.createElement)(c.ToolbarButton,{label:(0,p.__)("Add Link","wp-custom-blocks"),onClick:()=>h(!E),icon:"admin-links",placeholder:(0,p.__)("Add Link","wp-custom-blocks")})),E&&(0,n.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>h(!1),offset:5},(0,n.createElement)(D,{link:r,linkName:"link",label:(0,p.__)("More link","wp-custom-blocks"),setAttributes:g})))),(0,n.createElement)("div",{...f},(0,n.createElement)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},(0,n.createElement)("div",{className:"my-10 sm:my-20"},(0,n.createElement)("div",{className:"flex justify-between items-center mb-8"},(0,n.createElement)(s.RichText,{tagName:l,className:"title italic",value:e,onChange:e=>g({title:e}),placeholder:(0,p.__)("Block title..","wp-custom-blocks"),style:{color:t}}),i&&(0,n.createElement)("div",{className:"flex items-center cursor-pointer"},(0,n.createElement)(s.RichText,{tagName:"span",className:"hidden text-sm font-bold italic uppercase md:inline-block md:mr-3",value:m,onChange:e=>g({linkText:e}),placeholder:(0,p.__)("Link text..","wp-custom-blocks"),style:{color:d}}),(0,n.createElement)("div",{className:"more-arrow w-6 h-6 rounded-full flex items-center justify-center",style:{color:b,background:w}},(0,n.createElement)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z",fill:"currentColor"}))))),(0,n.createElement)(s.RichText,{tagName:"p",className:"max-w-3xl text-base mb-6 md:mb-11",value:a,onChange:e=>g({description:e}),placeholder:(0,p.__)("Block description..","wp-custom-blocks"),style:{color:o}}),k))))},A=({attributes:{title:e,titleColor:t,titleTag:l,description:a,descriptionColor:o,link:r,isWithLinkBlock:i,linkText:c,linkTextColor:m,linkBtnArrowColor:d,linkBackgroundBtnColor:u},blockProps:p,children:b})=>(0,n.createElement)("div",{...p},(0,n.createElement)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},(0,n.createElement)("div",{className:"my-10 sm:my-20"},(0,n.createElement)("div",{className:"flex justify-between items-center mb-8"},(0,n.createElement)(s.RichText.Content,{tagName:l,className:"title italic",value:e,style:{color:t}}),i&&(0,n.createElement)("a",{href:r.url,target:r.openInNewTab?"_blank":"_self",rel:r.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline"},(0,n.createElement)("div",{className:"flex items-center cursor-pointer"},(0,n.createElement)(s.RichText.Content,{tagName:"span",className:"hidden text-sm font-bold italic uppercase md:inline-block md:mr-3",value:c,style:{color:m}}),(0,n.createElement)("div",{className:"more-arrow w-6 h-6 rounded-full flex items-center justify-center bg-white-light",style:{color:d,backgroundColor:u}},(0,n.createElement)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z",fill:"currentColor"})))))),(0,n.createElement)(s.RichText.Content,{tagName:"p",className:"max-w-3xl text-base mb-6 md:mb-11",value:a,style:{color:o}}),b))),M=()=>(0,n.createElement)("div",{style:{marginBottom:24}},(0,n.createElement)(c.Tip,null,(0,n.createElement)("p",null,"Mobile display: ",x.xs,"...",x.sm,"px"),(0,n.createElement)("p",null,"Tablet display: ",x.sm,"...",x.md,"px"),(0,n.createElement)("p",null,"Laptop display: ",x.md,"...",x.xl,"px"),(0,n.createElement)("p",null,"Desktop display: ",x.xl,"..."))),$=({attributes:e,setAttributes:t,blockSettings:l,blockSlidesPerView:a,blockBetweenSlides:o,blockSliderSettings:r,blockItemsCount:i,blockItemsSpaceBetween:m,blockItemsSettings:d,children:b})=>{const{titleTag:w,titleSize:g,titleLineHeight:f,titleMobileSize:k,titleMobileLineHeight:E,titleWeight:h,titleTransform:v,isWithLinkBlock:C,isEnableSlider:y,isLoopSlider:_,isDisableAutoplay:x,sliderAutoplayDelay:B,sliderMobileSlidesPerView:I,sliderTabletSlidesPerView:D,sliderLaptopSlidesPerView:j,sliderMobileSpaceBetween:A,sliderTabletSpaceBetween:$,sliderLaptopSpaceBetween:F,mobileItemsCount:V,tabletItemsCount:z,laptopItemsCount:H,mobileSpaceBetween:W,tabletSpaceBetween:U,laptopSpaceBetween:J}=e,[q,G]=(0,u.useState)(C),[Z,K]=(0,u.useState)(y),[Y,Q]=(0,u.useState)(!y);(0,u.useEffect)((()=>{G(C)}),[C]),(0,u.useEffect)((()=>{Q(!y),K(y)}),[y]);const X={attributes:e,defaultAttributes:L,setAttributes:t};return(0,n.createElement)(s.InspectorControls,null,(0,n.createElement)(M,null),(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,n.createElement)(c.ToggleControl,{label:(0,p.__)("With link block","wp-custom-blocks"),checked:C,onChange:()=>t({isWithLinkBlock:!C})}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.ToggleControl,{label:(0,p.__)("Enable slider","wp-custom-blocks"),checked:y,onChange:()=>t({isEnableSlider:!y})}),l&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.CardDivider,null),l)),(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Description settings","wp-custom-blocks"),initialOpen:!1},(0,n.createElement)(P,{name:"descriptionColor",label:(0,p.__)("Description color","wp-custom-blocks"),...X})),(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Title settings","wp-custom-blocks"),initialOpen:!1},(0,n.createElement)(P,{name:"titleColor",label:(0,p.__)("Title Color","wp-custom-blocks"),...X}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.SelectControl,{label:(0,p.__)("Select Tag","wp-custom-blocks"),value:w,options:S,onChange:e=>{t({titleTag:e})}}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.FontSizePicker,{fontSizes:T,value:g,onChange:e=>{t({titleSize:Number(e)||Number(O(L,"titleSize"))})},__nextHasNoMarginBottom:!0}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(s.LineHeightControl,{__unstableInputWidth:"120px",value:f,onChange:e=>{t({titleLineHeight:e})},__nextHasNoMarginBottom:!0}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Title weight","wp-custom-blocks"),value:h,onChange:e=>t({titleWeight:e}),step:100,min:100,max:900,allowReset:!0,resetFallbackValue:Number(O(L,"titleWeight"))}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.SelectControl,{label:(0,p.__)("Select title transform","wp-custom-blocks"),value:v,options:N,onChange:e=>{t({titleTransform:e})}}),(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Mobile title settings (display width < 769px)","wp-custom-blocks"),initialOpen:!1},(0,n.createElement)(c.FontSizePicker,{fontSizes:T,value:k,onChange:e=>{t({titleMobileSize:Number(e)||Number(O(L,"titleMobileSize"))})},__nextHasNoMarginBottom:!0}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(s.LineHeightControl,{__nextHasNoMarginBottom:!0,__unstableInputWidth:"120px",value:E,onChange:e=>{t({titleMobileLineHeight:e})}}))),(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Link settings","wp-custom-blocks"),initialOpen:q,opened:q,onToggle:()=>G(!q)},(0,n.createElement)(P,{name:"linkTextColor",label:(0,p.__)("Link text color","wp-custom-blocks"),disabled:!C,...X}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(P,{name:"linkBtnArrowColor",label:(0,p.__)("Link button arrow color","wp-custom-blocks"),disabled:!C,...X}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(P,{name:"linkBackgroundBtnColor",label:(0,p.__)("Link background button color","wp-custom-blocks"),disabled:!C,...X})),(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Slider settings","wp-custom-blocks"),initialOpen:Z,opened:Z,onToggle:()=>K(!Z)},(0,n.createElement)(c.ToggleControl,{label:(0,p.__)("Slider loop","wp-custom-blocks"),checked:_,disabled:!y,onChange:()=>t({isLoopSlider:!_})}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.ToggleControl,{label:(0,p.__)("Disable slider autoplay","wp-custom-blocks"),checked:x,disabled:!y,onChange:()=>t({isDisableAutoplay:!x})}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Slider autoplay delay","wp-custom-blocks"),value:B,onChange:e=>t({sliderAutoplayDelay:e}),disabled:!y||x,step:500,min:0,max:3e4,allowReset:!0,resetFallbackValue:Number(O(L,"sliderAutoplayDelay"))}),(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Slides per view settings","wp-custom-blocks"),initialOpen:!1},(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Mobile slides per view","wp-custom-blocks"),value:I,onChange:e=>t({sliderMobileSlidesPerView:e}),disabled:!y,step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(O(L,"sliderMobileSlidesPerView"))}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Tablet slides per view","wp-custom-blocks"),value:D,onChange:e=>t({sliderTabletSlidesPerView:e}),disabled:!y,step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(O(L,"sliderTabletSlidesPerView"))}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Laptop slides per view","wp-custom-blocks"),value:j,onChange:e=>t({sliderLaptopSlidesPerView:e}),disabled:!y,step:1,min:1,max:10,allowReset:!0,resetFallbackValue:Number(O(L,"sliderLaptopSlidesPerView"))}),a&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.CardDivider,null),a)),(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Slides between settings","wp-custom-blocks"),initialOpen:!1},(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Mobile space between slides","wp-custom-blocks"),value:A,onChange:e=>t({sliderMobileSpaceBetween:e}),disabled:!y,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:R}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Tablet space between slides","wp-custom-blocks"),value:$,onChange:e=>t({sliderTabletSpaceBetween:e}),disabled:!y,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:R}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Laptop space between slides","wp-custom-blocks"),value:F,onChange:e=>t({sliderLaptopSpaceBetween:e}),disabled:!y,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:R}),o&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.CardDivider,null),o)),r),(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Without slider settings","wp-custom-blocks"),initialOpen:Y,opened:Y,onToggle:()=>Q(!Y)},(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Items count","wp-custom-blocks"),initialOpen:!1},(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Mobile items count","wp-custom-blocks"),value:V,onChange:e=>t({mobileItemsCount:e}),disabled:y,step:1,min:1,max:12,allowReset:!0,resetFallbackValue:Number(O(L,"mobileItemsCount"))}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Tablet items count","wp-custom-blocks"),value:z,onChange:e=>t({tabletItemsCount:e}),disabled:y,step:1,min:1,max:12,allowReset:!0,resetFallbackValue:Number(O(L,"tabletItemsCount"))}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Laptop items count","wp-custom-blocks"),value:H,onChange:e=>t({laptopItemsCount:e}),disabled:y,step:1,min:1,max:12,allowReset:!0,resetFallbackValue:Number(O(L,"laptopItemsCount"))}),i&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.CardDivider,null),i)),(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Items between settings","wp-custom-blocks"),initialOpen:!1},(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Mobile space between items","wp-custom-blocks"),value:W,onChange:e=>t({mobileSpaceBetween:e}),disabled:y,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:R}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Tablet space between items","wp-custom-blocks"),value:U,onChange:e=>t({tabletSpaceBetween:e}),disabled:y,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:R}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Laptop space between items","wp-custom-blocks"),value:J,onChange:e=>t({laptopSpaceBetween:e}),disabled:y,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:R}),m&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.CardDivider,null),m)),d),b)},F=(e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""),V=String(Math.random()),z={[V]:""},H={[String(Math.random())]:{[V]:{value:""}}},W={...L,columns:{type:"object",default:z},rows:{type:"object",default:H},backgroundColor:{type:"string",default:v.brightest},columnColor:{type:"string",default:_.DEFAULT},rowColor:{type:"string",default:C.DEFAULT},borderRadius:{type:"number",default:8}},U=({attributes:e,setAttributes:t})=>{const{borderRadius:l}=e,a={attributes:e,defaultAttributes:W,setAttributes:t};return(0,n.createElement)($,{attributes:e,setAttributes:t,blockSettings:(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.RangeControl,{label:(0,p.__)("Block radius","wp-custom-blocks"),value:l,onChange:e=>t({borderRadius:e}),step:1,min:0,max:100,allowReset:!0,resetFallbackValue:Number(O(W,"borderRadius"))}))},(0,n.createElement)(c.PanelBody,{title:(0,p.__)("Table item settings","wp-custom-blocks"),initialOpen:!0},(0,n.createElement)(P,{name:"backgroundColor",label:(0,p.__)("Background color","wp-custom-blocks"),...a}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(P,{name:"columnColor",label:(0,p.__)("Column color","wp-custom-blocks"),...a}),(0,n.createElement)(c.CardDivider,null),(0,n.createElement)(P,{name:"rowColor",label:(0,p.__)("Row color","wp-custom-blocks"),...a})))},J=({selectedCeil:{rowId:e,colId:t},attributes:{rows:l},setAttributes:a})=>{const o=l[e],r=o?.[t];if(r)return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(s.MediaUploadCheck,null,(0,n.createElement)(s.MediaUpload,{onSelect:t=>{r.icon=t,a({rows:{...l,[e]:o}})},allowedTypes:["image"],value:r.icon?.id,render:({open:e})=>(0,n.createElement)(c.ToolbarButton,{label:(0,p.__)("Edit Icon","wp-custom-blocks"),onClick:e,icon:"format-image",placeholder:(0,p.__)("Edit Icon","wp-custom-blocks")})})),r.value&&r.icon?.id&&(0,n.createElement)(c.ToolbarButton,{label:(0,p.__)("Reverse","wp-custom-blocks"),onClick:()=>{r.isReverse=!r.isReverse,a({rows:{...l,[e]:o}})},icon:"update",placeholder:(0,p.__)("Reverse","wp-custom-blocks")}))},{name:q,...G}=o;(0,a.registerBlockType)(q,{...G,icon:"editor-table",attributes:W,edit:({attributes:e,setAttributes:t,clientId:l})=>{const{rows:a,columns:o,uniqueId:r,blockStyle:b,titleSize:w,titleLineHeight:g,titleMobileSize:f,titleMobileLineHeight:k,titleWeight:E,titleTransform:h,isEnableSlider:v,sliderMobileSlidesPerView:C,sliderTabletSlidesPerView:y,sliderLaptopSlidesPerView:_,sliderMobileSpaceBetween:S,sliderTabletSpaceBetween:N,sliderLaptopSpaceBetween:T,mobileItemsCount:R,tabletItemsCount:L,laptopItemsCount:O,mobileSpaceBetween:I,tabletSpaceBetween:P,laptopSpaceBetween:D,backgroundColor:A,columnColor:M,rowColor:$,borderRadius:V}=e,z=(0,s.useBlockProps)({className:i()(r,"font-notoSans")}),H="Desktop"===(0,d.select)("core/edit-post").__experimentalGetPreviewDeviceType(),W=(0,m.useViewportMatch)("large",">="),[q,G]=(0,u.useState)((()=>new Set(Object.keys(a)))),[Z,K]=(0,u.useState)((()=>new Set(Object.keys(o)))),[Y,Q]=(0,u.useState)(),X=[{icon:"table-row-after",title:(0,p.__)("Insert row","wp-custom-blocks"),onClick:()=>{const e=String(Math.random());q.has(e)||(G(q.add(e)),t({rows:{...a,[e]:Object.fromEntries(Object.keys(o).map((e=>[e,{value:"",icon:{}}])))}}))}},{icon:"table-row-delete",title:(0,p.__)("Delete row","wp-custom-blocks"),isDisabled:!Y?.rowId,onClick:()=>{Y?.rowId&&(G((e=>(e.delete(Y.rowId),e))),t({rows:Object.fromEntries(Object.entries(a).filter((([e])=>e!==Y.rowId)))}),Q(void 0))}},{icon:"table-col-after",title:(0,p.__)("Insert column","wp-custom-blocks"),onClick:()=>{const e=String(Math.random());if(!Z.has(e)){K(Z.add(e));const l=Object.entries(a).map((([t,l])=>[t,{...l,[e]:{value:"",icon:{}}}]));t({rows:Object.fromEntries(l)}),t({columns:{...o,[e]:""}})}}},{icon:"table-col-delete",title:(0,p.__)("Delete column","wp-custom-blocks"),isDisabled:!Y?.colId,onClick:()=>{Y?.colId&&(K((e=>(e.delete(Y.colId),e))),t({columns:Object.fromEntries(Object.entries(o).filter((([e])=>e!==Y.colId))),rows:Object.fromEntries(Object.entries(a).map((([e,t])=>[e,Object.fromEntries(Object.entries(t).filter((([e])=>e!==Y.colId)))])))}),Q(void 0))}}],ee=`\n\t\t.${r} .slider-wrapper {\n\t\t\tgap: ${N}px;\n\t\t}\n\n\t\t.${r} .slider-item {\n\t\t\tflex-basis: calc(${100/y}% - ${N}px);\n\t\t}\n\t`,te=`\n\t\t.${r} .slider-wrapper {\n\t\t\tgap: ${T}px;\n\t\t}\n\n\t\t.${r} .slider-item {\n\t\t\tflex-basis: calc(${100/_}% - ${T}px);\n\t\t}\n\t`,le=`\n\t\t\n\t\t.${r} .slider-wrapper {\n\t\t\tgap: ${S}px;\n\t\t}\n\n\t\t.${r} .slider-item {\n\t\t\tflex-basis: calc(${100/C}% - ${S}px);\n\t\t}\n\t\n\n\t\t@media (min-width: ${x.sm}px) {\n\t\t\t${ee}\n\t\t}\n\n\t\t@media (min-width: ${x.md}px) {\n\t\t\t${te}\n\t\t}\n\t`,ae=`\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${P}px;\n\t\t\tgrid-template-columns: repeat(${L}, minmax(0, 1fr));\n\t\t}\n\t`,oe=`\n\t\t.${r} .title {\n\t\t\tfont-size: ${w}px;\n\t\t\tline-height: ${g}rem;\n\t\t}\n\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${D}px;\n\t\t\tgrid-template-columns: repeat(${O}, minmax(0, 1fr));\n\t\t}\n\t`,ne=`\n\t\t\n\t\t.${r} .title {\n\t\t\tfont-size: ${f}px;\n\t\t\tline-height: ${k}rem;\n\t\t\tfont-weight: ${E};\n\t\t\ttext-transform: ${h};\n\t\t}\n\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${I}px;\n\t\t\tgrid-template-columns: repeat(${R}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${r} tbody tr:nth-child(odd) > * {\n\t\t\tbackground-color: ${A};\n\t\t}\n\t\n\n\t\t@media (min-width: ${x.sm}px) {\n\t\t\t${ae}\n\t\t}\n\n\t\t@media (min-width: ${x.md}px) {\n\t\t\t${oe}\n\t\t}\n\n\t\t@media (min-width: ${x.xl}px) {\n\t\t\t\n\t\t}\n\t`;return(0,u.useEffect)((()=>{JSON.stringify(b)!==JSON.stringify(ne)&&t({blockStyle:ne})}),[b,ne,t]),(0,u.useEffect)((()=>{r||t({uniqueId:"table-"+l.slice(0,8)})}),[l,t,r]),(0,n.createElement)(u.Fragment,null,(0,n.createElement)("style",null,`${F(ne)}`),(0,n.createElement)("style",null,`${F(le)}`),(0,n.createElement)(U,{attributes:e,setAttributes:t}),H&&W&&(0,n.createElement)(s.BlockControls,{controls:void 0},(0,n.createElement)(c.ToolbarGroup,null,(0,n.createElement)(c.DropdownMenu,{controls:X,icon:"grid-view",label:"Select a direction."}),Y&&(0,n.createElement)(J,{selectedCeil:Y,attributes:e,setAttributes:t}))),(0,n.createElement)(j,{attributes:e,setAttributes:t,blockProps:z},(0,n.createElement)("div",{className:"relative overflow-x-auto hidden lg:!block"},(0,n.createElement)("table",{className:"payments-table w-full text-sm text-left rtl:text-right"},(0,n.createElement)("thead",{className:"text-sm font-medium",style:{color:M}},(0,n.createElement)("tr",null,Object.entries(o).map((([e,l],a)=>(0,n.createElement)("th",{key:e,className:"px-3 py-2",scope:"col",onClick:()=>Q({colId:a>0?e:void 0,rowId:void 0})},(0,n.createElement)(s.RichText,{tagName:"span",value:l,onChange:l=>{t({columns:{...o,[e]:l}})},placeholder:(0,p.__)("Column text..","wp-custom-blocks"),style:{color:M}})))))),(0,n.createElement)("tbody",null,Array.from(q).map((e=>{const l=a[e];return(0,n.createElement)("tr",{key:e,className:i()("font-semibold italic text-lg",{"border-4 border-red":Y?.rowId===e})},Object.entries(l).map((([l,{value:o,icon:r,isReverse:c}],m,d)=>{const u=a[e],b=u?.[l],w=0===m,g=m===d.length-1,f={className:i()("px-3 py-6 relative",{"border-x-4 border-red":Y?.colId===l}),onClick:()=>Q({colId:l,rowId:e})};w&&(f.scope="row",f.style={...f.style,borderTopLeftRadius:V,borderBottomLeftRadius:V}),g&&(f.style={...f.style,borderTopRightRadius:V,borderBottomRightRadius:V});const k=w?"th":"td";return(0,n.createElement)(k,{key:m,...f},(0,n.createElement)("div",{className:i()("flex items-center whitespace-nowrap w-fit gap-x-3",{"flex-row-reverse":c})},(0,n.createElement)(s.RichText,{tagName:"span",value:o,onChange:l=>{b.value=l,t({rows:{...a,[e]:u}})},placeholder:(0,p.__)("Cell text..","wp-custom-blocks"),style:{color:$}}),r?.url&&(0,n.createElement)("div",{className:"max-w-2xl"},(0,n.createElement)("img",{className:"w-6 h-6 object-cover",src:r.url,alt:r.alt,width:r.width,height:r.height}))))})))}))))),(0,n.createElement)("div",{className:"relative lg:hidden"},(0,n.createElement)("div",{className:"overflow-hidden pb-14"},(0,n.createElement)("div",{className:i()("relative",{[B]:v}),id:r},(0,n.createElement)("div",{className:v?"slider-wrapper flex flex-wrap overflow-hidden":"inner-wrapper grid"},Array.from(q).map((e=>{const l=a[e];return(0,n.createElement)("div",{key:e,className:"slider-item px-4 w-full",style:{backgroundColor:A,borderRadius:V}},(0,n.createElement)("div",{className:"h-full"},Object.entries(l).map((([l,{value:r,icon:c,isReverse:m}],d)=>{const u=a[e],b=u[l];return(0,n.createElement)("div",{key:d,className:"py-4"},(0,n.createElement)("p",{className:"text-sm font-medium mb-2",style:{color:M}},o[l]),(0,n.createElement)("div",{className:i()("flex items-center whitespace-nowrap w-fit gap-x-3",{"flex-row-reverse":m})},(0,n.createElement)(s.RichText,{tagName:"p",value:r,className:"font-semibold italic text-lg",onChange:l=>{b.value=l,t({rows:{...a,[e]:u}})},placeholder:(0,p.__)("Value..","wp-custom-blocks"),style:{color:$}}),c?.url&&(0,n.createElement)("div",{className:"max-w-2xl"},(0,n.createElement)("img",{className:"w-6 h-6 object-cover",src:c.url,alt:c.alt,width:c.width,height:c.height}))))}))))}))))))))},save:({attributes:e})=>{const{rows:t,columns:l,uniqueId:a,isEnableSlider:o,isLoopSlider:r,isDisableAutoplay:c,sliderAutoplayDelay:m,sliderMobileSlidesPerView:d,sliderTabletSlidesPerView:u,sliderLaptopSlidesPerView:p,sliderMobileSpaceBetween:b,sliderTabletSpaceBetween:w,sliderLaptopSpaceBetween:g,backgroundColor:f,columnColor:k,rowColor:E,borderRadius:h}=e,v=s.useBlockProps.save({className:i()(a,"font-notoSans")}),C=o?{"data-slider-loop":r,"data-slider-disable-autoplay":c,"data-slider-autoplay-delay":m,"data-slides-per-view-xs":d,"data-slides-per-view-sm":u,"data-slides-per-view-md":p,"data-slides-space-between-xs":b,"data-slides-space-between-sm":w,"data-slides-space-between-md":g}:{},y=Object.entries(t).map((([e,t])=>(0,n.createElement)("div",{key:e,className:"swiper-slide px-4 w-full",style:{backgroundColor:f,borderRadius:h}},(0,n.createElement)("div",{className:"h-full"},Object.entries(t).map((([e,{value:t,icon:a,isReverse:o}],r)=>(0,n.createElement)("div",{key:r,className:"py-4"},(0,n.createElement)("p",{className:"text-sm font-medium mb-2"},(0,n.createElement)(s.RichText.Content,{tagName:"span",value:l[e],style:{color:k}})),(0,n.createElement)("div",{className:i()("flex items-center whitespace-nowrap w-fit gap-x-3",{"flex-row-reverse":o})},t&&(0,n.createElement)(s.RichText.Content,{tagName:"p",value:t,className:"font-semibold italic text-lg",style:{color:E}}),a?.url&&(0,n.createElement)("div",{className:"max-w-2xl"},(0,n.createElement)("img",{className:"w-6 h-6 object-cover",src:a.url,alt:a.alt,width:a.width,height:a.height}))))))))));return(0,n.createElement)(A,{attributes:e,blockProps:v},(0,n.createElement)("div",{className:"relative overflow-x-auto hidden lg:block"},(0,n.createElement)("table",{className:"payments-table w-full text-sm text-left rtl:text-right"},(0,n.createElement)("thead",{className:"text-sm font-medium"},(0,n.createElement)("tr",null,Object.entries(l).map((([e,t])=>(0,n.createElement)("th",{key:e,className:"px-3 py-2",scope:"col"},(0,n.createElement)(s.RichText.Content,{tagName:"span",value:t,style:{color:k}})))))),(0,n.createElement)("tbody",null,Object.entries(t).map((([e,t])=>(0,n.createElement)("tr",{key:e,className:"font-semibold italic text-lg"},Object.values(t).map((({value:e,icon:t,isReverse:l},a,o)=>{const r=0===a,c=a===o.length-1,m={className:"px-3 py-6"};r&&(m.scope="row",m.style={...m.style,borderTopLeftRadius:h,borderBottomLeftRadius:h}),c&&(m.style={...m.style,borderTopRightRadius:h,borderBottomRightRadius:h});const d=r?"th":"td";return(0,n.createElement)(d,{key:a,...m},(0,n.createElement)("div",{className:i()("flex items-center whitespace-nowrap w-fit gap-x-3",{"flex-row-reverse":l})},e&&(0,n.createElement)(s.RichText.Content,{tagName:"span",value:e,style:{color:E}}),t?.url&&(0,n.createElement)("div",{className:"max-w-2xl"},(0,n.createElement)("img",{className:"w-6 h-6 object-cover",src:t.url,alt:t.alt,width:t.width,height:t.height}))))})))))))),(0,n.createElement)("div",{className:"relative mb-6 lg:hidden"},(0,n.createElement)("div",{className:i()("overflow-hidden",{"pb-14 lg:pb-0":o})},(0,n.createElement)("div",{className:o?B:"inner-wrapper grid",id:a,...C},o?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"swiper-wrapper"},y),(0,n.createElement)("div",{className:"swiper-pagination [&>*]:mr-3 [&>*:last-child]:mr-0"})):y))))}})},967:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,n(l)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var l=o[e]={exports:{}};return a[e](l,l.exports,n),l.exports}n.m=a,e=[],n.O=(t,l,a,o)=>{if(!l){var r=1/0;for(m=0;m<e.length;m++){for(var[l,a,o]=e[m],i=!0,s=0;s<l.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((e=>n.O[e](l[s])))?l.splice(s--,1):(i=!1,o<r&&(r=o));if(i){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[l,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},l=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var r={};t=t||[null,l({}),l([]),l(l)];for(var i=2&a&&e;"object"==typeof i&&!~t.indexOf(i);i=l(i))Object.getOwnPropertyNames(i).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,n.d(o,r),o},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={335:0,296:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var a,o,[r,i,s]=l,c=0;if(r.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)var m=s(n)}for(t&&t(l);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(m)},l=globalThis.webpackChunkwp_custom_blocks=globalThis.webpackChunkwp_custom_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=n.O(void 0,[296],(()=>n(950)));r=n.O(r)})();