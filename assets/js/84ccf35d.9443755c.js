"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[4627],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={slug:"scratch_disk"},s="Scratch Disks",i={unversionedId:"elja/scratch",id:"elja/scratch",title:"Scratch Disks",description:"Fast I/O (input/output) is facilitated with use of the local scratch disks available on the compute nodes.",source:"@site/docs/elja/03_scratch.md",sourceDirName:"elja",slug:"/elja/scratch_disk",permalink:"/docs/elja/scratch_disk",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/03_scratch.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"scratch_disk"},sidebar:"tutorialSidebar",previous:{title:"Submitting Batch Jobs",permalink:"/docs/elja/submit_jobs"},next:{title:"Interactive Sessions",permalink:"/docs/elja/interactive_session"}},c={},p=[{value:"Using /scratch/users/ with SBATCH",id:"using-scratchusers-with-sbatch",level:2},{value:"Using /scratch/users/ on an interactive session",id:"using-scratchusers-on-an-interactive-session",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scratch-disks"},"Scratch Disks"),(0,a.kt)("p",null,"Fast ",(0,a.kt)("strong",{parentName:"p"},"I/O")," (input/output) is facilitated with use of the local scratch disks available on the compute nodes."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"IMPORTANT:")," It is important to make efficient use of Elja and to not slow down the network traffic on the cluster. Hence, it is advisable to copy the data and input for your job over to the local scratch disk on the compute nodes (",(0,a.kt)("strong",{parentName:"p"},"/scratch/users/"),") and launch the program from there. If this step is omitted then the program will run remotely on the compute nodes but will constantly read/write from/to the submit directory on the ",(0,a.kt)("strong",{parentName:"p"},"NFS")," server. This creates a lot of network traffic and slows down the use of Elja for everybody. It will also slow down the job itself.")),(0,a.kt)("h2",{id:"using-scratchusers-with-sbatch"},"Using /scratch/users/ with SBATCH"),(0,a.kt)("p",null,"The example here assumes the user is working with ",(0,a.kt)("strong",{parentName:"p"},"SBATCH")," scripts and in some work directory in the users home folder. For example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ pwd\n[..]$ /users/home/<uname>/myjob\n")),(0,a.kt)("p",null,"and your ",(0,a.kt)("strong",{parentName:"p"},"SBATCH")," submit script is in the same directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ /users/home/<uname>/myjob/submit.sh\n")),(0,a.kt)("p",null,"Example of bash lines for ",(0,a.kt)("strong",{parentName:"p"},"/scratch/users/")," are provided below. The following lines should be added to your ",(0,a.kt)("strong",{parentName:"p"},"SBATCH")," script. An example ",(0,a.kt)("strong",{parentName:"p"},"SBATCH")," script is provided at the end."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ cat submit.sh\n..\n# Location of scratch directory on the compute nodes\nscratchlocation=/scratch/users\n\n# Create a user directory if it does not exist\nif [ ! -d $scratchlocation/$USER ]; then\n    mkdir -p $scratchlocation/$USER\nfi\n\n# Create a temporary directory with a unique identifier associated with your jobid\ntdir=$(mktemp -d $scratchlocation/$USER/$SLURM_JOB_ID-XXXX)\n\n# Go to the temporary directory\ncd $tdir\n\n# Exit if tdir does not exist\nif [ ! -d $tdir ]; then\n    echo "Temporary scratch directory does not exist ..."\n    echo "Something is wrong, contact support."\n    exit\nfi\n\n# Copy the necessary input files to run your job\ncp $SLURM_SUBMIT_DIR/myinput $tdir/\n\n# If the program needs many input files you can add a separate line for each file.\n\n# If your job requires a directory of input files\n# cp -r $SLURM_SUBMIT_DIR/myinputdir $tdir/\n\n# Now the run the job from the temporary directory e.g.\nmyprogram myinput\n\n# After the job is completed make sure to copy the output to your submit directory.\ncp $tdir/myoutputfiles $SLURM_SUBMIT_DIR/\n\n# If the program produces many output files you can add a separate line for each file.\n# Please try to only copy the files that you need.\n\n# IMPORTANT. Delete the temporary directory and all of its content\nrm -rf $tdir\n\n')),(0,a.kt)("p",null,"An example ",(0,a.kt)("strong",{parentName:"p"},"SBATCH")," script for a typical Python job is provided ",(0,a.kt)("a",{target:"_blank",href:r(4235).Z},"here"),". Similar commands can be used when the user is in an ",(0,a.kt)("a",{parentName:"p",href:"interactive_session"},"interactive session"),"."),(0,a.kt)("h2",{id:"using-scratchusers-on-an-interactive-session"},"Using /scratch/users/ on an interactive session"),(0,a.kt)("p",null,"The example here assumes the user is working on an ",(0,a.kt)("strong",{parentName:"p"},"interactive session")," and in some work directory in the users home folder. For example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ pwd\n[..]$ /users/home/<uname>/myjob\n")),(0,a.kt)("p",null,"Example of bash lines for ",(0,a.kt)("strong",{parentName:"p"},"/scratch/users/")," are provided below while on an ",(0,a.kt)("strong",{parentName:"p"},"Interactive Session"),". An example on how to connect to an interactive session  can be found ",(0,a.kt)("a",{parentName:"p",href:"interactive_session"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ export scratchlocation=/scratch/users \n\n# Create a user directory if it does not exist\n$ [ ! -d "$scratchlocation/$USER" ] && mkdir "$scratchlocation/$USER"\n\n\n# Create a temporary directory with a unique identifier associated with your jobid\n$ tdir=$(mktemp -d "$scratchlocation/$USER/temp_dir.XXXXXX")\n\n\n# Go to the temporary directory\n$ cd $tdir\n\n# Copy the necessary input files to run your job\n$ cp submit_to_scratch_dir $tdir/\n\n# Run the program from your temporary directory\nmyprogram myinput\n\n# After the job is completed make sure to copy the output to your submit directory.\n$ cp $tdir/myoutputfiles submit_to_scratch_dir/\n\n# If the program produces many output files you can add a separate line for each file.\n# Please try to only copy the files that you need.\n\n\n# IMPORTANT. Delete the temporary directory and all of its content\n$ rm -rf $tdir\n')),(0,a.kt)("p",null,"An example ",(0,a.kt)("strong",{parentName:"p"},"SBATCH")," script for a typical Python job is provided ",(0,a.kt)("a",{target:"_blank",href:r(4235).Z},"here"),". Similar commands can be used when the user is in an ",(0,a.kt)("a",{parentName:"p",href:"interactive_session"},"interactive session"),"."))}d.isMDXComponent=!0},4235:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/py_submit-174aa2794e34ada476072a981dbb8c43.txt"}}]);