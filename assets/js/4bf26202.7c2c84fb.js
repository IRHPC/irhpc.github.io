(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[207],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2424:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={slug:"interactive_session"},c={unversionedId:"elja/interactive",id:"elja/interactive",isDocsHomePage:!1,title:"Interactive Sessions",description:"Sometimes it is necessary to run software - or a combination of software -",source:"@site/docs/elja/03_interactive.md",sourceDirName:"elja",slug:"/elja/interactive_session",permalink:"/docs/elja/interactive_session",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/03_interactive.md",version:"current",sidebarPosition:3,frontMatter:{slug:"interactive_session"},sidebar:"tutorialSidebar",previous:{title:"Submitting Jobs",permalink:"/docs/elja/submit_jobs"},next:{title:"Visualization",permalink:"/docs/elja/visualization"}},s=[],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes it is necessary to run software - or a combination of software -\ndirectly from the command line on a node (e.g. for data analysis and manipulation).\nFor example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'srun --job-name "InteractiveJob" --cpus-per-task 24 --mem-per-cpu 1500 --time 24:00:00 --pty bash\n')),(0,i.kt)("p",null,"requests an interactive session and is allocated when the requested resources are available."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SLURM")," queue rules and limits still apply here."))}u.isMDXComponent=!0}}]);