"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[4766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=i,d=c["".concat(p,".").concat(f)]||c[f]||m[f]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={slug:"nix_start"},o="Nix",l={unversionedId:"compiling/nix_start",id:"compiling/nix_start",title:"Nix",description:"Elja \xfeyrpingin afhj\xfapar nix til notenda sinna, sem gerir \xfeeim kleift a\xf0 setja upp hugb\xfana\xf0 \xe1n sudo r\xe9ttinda. Vi\xf0 notum NUR (nix user repository) fyrir pakka s\xe9rstaklega fyrir Elju",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/compiling/98_nix_start.md",sourceDirName:"compiling",slug:"/compiling/nix_start",permalink:"/is/docs/compiling/nix_start",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/compiling/98_nix_start.md",tags:[],version:"current",sidebarPosition:98,frontMatter:{slug:"nix_start"},sidebar:"tutorialSidebar",previous:{title:"Singularity",permalink:"/is/docs/compiling/singularity"},next:{title:"Nix au\xf0lindir",permalink:"/is/docs/compiling/nix_resources"}},p={},s=[{value:"Fyrstu Skref",id:"fyrstu-skref",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nix"},"Nix"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Elja")," \xfeyrpingin afhj\xfapar ",(0,i.kt)("inlineCode",{parentName:"p"},"nix")," til notenda sinna, sem gerir \xfeeim kleift a\xf0 setja upp hugb\xfana\xf0 \xe1n ",(0,i.kt)("em",{parentName:"p"},"sudo")," r\xe9ttinda. Vi\xf0 notum NUR (nix user repository) fyrir pakka s\xe9rstaklega fyrir ",(0,i.kt)("em",{parentName:"p"},"Elju")),(0,i.kt)("p",null,"If \xfe\xfa treystir \xfe\xe9r ekki a\xf0 nota ",(0,i.kt)("inlineCode",{parentName:"p"},"nix")," skaltu ekki hika vi\xf0 a\xf0 opna m\xe1l til \xe1\xf0 a\xf0 bi\xf0ja um \xe1kve\xf0inn pakka. A\xf0 auki er veri\xf0 a\xf0 hanna ",(0,i.kt)("inlineCode",{parentName:"p"},"nix")," \xed ",(0,i.kt)("inlineCode",{parentName:"p"},"ml")," hjalpart\xe6k til a\xf0 \xe1\xf0sto\xf0\xe1 notendur sem \xfeekkja betur ",(0,i.kt)("inlineCode",{parentName:"p"},"lmod")," kerfi\xf0."),(0,i.kt)("h2",{id:"fyrstu-skref"},"Fyrstu Skref"),(0,i.kt)("p",null,"Vi\xf0 m\xe6lum me\xf0 \xfev\xed a\xf0 nota ",(0,i.kt)("inlineCode",{parentName:"p"},"nix flakes")," fyrir miki\xf0 af \xfeeim uppl\xfdsnigum sem l\xfdst er \xed \xfeessum skj\xf6lum. Fl\xf6gur eru enn sem komi\xf0 er ekki hluti af st\xf6\xf0lu\xf0u dreifingunni, en veita innf\xe6\xf0\xf0\xe1 endurger\xf0anleika kosti fram yfir valkosti eins og ",(0,i.kt)("inlineCode",{parentName:"p"},"niv"),"."))}m.isMDXComponent=!0}}]);