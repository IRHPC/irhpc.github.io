(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[207],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2424:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={slug:"interactive_session"},s={unversionedId:"elja/interactive",id:"elja/interactive",isDocsHomePage:!1,title:"Interactive Sessions",description:"Sometimes it is necessary to run software - or a combination of software -",source:"@site/docs/elja/03_interactive.md",sourceDirName:"elja",slug:"/elja/interactive_session",permalink:"/is/docs/elja/interactive_session",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/03_interactive.md",version:"current",sidebarPosition:3,frontMatter:{slug:"interactive_session"},sidebar:"tutorialSidebar",previous:{title:"Submitting Batch Jobs",permalink:"/is/docs/elja/submit_jobs"},next:{title:"Visualization",permalink:"/is/docs/elja/visualization"}},l=[],c={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes it is necessary to run software - or a combination of software -\ndirectly from the command line on a node (e.g. for data analysis and manipulation).\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ srun --job-name "InteractiveJob" --cpus-per-task 24 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash\n')),(0,o.kt)("p",null,"The SLURM scheduler will allocate the requested resource (if available), in this example 24 proccessors and 3900MB of RAM memory per processor, from the default partition. The run will last for 1 day (0-00:00:00 : D-HH:MM:SS). "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is important to always define --mem-per-cpu, and it is recommended to set it to minimum 3900MB per cpu-core. You can request more memory if needed.\n"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SLURM")," queue rules and limits still apply here."),(0,o.kt)("p",null,"When the interactive session stars you will be logged into a compute node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[<uname>@compute-xx]$\n")),(0,o.kt)("p",null,"To request a particular partition (pname):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ srun --job-name "InteractiveJob" --partition <pname> --cpus-per-task 32 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash\n')),(0,o.kt)("p",null,"After you have completed your work in your interactive session, please end the session to make the resource available to other users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[<uname>@compute-xx]$ exit\n")),(0,o.kt)("h1",{id:"maintained-interactive-sessions"},"Maintained Interactive Sessions"),(0,o.kt)("p",null,"Interactive session are closed if the user looses connection or closes the terminal window.\nIn order to maintain an interactive session you can make use of ",(0,o.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/671422/how-to-use-tmux-on-linux-and-why-its-better-than-screen/"},"tmux"),"."),(0,o.kt)("p",null,"First activate ",(0,o.kt)("strong",{parentName:"p"},"tmux"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux                                          \n")),(0,o.kt)("p",null,"and start an interactive session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ srun --job-name \u201cInteractiveJob\u201d --cpus-per-task 32 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash                                          \n")),(0,o.kt)("p",null,"You interactive session is now attached to ",(0,o.kt)("strong",{parentName:"p"},"tmux"),".\nAfter starting your calculation you can close the terminal window.\nYou can also ",(0,o.kt)("strong",{parentName:"p"},"detach")," from the ",(0,o.kt)("strong",{parentName:"p"},"tmux")," session and return\nto the log in node by pressing ",(0,o.kt)("strong",{parentName:"p"},"ctrl+b")," followed by ",(0,o.kt)("strong",{parentName:"p"},"d"),".\nYour job will still be running."),(0,o.kt)("p",null,"To activate the session again after logging in to Elja:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux attach\n")),(0,o.kt)("p",null,"When you are done working (and you have ended the interactive session) please remember to also end the tmux session like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux kill-session\n")),(0,o.kt)("h1",{id:"multiple-interactive-sessions"},"Multiple Interactive Sessions"),(0,o.kt)("p",null,"You can start new or multiple ",(0,o.kt)("strong",{parentName:"p"},"tmux")," sessions, and it is suggested to give each session a name.\nHere we start a session called ",(0,o.kt)("strong",{parentName:"p"},"inter-1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux new -s inter-1\n")),(0,o.kt)("p",null,"followed by an interactive run.\nAfter closing or ",(0,o.kt)("strong",{parentName:"p"},"detaching")," you can connect to the named session again like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux attach-session -t inter-1                                                               \n")),(0,o.kt)("p",null,"When you are done with the work (and ended the srun), you can end a named session like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux kill-session -t inter-1                           \n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you are finished with running your job interactively\n(whether using ",(0,o.kt)("strong",{parentName:"p"},"tmux")," or not) on a compute node it is important to end the interactive session:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[<uname>@compute-xx]$ exit\n")),(0,o.kt)("p",{parentName:"div"},"If you are unsure of how to connect back to the node you can\nalways list your active jobs like this:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ squeue -u $USER\nJOBID PARTITION     NAME    USER    ST  TIME  NODES NODELIST(REASON)\n11729 48cpu_192 Interact   <uname>  R   2:10      1 compute-17\n")),(0,o.kt)("p",{parentName:"div"},"and end the job using the JOBID (in this example 11729)"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ scancel 11729\n")))))}p.isMDXComponent=!0}}]);