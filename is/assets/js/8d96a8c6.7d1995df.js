"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[1706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={slug:"bash"},l="Bash",o={unversionedId:"elja/bash",id:"elja/bash",title:"Bash",description:"The cluster runs a Linux operating system where Bash shell scripts and interactive commands are supported.",source:"@site/docs/elja/01_bash.md",sourceDirName:"elja",slug:"/elja/bash",permalink:"/is/docs/elja/bash",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/01_bash.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"bash"},sidebar:"tutorialSidebar",previous:{title:"Si\xf0areglur",permalink:"/is/docs/common/etiquette"},next:{title:"Submitting Batch Jobs",permalink:"/is/docs/elja/submit_jobs"}},s={},d=[{value:"Common commands",id:"common-commands",level:2},{value:"Editing files",id:"editing-files",level:2},{value:"Vim",id:"vim",level:3},{value:"Usage",id:"usage",level:4},{value:"Vi",id:"vi",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Emacs",id:"emacs",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Nano",id:"nano",level:3},{value:"Usage",id:"usage-3",level:3},{value:"bash_profile and bashrc",id:"bash_profile-and-bashrc",level:2},{value:"bash_profile",id:"bash_profile",level:3},{value:"bashrc",id:"bashrc",level:3}],c={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bash"},"Bash"),(0,r.kt)("p",null,"The cluster runs a Linux operating system where Bash shell scripts and interactive commands are supported.\nA basic familiarity with Bash shell (Linux) commands is required for interacting with the cluster. "),(0,r.kt)("h2",{id:"common-commands"},"Common commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cp file1 file2")),(0,r.kt)("td",{parentName:"tr",align:null},"Copy ",(0,r.kt)("inlineCode",{parentName:"td"},"file1")," and rename it to ",(0,r.kt)("inlineCode",{parentName:"td"},"file2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mv file1 file2")),(0,r.kt)("td",{parentName:"tr",align:null},"Move or rename ",(0,r.kt)("inlineCode",{parentName:"td"},"file1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"file2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rm file")),(0,r.kt)("td",{parentName:"tr",align:null},"Deletes a file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rmdir dir/")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes an ",(0,r.kt)("strong",{parentName:"td"},"empty")," directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-r")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"-r")," flag will allow ",(0,r.kt)("inlineCode",{parentName:"td"},"cp")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"rm")," to work with directories")))),(0,r.kt)("p",null,"Some additional useful commands can be found ",(0,r.kt)("a",{parentName:"p",href:"https://www.educative.io/blog/bash-shell-command-cheat-sheet"},"here"),"."),(0,r.kt)("h2",{id:"editing-files"},"Editing files"),(0,r.kt)("p",null,"Elja offers the basic text editors available for Linux "),(0,r.kt)("h3",{id:"vim"},"Vim"),(0,r.kt)("p",null,"Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient."),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vim file.txt\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://devhints.io/vim"},"Vim/Vi cheat sheet")),(0,r.kt)("h3",{id:"vi"},"Vi"),(0,r.kt)("p",null,"Vi is a lightweight version of Vim"),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi file.txt\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://devhints.io/vim"},"Vim/Vi cheat sheet")),(0,r.kt)("h3",{id:"emacs"},"Emacs"),(0,r.kt)("p",null,"Emacs is a text editor designed for POSIX operating systems and available on Linux, BSD, macOS, Windows, and more. Users love Emacs because it features efficient commands for common but complex actions and for the plugins and configuration hacks that have developed around it for nearly 40 years."),(0,r.kt)("h4",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"emacs file.txt\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://cs.hamilton.edu/misc/EmacsCheatSheet_iupui.pdf"},"Emacs cheat sheet")),(0,r.kt)("h3",{id:"nano"},"Nano"),(0,r.kt)("p",null,"Lightweight and straightforward, nano delivers a simple, intuitive editor with no extra fuss."),(0,r.kt)("h3",{id:"usage-3"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano file.txt\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.nano-editor.org/dist/latest/cheatsheet.html"},"Nano cheat sheet")),(0,r.kt)("h2",{id:"bash_profile-and-bashrc"},"bash_profile and bashrc"),(0,r.kt)("h3",{id:"bash_profile"},"bash_profile"),(0,r.kt)("p",null,"The .bash_profile is a hidde script that is executed only once when you log into your account. This is used to set environment variables and to run commands that are needed only once at the start of your session. It is commonly used to set PATH variable."),(0,r.kt)("h3",{id:"bashrc"},"bashrc"),(0,r.kt)("p",null,"Bashrc is a configuration file for the Bash shell, which is the default shell on Elja. It is executed each time you open a new instance of a terminal window, for instance when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"screen")," command, and is used to set environment variables, define aliases and customizing your prompt."))}p.isMDXComponent=!0}}]);