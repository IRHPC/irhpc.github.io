"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[1711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"etiquette"},s="Etiquette",i={unversionedId:"common/etiquette",id:"common/etiquette",title:"Etiquette",description:"Congratulations on getting an account on one of the IRHPC clusters. The documentation here is applicable to all of the machines. Please read this page carefully, and if you are in any doubt on how to perform your tasks on the cluster do not hesitate to contact support.",source:"@site/docs/common/02_etiquette.md",sourceDirName:"common",slug:"/common/etiquette",permalink:"/docs/common/etiquette",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/common/02_etiquette.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"etiquette"},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/docs/common/terminology"},next:{title:"Bash",permalink:"/docs/elja/bash"}},l={},c=[{value:"Login Node",id:"login-node",level:2},{value:"Resource Management",id:"resource-management",level:2},{value:"Scratch Disk",id:"scratch-disk",level:2},{value:"Data Management and Transfers on The NFS disk",id:"data-management-and-transfers-on-the-nfs-disk",level:2},{value:"rsync",id:"rsync",level:3},{value:"scp",id:"scp",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"etiquette"},"Etiquette"),(0,a.kt)("p",null,"Congratulations on getting an account on one of the IRHPC clusters. The documentation here is applicable to all of the machines. Please read this page carefully, and if you are in any doubt on how to perform your tasks on the cluster do not hesitate to contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@hi.is"},"support"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Never give your login password or SSH key to anyone else")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Never connect to Elja through an unsecure public network (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/connecting/connectingssh"},"here"),")"))),(0,a.kt)("h2",{id:"login-node"},"Login Node"),(0,a.kt)("p",null,"The login node is a shared resource. This is where all of the users perform tasks to prepare and submit their jobs. "),(0,a.kt)("p",null,"That is why it should only be used for the following simple tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Submit jobs"),(0,a.kt)("li",{parentName:"ul"},"Edit scripts and files"),(0,a.kt)("li",{parentName:"ul"},"Prepare / delete data (scp, cp, mv, rm etc.)"),(0,a.kt)("li",{parentName:"ul"},"Run effortless scripts (no computations)"),(0,a.kt)("li",{parentName:"ul"},"Compile small software packages (e.g. an in-house code)")),(0,a.kt)("p",null,"System administrators will kill processes which are resource intensive."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Repeated offense will result in the suspension of your user account"))),(0,a.kt)("h2",{id:"resource-management"},"Resource Management"),(0,a.kt)("p",null,"Your home directory which is associated with your username - ",(0,a.kt)("strong",{parentName:"p"},"<uname",">")," - is hosted on the ",(0,a.kt)("strong",{parentName:"p"},"nfs-irhpc")," NFS server "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/users/home/<uname",">")),(0,a.kt)("p",null,"The disk space on the NFS server is a shared resource. It is not intended for the storage of large data. It is advisable to delete or periodically transfer files or data not being used for jobs from your home directory to another drive outside of the NFS server for storage, such as your personal computer. See here for more details and instructions."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"IF you require disk space to store large amounts of data (more than ",(0,a.kt)("strong",{parentName:"p"},"1 Tb"),") for later jobs, or if your jobs generate a large amount of data that require further processing please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@hi.is"},"support"),". Other solutions can be provided.")),(0,a.kt)("h2",{id:"scratch-disk"},"Scratch Disk"),(0,a.kt)("p",null,"Each compute node has a dedicated ",(0,a.kt)("strong",{parentName:"p"},"/scratch/")," disk (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/hardware/hardwarespec"},"here")," for hardware specs). It is a local disk which is intended for the ",(0,a.kt)("strong",{parentName:"p"},"temporary")," storage of data to be processed, and writing of output. This disk facilitates fast ",(0,a.kt)("strong",{parentName:"p"},"I/O")," (input/output) when running jobs. Users have read/write privilages here"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/scratch/users/")),(0,a.kt)("p",null,"See here for instructions on how to make use of the ",(0,a.kt)("strong",{parentName:"p"},"/scratch/")," disks."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"IMPORTANT:")," It is important to make efficient use of Elja and to not slow down the network traffic on the cluster. Hence, it is advisable to copy the data and input for your job over to the local scratch on the node (",(0,a.kt)("strong",{parentName:"p"},"/scratch/users/<uname",">"),") and launch the program from the scratch directory. If this step is omitted then the program will run remotely on the compute node but will constanly read/write from the directory on the ",(0,a.kt)("strong",{parentName:"p"},"NFS")," server. This creates a lot of network traffic that slows down the use of Elja for everybody. It will also slow down the job itself.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"It is important to make sure you clean up after your job on the /scratch/ disk. IF your job crashes and leaves behind data which you think can be salvaged contact ",(0,a.kt)("a",{parentName:"strong",href:"mailto:help@hi.is"},"support")," as soon as possible. System administrators will delete data on the /scratch/ disks not associated with a running job, without notice."))),(0,a.kt)("h2",{id:"data-management-and-transfers-on-the-nfs-disk"},"Data Management and Transfers on The NFS disk"),(0,a.kt)("p",null,"Like mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"#scratch-disk"},"Scratch Disk section")," when causing network traffic to the NFS disk it will slow down processes on Elja, resulting in a sluggish behavior for all other Elja users working in their home directory. If you need to transfer data to or from the NFS disk then it is required to set the bandwidth to a ",(0,a.kt)("strong",{parentName:"p"},"maximum 40000 Kbit/s (5 Megabytes)"),". If the user does not set the bandwidth in that range then the system administrators will shut down the process and notify the individual."),(0,a.kt)("p",null,"Below are different methods on how to apply bandwidth restriction to ",(0,a.kt)("a",{parentName:"p",href:"#rsync"},"rsync")," and ",(0,a.kt)("a",{parentName:"p",href:"#scp"},"scp")),(0,a.kt)("h3",{id:"rsync"},"rsync"),(0,a.kt)("p",null,"To restrict the bandwidth when using  ",(0,a.kt)("inlineCode",{parentName:"p"},"rsync")," you will have to add the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"--bwlimit=40000")," like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ rsync -av --bwlimit=40000-e "ssh -i /path/to/your/ssh/keyfile" <uname>@elja.hi.is:/users/home/<uname>/../data /path/on/local/computer/ # -av Archive mode with verbose input\n')),(0,a.kt)("p",null,'This command shows an example for a user who is transferring data that is located in the users home directory on Elja to the location "path/on/local/computer" on the local computer. '),(0,a.kt)("h3",{id:"scp"},"scp"),(0,a.kt)("p",null,"To restrict the bandwidth when using ",(0,a.kt)("inlineCode",{parentName:"p"},"scp")," you will need to add the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"-l 40000"),". An example of such a case is displayed here below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ scp -l 40000 -p -r <uname>@elja.hi.is:/hpcapps/users/home/<uname>/ .\n")),(0,a.kt)("p",null,"Here we are transferring data located in a users home directory on Elja to the location on the local machine that the user is currently working in."))}h.isMDXComponent=!0}}]);