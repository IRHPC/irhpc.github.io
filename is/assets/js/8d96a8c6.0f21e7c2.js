"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[1706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={slug:"bash"},l={unversionedId:"elja/bash",id:"elja/bash",isDocsHomePage:!1,title:"Bash",description:"The cluster runs a Linux operating system where Bash shell scripts and interactive commands are supported.",source:"@site/docs/elja/01_bash.md",sourceDirName:"elja",slug:"/elja/bash",permalink:"/is/docs/elja/bash",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/01_bash.md",version:"current",sidebarPosition:1,frontMatter:{slug:"bash"},sidebar:"tutorialSidebar",previous:{title:"Etiquette",permalink:"/is/docs/common/etiquette"},next:{title:"Submitting Batch Jobs",permalink:"/is/docs/elja/submit_jobs"}},o=[{value:"Common commands",id:"common-commands",children:[]},{value:"Editing files",id:"editing-files",children:[]},{value:"bash_profile and bashrc",id:"bash_profile-and-bashrc",children:[]}],d={toc:o};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The cluster runs a Linux operating system where Bash shell scripts and interactive commands are supported.\nA basic familiarity with Bash shell (Linux) commands is required for interacting with the cluster. "),(0,a.kt)("h2",{id:"common-commands"},"Common commands"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cp file1 file2")),(0,a.kt)("td",{parentName:"tr",align:null},"Copy ",(0,a.kt)("inlineCode",{parentName:"td"},"file1")," and rename it to ",(0,a.kt)("inlineCode",{parentName:"td"},"file2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"mv file1 file2")),(0,a.kt)("td",{parentName:"tr",align:null},"Move or rename ",(0,a.kt)("inlineCode",{parentName:"td"},"file1")," to ",(0,a.kt)("inlineCode",{parentName:"td"},"file2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rm file")),(0,a.kt)("td",{parentName:"tr",align:null},"Deletes a file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rmdir dir/")),(0,a.kt)("td",{parentName:"tr",align:null},"Removes an ",(0,a.kt)("strong",{parentName:"td"},"empty")," directory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-r")),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"-r")," flag will allow ",(0,a.kt)("inlineCode",{parentName:"td"},"cp")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"rm")," to work with directories")))),(0,a.kt)("p",null,"Some additional useful commands can be found ",(0,a.kt)("a",{parentName:"p",href:"https://www.educative.io/blog/bash-shell-command-cheat-sheet"},"here"),"."),(0,a.kt)("h2",{id:"editing-files"},"Editing files"),(0,a.kt)("h2",{id:"bash_profile-and-bashrc"},"bash_profile and bashrc"))}s.isMDXComponent=!0}}]);