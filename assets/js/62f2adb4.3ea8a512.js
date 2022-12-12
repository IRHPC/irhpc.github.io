"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[1121],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=m(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9455:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={slug:"parthardw"},i={unversionedId:"hardware/partitions",id:"hardware/partitions",isDocsHomePage:!1,title:"Partitions & SLURM",description:"To view information of the available nodes and partitions use the",source:"@site/docs/hardware/01_partitions.md",sourceDirName:"hardware",slug:"/hardware/parthardw",permalink:"/docs/hardware/parthardw",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/hardware/01_partitions.md",version:"current",sidebarPosition:1,frontMatter:{slug:"parthardw"},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/docs/policies"},next:{title:"Hardware Specifications",permalink:"/docs/hardware/hardwarespec"}},o=[{value:"HPC-Elja : Available Partitions / Compute Nodes",id:"hpc-elja--available-partitions--compute-nodes",children:[]},{value:"HTC-Mimir : Available Partitions / Compute Nodes",id:"htc-mimir--available-partitions--compute-nodes",children:[]},{value:"SLURM Configuration",id:"slurm-configuration",children:[]},{value:"Available Memory",id:"available-memory",children:[]}],p={toc:o};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To view information of the available nodes and partitions use the\nfollowing commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sinfo\n")),(0,r.kt)("p",null,"For more detailed information for a specific partition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scontrol show partition <partition-name>\n")),(0,r.kt)("p",null,"The login and control nodes of Elja\nhost two compute clusters: HPC-Elja and HTC-Mimir. Partitions and groups\nare used to separate the two."),(0,r.kt)("h3",{id:"hpc-elja--available-partitions--compute-nodes"},"HPC-Elja : Available Partitions / Compute Nodes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Count"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Cores/Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory/Node (Gib)"),(0,r.kt)("th",{parentName:"tr",align:null},"Features"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"48cpu_192mem"),(0,r.kt)("td",{parentName:"tr",align:null},"48 (2x24)"),(0,r.kt)("td",{parentName:"tr",align:null},"192 (188)"),(0,r.kt)("td",{parentName:"tr",align:null},"Intl Gold 6248R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"55"),(0,r.kt)("td",{parentName:"tr",align:null},"64cpu_256mem"),(0,r.kt)("td",{parentName:"tr",align:null},"64 (2x32)"),(0,r.kt)("td",{parentName:"tr",align:null},"256 (252)"),(0,r.kt)("td",{parentName:"tr",align:null},"Intl Platinum 8358")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"128cpu_256mem"),(0,r.kt)("td",{parentName:"tr",align:null},"128 (2x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"256 (252)"),(0,r.kt)("td",{parentName:"tr",align:null},"AMD EPYC 7713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"gpu-1xA100"),(0,r.kt)("td",{parentName:"tr",align:null},"64 (2x32)"),(0,r.kt)("td",{parentName:"tr",align:null},"192 (188)"),(0,r.kt)("td",{parentName:"tr",align:null},"Nvidia A100 Tesla GPU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"gpu-2xA100"),(0,r.kt)("td",{parentName:"tr",align:null},"64 (2x32)"),(0,r.kt)("td",{parentName:"tr",align:null},"192 (188)"),(0,r.kt)("td",{parentName:"tr",align:null},"Dual Nvidia A100 Tesla GPU")))),(0,r.kt)("h4",{id:"hpc-elja--job-limits"},"HPC-Elja : Job Limits"),(0,r.kt)("p",null,"Each partition has a max seven (",(0,r.kt)("strong",{parentName:"p"},"7"),") day timelimit. Additionally, the queues ",(0,r.kt)("strong",{parentName:"p"},"any_cpu")," and ",(0,r.kt)("strong",{parentName:"p"},"long")," are provided: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"any_cpu"),", all cpu nodes, one (",(0,r.kt)("strong",{parentName:"li"},"1"),") day timelimit "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"long"),", ten 48cpu and ten 64cpu nodes, fourteen (",(0,r.kt)("strong",{parentName:"li"},"14"),") day timelimit")),(0,r.kt)("h3",{id:"htc-mimir--available-partitions--compute-nodes"},"HTC-Mimir : Available Partitions / Compute Nodes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Count"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Cores/Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory/Node (Gib)"),(0,r.kt)("th",{parentName:"tr",align:null},"Features"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"mimir"),(0,r.kt)("td",{parentName:"tr",align:null},"64 (2x32)"),(0,r.kt)("td",{parentName:"tr",align:null},"256 (252)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"mimir-himem"),(0,r.kt)("td",{parentName:"tr",align:null},"64 (2x32)"),(0,r.kt)("td",{parentName:"tr",align:null},"2048 (2044)"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"htc-mimir--job-limits"},"HTC-Mimir : Job Limits"),(0,r.kt)("p",null,"Either partition has a fourteen (",(0,r.kt)("strong",{parentName:"p"},"14"),") day timelimit. "),(0,r.kt)("h3",{id:"slurm-configuration"},"SLURM Configuration"),(0,r.kt)("p",null,"SLURM is configured such that ",(0,r.kt)("strong",{parentName:"p"},"3.94"),"GB of memory is allocated per core."),(0,r.kt)("h3",{id:"available-memory"},"Available Memory"),(0,r.kt)("p",null,"On each node 2-4 Gib RAM are reserved for the operating system images (hence the true value is in the paranthesis)."))}m.isMDXComponent=!0}}]);