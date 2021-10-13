(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[706],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6486:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={slug:"bash"},l={unversionedId:"elja/bash",id:"elja/bash",isDocsHomePage:!1,title:"Bash",description:"The cluster runs a Linux operating system where Bash shell scripts and interactive commands are supported.",source:"@site/docs/elja/01_bash.md",sourceDirName:"elja",slug:"/elja/bash",permalink:"/docs/elja/bash",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/01_bash.md",version:"current",sidebarPosition:1,frontMatter:{slug:"bash"},sidebar:"tutorialSidebar",previous:{title:"Etiquette",permalink:"/docs/common/etiquette"},next:{title:"Submitting Jobs",permalink:"/docs/elja/submit_jobs"}},c=[{value:"Common commands",id:"common-commands",children:[]},{value:"Editing files",id:"editing-files",children:[]},{value:"bash_profile and bashrc",id:"bash_profile-and-bashrc",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The cluster runs a Linux operating system where Bash shell scripts and interactive commands are supported.\nA basic familiarity with Bash shell (Linux) commands is required for interacting with the cluster. "),(0,i.kt)("h2",{id:"common-commands"},"Common commands"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cp file1 file2")),(0,i.kt)("td",{parentName:"tr",align:null},"Copy ",(0,i.kt)("inlineCode",{parentName:"td"},"file1")," and rename it to ",(0,i.kt)("inlineCode",{parentName:"td"},"file2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mv file1 file2")),(0,i.kt)("td",{parentName:"tr",align:null},"Move or rename ",(0,i.kt)("inlineCode",{parentName:"td"},"file1")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"file2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rm file")),(0,i.kt)("td",{parentName:"tr",align:null},"Deletes a file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rmdir dir/")),(0,i.kt)("td",{parentName:"tr",align:null},"Removes an ",(0,i.kt)("strong",{parentName:"td"},"empty")," directory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-r")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"-r")," flag will allow ",(0,i.kt)("inlineCode",{parentName:"td"},"cp")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"rm")," to work with directories")))),(0,i.kt)("p",null,"A comprehensive list of commands, tips and tricks can be found elsewhere."),(0,i.kt)("h2",{id:"editing-files"},"Editing files"),(0,i.kt)("h2",{id:"bash_profile-and-bashrc"},"bash_profile and bashrc"))}d.isMDXComponent=!0}}]);