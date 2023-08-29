"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[8823],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),p=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s=function(e){var a=p(e.components);return t.createElement(u.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||l;return n?t.createElement(m,o(o({ref:a},s),{},{components:n})):t.createElement(m,o({ref:a},s))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1419:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const l={slug:"AlphaFold"},o="AlphaFold",i={unversionedId:"software/AlphaFold",id:"software/AlphaFold",title:"AlphaFold",description:"\xcd \xfeessum hluta ver\xf0ur fari\xf0 \xed gegnum hvernig \xe1 a\xf0 nota AlphaFold \xe1 Elju",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/software/07_AlphaFold.md",sourceDirName:"software",slug:"/software/AlphaFold",permalink:"/is/docs/software/AlphaFold",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/software/07_AlphaFold.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"AlphaFold"},sidebar:"tutorialSidebar",previous:{title:"Jupyterlab \xe1 Elja",permalink:"/is/docs/software/jupyterlab"},next:{title:"TensorFlow",permalink:"/is/docs/software/TensorFlow-GPU"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"A\xf0 byrja",id:"a\xf0-byrja",level:2},{value:"Setting up the Conda environment",id:"setting-up-the-conda-environment",level:3},{value:"Hla\xf0a inn AlphaFold",id:"hla\xf0a-inn-alphafold",level:2},{value:"Keyr\xf0u AlphaFold \xe1 Elju",id:"keyr\xf0u-alphafold-\xe1-elju",level:2},{value:"A\xf0 hefja gagnvirka lotu",id:"a\xf0-hefja-gagnvirka-lotu",level:3},{value:"Keyra AlphaFold sem lotuvinnu",id:"keyra-alphafold-sem-lotuvinnu",level:3}],s={toc:p},d="wrapper";function c(e){let{components:a,...n}=e;return(0,r.kt)(d,(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alphafold"},"AlphaFold"),(0,r.kt)("p",null,"\xcd \xfeessum hluta ver\xf0ur fari\xf0 \xed gegnum hvernig \xe1 a\xf0 nota AlphaFold \xe1 ",(0,r.kt)("strong",{parentName:"p"},"Elju")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"\xcd stuttu m\xe1li er AlphaFold byltingarkennd gervigreindarkerfi sem gerir ranns\xf3knir hra\xf0ari \xe1 svi\xf0i l\xedfuppl\xfdsingafr\xe6\xf0i. Til a\xf0 nota AlphaFold tekur kerfi\xf0 fyrst inn r\xf6\xf0 af am\xedn\xf3s\xfdru og mun s\xed\xf0an sp\xe1 fyrir um \xfer\xedv\xedddarbyggingu pr\xf3teins og gerir \xfea\xf0 \xe1 afar skilvirkan h\xe1tt."),(0,r.kt)("p",null,"Lestu meira um AlphaFold ",(0,r.kt)("a",{parentName:"p",href:"https://www.deepmind.com/research/highlighted-research/alphafold"},"h\xe9r"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"a\xf0-byrja"},"A\xf0 byrja"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Vegna ",(0,r.kt)("em",{parentName:"p"},"Nvidia")," samh\xe6fnisvandam\xe1la krefst ",(0,r.kt)("strong",{parentName:"p"},"Elja")," \xfeess n\xfa a\xf0 \xfe\xfa keyrir AlphaFold \xed ",(0,r.kt)("a",{parentName:"p",href:"/is/docs/software/rcondapython"},"Conda")," umhverfi.")),(0,r.kt)("h3",{id:"setting-up-the-conda-environment"},"Setting up the Conda environment"),(0,r.kt)("p",null,"Vi\xf0 byrjum \xe1 \xfev\xed a\xf0 frumstilla conda umhverfi\xf0, \xfeetta eru s\xf6mu skrefin og sj\xe1st \xed ",(0,r.kt)("a",{parentName:"p",href:"/is/docs/software/rcondapython"},"Conda"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ module use /hpcapps/lib-mimir/modules/all \n$ module load Anaconda3/2022.05\n$ conda config --add channels defaults\n$ conda config --add channels bioconda\n$ conda config --add channels conda-forge\n$ conda config --set auto_activate_base false\n$ conda init\n$ bash # You can also log out and in again.\n")),(0,r.kt)("h2",{id:"hla\xf0a-inn-alphafold"},"Hla\xf0a inn AlphaFold"),(0,r.kt)("p",null,"\xdeegar conda hefur veri\xf0 frumstillt og tilb\xfai\xf0 til notkunar getum vi\xf0 hla\xf0i\xf0 AlphaFold einingu."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ml use /hpcapps/libbio-gpu/modules/all\n$ ml load AlphaFold/2.3.1\n")),(0,r.kt)("h2",{id:"keyr\xf0u-alphafold-\xe1-elju"},"Keyr\xf0u AlphaFold \xe1 Elju"),(0,r.kt)("p",null,"Til a\xf0 keyra AlphaFold \xe1 Elju getur\xf0u anna\xf0 hvort keyrt ",(0,r.kt)("a",{parentName:"p",href:"../elja/interactive_session"},"gagnvirka lotu")," e\xf0a keyrt ",(0,r.kt)("a",{parentName:"p",href:"../elja/submit_jobs"},"lotuvinnu"),"."),(0,r.kt)("h3",{id:"a\xf0-hefja-gagnvirka-lotu"},"A\xf0 hefja gagnvirka lotu"),(0,r.kt)("p",null,'\xde\xfa getur hafi\xf0 gagnvirka lotu me\xf0 "srun" skipuninni \xe1 ',(0,r.kt)("strong",{parentName:"p"},"GPU")," hn\xfat. \xde\xfa getur nota\xf0 ",(0,r.kt)("inlineCode",{parentName:"p"},"screen")," skipunina e\xf0a ",(0,r.kt)("inlineCode",{parentName:"p"},"tmux")," til a\xf0 b\xfaa til aukast\xf6\xf0 \xfear sem gagnvirka lotan \xfe\xedn er \xed gangi \xed bakgrunni."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ srun --job-name "AlphaFold" --partition gpu-1xA100 --time 01:00:00 --pty bash\n$ conda activate $env_path\n$ run_alphafold.sh -d /AlphaFoldData/AlphaFold/data -o /hpcapps/source/alphafold_non_docker/dummy_test/ -f /hpcapps/source/alphafold_non_docker/example/query.fasta -t 2020-05-14 \n')),(0,r.kt)("h3",{id:"keyra-alphafold-sem-lotuvinnu"},"Keyra AlphaFold sem lotuvinnu"),(0,r.kt)("p",null,"B\xfa\xf0u til ",(0,r.kt)("inlineCode",{parentName:"p"},"submit.slurm")," skr\xe1 sem l\xedtur svona \xfat:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," cat submit.slurm\n#!/bin/bash\n#SBATCH --mail-type=ALL\n#SBATCH --mail-user=<MAIL>         # for example uname@hi.is\n#SBATCH --nodes=1                  # number of nodes\n#SBATCH --partition=gpu-1xA100\n#SBATCH --time=1-00:00:00          # run for 1 day maximum\n#SBATCH --output=slurm_job_output.log\n#SBATCH --error=slurm_job_errors.log   # Logs if job crashes\n\nmodule use /hpcapps/libbio-gpu/modules/all\nmodule load AlphaFold/2.3.1\nconda activate $env_path\n\n# Run the command\n\nrun_alphafold.sh -d /AlphaFoldData/AlphaFold/data -o /hpcapps/source/alphafold_non_docker/dummy_test/ -f /hpcapps/source/alphafold_non_docker/example/query.fasta -t 2020-05-14 \n")),(0,r.kt)("p",null,"Til \xfeess a\xf0 hefja keyrslu sl\xe1\xf0u inn eftirfarandi:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sbatch submit.slurm\n")))}c.isMDXComponent=!0}}]);