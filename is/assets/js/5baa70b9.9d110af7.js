"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[7541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={slug:"nix_snippets"},s="Nix b\xfatar",o={unversionedId:"snippets/nix",id:"snippets/nix",title:"Nix b\xfatar",description:"Skr\xe1astj\xf3rnun",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/snippets/02_nix.md",sourceDirName:"snippets",slug:"/snippets/nix_snippets",permalink:"/is/docs/snippets/nix_snippets",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/snippets/02_nix.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"nix_snippets"},sidebar:"tutorialSidebar",previous:{title:"Slurm",permalink:"/is/docs/snippets/slurm"}},p={},c=[{value:"Skr\xe1astj\xf3rnun",id:"skr\xe1astj\xf3rnun",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nix-b\xfatar"},"Nix b\xfatar"),(0,i.kt)("h2",{id:"skr\xe1astj\xf3rnun"},"Skr\xe1astj\xf3rnun"),(0,i.kt)("p",null,"Fyrir t\xedmabundinn skr\xe1astj\xf3ra, nota\xf0u eftirfarandi \xe1kall:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nix-shell -p lxsession lxappearance lxrandr lxmenu-data gsettings-desktop-schemas xfce.thunar\nlxsession &\nthunar\n")),(0,i.kt)("p",null,"Til a\xf0 f\xe1 t\xe1kn\xfeema skaltu nota eftirfarandi:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/Git/Github/icons\ncd $HOME/Git/Github/icons\ngit clone https://github.com/bikass/kora.git\nmkdir -p $HOME/.local/share/icons\ncp kora/kora* $HOME/.local/share/icons\n")))}d.isMDXComponent=!0}}]);