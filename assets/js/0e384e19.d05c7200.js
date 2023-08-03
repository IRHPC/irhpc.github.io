"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Acquiring Access",c={unversionedId:"intro",id:"intro",title:"Acquiring Access",description:"The resources provided by the Icelandic high performance computing centre (IHPC/IREI) are available to",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Terminology",permalink:"/docs/common/terminology"}},s={},l=[{value:"Externally",id:"externally",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"acquiring-access"},"Acquiring Access"),(0,o.kt)("p",null,"The resources provided by the Icelandic high performance computing centre (IHPC/IREI) are available to\nIcelandic universities and governmental research institutes. Scientists in independent\nresearch instututes may also gain access, provided their research is funded by public grants."),(0,o.kt)("p",null,"The expert panel of the IHPC/IREI grants access, and it is provided by two different means:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"by cooperation through the Rann\xeds Infrastructure Fund (the Icelandic Centre for research)."),(0,o.kt)("li",{parentName:"ol"},'by application. The formal application can be sent to "',(0,o.kt)("a",{parentName:"li",href:"mailto:help@hi.is"},"help@hi.is"),'".')),(0,o.kt)("p",null,"See more details ",(0,o.kt)("a",{target:"_blank",href:n(4795).Z},"here"),". A formal application should include a description of the project, the estimated time for completion and the type of software and resource required to complete the project. "),(0,o.kt)("h1",{id:"logging-in"},"Logging In"),(0,o.kt)("p",null,"After being granted access you will be prompted to generate an SSH key. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/connecting/connectingssh"},"Connecting & SSH keys")," section. When the SSH key is active the system administrators will let you know, and then you can log into the system."),(0,o.kt)("h2",{id:"externally"},"Externally"),(0,o.kt)("p",null,"We log into the Elja front-facing node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ssh uname@elja.hi.is\n# Or if you are juggling many .ssh keys\n$ ssh -i ~/.ssh/id_elja uname@elja.hi.is\n")),(0,o.kt)("p",null,"Congratulations on getting to the login node! "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Do nothing")," without reading the ",(0,o.kt)("a",{target:"_blank",href:n(7083).Z},"User Agreement")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/common/etiquette"},"common etiquette section"),".")),(0,o.kt)("h1",{id:"acknowledgement"},"Acknowledgement"),(0,o.kt)("p",null,"We kindly request users to acknowledge the resource and user support provided by the Icelandic Research electronic-Infrastructure (IREI) in publications. An example is provided below"),(0,o.kt)("admonition",{title:"Acknowledgement",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Computer resources, data storage and user support are provided by the Division of Information Technology of the University of Iceland through the Icelandic Research e-Infrastructure project, funded by the Icelandic Centre of Research infrastructure fund.")),(0,o.kt)("p",null,'Similarly, it will be beneficial to all parties involved for us to be notified of any publications published which makes use of the resources. A notification should be sent to "',(0,o.kt)("a",{parentName:"p",href:"mailto:help@hi.is"},"help@hi.is"),'" with title "Elja Publication".'))}d.isMDXComponent=!0},4795:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/rulesandreg-v1-2-92251ea4e9b48ce15967ec019a8a463f.pdf"},7083:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/useragree-v1-3-e3d9c828ee8328a2b9aea538fd2eaf92.pdf"}}]);