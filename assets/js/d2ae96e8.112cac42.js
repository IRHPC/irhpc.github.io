(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[297],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,g=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7667:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={slug:"zero-nix",title:"Zeroing in on Nix",author:"Rohit Goswami",author_title:"Docs wrangler",author_url:"https://rgoswami.me",author_image_url:"https://avatars.githubusercontent.com/u/4336207?v=4",tags:["packaging","admin","announcements"]},c={permalink:"/announcements/zero-nix",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/announcements/2021-05-20-zero-nix.md",source:"@site/announcements/2021-05-20-zero-nix.md",title:"Zeroing in on Nix",description:"We have decided to use nix as the main packaging manager.",date:"2021-05-20T00:00:00.000Z",formattedDate:"May 20, 2021",tags:[{label:"packaging",permalink:"/announcements/tags/packaging"},{label:"admin",permalink:"/announcements/tags/admin"},{label:"announcements",permalink:"/announcements/tags/announcements"}],readingTime:.055,truncated:!1,nextItem:{title:"Hello",permalink:"/announcements/hello-world"}},u=[],l={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have decided to use ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," as the main packaging manager."))}p.isMDXComponent=!0}}]);