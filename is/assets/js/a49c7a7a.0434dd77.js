"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[8237],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),f=a,g=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8139:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={slug:"zero-nix",title:"Zeroing in on Nix",author:"Rohit Goswami",author_title:"Docs wrangler",author_url:"https://rgoswami.me",author_image_url:"https://avatars.githubusercontent.com/u/4336207?v=4",tags:["packaging","admin","announcements"]},i={permalink:"/is/announcements/zero-nix",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/announcements/2021-05-20-zero-nix.md",source:"@site/announcements/2021-05-20-zero-nix.md",title:"Zeroing in on Nix",description:"We have decided to use nix as the main packaging manager.",date:"2021-05-20T00:00:00.000Z",formattedDate:"20. ma\xed 2021",tags:[{label:"packaging",permalink:"/is/announcements/tags/packaging"},{label:"admin",permalink:"/is/announcements/tags/admin"},{label:"announcements",permalink:"/is/announcements/tags/announcements"}],readingTime:.055,truncated:!1,nextItem:{title:"Hello",permalink:"/is/announcements/hello-world"}},c=[],l={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have decided to use ",(0,a.kt)("inlineCode",{parentName:"p"},"nix")," as the main packaging manager."))}p.isMDXComponent=!0}}]);