"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[2146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={slug:"hardwarespec"},i="Hardware Specifications",o={unversionedId:"hardware/specs",id:"hardware/specs",title:"Hardware Specifications",description:"In total there are 6528 cores available, including 13 Nvidia A100 Tesla GPU cards. It stands currently at 628 TFLOPS",source:"@site/docs/hardware/02_specs.md",sourceDirName:"hardware",slug:"/hardware/hardwarespec",permalink:"/docs/hardware/hardwarespec",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/hardware/02_specs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"hardwarespec"},sidebar:"tutorialSidebar",previous:{title:"Partitions & SLURM",permalink:"/docs/hardware/parthardw"},next:{title:"Data Management and Transfer for Mimir-II",permalink:"/docs/mimir/datatransfer"}},u={},p=[],c={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hardware-specifications"},"Hardware Specifications"),(0,a.kt)("p",null,"In total there are 6528 cores available, including 13 Nvidia A100 Tesla GPU cards. It stands currently at ",(0,a.kt)("strong",{parentName:"p"},"628 TFLOPS")),(0,a.kt)("p",null,"28 x standard compute nodes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Partition : 48cpu_192mem"),(0,a.kt)("li",{parentName:"ul"},"2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00 GHz"),(0,a.kt)("li",{parentName:"ul"},"192 (12 x 16) GB DDR4 @ 2667 MHz"),(0,a.kt)("li",{parentName:"ul"},"Infiniband (4 x EDR) Mellanox, 100 Gb/s"),(0,a.kt)("li",{parentName:"ul"},"3.5 TB /scratch/ disk")),(0,a.kt)("p",null,"64 x standard compute nodes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Partition : 64cpu_256mem, mimir"),(0,a.kt)("li",{parentName:"ul"},"2 x Intel(R) Xeon(R) Platinum 8358 CPU, 2 x 32 @ 2.60 GHz"),(0,a.kt)("li",{parentName:"ul"},"256 (16 x 16) GB DDR4 @ 2667 MHz"),(0,a.kt)("li",{parentName:"ul"},"Infiniband (4 x EDR) Mellanox, 100 Gb/s"),(0,a.kt)("li",{parentName:"ul"},"3.5 TB /scratch/ disk")),(0,a.kt)("p",null,"4 x AMD compute nodes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Partition : 128cpu_256mem"),(0,a.kt)("li",{parentName:"ul"},"2 x AMD EPYC",(0,a.kt)("sup",null,"TM")," 7713 CPU, 2 x 64 @ 2.00 GHz"),(0,a.kt)("li",{parentName:"ul"},"256 (16 x 16) GB DDR4, 2933 MHz"),(0,a.kt)("li",{parentName:"ul"},"Infiniband (4 x EDR) Mellanox, 100 GB/s"),(0,a.kt)("li",{parentName:"ul"},"3.5 TB /scratch/ disk")),(0,a.kt)("p",null,"1 x high-memory compute node:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Partition : mimir-himem"),(0,a.kt)("li",{parentName:"ul"},"2 x Intel(R) Xeon(R) Platinum 8358 CPU, 2 x 32 @ 2.60 GHz"),(0,a.kt)("li",{parentName:"ul"},"2048 (32 x 64) GB DDR4 @ 2667 MHz"),(0,a.kt)("li",{parentName:"ul"},"Infiniband (4 x EDR) Mellanox, 100 Gb/s"),(0,a.kt)("li",{parentName:"ul"},"3.5 TB /scratch/ disk")),(0,a.kt)("p",null,"3 x single GPU card nodes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Partition : gpu-1xA100"),(0,a.kt)("li",{parentName:"ul"},"2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz"),(0,a.kt)("li",{parentName:"ul"},"1 x NVIDIA A100 Tensor Core GPU"),(0,a.kt)("li",{parentName:"ul"},"192 (12 x 16) GB DDR4, 2667 MHz"),(0,a.kt)("li",{parentName:"ul"},"InfiniBand (4 x EDR) Mellanox, 100 Gb/s"),(0,a.kt)("li",{parentName:"ul"},"3.5 Tb /scratch/ disk")),(0,a.kt)("p",null,"5 x dual GPU card nodes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Partition : gpu-2xA100"),(0,a.kt)("li",{parentName:"ul"},"2 x  Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz"),(0,a.kt)("li",{parentName:"ul"},"2 x  NVIDIA A100 Tensor Core GPU"),(0,a.kt)("li",{parentName:"ul"},"192 (12 x 16) GB DDR4, 2667 MHz"),(0,a.kt)("li",{parentName:"ul"},"InfiniBand (4 x EDR) Mellanox, 100 Gb/s"),(0,a.kt)("li",{parentName:"ul"},"3.5 Tb /scratch/ disk")),(0,a.kt)("p",null,"1 x login node:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz"),(0,a.kt)("li",{parentName:"ul"},"192 (12 x 16) GB DDR4, 2667 MHz"),(0,a.kt)("li",{parentName:"ul"},"100 Gb/s eth")),(0,a.kt)("p",null,"1 x control node:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz"),(0,a.kt)("li",{parentName:"ul"},"192 (12 x 16) GB DDR4, 2667 MHz"),(0,a.kt)("li",{parentName:"ul"},"100 Gb/s eth"),(0,a.kt)("li",{parentName:"ul"},"50 TB disk hosting /home/")))}m.isMDXComponent=!0}}]);