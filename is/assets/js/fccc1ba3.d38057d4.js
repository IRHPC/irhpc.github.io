"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[8359],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,y=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1726:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={slug:"jupyterlab"},a={unversionedId:"compiling/jupyterlab",id:"compiling/jupyterlab",isDocsHomePage:!1,title:"Jupyterlab on Elja",description:"These instructions show you how to set up a non-browser based Jupyterlab on a compute node,",source:"@site/docs/compiling/04_jupyterlab.md",sourceDirName:"compiling",slug:"/compiling/jupyterlab",permalink:"/is/docs/compiling/jupyterlab",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/compiling/04_jupyterlab.md",version:"current",sidebarPosition:4,frontMatter:{slug:"jupyterlab"},sidebar:"tutorialSidebar",previous:{title:"Programming and Development Environments",permalink:"/is/docs/compiling/environment"},next:{title:"Nix",permalink:"/is/docs/compiling/nix_start"}},c=[{value:"1) Set up Jupyterlab in a Conda Environment using Anaconda:",id:"1-set-up-jupyterlab-in-a-conda-environment-using-anaconda",children:[]}],p={toc:c};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These instructions show you how to set up a ",(0,o.kt)("strong",{parentName:"p"},"non-browser")," based Jupyterlab on a compute node,\nand how to connect to it with a browser on your local computer. This is accomplished in four steps."),(0,o.kt)("p",null,"The following instructions work on a Unix/MacOS system. Remember to change ",(0,o.kt)("strong",{parentName:"p"},"<uname",">")," to\nyour username."),(0,o.kt)("h2",{id:"1-set-up-jupyterlab-in-a-conda-environment-using-anaconda"},"1) Set up Jupyterlab in a Conda Environment using Anaconda:"),(0,o.kt)("p",null,"Log into Elja"))}l.isMDXComponent=!0}}]);