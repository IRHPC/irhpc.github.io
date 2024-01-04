"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={slug:"TensorFlow-GPU"},i="TensorFlow",s={unversionedId:"software/TensorFlow-GPU",id:"software/TensorFlow-GPU",title:"TensorFlow",description:"Inngangur",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/software/08_TensorFlow-GPU.md",sourceDirName:"software",slug:"/software/TensorFlow-GPU",permalink:"/is/docs/software/TensorFlow-GPU",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/software/08_TensorFlow-GPU.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"TensorFlow-GPU"},sidebar:"tutorialSidebar",previous:{title:"AlphaFold",permalink:"/is/docs/software/AlphaFold"},next:{title:"Metaerg",permalink:"/is/docs/software/Metaerg"}},l={},u=[{value:"Inngangur",id:"inngangur",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"D\xe6mi um lotu skr\xe1",id:"d\xe6mi-um-lotu-skr\xe1",level:3},{value:"Gagnvirk keyrsla",id:"gagnvirk-keyrsla",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tensorflow"},"TensorFlow"),(0,a.kt)("h2",{id:"inngangur"},"Inngangur"),(0,a.kt)("p",null,"TensorFlow me\xf0 skj\xe1kortsstu\xf0ning (TF2-gpu) er \xed bo\xf0i til notkunar \xe1 ",(0,a.kt)("strong",{parentName:"p"},"Elju"),". Lestu meira um TensorFlow \xe1 ",(0,a.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/"},"h\xe9r"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"TF2-gpu er pakka\xf0 \xed conda umhverfi. Til a\xf0 nota conda umhverfi\xf0 vinsamlegast fylgdu ",(0,a.kt)("strong",{parentName:"p"},"uppsetningar")," lei\xf0beiningunum sem gefnar eru ",(0,a.kt)("a",{parentName:"p",href:"/is/docs/software/rcondapython"},"h\xe9r"),". \xdeegar uppsetningu conda er loki\xf0 getur\xf0u hla\xf0i\xf0 inn \xed TF2-gpu umhverfi\xf0 eins og h\xe9r:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ module use /hpcapps/libbio-gpu/modules/all/\n[..]$ ml load tf2-gpu\n[..]$ conda activate /hpcapps/conda_env/TF2-gpu/2.4.1\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"d\xe6mi-um-lotu-skr\xe1"},"D\xe6mi um lotu skr\xe1"),(0,a.kt)("p",null,"\xdea\xf0 er nau\xf0synlegt a\xf0 keyra TF2-gpu \xe1 GPU hn\xfatunum. D\xe6mi um SBATCH pr\xf3funar skr\xf3 er veitt\nh\xe9r a\xf0 ne\xf0an. Til a\xf0 keyra pr\xf3fi\xf0 \xfearftu fyrst a\xf0 kl\xf3na \xfeessa ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PrincetonUniversity/slurm_mnist"},"geymslu"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ cd $HOME\n[..]$ git clone https://github.com/PrincetonUniversity/slurm_mnist.git\n[..]$ cd slurm_mnist\n")),(0,a.kt)("p",null,"Afrita\xf0u eftirfarandi SBATCH skriftu inn \xed ",(0,a.kt)("strong",{parentName:"p"},"slurm_mnist")," m\xf6ppuna"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ cat submit.slurm\n#!/bin/bash\n#SBATCH --mail-type=ALL\n#SBATCH --mail-user=<MAIL>         # for example uname@hi.is\n#SBATCH --nodes=1                  # number of nodes\n#SBATCH --partition=gpu-1xA100\n#SBATCH --time=1-00:00:00          # run for 1 day maximum\n#SBATCH --output=slurm_job_output.log\n#SBATCH --error=slurm_job_errors.log   # Logs if job crashes\n\nmodule use /hpcapps/libbio-gpu/modules/all\nmodule load tf2-gpu\nconda activate /hpcapps/conda_env/TF2-gpu/2.4.1\n\nscratchlocation=/scratch/users\n\n# Create a user scratch directory on the compute node\nif [ ! -d $scratchlocation/$USER ]; then\n    mkdir -p $scratchlocation/$USER\nfi\n\n# Create a temporary directory\ntdir=$(mktemp -d $scratchlocation/$USER/$SLURM_JOB_ID-XXXX)\n\n# Go to the temporary directory\ncd $tdir\n\n# Exit if tdir does not exist\nif [ ! -d $tdir ]; then\n    echo "Temporary scratch directory does not exist ..."\n    echo "Something is wrong, contact support."\n    exit\nfi\n\n# Copy the necessary run file\ncp $SLURM_SUBMIT_DIR/mnist_classify.py $tdir/\n\n# If the program needs more input files you can add a separate line for each file.\n\n# If your job requires a directory of input/data files\n# cp -r $SLURM_SUBMIT_DIR/myinputdir $tdir/\n\n# Now the run the job from the temporary directory e.g.\npython mnist_classify.py\n\n# Copy the output (if any) to your submit directory.\ncp $tdir/* $SLURM_SUBMIT_DIR/\n\n# If the program produces many output files you can add a separate line for each file.\n# Please try to only copy the files that you need.\n\n# IMPORTANT. Delete the temporary directory and all of its content\nrm -rf $tdir\n')),(0,a.kt)("p",null,"N\xfa getur \xfe\xfa sent lotuna af staf."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ sbatch submit.slurm\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gagnvirk-keyrsla"},"Gagnvirk keyrsla"),(0,a.kt)("p",null,"\xcd \xfeessu pr\xf3funartilviki, vertu viss um a\xf0 \xfe\xfa hafir kl\xf3na\xf0 \xfeessa ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PrincetonUniversity/slurm_mnist"},"geymslu")," (sj\xe1 kaflann h\xe9r a\xf0 ofan)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ srun --job-name "TF2-gpu" --partition gpu-1xA100 --time 1-00:00:00 --pty bash\n')),(0,a.kt)("p",null,"Hla\xf0i\xf0 inn \xed einingarnar og virkja\xf0u TF2-gpu umhverfi\xf0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ module use /hpcapps/libbio-gpu/modules/all/\n[..]$ ml load tf2-gpu\n[..]$ conda activate /hpcapps/conda_env/TF2-gpu/2.4.1\n")),(0,a.kt)("p",null,"Far\xf0u inn \xed ",(0,a.kt)("strong",{parentName:"p"},"slurm_mnist")," m\xf6ppuna"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ cd $HOME/slurm_mnist\n")),(0,a.kt)("p",null,"Keyr\xf0u prufu skriftuna"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ python mnist_classify.py\n")))}m.isMDXComponent=!0}}]);