"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[1711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4985:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={slug:"etiquette"},i={unversionedId:"common/etiquette",id:"common/etiquette",isDocsHomePage:!1,title:"Etiquette",description:"Congratulations on getting an account on one of the IRHPC clusters. The documentation here is applicable to all of the machines. Please read this page carefully, and if you are in any doubt on how to perform your tasks on the cluster do not hesitate to contact support.",source:"@site/docs/common/02_etiquette.md",sourceDirName:"common",slug:"/common/etiquette",permalink:"/docs/common/etiquette",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/common/02_etiquette.md",version:"current",sidebarPosition:2,frontMatter:{slug:"etiquette"},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/docs/common/terminology"},next:{title:"Bash",permalink:"/docs/elja/bash"}},s=[],c={toc:s};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Congratulations on getting an account on one of the IRHPC clusters. The documentation here is applicable to all of the machines. Please read this page carefully, and if you are in any doubt on how to perform your tasks on the cluster do not hesitate to contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:help@hi.is"},"support"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Never give your login password or SSH key to anyone else")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Never connect to Elja through an unsecure public network (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/connecting/connectingssh"},"here"),")"))),(0,o.kt)("h1",{id:"login-node"},"Login Node"),(0,o.kt)("p",null,"The login node is a shared resource. This is where all of the users perform tasks to prepare and submit their jobs. "),(0,o.kt)("p",null,"That is why it should only be used for the following simple tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Submit jobs"),(0,o.kt)("li",{parentName:"ul"},"Edit scripts and files"),(0,o.kt)("li",{parentName:"ul"},"Prepare / delete data (scp, cp, mv, rm etc.)"),(0,o.kt)("li",{parentName:"ul"},"Run effortless scripts (no computations)"),(0,o.kt)("li",{parentName:"ul"},"Compile small software packages (e.g. an in-house code)")),(0,o.kt)("p",null,"System administrators will kill processes which are resource intensive."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Repeated offense will result in the suspension of your user account")))),(0,o.kt)("h1",{id:"resource-management"},"Resource Management"),(0,o.kt)("p",null,"Your home directory which is associated with your username - ",(0,o.kt)("strong",{parentName:"p"},"<uname",">")," - is hosted on the ",(0,o.kt)("strong",{parentName:"p"},"nfs-irhpc")," NFS server "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"/users/home/<uname",">")),(0,o.kt)("p",null,"The disk space on the NFS server is a shared resource. It is not intended for the storage of large data. It is advisable to delete or periodically transfer files or data not being used for jobs from your home directory to another drive outside of the NFS server for storage, such as your personal computer. See here for more details and instructions."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"IF you require disk space to store large amounts of data (more than ",(0,o.kt)("strong",{parentName:"p"},"1 Tb"),") for later jobs, or if your jobs generate a large amount of data that require further processing please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:help@hi.is"},"support"),". Other solutions can be provided."))),(0,o.kt)("h1",{id:"scratch-disk"},"Scratch Disk"),(0,o.kt)("p",null,"Each compute node has a dedicated ",(0,o.kt)("strong",{parentName:"p"},"/scratch/")," disk (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/hardware/hardwarespec"},"here")," for hardware specs). It is a local disk which is intended for the ",(0,o.kt)("strong",{parentName:"p"},"temporary")," storage of data to be processed, and writing of output. This disk facilitates fast ",(0,o.kt)("strong",{parentName:"p"},"I/O")," (input/output) when running jobs. Users have read/write privilages here"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"/scratch/users/")),(0,o.kt)("p",null,"See here for instructions on how to make use of the ",(0,o.kt)("strong",{parentName:"p"},"/scratch/")," disks."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," It is important to make efficient use of Elja and to not slow down the network traffic on the cluster. Hence, it is advisable to copy the data and input for your job over to the local scratch on the node (",(0,o.kt)("strong",{parentName:"p"},"/scratch/users/<uname",">"),") and launch the program from the scratch directory. If this step is omitted then the program will run remotely on the compute node but will constanly read/write from the directory on the ",(0,o.kt)("strong",{parentName:"p"},"NFS")," server. This creates a lot of network traffic that slows down the use of Elja for everybody. It will also slow down the job itself."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"It is important to make sure you clean up after your job on the /scratch/ disk. IF your job crashes and leaves behind data which you think can be salvaged contact ",(0,o.kt)("a",{parentName:"strong",href:"mailto:help@hi.is"},"support")," as soon as possible. System administrators will delete data on the /scratch/ disks not associated with a running job, without notice.")))))}l.isMDXComponent=!0}}]);