(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[1711],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4985:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={slug:"etiquette"},s={unversionedId:"common/etiquette",id:"common/etiquette",isDocsHomePage:!1,title:"Etiquette",description:"Congratulations on getting an account on one of the IRHPC clusters. The documentation here is applicable to all of the machines. Please read this page carefully, and if you are in any doubt on how to perform your tasks on the cluster do not hesitate to contact support.",source:"@site/docs/common/02_etiquette.md",sourceDirName:"common",slug:"/common/etiquette",permalink:"/docs/common/etiquette",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/common/02_etiquette.md",version:"current",sidebarPosition:2,frontMatter:{slug:"etiquette"},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/docs/common/terminology"},next:{title:"Bash",permalink:"/docs/elja/bash"}},u=[],l={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Congratulations on getting an account on one of the IRHPC clusters. The documentation here is applicable to all of the machines. Please read this page carefully, and if you are in any doubt on how to perform your tasks on the cluster do not hesitate to contact support."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Never give your login password or SSH key to anyone else")),(0,a.kt)("h1",{id:"login-node"},"Login Node"),(0,a.kt)("p",null,"The login node is a shared resource between all of the users. It controls the entire cluster, including SLURM which runs jobs and the queues. "),(0,a.kt)("p",null,"That is why it should only be used for the following simple tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Submit jobs"),(0,a.kt)("li",{parentName:"ul"},"Edit scripts and files"),(0,a.kt)("li",{parentName:"ul"},"Prepare / delete data (scp, cp, mv, rm etc.)"),(0,a.kt)("li",{parentName:"ul"},"Run effortless scripts (no computations)"),(0,a.kt)("li",{parentName:"ul"},"Compile small software packages (e.g. an in-house code)")),(0,a.kt)("h1",{id:"resource-management"},"Resource Management"),(0,a.kt)("h1",{id:"data-storage"},"Data Storage"),(0,a.kt)("p",null,"The disk space on the cluster is similarly a shared resource and is distributed fairly among the users. It is not a limitless resource.\nHitting your quota stops you from writing data and may cause jobs to fail. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"quota\n")),(0,a.kt)("p",null,"will reveal your current disk space usage and quota. It is advisable to periodically transfer files or data not being used by jobs from your home directory to your personal computer for storage. See here for more details."),(0,a.kt)("h1",{id:"scratch-disk"},"Scratch Disk"))}c.isMDXComponent=!0}}]);