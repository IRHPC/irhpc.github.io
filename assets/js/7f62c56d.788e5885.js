"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[6345],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={slug:"submit_jobs"},i="Submitting Batch Jobs",s={unversionedId:"elja/submit",id:"elja/submit",title:"Submitting Batch Jobs",description:"SLURM",source:"@site/docs/elja/02_submit.md",sourceDirName:"elja",slug:"/elja/submit_jobs",permalink:"/docs/elja/submit_jobs",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/02_submit.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"submit_jobs"},sidebar:"tutorialSidebar",previous:{title:"Bash",permalink:"/docs/elja/bash"},next:{title:"Scratch Disks",permalink:"/docs/elja/scratch_disk"}},l={},u=[{value:"SLURM",id:"slurm",level:2},{value:"Fairshare",id:"fairshare",level:2},{value:"Batch jobs",id:"batch-jobs",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"submitting-batch-jobs"},"Submitting Batch Jobs"),(0,n.kt)("h2",{id:"slurm"},"SLURM"),(0,n.kt)("p",null,"Elja uses ",(0,n.kt)("inlineCode",{parentName:"p"},"SLURM")," as the batch scheduler and resource manager.\nBasic common commands are summarized below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Command"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"sbatch")),(0,n.kt)("td",{parentName:"tr",align:null},"submit a batch job script")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"srun")),(0,n.kt)("td",{parentName:"tr",align:null},"run a parallel job")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"squeue")," (-a, -u $USER)"),(0,n.kt)("td",{parentName:"tr",align:null},"show queue status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"sinfo")),(0,n.kt)("td",{parentName:"tr",align:null},"view info about nodes and partitions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"scancel")," ",(0,n.kt)("strong",{parentName:"td"},"JOBID")),(0,n.kt)("td",{parentName:"tr",align:null},"cancel a job")))),(0,n.kt)("h2",{id:"fairshare"},"Fairshare"),(0,n.kt)("p",null,"The Cluster provides the Slurm Fairshare Algortihm. It organizes which job in the slurm queue should run next, based of a fairshare factor between jobs, by using a floating point value between 0.0 and 1 that is calculated by an equation. "),(0,n.kt)("p",null,"This equation takes in account many factors like the number of nodes requested,  More details about this equation can be found ",(0,n.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/fair_tree.html#fairshare"},"here")," and ",(0,n.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/SLUG19/Priority_and_Fair_Trees.pdf"},"here"),". "),(0,n.kt)("h2",{id:"batch-jobs"},"Batch jobs"),(0,n.kt)("p",null,"The command ",(0,n.kt)("inlineCode",{parentName:"p"},"sbatch")," is used to submit jobs to the ",(0,n.kt)("inlineCode",{parentName:"p"},"SLURM")," queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ sbatch submit_script\n")),(0,n.kt)("p",null,"A batch submit script usually starts like this"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n#SBATCH --mail-type=ALL\n#SBATCH --mail-user=<Your E-mail> # for example uname@hi.is\n#SBATCH --partition=48cpu_192mem  # request node from a specific partition\n#SBATCH --nodes=2                 # number of nodes\n#SBATCH --ntasks-per-node=48      # 48 cores per node (96 in total)\n#SBATCH --mem-per-cpu=3900        # MB RAM per cpu core\n#SBATCH --time=0-04:00:00         # run for 4 hours maximum (DD-HH:MM:SS)\n#SBATCH --hint=nomultithread      # Suppress multithread\n#SBATCH --output=slurm_job_output.log   \n#SBATCH --error=slurm_job_errors.log   # Logs if job crashes\n\n. ~/.program_env_bash\n\nmpirun python job.py\n")),(0,n.kt)("p",null,"Here two nodes from the ",(0,n.kt)("inlineCode",{parentName:"p"},"48mem_192mem")," partition is requested, using 48 processors per node for a total of 96 processors. The memory per cpu-core is set to 3900MB RAM. See the ",(0,n.kt)("a",{parentName:"p",href:"/docs/hardware/parthardw"},"Partitions & Hardware")," for details on the available partitions."),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"SLURM")," scheduler has allocated the resources the subsequent lines are executed in order. First a program environment bash is loaded (see ",(0,n.kt)("a",{parentName:"p",href:"/docs/compiling/easybuild"},"Program Environment"),"), and an ",(0,n.kt)("inlineCode",{parentName:"p"},"mpirun")," instance of a Python script is executed."),(0,n.kt)("p",null,"Hyper-threading of the intel based CPUs is on by default, hence it is\nis highly recommended to suppress it in your submit (or .bashrc) script\n(unless your software supports and is correctly compiled with openmp)."),(0,n.kt)("p",null,"For .basrhc"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export OMP_NUM_THREADS=1\nexport MKL_NUM_THREADS=1\n")),(0,n.kt)("p",null,"After submitting a job you can view the current status and jobids' like this"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ squeue -u $USER\nJOBID PARTITION     NAME    USER    ST  TIME  NODES NODELIST(REASON)\n11729 48cpu_192 Interact   <uname>  R   2:10      1 compute-17\n")),(0,n.kt)("p",null,"You can cancel a job using the JOBID number. In this example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ scancel 11729\n")),(0,n.kt)("p",null,"IF your job requires a lot of input data, or if it generates a lot of output it is advisable to make use of the ",(0,n.kt)("strong",{parentName:"p"},"/scratch/")," disk available on the compute nodes. See the next ",(0,n.kt)("a",{parentName:"p",href:"scratch_disk"},"section"),"."))}m.isMDXComponent=!0}}]);