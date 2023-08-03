"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[2727],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,g=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={slug:"nix_resources"},o="Nix au\xf0lindir",l={unversionedId:"compiling/nix_resources",id:"compiling/nix_resources",title:"Nix au\xf0lindir",description:'H\xe9r s\xf6fnum vi\xf0 nokkrum vi\xf0b\xf3tarau\xf0lindum var\xf0andi "nix" vistkerfi\xf0.',source:"@site/i18n/is/docusaurus-plugin-content-docs/current/compiling/99_nix_resources.md",sourceDirName:"compiling",slug:"/compiling/nix_resources",permalink:"/is/docs/compiling/nix_resources",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/compiling/99_nix_resources.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{slug:"nix_resources"},sidebar:"tutorialSidebar",previous:{title:"Nix",permalink:"/is/docs/compiling/nix_start"},next:{title:"SSH lyklar og tengingar.",permalink:"/is/docs/connecting/connectingssh"}},u={},s=[{value:"Fl\xf6gur",id:"fl\xf6gur",level:2},{value:"HPC notkun",id:"hpc-notkun",level:2}],c={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nix-au\xf0lindir"},"Nix au\xf0lindir"),(0,i.kt)("p",null,'H\xe9r s\xf6fnum vi\xf0 nokkrum vi\xf0b\xf3tarau\xf0lindum var\xf0andi "nix" vistkerfi\xf0.'),(0,i.kt)("h2",{id:"fl\xf6gur"},"Fl\xf6gur"),(0,i.kt)("p",null,"Hin kan\xf3n\xedska kynning \xe1 fl\xf6gum eru eftirfarandi \xferj\xe1r f\xe6rslur fr\xe1 Eelco Dolstra fr\xe1 Tweag.io:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tweag.io/blog/2020-05-25-flakes/"},"Hluti 1: Kynning og kennsla")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tweag.io/blog/2020-06-25-eval-cache/"},"Hluti 2: Matsskyndiminni")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tweag.io/blog/2020-07-31-nixos-flakes/"},"Hluti 3: Stj\xf3rna NixOS kerfum"),"\nNokkrar a\xf0rar tilv\xedsanir:"),(0,i.kt)("li",{parentName:"ul"},"Zimbatm sem ",(0,i.kt)("a",{parentName:"li",href:"https://zimbatm.com/NixFlakes/"},"f\xednn hlaupaskr\xe1")),(0,i.kt)("li",{parentName:"ul"},"Nix ",(0,i.kt)("a",{parentName:"li",href:"https://nixos.wiki/wiki/Flakes"},"Wiki f\xe6rsla"))),(0,i.kt)("h2",{id:"hpc-notkun"},"HPC notkun"),(0,i.kt)("p",null,"\xcd stuttu m\xe1li, ",(0,i.kt)("inlineCode",{parentName:"p"},"nix")," er sett upp \xe1 ",(0,i.kt)("strong",{parentName:"p"},"innskr\xe1ningarhn\xfat")," og h\xf6fnum hefur veri\xf0 framsend til a\xf0 tryggja a\xf0 hn\xfatarnir hafi a\xf0gang a\xf0 'nix-p\xfakanum'. \xdeetta er svipa\xf0 \xed anda og GRICAD uppsetningin."))}m.isMDXComponent=!0}}]);