"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[1054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"interactive_session"},i="Interactive Sessions",s={unversionedId:"elja/interactive",id:"elja/interactive",title:"Interactive Sessions",description:"Sometimes it is necessary to run software - or a combination of software -",source:"@site/docs/elja/04_interactive.md",sourceDirName:"elja",slug:"/elja/interactive_session",permalink:"/docs/elja/interactive_session",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/04_interactive.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"interactive_session"},sidebar:"tutorialSidebar",previous:{title:"Scratch Disks",permalink:"/docs/elja/scratch_disk"},next:{title:"Visualization",permalink:"/docs/elja/visualization"}},l={},c=[{value:"Closing the Session",id:"closing-the-session",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interactive-sessions"},"Interactive Sessions"),(0,r.kt)("p",null,"Sometimes it is necessary to run software - or a combination of software -\ndirectly from the command line on a node (e.g. for data analysis and manipulation).\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ srun --job-name "InteractiveJob" --partition 48cpu_192mem --cpus-per-task 24 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash\n')),(0,r.kt)("p",null,"The SLURM scheduler will allocate the requested resource (if available), in this example 24 proccessors from a compute node in the ",(0,r.kt)("strong",{parentName:"p"},"48cpu_192mem")," partition, and 3900MB of RAM memory per processor. The run will last for 1 day (0-00:00:00 : D-HH:MM:SS). "),(0,r.kt)("p",null,"To see which paritions are available to you type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ sinfo\n")),(0,r.kt)("p",null,"A description of the partitions can be found in ",(0,r.kt)("a",{parentName:"p",href:"/docs/hardware/parthardw"},"Partitions & Hardware"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is important to always define --mem-per-cpu, and it is recommended to set it to minimum 3900MB per cpu-core. You can request more memory if needed.\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SLURM")," queue rules and limits still apply here."),(0,r.kt)("p",null,"When the interactive session starts you will be logged into a compute node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[<uname>@compute-xx]$\n")),(0,r.kt)("h2",{id:"closing-the-session"},"Closing the Session"),(0,r.kt)("p",null,"After you have completed your work in your interactive session, please end the session to make the resource available to other users:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[<uname>@compute-xx]$ exit\n")),(0,r.kt)("h1",{id:"maintained-interactive-sessions"},"Maintained Interactive Sessions"),(0,r.kt)("p",null,"Interactive session are closed if the user looses connection or closes the terminal window.\nIn order to maintain an interactive session you can make use of ",(0,r.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/671422/how-to-use-tmux-on-linux-and-why-its-better-than-screen/"},"tmux"),"."),(0,r.kt)("p",null,"First activate ",(0,r.kt)("strong",{parentName:"p"},"tmux"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux                                          \n")),(0,r.kt)("p",null,"and start an interactive session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ srun --job-name \u201cInteractiveJob\u201d --partition <partition-name> --cpus-per-task 32 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash                                          \n")),(0,r.kt)("p",null,"You interactive session is now attached to ",(0,r.kt)("strong",{parentName:"p"},"tmux"),".\nAfter starting your calculation you can close the terminal window.\nYou can also ",(0,r.kt)("strong",{parentName:"p"},"detach")," from the ",(0,r.kt)("strong",{parentName:"p"},"tmux")," session and return\nto the log in node by pressing ",(0,r.kt)("strong",{parentName:"p"},"ctrl+b")," followed by ",(0,r.kt)("strong",{parentName:"p"},"d"),".\nYour job will still be running."),(0,r.kt)("p",null,"To activate the session again after logging in to Elja:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux attach\n")),(0,r.kt)("p",null,"When you are done working (and you have ended the interactive session) please remember to also end the tmux session like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux kill-session\n")),(0,r.kt)("h1",{id:"multiple-interactive-sessions"},"Multiple Interactive Sessions"),(0,r.kt)("p",null,"You can start new or multiple ",(0,r.kt)("strong",{parentName:"p"},"tmux")," sessions, and it is suggested to give each session a name.\nHere we start a session called ",(0,r.kt)("strong",{parentName:"p"},"inter-1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux new -s inter-1\n")),(0,r.kt)("p",null,"followed by an interactive run.\nAfter closing or ",(0,r.kt)("strong",{parentName:"p"},"detaching")," you can connect to the named session again like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux attach-session -t inter-1                                                               \n")),(0,r.kt)("p",null,"When you are done with the work (and ended the srun), you can end a named session like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux kill-session -t inter-1                           \n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When you are finished with running your job interactively\n(whether using ",(0,r.kt)("strong",{parentName:"p"},"tmux")," or not) on a compute node it is important to end the interactive session:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[<uname>@compute-xx]$ exit\n")),(0,r.kt)("p",{parentName:"admonition"},"If you are unsure of how to connect back to the node you can\nalways list your active jobs like this:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ squeue -u $USER\nJOBID PARTITION     NAME    USER    ST  TIME  NODES NODELIST(REASON)\n11729 48cpu_192 Interact   <uname>  R   2:10      1 compute-17\n")),(0,r.kt)("p",{parentName:"admonition"},"and end the job using the JOBID (in this example 11729)"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ scancel 11729\n"))))}m.isMDXComponent=!0}}]);