"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[1494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const s={slug:"slurm"},i="Slurm",a={unversionedId:"snippets/slurm",id:"snippets/slurm",title:"Slurm",description:"Interactive Sessions",source:"@site/docs/snippets/01_slurm.md",sourceDirName:"snippets",slug:"/snippets/slurm",permalink:"/is/docs/snippets/slurm",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/snippets/01_slurm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"slurm"},sidebar:"tutorialSidebar",previous:{title:"Hosting",permalink:"/is/docs/documentation/hosting"},next:{title:"Nix Snippets",permalink:"/is/docs/snippets/nix_snippets"}},l={},p=[{value:"Interactive Sessions",id:"interactive-sessions",level:2},{value:"Move to the Node",id:"move-to-the-node",level:3},{value:"Request Nodes",id:"request-nodes",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slurm"},"Slurm"),(0,o.kt)("h2",{id:"interactive-sessions"},"Interactive Sessions"),(0,o.kt)("h3",{id:"move-to-the-node"},"Move to the Node"),(0,o.kt)("p",null,"We can request a job with two compute nodes, and 48 tasks over for thirty minutes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f srun -N 2 -n 48 -t 30 --pty /bin/bash\n# This brings you to the node directly\n")),(0,o.kt)("p",null,"Recall that we have more information with ",(0,o.kt)("inlineCode",{parentName:"p"},"srun --help"),", along with the manpages ",(0,o.kt)("inlineCode",{parentName:"p"},"man srun")," which ",(0,o.kt)("a",{parentName:"p",href:"http://manpages.org/srun/1"},"may be accessed here"),"."),(0,o.kt)("h3",{id:"request-nodes"},"Request Nodes"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"salloc")," we do not get shifted to the node, this is useful for callbacks."))}d.isMDXComponent=!0}}]);