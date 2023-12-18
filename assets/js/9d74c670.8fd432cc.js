"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[8954],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={slug:"matlab"},l="MatLab",i={unversionedId:"software/MatLab",id:"software/MatLab",title:"MatLab",description:"MatLab runs as a Singularity container.",source:"@site/docs/software/05_MatLab.md",sourceDirName:"software",slug:"/software/matlab",permalink:"/docs/software/matlab",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/software/05_MatLab.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"matlab"},sidebar:"tutorialSidebar",previous:{title:"Singularity",permalink:"/docs/software/singularity"},next:{title:"Jupyterlab on Elja",permalink:"/docs/software/jupyterlab"}},s={},p=[{value:"Loading Matlab",id:"loading-matlab",level:2},{value:"Running Matlab",id:"running-matlab",level:2},{value:"Activating your license on Elja",id:"activating-your-license-on-elja",level:3},{value:"Hello, Matlab!",id:"hello-matlab",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"matlab"},"MatLab"),(0,r.kt)("p",null,"MatLab runs as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/software/singularity"},"Singularity")," container.\nYou will need to provide your ",(0,r.kt)("a",{parentName:"p",href:"https://mathworks.com"},"MathwWorks")," account email to use your individual license."),(0,r.kt)("h2",{id:"loading-matlab"},"Loading Matlab"),(0,r.kt)("p",null,"MatLab is available as a module on ",(0,r.kt)("strong",{parentName:"p"},"Elja")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ml load Matlab\n")),(0,r.kt)("h2",{id:"running-matlab"},"Running Matlab"),(0,r.kt)("p",null,"To run Matlab use the ",(0,r.kt)("inlineCode",{parentName:"p"},"matlab")," command."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You will need to enter an ",(0,r.kt)("a",{parentName:"p",href:"/docs/elja/interactive_session"},"Interactive Session")," or run  ",(0,r.kt)("a",{parentName:"p",href:"/docs/elja/submit_jobs"},"Batch job")," to run matlab. ")),(0,r.kt)("h3",{id:"activating-your-license-on-elja"},"Activating your license on Elja"),(0,r.kt)("p",null,"If this is the first time you run Matlab on ",(0,r.kt)("strong",{parentName:"p"},"Elja")," you will be prompted for your MathWorks account email:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ srun --job-name "Matlab Job" --partition any_cpu --cpus-per-task 24 --mem-per-cpu 3900 --time 02:00:00 --pty bash\n$ matlab \nMATLAB is selecting SOFTWARE OPENGL rendering.\nPlease enter your MathWorks Account email address and press Enter:\n')),(0,r.kt)("p",null,"If you are associated with ",(0,r.kt)("a",{parentName:"p",href:"https://hi.is"},"HI")," you can use your ",(0,r.kt)("inlineCode",{parentName:"p"},"<uname>@hi.is")," email, otherwise you will need to provide an email address with an active license. "),(0,r.kt)("p",null,"Once the you have entered your user account email you will be given a one time password."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Single-Sign-On(SSO) is not available in this environment. You need a one-time password to sign in to MATLAB.\n        Step 1. Visit https://www.mathworks.com/mwa/otp\n        Step 2. Copy the password.\n        Step 3. Return here, and input the password.\nPlease enter the one-time password:\n")),(0,r.kt)("p",null,"Navigate to the given link and type in the one time password.\nYour license should now be active and you will be able to run MatLab on any partition you want."),(0,r.kt)("h3",{id:"hello-matlab"},"Hello, Matlab!"),(0,r.kt)("p",null,"Create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.m"),"  and add the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ touch hello.m\n$ echo "disp("Hello, Matlab!");" > hello.m\n')),(0,r.kt)("p",null,"Now we can run the file in our interactive session"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ matlab -r \"run('hello.m')\"\nStarting MATLAB with license: xxxxxxx - MATLAB (Individual)\n\n                                                                                                          < M A T L A B (R) >\n                                                                                                Copyright 1984-2023 The MathWorks, Inc.\n                                                                                           R2023a Update 3 (9.14.0.2286388) 64-bit (glnxa64)\n                                                                                                              May 25, 2023\n\n \nTo get started, type doc.\nFor product information, visit www.mathworks.com.\n \nHello, Matlab!\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please type ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," when you want to close Matlab ctrl+c causes input/output errors.")))}m.isMDXComponent=!0}}]);