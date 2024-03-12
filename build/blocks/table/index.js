(()=>{var e,t,l,a={481:(e,t,l)=>{"use strict";const a=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wp-custom-blocks/table","version":"0.1.0","title":"Table block","category":"wp-custom-blocks","description":"Table block","supports":{"html":false},"textdomain":"table-item-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./init-table-sliders.js"}'),o=window.React;var r=l(967),i=l.n(r);const s=window.wp.blockEditor,c=window.wp.components,m=window.wp.element,d=window.wp.i18n,p=JSON.parse('{"xs":320,"sm":640,"md":768,"lg":1024,"xl":1280}'),u=JSON.parse('[{"name":"Small","slug":"small","size":14},{"name":"Medium","slug":"medium","size":16},{"name":"Large","slug":"large","size":18},{"name":"Big","slug":"big","size":24}]');var b=l.t(u,2);const w=JSON.parse('[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"},{"label":"P","value":"p"}]');var g=l.t(w,2);const f=JSON.parse('[{"label":"Capitalize","value":"capitalize"},{"label":"Lowercase","value":"lowercase"},{"label":"Uppercase","value":"uppercase"},{"label":"None","value":"none"}]');var k=l.t(f,2);const E={DEFAULT:"#621fbe",grizzly:"#a5d6c6",light:"#e1d1f1",brightest:"#f3eff9"},v={DEFAULT:"#121212",grizzly:"#4e4e53",opacity:"#000c"},h={DEFAULT:"#faf8fb",light:"#f0eff8",opacity:"#f2eff833",standard:"#fff"},y={DEFAULT:"#acacb5",light:"#7f8c8d",dark:"#9797b2"},C=p,_=Array.from(g),x=Array.from(k),S=Array.from(b),N=24,B={uniqueId:{type:"string"},blockStyle:{type:"object"},title:{type:"string"},titleColor:{type:"string",default:v.DEFAULT},titleTag:{type:"string",default:"h2"},titleSize:{type:"number",default:24},titleLineHeight:{type:"number",default:2},titleMobileSize:{type:"number",default:16},titleMobileLineHeight:{type:"number",default:1.5},titleWeight:{type:"number",default:900},titleTransform:{type:"string",default:"uppercase"},description:{type:"string"},descriptionColor:{type:"string",default:v.DEFAULT},isWithLinkBlock:{type:"boolean",default:!1},link:{type:"object",default:{url:"#",openInNewTab:!0}},linkText:{type:"string"},linkTextColor:{type:"string",default:y.dark},linkBtnArrowColor:{type:"string",default:y.dark},linkBackgroundBtnColor:{type:"string",default:h.light},isEnableSlider:{type:"boolean",default:!0},isLoopSlider:{type:"boolean",default:!0},isDisableAutoplay:{type:"boolean",default:!1},sliderAutoplayDelay:{type:"number",default:5e3},sliderMobileSlidesPerView:{type:"number",default:1},sliderTabletSlidesPerView:{type:"number",default:2},sliderLaptopSlidesPerView:{type:"number",default:3},sliderMobileSpaceBetween:{type:"number",default:N},sliderTabletSpaceBetween:{type:"number",default:N},sliderLaptopSpaceBetween:{type:"number",default:N},mobileItemsCount:{type:"number",default:1},tabletItemsCount:{type:"number",default:3},laptopItemsCount:{type:"number",default:4},mobileSpaceBetween:{type:"number",default:N},tabletSpaceBetween:{type:"number",default:N},laptopSpaceBetween:{type:"number",default:N}},T=window.wp.compose,L=(e,t)=>e[t].default,O=[{name:(0,d.__)("Black","wp-custom-blocks"),color:"#000"},{name:(0,d.__)("White","wp-custom-blocks"),color:"#fff"},{name:(0,d.__)("Green","wp-custom-blocks"),color:"#17946d"},{name:(0,d.__)("Purple","wp-custom-blocks"),color:"#a689ff"},{name:(0,d.__)("Purple black","wp-custom-blocks"),color:"#1c1230"},{name:(0,d.__)("Blue","wp-custom-blocks"),color:"#3070e8"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#a97bff"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#bdabda"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#f5eeff"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#343741"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#2b39b4"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#2e3246"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#34495e"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#ff2453"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#ffd32a"},{name:(0,d.__)("Color","wp-custom-blocks"),color:"#d63031"}],P=({label:e,name:t,disabled:l,attributes:a,defaultAttributes:n,setAttributes:r})=>{const[s,p]=(0,m.useState)(!1),u=`color-control-${(0,T.useInstanceId)(P)}`,b=a[t],w=e=>r({[t]:e});return(0,o.createElement)(c.Flex,null,(0,o.createElement)(c.FlexBlock,null,(0,o.createElement)(c.BaseControl,{id:u,label:e,className:i()("dgYvuo4SPB7iJTvwdKqA","!mb-0"),__nextHasNoMarginBottom:!0,children:""})),(0,o.createElement)(c.FlexItem,null,(0,o.createElement)(c.Button,{icon:"image-rotate",iconSize:14,label:(0,d.__)("Reset","wp-custom-blocks"),disabled:l,size:"small",onClick:()=>w(String(L(n,t))),className:i()("hm_U2TKdAiPMZ3zPD5YZ","w-3",{active:b,disabled:!b})})),(0,o.createElement)(c.FlexItem,null,(0,o.createElement)("button",{disabled:l,className:i()("UmSE2k_HSA75GHz8g2hh","w-6 h-6"),onClick:()=>p(!0)},(0,o.createElement)(c.ColorIndicator,{colorValue:b})),s&&(0,o.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>p(!1),offset:5},(0,o.createElement)(c.ColorPicker,{color:b,onChange:e=>w(e),enableAlpha:!0}),(0,o.createElement)("div",{className:"px-3 pb-3"},(0,o.createElement)("label",{className:"label inline-block mb-2",htmlFor:"colors-palette"},(0,d.__)("Colors Palette","wp-custom-blocks")),(0,o.createElement)("div",{id:"colors-palette",className:"flex flex-wrap items-stretch justify-start gap-1"},O.map(((e,t)=>(0,o.createElement)(c.ColorIndicator,{className:i()({active:e.color===b}),title:e.name,key:t,colorValue:e.color,onClick:()=>w(e.color)}))))))))},A=({label:e,link:t,linkName:l,setAttributes:a})=>(0,o.createElement)("div",{className:"w-72 p-2"},(0,o.createElement)(c.TextControl,{label:e,value:t.url,onChange:e=>{a({[l]:{...t,url:e}})}}),(0,o.createElement)(c.ToggleControl,{label:(0,d.__)("Open in new tab","wp-custom-blocks"),checked:t&&t.openInNewTab,onChange:()=>{a({[l]:{...t,openInNewTab:!t.openInNewTab}})}})),D=({attributes:{title:e,titleColor:t,titleTag:l,description:a,descriptionColor:n,link:r,isWithLinkBlock:i,linkText:p,linkTextColor:u,linkBtnArrowColor:b,linkBackgroundBtnColor:w},setAttributes:g,blockProps:f,children:k})=>{const[E,v]=(0,m.useState)(!1);return(0,o.createElement)(m.Fragment,null,i&&(0,o.createElement)(s.BlockControls,{controls:void 0},(0,o.createElement)(m.Fragment,null,(0,o.createElement)(c.ToolbarGroup,null,(0,o.createElement)(c.ToolbarButton,{label:(0,d.__)("Add Link","wp-custom-blocks"),onClick:()=>v(!E),icon:"admin-links",placeholder:(0,d.__)("Add Link","wp-custom-blocks")})),E&&(0,o.createElement)(c.Popover,{position:"bottom right",onFocusOutside:()=>v(!1),offset:5},(0,o.createElement)(A,{link:r,linkName:"link",label:(0,d.__)("More link","wp-custom-blocks"),setAttributes:g})))),(0,o.createElement)("div",{...f},(0,o.createElement)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},(0,o.createElement)("div",{className:"my-10 sm:my-20"},(0,o.createElement)("div",{className:"flex justify-between items-center mb-8"},(0,o.createElement)(s.RichText,{tagName:l,className:"title font-notoSans italic",value:e,onChange:e=>g({title:e}),placeholder:(0,d.__)("Block title..","wp-custom-blocks"),style:{color:t}}),i&&(0,o.createElement)("div",{className:"flex items-center cursor-pointer"},(0,o.createElement)(s.RichText,{tagName:"span",className:"font-notoSans hidden text-sm font-bold italic uppercase md:inline-block md:mr-3",value:p,onChange:e=>g({linkText:e}),placeholder:(0,d.__)("Link text..","wp-custom-blocks"),style:{color:u}}),(0,o.createElement)("div",{className:"more-arrow w-6 h-6 rounded-full flex items-center justify-center",style:{color:b,background:w}},(0,o.createElement)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{d:"M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z",fill:"currentColor"}))))),(0,o.createElement)(s.RichText,{tagName:"p",className:"font-notoSans max-w-3xl text-base",value:a,onChange:e=>g({description:e}),placeholder:(0,d.__)("Block description..","wp-custom-blocks"),style:{color:n}}),k))))},$=({attributes:{title:e,titleColor:t,titleTag:l,description:a,descriptionColor:n,link:r,isWithLinkBlock:i,linkText:c,linkTextColor:m,linkBtnArrowColor:d,linkBackgroundBtnColor:p},blockProps:u,children:b})=>(0,o.createElement)("div",{...u},(0,o.createElement)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},(0,o.createElement)("div",{className:"my-10 sm:my-20"},(0,o.createElement)("div",{className:"flex justify-between items-center mb-8"},(0,o.createElement)(s.RichText.Content,{tagName:l,className:"title font-notoSans italic",value:e,style:{color:t}}),i&&(0,o.createElement)("a",{href:r.url,target:r.openInNewTab?"_blank":"_self",rel:r.openInNewTab?"noopener noreferrer":"noopener",className:"no-underline"},(0,o.createElement)("div",{className:"flex items-center cursor-pointer"},(0,o.createElement)(s.RichText.Content,{tagName:"span",className:"font-notoSans hidden text-sm font-bold italic uppercase md:inline-block md:mr-3",value:c,style:{color:m}}),(0,o.createElement)("div",{className:"more-arrow w-6 h-6 rounded-full flex items-center justify-center bg-white-light",style:{color:d,backgroundColor:p}},(0,o.createElement)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{d:"M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z",fill:"currentColor"})))))),(0,o.createElement)(s.RichText.Content,{tagName:"p",className:"font-notoSans max-w-3xl text-base",value:a,style:{color:n}}),b))),j=()=>(0,o.createElement)("div",{style:{marginBottom:24}},(0,o.createElement)(c.Tip,null,(0,o.createElement)("p",null,"Mobile display: ",C.xs,"...",C.sm,"px"),(0,o.createElement)("p",null,"Tablet display: ",C.sm,"...",C.md,"px"),(0,o.createElement)("p",null,"Laptop display: ",C.md,"...",C.xl,"px"),(0,o.createElement)("p",null,"Desktop display: ",C.xl,"..."))),M=({attributes:e,setAttributes:t,blockSettings:l,blockSlidesPerView:a,blockBetweenSlides:n,blockSliderSettings:r,blockItemsCount:i,blockItemsSpaceBetween:p,blockItemsSettings:u,children:b})=>{const{titleTag:w,titleSize:g,titleLineHeight:f,titleMobileSize:k,titleMobileLineHeight:E,titleWeight:v,titleTransform:h,isWithLinkBlock:y,isEnableSlider:C,isLoopSlider:T,isDisableAutoplay:O,sliderAutoplayDelay:A,sliderMobileSlidesPerView:D,sliderTabletSlidesPerView:$,sliderLaptopSlidesPerView:M,sliderMobileSpaceBetween:I,sliderTabletSpaceBetween:F,sliderLaptopSpaceBetween:R,mobileItemsCount:V,tabletItemsCount:z,laptopItemsCount:H,mobileSpaceBetween:W,tabletSpaceBetween:U,laptopSpaceBetween:J}=e,[q,G]=(0,m.useState)(y),[Z,K]=(0,m.useState)(C),[Y,X]=(0,m.useState)(!C);(0,m.useEffect)((()=>{G(y)}),[y]),(0,m.useEffect)((()=>{X(!C),K(C)}),[C]);const Q={attributes:e,defaultAttributes:B,setAttributes:t};return(0,o.createElement)(s.InspectorControls,null,(0,o.createElement)(j,null),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Block settings","wp-custom-blocks"),initialOpen:!0},(0,o.createElement)(c.ToggleControl,{label:(0,d.__)("With link block","wp-custom-blocks"),checked:y,onChange:()=>t({isWithLinkBlock:!y})}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.ToggleControl,{label:(0,d.__)("Enable slider","wp-custom-blocks"),checked:C,onChange:()=>t({isEnableSlider:!C})}),l&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.CardDivider,null),l)),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Description settings","wp-custom-blocks"),initialOpen:!1},(0,o.createElement)(P,{name:"descriptionColor",label:(0,d.__)("Description color","wp-custom-blocks"),...Q})),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Title settings","wp-custom-blocks"),initialOpen:!1},(0,o.createElement)(P,{name:"titleColor",label:(0,d.__)("Title Color","wp-custom-blocks"),...Q}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.SelectControl,{label:(0,d.__)("Select Tag","wp-custom-blocks"),value:w,options:_,onChange:e=>{t({titleTag:e})}}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.FontSizePicker,{fontSizes:S,value:g,onChange:e=>{t({titleSize:Number(e)||Number(L(B,"titleSize"))})},__nextHasNoMarginBottom:!0}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(s.LineHeightControl,{__unstableInputWidth:"120px",value:f,onChange:e=>{t({titleLineHeight:e})},__nextHasNoMarginBottom:!0}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Title weight","wp-custom-blocks"),value:v,onChange:e=>t({titleWeight:e}),step:100,min:100,max:900,allowReset:!0,resetFallbackValue:100}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.SelectControl,{label:(0,d.__)("Select title transform","wp-custom-blocks"),value:h,options:x,onChange:e=>{t({titleTransform:e})}}),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Mobile title settings (display width < 769px)","wp-custom-blocks"),initialOpen:!1},(0,o.createElement)(c.FontSizePicker,{fontSizes:S,value:k,onChange:e=>{t({titleMobileSize:Number(e)||Number(L(B,"titleMobileSize"))})},__nextHasNoMarginBottom:!0}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(s.LineHeightControl,{__nextHasNoMarginBottom:!0,__unstableInputWidth:"120px",value:E,onChange:e=>{t({titleMobileLineHeight:e})}}))),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Link settings","wp-custom-blocks"),initialOpen:q,opened:q,onToggle:()=>G(!q)},(0,o.createElement)(P,{name:"linkTextColor",label:(0,d.__)("Link text color","wp-custom-blocks"),disabled:!y,...Q}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(P,{name:"linkBtnArrowColor",label:(0,d.__)("Link button arrow color","wp-custom-blocks"),disabled:!y,...Q}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(P,{name:"linkBackgroundBtnColor",label:(0,d.__)("Link background button color","wp-custom-blocks"),disabled:!y,...Q})),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Slider settings","wp-custom-blocks"),initialOpen:Z,opened:Z,onToggle:()=>K(!Z)},(0,o.createElement)(c.ToggleControl,{label:(0,d.__)("Slider loop","wp-custom-blocks"),checked:T,disabled:!C,onChange:()=>t({isLoopSlider:!T})}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.ToggleControl,{label:(0,d.__)("Disable slider autoplay","wp-custom-blocks"),checked:O,disabled:!C,onChange:()=>t({isDisableAutoplay:!O})}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Slider autoplay delay","wp-custom-blocks"),value:A,onChange:e=>t({sliderAutoplayDelay:e}),disabled:!C||O,step:500,min:0,max:3e4,allowReset:!0,resetFallbackValue:5e3}),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Slides per view settings","wp-custom-blocks"),initialOpen:!1},(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Mobile slides per view","wp-custom-blocks"),value:D,onChange:e=>t({sliderMobileSlidesPerView:e}),disabled:!C,step:1,min:1,max:10,allowReset:!0,resetFallbackValue:1}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Tablet slides per view","wp-custom-blocks"),value:$,onChange:e=>t({sliderTabletSlidesPerView:e}),disabled:!C,step:1,min:1,max:10,allowReset:!0,resetFallbackValue:1}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Laptop slides per view","wp-custom-blocks"),value:M,onChange:e=>t({sliderLaptopSlidesPerView:e}),disabled:!C,step:1,min:1,max:10,allowReset:!0,resetFallbackValue:1}),a&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.CardDivider,null),a)),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Slides between settings","wp-custom-blocks"),initialOpen:!1},(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Mobile space between slides","wp-custom-blocks"),value:I,onChange:e=>t({sliderMobileSpaceBetween:e}),disabled:!C,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:N}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Tablet space between slides","wp-custom-blocks"),value:F,onChange:e=>t({sliderTabletSpaceBetween:e}),disabled:!C,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:N}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Laptop space between slides","wp-custom-blocks"),value:R,onChange:e=>t({sliderLaptopSpaceBetween:e}),disabled:!C,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:N}),n&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.CardDivider,null),n)),r),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Without slider settings","wp-custom-blocks"),initialOpen:Y,opened:Y,onToggle:()=>X(!Y)},(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Items count","wp-custom-blocks"),initialOpen:!1},(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Mobile items count","wp-custom-blocks"),value:V,onChange:e=>t({mobileItemsCount:e}),disabled:C,step:1,min:1,max:12,allowReset:!0,resetFallbackValue:3}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Tablet items count","wp-custom-blocks"),value:z,onChange:e=>t({tabletItemsCount:e}),disabled:C,step:1,min:1,max:12,allowReset:!0,resetFallbackValue:3}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Laptop items count","wp-custom-blocks"),value:H,onChange:e=>t({laptopItemsCount:e}),disabled:C,step:1,min:1,max:12,allowReset:!0,resetFallbackValue:4}),i&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.CardDivider,null),i)),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Items between settings","wp-custom-blocks"),initialOpen:!1},(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Mobile space between items","wp-custom-blocks"),value:W,onChange:e=>t({mobileSpaceBetween:e}),disabled:C,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:N}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Tablet space between items","wp-custom-blocks"),value:U,onChange:e=>t({tabletSpaceBetween:e}),disabled:C,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:N}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(c.RangeControl,{label:(0,d.__)("Laptop space between items","wp-custom-blocks"),value:J,onChange:e=>t({laptopSpaceBetween:e}),disabled:C,step:2,min:4,max:64,allowReset:!0,resetFallbackValue:N}),p&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.CardDivider,null),p)),u),b)},I=(e=" ")=>e.replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,""),F={...B,columns:{type:"object",default:{}},rows:{type:"object",default:{}},backgroundColor:{type:"string",default:E.brightest},columnColor:{type:"string",default:y.DEFAULT},rowColor:{type:"string",default:v.DEFAULT},isPreviewIcons:{type:"boolean",default:!1}},R=({attributes:e,setAttributes:t})=>{const{columns:l,rows:a,isPreviewIcons:n}=e,[r,i]=(0,m.useState)((()=>new Set(Object.keys(l)))),s=e=>n=>{t({columns:{...l,[e]:n}});const o=Object.entries(a).map((([t,l])=>{const o=a[t]?.[e];return[t,{...l,[e]:{...o,column:n}}]}));t({rows:Object.fromEntries(o)})},p={attributes:e,defaultAttributes:F,setAttributes:t};return(0,o.createElement)(M,{attributes:e,setAttributes:t,blockSettings:(0,o.createElement)(c.ToggleControl,{label:(0,d.__)("Preview loading icons","wp-custom-blocks"),checked:n,onChange:()=>t({isPreviewIcons:!n})})},(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Table settings","wp-custom-blocks"),initialOpen:!0},Array.from(r).map(((e,t)=>(0,o.createElement)(c.TextControl,{key:e,label:`column ${t+1}`,onChange:s(e),value:l[e]}))),(0,o.createElement)(c.Button,{variant:"primary",onClick:()=>{const e=String(Math.random());if(!r.has(e)){i(r.add(e));const n=Object.entries(a).map((([t,l])=>[t,{...l,[e]:{column:"",value:"",icon:{}}}]));t({rows:Object.fromEntries(n)}),t({columns:{...l,[e]:""}})}}},"Add new column")),(0,o.createElement)(c.PanelBody,{title:(0,d.__)("Table item settings","wp-custom-blocks"),initialOpen:!0},(0,o.createElement)(P,{name:"backgroundColor",label:(0,d.__)("Background color","wp-custom-blocks"),...p}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(P,{name:"columnColor",label:(0,d.__)("Column color","wp-custom-blocks"),...p}),(0,o.createElement)(c.CardDivider,null),(0,o.createElement)(P,{name:"rowColor",label:(0,d.__)("Row color","wp-custom-blocks"),...p})))},V="slider-table-cards",{name:z,...H}=n;(0,a.registerBlockType)(z,{...H,icon:"editor-table",attributes:F,edit:({attributes:e,setAttributes:t,clientId:l})=>{const{rows:a,columns:n,uniqueId:r,blockStyle:p,titleSize:u,titleLineHeight:b,titleMobileSize:w,titleMobileLineHeight:g,titleWeight:f,titleTransform:k,isEnableSlider:E,sliderMobileSlidesPerView:v,sliderTabletSlidesPerView:h,sliderLaptopSlidesPerView:y,sliderMobileSpaceBetween:_,sliderTabletSpaceBetween:x,sliderLaptopSpaceBetween:S,mobileItemsCount:N,tabletItemsCount:B,laptopItemsCount:T,mobileSpaceBetween:L,tabletSpaceBetween:O,laptopSpaceBetween:P,backgroundColor:A,columnColor:$,rowColor:j,isPreviewIcons:M}=e,F=(0,s.useBlockProps)({className:r,style:{margin:0,maxWidth:"none"}}),[z,H]=(0,m.useState)((()=>new Set(Object.keys(a)))),W=`\n\t\t.${r} .slider-wrapper {\n\t\t\tgap: ${x}px;\n\t\t}\n\n\t\t.${r} .slider-item {\n\t\t\tflex-basis: calc(${100/h}% - ${x}px);\n\t\t}\n\t`,U=`\n\t\t.${r} .slider-wrapper {\n\t\t\tgap: ${S}px;\n\t\t}\n\n\t\t.${r} .slider-item {\n\t\t\tflex-basis: calc(${100/y}% - ${S}px);\n\t\t}\n\t`,J=`\n\t\t\n\t\t.${r} .slider-wrapper {\n\t\t\tgap: ${_}px;\n\t\t}\n\n\t\t.${r} .slider-item {\n\t\t\tflex-basis: calc(${100/v}% - ${_}px);\n\t\t}\n\t\n\n\t\t@media (min-width: ${C.sm}px) {\n\t\t\t${W}\n\t\t}\n\n\t\t@media (min-width: ${C.md}px) {\n\t\t\t${U}\n\t\t}\n\t`,q=`\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${O}px;\n\t\t\tgrid-template-columns: repeat(${B}, minmax(0, 1fr));\n\t\t}\n\t`,G=`\n\t\t.${r} .title {\n\t\t\tfont-size: ${u}px;\n\t\t\tline-height: ${b}rem;\n\t\t}\n\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${P}px;\n\t\t\tgrid-template-columns: repeat(${T}, minmax(0, 1fr));\n\t\t}\n\t`,Z=`\n\t\t\n\t\t.${r} .title {\n\t\t\tfont-size: ${w}px;\n\t\t\tline-height: ${g}rem;\n\t\t\tfont-weight: ${f};\n\t\t\ttext-transform: ${k};\n\t\t}\n\n\t\t.${r} .inner-wrapper {\n\t\t\tgap: ${L}px;\n\t\t\tgrid-template-columns: repeat(${N}, minmax(0, 1fr));\n\t\t}\n\n\t\t.${r} tbody tr:nth-child(odd) > * {\n\t\t\tbackground-color: ${A};\n\t\t}\n\t\n\n\t\t@media (min-width: ${C.sm}px) {\n\t\t\t${q}\n\t\t}\n\n\t\t@media (min-width: ${C.md}px) {\n\t\t\t${G}\n\t\t}\n\n\t\t@media (min-width: ${C.xl}px) {\n\t\t\t\n\t\t}\n\t`;return(0,m.useEffect)((()=>{JSON.stringify(p)!==JSON.stringify(Z)&&t({blockStyle:Z})}),[p,Z,t]),(0,m.useEffect)((()=>{r||t({uniqueId:"table-"+l.slice(0,8)})}),[l,t,r]),(0,o.createElement)(m.Fragment,null,(0,o.createElement)("style",null,`${I(Z)}`),(0,o.createElement)("style",null,`${I(J)}`),(0,o.createElement)(R,{attributes:e,setAttributes:t}),(0,o.createElement)(s.BlockControls,{controls:void 0,children:(0,o.createElement)(c.ToolbarGroup,null,(0,o.createElement)(c.DropdownMenu,{controls:[{icon:"grid-view",onClick:function(){},title:"First Menu Item Label"},{icon:"grid-view",onClick:function(){},title:"Second Menu Item Label"}],icon:"grid-view",label:"Select a direction."}))}),(0,o.createElement)(D,{attributes:e,setAttributes:t,blockProps:F},(0,o.createElement)("div",{className:"relative overflow-x-auto hidden lg:block"},(0,o.createElement)("table",{className:"payments-table w-full text-sm text-left rtl:text-right"},(0,o.createElement)("thead",{className:"text-sm font-medium",style:{color:$}},(0,o.createElement)("tr",null,Object.entries(n).map((([e,t])=>(0,o.createElement)("th",{key:e,className:"px-3 py-2 font-notoSans",scope:"col"},t))))),(0,o.createElement)("tbody",null,Array.from(z).map((e=>{const l=a[e];return(0,o.createElement)("tr",{key:e,className:"font-semibold italic text-lg"},Object.entries(l).map((([l,{value:n,icon:r}],m,p)=>{const u=a[e],b=u[l],w=0===m,g=m===p.length-1,f={className:i()("px-3 py-6 font-notoSans relative",{"rounded-l-lg":w,"rounded-r-lg":g}),onClick:()=>{}};w&&(f.scope="row");const k=w?"th":"td";return(0,o.createElement)(k,{key:m,...f},(0,o.createElement)("div",{className:"flex items-center whitespace-nowrap gap-x-6"},(0,o.createElement)(s.RichText,{tagName:"span",value:n,onChange:l=>{b.value=l,t({rows:{...a,[e]:u}})},placeholder:(0,d.__)("Cell text..","wp-custom-blocks"),style:{color:j}}),(M||r)&&(0,o.createElement)("div",{className:"max-w-2xl"},r.url&&(0,o.createElement)("img",{className:"w-6 h-6 object-cover",src:r.url,alt:r.alt}),M&&(0,o.createElement)(s.MediaPlaceholder,{onSelect:l=>{b.icon=l,t({rows:{...a,[e]:u}})},allowedTypes:["image"],multiple:!1,labels:{title:(0,d.__)("Icon","wp-custom-blocks"),instructions:(0,d.__)("Upload icon","wp-custom-blocks")},icon:"format-image",className:"w-full h-full",onHTMLDrop:void 0}))),g&&(0,o.createElement)("div",{className:"absolute",style:{top:"24px",right:"12px"}},(0,o.createElement)(c.Button,{variant:"primary",onClick:(E=e,()=>{H((e=>(e.delete(E),e))),t({rows:Object.fromEntries(Object.entries(a).filter((([e])=>e!==E)))})})},"X")));var E})))}))))),(0,o.createElement)("div",{className:"relative lg:hidden"},(0,o.createElement)("div",{className:"overflow-hidden pb-14"},(0,o.createElement)("div",{className:i()("relative",{[V]:E}),id:r},(0,o.createElement)("div",{className:E?"slider-wrapper flex flex-wrap overflow-hidden":"inner-wrapper grid"},Array.from(z).map((e=>{const l=a[e];return(0,o.createElement)("div",{key:e,className:"slider-item px-4 rounded-lg w-full",style:{backgroundColor:A}},(0,o.createElement)("div",{className:"h-full"},Object.entries(l).map((([l,{value:r}],i)=>{const c=a[e],m=c[l];return(0,o.createElement)("div",{key:i,className:"py-4"},(0,o.createElement)("p",{className:"font-notoSans text-sm font-medium mb-2",style:{color:$}},n[l]),(0,o.createElement)(s.RichText,{tagName:"p",value:r,className:"font-notoSans font-semibold italic text-lg",onChange:l=>{m.value=l,t({rows:{...a,[e]:c}})},placeholder:(0,d.__)("Value..","wp-custom-blocks"),style:{color:j}}))}))))})))))),Boolean(Object.keys(n).length)&&(0,o.createElement)("div",{className:"mt-10"},(0,o.createElement)(c.Button,{variant:"primary",onClick:()=>{const e=String(Math.random());z.has(e)||(H(z.add(e)),t({rows:{...a,[e]:Object.fromEntries(Object.entries(n).map((([e,t])=>[e,{column:t,value:"",icon:{}}])))}}))}},"Add new row"))))},save:({attributes:e})=>{const{rows:t,columns:l,uniqueId:a,isEnableSlider:n,isLoopSlider:r,isDisableAutoplay:c,sliderAutoplayDelay:m,sliderMobileSlidesPerView:d,sliderTabletSlidesPerView:p,sliderLaptopSlidesPerView:u,sliderMobileSpaceBetween:b,sliderTabletSpaceBetween:w,sliderLaptopSpaceBetween:g,backgroundColor:f,columnColor:k,rowColor:E}=e,v=s.useBlockProps.save({className:a}),h=n?{"data-slider-loop":r,"data-slider-disable-autoplay":c,"data-slider-autoplay-delay":m,"data-slides-per-view-xs":d,"data-slides-per-view-sm":p,"data-slides-per-view-md":u,"data-slides-space-between-xs":b,"data-slides-space-between-sm":w,"data-slides-space-between-md":g}:{},y=Object.entries(t).map((([e,t])=>(0,o.createElement)("div",{key:e,className:"swiper-slide px-4 rounded-lg w-full",style:{backgroundColor:f}},(0,o.createElement)("div",{className:"h-full"},Object.entries(t).map((([e,{value:t}],a)=>(0,o.createElement)("div",{key:a,className:"py-4"},(0,o.createElement)("p",{className:"font-notoSans text-sm font-medium mb-2",style:{color:k}},l[e]),(0,o.createElement)(s.RichText.Content,{tagName:"p",value:t,className:"font-notoSans font-semibold italic text-lg",style:{color:E}}))))))));return(0,o.createElement)($,{attributes:e,blockProps:v},(0,o.createElement)("div",{className:"relative overflow-x-auto hidden lg:block"},(0,o.createElement)("table",{className:"payments-table w-full text-sm text-left rtl:text-right"},(0,o.createElement)("thead",{className:"text-sm font-medium",style:{color:k}},(0,o.createElement)("tr",null,Object.entries(l).map((([e,t])=>(0,o.createElement)("th",{key:e,className:"px-3 py-2 font-notoSans",scope:"col"},t))))),(0,o.createElement)("tbody",null,Object.entries(t).map((([e,t])=>(0,o.createElement)("tr",{key:e,className:"font-semibold italic text-lg"},Object.values(t).map((({value:e},t,l)=>{const a=0===t,n={className:i()("px-3 py-6 font-notoSans",{"rounded-l-lg":a,"rounded-r-lg":t===l.length-1})};a&&(n.scope="row");const r=a?"th":"td";return(0,o.createElement)(r,{key:t,...n},(0,o.createElement)(s.RichText.Content,{tagName:"span",value:e,style:{color:E}}))})))))))),(0,o.createElement)("div",{className:"relative mb-6 lg:hidden"},(0,o.createElement)("div",{className:"overflow-hidden"},(0,o.createElement)("div",{className:n?V:"inner-wrapper grid",id:a,...h},n?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"swiper-wrapper"},y),(0,o.createElement)("div",{className:"swiper-pagination [&>*]:mr-3 [&>*:last-child]:mr-0"})):y))))}})},967:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,o(l)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={exports:{}};return a[e](l,l.exports,o),l.exports}o.m=a,e=[],o.O=(t,l,a,n)=>{if(!l){var r=1/0;for(m=0;m<e.length;m++){for(var[l,a,n]=e[m],i=!0,s=0;s<l.length;s++)(!1&n||r>=n)&&Object.keys(o.O).every((e=>o.O[e](l[s])))?l.splice(s--,1):(i=!1,n<r&&(r=n));if(i){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[l,a,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},l=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var n=Object.create(null);o.r(n);var r={};t=t||[null,l({}),l([]),l(l)];for(var i=2&a&&e;"object"==typeof i&&!~t.indexOf(i);i=l(i))Object.getOwnPropertyNames(i).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,o.d(n,r),n},o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={335:0,296:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var a,n,[r,i,s]=l,c=0;if(r.some((t=>0!==e[t]))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(s)var m=s(o)}for(t&&t(l);c<r.length;c++)n=r[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(m)},l=globalThis.webpackChunkwp_custom_blocks=globalThis.webpackChunkwp_custom_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=o.O(void 0,[296],(()=>o(481)));r=o.O(r)})();