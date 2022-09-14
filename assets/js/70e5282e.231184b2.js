(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[2729],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4850:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={slug:"sftpconnecting"},c={unversionedId:"connecting/sftp",id:"connecting/sftp",isDocsHomePage:!1,title:"SFTP: Cyberduck/FileZilla",description:"The SSH key can similarly be used to connect with SSH-file-transfer-protocol",source:"@site/docs/connecting/04_sftp.md",sourceDirName:"connecting",slug:"/connecting/sftpconnecting",permalink:"/docs/connecting/sftpconnecting",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/connecting/04_sftp.md",version:"current",sidebarPosition:4,frontMatter:{slug:"sftpconnecting"},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/connecting/windowsconnecting"},next:{title:"Getting Started",permalink:"/docs/documentation/getting_started"}},s=[{value:"FileZilla",id:"filezilla",children:[]},{value:"Cyberduck",id:"cyberduck",children:[]}],l={toc:s};function p(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The SSH key can similarly be used to connect with SSH-file-transfer-protocol\n(",(0,i.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/sftp"},"SFTP"),")\nsoftware like ",(0,i.kt)("a",{parentName:"p",href:"https://filezilla-project.org/"},"FileZilla"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://cyberduck.io/"},"Cyberduck"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"As a courtesy to other users, do not transfer many large files at the same time. Try\nonly to transfer the data that you intend to use at any given time, and remember to\nremove the data and files you are finished working with. You are sharing the bandwith\nand disk space with your fellow colleagues and other scientists.")," "))),(0,i.kt)("h2",{id:"filezilla"},"FileZilla"),(0,i.kt)("p",null,"Open up ",(0,i.kt)("strong",{parentName:"p"},"FileZilla"),' and enter your username and "sftp://elja.hi.is" as host:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example FileZilla",src:n(3512).Z})),(0,i.kt)("p",null,"Open the settings menu in ",(0,i.kt)("strong",{parentName:"p"},"Edit > Settings"),". Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Connection > FTP > SFTP"),'.\nPress "Add key file" and select the private key (e.g. the ',"*",".ppk generated with PuTTygen):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example 2 FileZilla",src:n(7048).Z})),(0,i.kt)("p",null,'Press "Quickconnect" and choose "Always trust the host" when prompted.\nA successfull connection looks like this (for test user ',(0,i.kt)("strong",{parentName:"p"},"redacted"),"):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example 3 FileZilla",src:n(8541).Z})),(0,i.kt)("h2",{id:"cyberduck"},"Cyberduck"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This has been tested for Cyberduck version ",(0,i.kt)("strong",{parentName:"p"},"8.4.3"),". It is recommended you upgrade to at\nleast this version or later (some earlier versions have a problem maintaining the connection)."))),(0,i.kt)("p",null,'Open Cyberduck and press "Open Connection" in the top left corner. Fill in the fields like this:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example Cyberduck",src:n(2926).Z})),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"Mimir-II")," users; you can go directly to your ",(0,i.kt)("strong",{parentName:"p"},"/hpcdata/Mimir/USERNAME")," directory like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example 2 Cyberduck",src:n(982).Z})),(0,i.kt)("p",null,"Press connect."),(0,i.kt)("p",null,"A successfull connection looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example 3 Cyberduck",src:n(1339).Z})))}p.isMDXComponent=!0},2926:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cyberduck-608736c790152fabea125d71f4cad417.png"},982:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cyberduck2-cca1f5211d06c7ff74de814be6ec5ed4.png"},1339:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cyberduck3-0828b1dd9d6a303a7a00fdde9e4ca4c2.png"},3512:function(e,t,n){"use strict";t.Z=n.p+"assets/images/filezilla-2301d6e672f1fb1b27fc7d5870d92a44.png"},7048:function(e,t,n){"use strict";t.Z=n.p+"assets/images/filezilla2-ee7687c1e9b792c81b1b9a41534366d6.png"},8541:function(e,t,n){"use strict";t.Z=n.p+"assets/images/filezilla3-78f2337abb42c29e3eeffc349d67dbb5.png"}}]);