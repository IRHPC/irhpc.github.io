"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[4776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={slug:"matlab"},o="MatLab",l={unversionedId:"compiling/MatLab",id:"compiling/MatLab",title:"MatLab",description:"MatLab runs as a Singularity container.",source:"@site/docs/compiling/09_MatLab.md",sourceDirName:"compiling",slug:"/compiling/matlab",permalink:"/is/docs/compiling/matlab",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/compiling/09_MatLab.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{slug:"matlab"},sidebar:"tutorialSidebar",previous:{title:"Singularity",permalink:"/is/docs/compiling/singularity"},next:{title:"Nix",permalink:"/is/docs/compiling/nix_start"}},s={},p=[{value:"Loading Matlab",id:"loading-matlab",level:2},{value:"Running Matlab",id:"running-matlab",level:2},{value:"Activating your license on Elja",id:"activating-your-license-on-elja",level:3},{value:"Hello, Matlab!",id:"hello-matlab",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"matlab"},"MatLab"),(0,r.kt)("p",null,"MatLab runs as a ",(0,r.kt)("a",{parentName:"p",href:"singularity"},"Singularity")," container.\nYou will need to provide your ",(0,r.kt)("a",{parentName:"p",href:"https://mathworks.com"},"MathwWorks")," account email to use your individual license."),(0,r.kt)("h2",{id:"loading-matlab"},"Loading Matlab"),(0,r.kt)("p",null,"MatLab is available as a module on ",(0,r.kt)("strong",{parentName:"p"},"Elja")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ml load Matlab\n")),(0,r.kt)("h2",{id:"running-matlab"},"Running Matlab"),(0,r.kt)("p",null,"To run Matlab use the ",(0,r.kt)("inlineCode",{parentName:"p"},"matlab")," command."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You will need to enter an ",(0,r.kt)("a",{parentName:"p",href:"../elja/interactive_session"},"Interactive Session")," or run  ",(0,r.kt)("a",{parentName:"p",href:"../elja/submit_jobs"},"Batch job")," to run matlab. ")),(0,r.kt)("h3",{id:"activating-your-license-on-elja"},"Activating your license on Elja"),(0,r.kt)("p",null,"If this is the first time you run Matlab on ",(0,r.kt)("strong",{parentName:"p"},"Elja")," you will be prompted for your MathWorks account email:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ srun --job-name "Matlab Job" --partition any_cpu --cpus-per-task 24 --mem-per-cpu 3900 --time 02:00:00 --pty bash\n$ matlab \nMATLAB is selecting SOFTWARE OPENGL rendering.\nPlease enter your MathWorks Account email address and press Enter:\n')),(0,r.kt)("p",null,"If you are associated with ",(0,r.kt)("a",{parentName:"p",href:"https://hi.is"},"HI")," you can use your ",(0,r.kt)("inlineCode",{parentName:"p"},"<uname>@hi.is")," email, otherwise you will need to provide an email address with an active license. "),(0,r.kt)("p",null,"Once the you have entered your user account email you will be given a one time password."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Single-Sign-On(SSO) is not available in this environment. You need a one-time password to sign in to MATLAB.\n        Step 1. Visit https://www.mathworks.com/mwa/otp\n        Step 2. Copy the password.\n        Step 3. Return here, and input the password.\nPlease enter the one-time password:\n")),(0,r.kt)("p",null,"Navigate to the given link and type in the one time password.\nYour license should now be active and you will be able to run MatLab on any partition you want."),(0,r.kt)("h3",{id:"hello-matlab"},"Hello, Matlab!"),(0,r.kt)("p",null,"Create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.m"),"  and add the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ touch hello.m\n$ echo "disp("Hello, Matlab!");" > hello.m\n')),(0,r.kt)("p",null,"Now we can run the file in our interactive session"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ matlab -r \"run('hello.m')\"\nStarting MATLAB with license: xxxxxxx - MATLAB (Individual)\n\n                                                                                                          < M A T L A B (R) >\n                                                                                                Copyright 1984-2023 The MathWorks, Inc.\n                                                                                           R2023a Update 3 (9.14.0.2286388) 64-bit (glnxa64)\n                                                                                                              May 25, 2023\n\n \nTo get started, type doc.\nFor product information, visit www.mathworks.com.\n \nHello, Matlab!\n")))}m.isMDXComponent=!0}}]);