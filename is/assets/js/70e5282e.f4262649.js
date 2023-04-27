"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[2729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={slug:"sftpconnecting"},o="SFTP: Cyberduck/FileZilla",c={unversionedId:"connecting/sftp",id:"connecting/sftp",title:"SFTP: Cyberduck/FileZilla",description:"The SSH key can similarly be used to connect with SSH-file-transfer-protocol",source:"@site/docs/connecting/04_sftp.md",sourceDirName:"connecting",slug:"/connecting/sftpconnecting",permalink:"/is/docs/connecting/sftpconnecting",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/connecting/04_sftp.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"sftpconnecting"},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/is/docs/connecting/windowsconnecting"},next:{title:"Getting Started",permalink:"/is/docs/documentation/getting_started"}},l={},s=[{value:"FileZilla",id:"filezilla",level:2},{value:"Cyberduck",id:"cyberduck",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sftp-cyberduckfilezilla"},"SFTP: Cyberduck/FileZilla"),(0,i.kt)("p",null,"The SSH key can similarly be used to connect with SSH-file-transfer-protocol\n(",(0,i.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/sftp"},"SFTP"),")\nsoftware like ",(0,i.kt)("a",{parentName:"p",href:"https://filezilla-project.org/"},"FileZilla"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://cyberduck.io/"},"Cyberduck"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"As a courtesy to other users, do not transfer many large files at the same time. Try\nonly to transfer the data that you intend to use at any given time, and remember to\nremove the data and files you are finished working with. You are sharing the bandwith\nand disk space with your fellow colleagues and other scientists.")," ")),(0,i.kt)("h2",{id:"filezilla"},"FileZilla"),(0,i.kt)("p",null,"Open up ",(0,i.kt)("strong",{parentName:"p"},"FileZilla"),' and enter your username and "sftp://elja.hi.is" as host:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example FileZilla",src:n(8315).Z,width:"602",height:"478"})),(0,i.kt)("p",null,"Open the settings menu in ",(0,i.kt)("strong",{parentName:"p"},"Edit > Settings"),". Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Connection > FTP > SFTP"),'.\nPress "Add key file" and select the private key (e.g. the ',"*",".ppk generated with PuTTygen):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example 2 FileZilla",src:n(2985).Z,width:"599",height:"455"})),(0,i.kt)("p",null,'Press "Quickconnect" and choose "Always trust the host" when prompted.\nA successfull connection looks like this (for test user ',(0,i.kt)("strong",{parentName:"p"},"redacted"),"):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example 3 FileZilla",src:n(822).Z,width:"600",height:"479"})),(0,i.kt)("h2",{id:"cyberduck"},"Cyberduck"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This has been tested for Cyberduck version ",(0,i.kt)("strong",{parentName:"p"},"8.4.3"),". It is recommended you upgrade to at\nleast this version or later (some earlier versions have a problem maintaining the connection).")),(0,i.kt)("p",null,'Open Cyberduck and press "Open Connection" in the top left corner. Fill in the fields like this:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example Cyberduck",src:n(5711).Z,width:"599",height:"408"})),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"Mimir-II")," users; you can go directly to your ",(0,i.kt)("strong",{parentName:"p"},"/hpcdata/Mimir/USERNAME")," directory like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example 2 Cyberduck",src:n(6997).Z,width:"599",height:"526"})),(0,i.kt)("p",null,"Press connect."),(0,i.kt)("p",null,"A successfull connection looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example 3 Cyberduck",src:n(796).Z,width:"601",height:"370"})))}u.isMDXComponent=!0},5711:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cyberduck-608736c790152fabea125d71f4cad417.png"},6997:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cyberduck2-cca1f5211d06c7ff74de814be6ec5ed4.png"},796:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cyberduck3-0828b1dd9d6a303a7a00fdde9e4ca4c2.png"},8315:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/filezilla-2301d6e672f1fb1b27fc7d5870d92a44.png"},2985:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/filezilla2-ee7687c1e9b792c81b1b9a41534366d6.png"},822:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/filezilla3-78f2337abb42c29e3eeffc349d67dbb5.png"}}]);