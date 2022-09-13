(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[451],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1006:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={slug:"nix_start"},s={unversionedId:"compiling/nix_start",id:"compiling/nix_start",isDocsHomePage:!1,title:"Nix",description:"The elja cluster exposes nix to its users, allowing for non-root installations and sharing of configurations. We use an NUR (nix user repository) for elja specific packages.",source:"@site/docs/compiling/98_nix_start.md",sourceDirName:"compiling",slug:"/compiling/nix_start",permalink:"/is/docs/compiling/nix_start",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/compiling/98_nix_start.md",version:"current",sidebarPosition:98,frontMatter:{slug:"nix_start"},sidebar:"tutorialSidebar",previous:{title:"Programming and Development Environments",permalink:"/is/docs/compiling/environment"},next:{title:"Nix Resources",permalink:"/is/docs/compiling/nix_resources"}},c=[{value:"First Steps",id:"first-steps",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"elja")," cluster exposes ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," to its users, allowing for non-root installations and sharing of configurations. We use an NUR (nix user repository) for ",(0,o.kt)("inlineCode",{parentName:"p"},"elja")," specific packages."),(0,o.kt)("p",null,"If you are not comfortable using ",(0,o.kt)("inlineCode",{parentName:"p"},"nix"),", feel free to open an issue to request a particular package. Additionally, a ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ml")," helper is being designed to aid users more familiar with the ",(0,o.kt)("inlineCode",{parentName:"p"},"lmod")," system."),(0,o.kt)("h2",{id:"first-steps"},"First Steps"),(0,o.kt)("p",null,"We recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"nix flakes")," for much of the details described in this documentation. Flakes are as yet not part of the standard distribution, but provide native reproducibility advantages over alternatives like ",(0,o.kt)("inlineCode",{parentName:"p"},"niv"),"."))}p.isMDXComponent=!0}}]);