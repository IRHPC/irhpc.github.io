"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[3172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={slug:"TensorFlow-GPU"},i="TensorFlow",s={unversionedId:"compiling/TensorFlow-GPU",id:"compiling/TensorFlow-GPU",title:"TensorFlow",description:"Introduction",source:"@site/docs/compiling/06_TensorFlow-GPU.md",sourceDirName:"compiling",slug:"/compiling/TensorFlow-GPU",permalink:"/is/docs/compiling/TensorFlow-GPU",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/compiling/06_TensorFlow-GPU.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"TensorFlow-GPU"},sidebar:"tutorialSidebar",previous:{title:"Jupyterlab on Elja",permalink:"/is/docs/compiling/jupyterlab"},next:{title:"Nix",permalink:"/is/docs/compiling/nix_start"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Example submit script",id:"example-submit-script",level:3},{value:"Interactive run",id:"interactive-run",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tensorflow"},"TensorFlow"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"TensorFlow with GPU support (TF2-gpu) is available for use on Elja. Read more about TensorFlow on the official ",(0,o.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/"},"website"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"TF2-gpu is packaged in a conda environment. In order to use the conda environment please follow the ",(0,o.kt)("strong",{parentName:"p"},"One time setup")," instructions provided ",(0,o.kt)("a",{parentName:"p",href:"/is/docs/compiling/rcondapython"},"here"),". Once your conda setup is complete you can load in the TF2-gpu environment like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ module use /hpcapps/libbio-gpu/modules/all/\n[..]$ ml load tf2-gpu\n[..]$ conda activate /hpcapps/conda_env/Tensorflow-GPU/2.4.1\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"example-submit-script"},"Example submit script"),(0,o.kt)("p",null,"It is require to run TF2-gpu on the GPU nodes. A sample SBATCH test script is provided\nbelow. In order to run the test you first need to clone this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PrincetonUniversity/slurm_mnist"},"repository"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ cd $HOME\n[..]$ git clone https://github.com/PrincetonUniversity/slurm_mnist.git\n[..]$ cd slurm_mnist\n")),(0,o.kt)("p",null,"Copy the flollowing SBATCH script into the ",(0,o.kt)("strong",{parentName:"p"},"slurm_mnist")," directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ cat submit.slurm\n#!/bin/bash\n#SBATCH --mail-type=ALL\n#SBATCH --mail-user=<MAIL>         # for example uname@hi.is\n#SBATCH --nodes=1                  # number of nodes\n#SBATCH --partition=gpu-1xA100\n#SBATCH --time=1-00:00:00          # run for 1 day maximum\n#SBATCH --output=slurm_job_output.log\n#SBATCH --error=slurm_job_errors.log   # Logs if job crashes\n\nmodule use /hpcapps/libbio-gpu/modules/all\nmodule load tf2-gpu\nconda activate /hpcapps/conda_env/Tensorflow-GPU/2.4.1\n\nscratchlocation=/scratch/users\n\n# Create a user scratch directory on the compute node\nif [ ! -d $scratchlocation/$USER ]; then\n    mkdir -p $scratchlocation/$USER\nfi\n\n# Create a temporary directory\ntdir=$(mktemp -d $scratchlocation/$USER/$SLURM_JOB_ID-XXXX)\n\n# Go to the temporary directory\ncd $tdir\n\n# Exit if tdir does not exist\nif [ ! -d $tdir ]; then\n    echo "Temporary scratch directory does not exist ..."\n    echo "Something is wrong, contact support."\n    exit\nfi\n\n# Copy the necessary run file\ncp $SLURM_SUBMIT_DIR/mnist_classify.py $tdir/\n\n# If the program needs more input files you can add a separate line for each file.\n\n# If your job requires a directory of input/data files\n# cp -r $SLURM_SUBMIT_DIR/myinputdir $tdir/\n\n# Now the run the job from the temporary directory e.g.\npython mnist_classify.py\n\n# Copy the output (if any) to your submit directory.\ncp $tdir/* $SLURM_SUBMIT_DIR/\n\n# If the program produces many output files you can add a separate line for each file.\n# Please try to only copy the files that you need.\n\n# IMPORTANT. Delete the temporary directory and all of its content\nrm -rf $tdir\n')),(0,o.kt)("p",null,"Now submit the job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ sbatch submit.slurm\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"interactive-run"},"Interactive run"),(0,o.kt)("p",null,"For this test case make sure you have cloned this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PrincetonUniversity/slurm_mnist"},"repository")," (see the section above)."),(0,o.kt)("p",null,"Start an interactive session on a GPU node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ srun --job-name "TF2-gpu" --partition gpu-1xA100 --time 1-00:00:00 --pty bash\n')),(0,o.kt)("p",null,"Load in the modules and activate the TF2-gpu environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ module use /hpcapps/libbio-gpu/modules/all/\n[..]$ ml load tf2-gpu\n[..]$ conda activate /hpcapps/conda_env/Tensorflow-GPU/2.4.1\n")),(0,o.kt)("p",null,"Navigate into the ",(0,o.kt)("strong",{parentName:"p"},"slurm_mnist")," directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ cd $HOME/slurm_mnist\n")),(0,o.kt)("p",null,"Run the test script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ python mnist_classify.py\n")))}m.isMDXComponent=!0}}]);