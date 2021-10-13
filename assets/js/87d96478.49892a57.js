(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[38],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4879:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={slug:"visualization"},s={unversionedId:"elja/visualization",id:"elja/visualization",isDocsHomePage:!1,title:"Visualization",description:"Some large datasets may on occasion need to be visualized in place, on the cluster. For these situations, the user has several options which are detailed below.",source:"@site/docs/elja/05_visualization.md",sourceDirName:"elja",slug:"/elja/visualization",permalink:"/docs/elja/visualization",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/05_visualization.md",version:"current",sidebarPosition:5,frontMatter:{slug:"visualization"},sidebar:"tutorialSidebar",previous:{title:"Interactive Sessions",permalink:"/docs/elja/interactive_session"},next:{title:"nix_hpc_conf",permalink:"/docs/elja/nix_hpc_conf"}},c=[{value:"SSH",id:"ssh",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Some large datasets may on occasion need to be visualized in place, on the cluster. For these situations, the user has several options which are detailed below."),(0,a.kt)("h2",{id:"ssh"},"SSH"),(0,a.kt)("p",null,"The most common approach to visualization is by connecting to the server with a flag to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"X11")," forwarding details. The most common ones are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -X someone@something.ip.address # ForwardX11\nssh -Y someone@something.ip.address # ForwardX11Trusted\n")),(0,a.kt)("p",null,"However, a more practically useful method is to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," configuration file itself. The following snippet can be added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"Host *\n  ForwardAgent yes\n  ForwardX11 yes\n  ForwardX11Trusted yes\n  XAuthLocation /opt/X11/bin/xauth # For a Mac with XQuartz\n")),(0,a.kt)("p",null,"For Linux (and Windows with WSL 2) machines, ",(0,a.kt)("inlineCode",{parentName:"p"},"which xauth")," will provide the path for the ",(0,a.kt)("inlineCode",{parentName:"p"},"XAuthLocation")," variable. Now the user is free to connect directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sssh someone@something.ip.address # Reads the ssh configuration\n")))}u.isMDXComponent=!0}}]);