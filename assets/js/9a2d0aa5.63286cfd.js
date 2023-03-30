"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[9597],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>u});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||o;return a?t.createElement(u,r(r({ref:n},c),{},{components:a})):t.createElement(u,r({ref:n},c))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},205:(e,n,a)=>{a.r(n),a.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=a(7462),i=(a(7294),a(3905));const o={slug:"rcondapython"},r={unversionedId:"compiling/rcondapython",id:"compiling/rcondapython",isDocsHomePage:!1,title:"Conda, Python & R",description:"It is important to run all package compilations on the log-in node before deploying these environments on the compute nodes.",source:"@site/docs/compiling/02_rcondapython.md",sourceDirName:"compiling",slug:"/compiling/rcondapython",permalink:"/docs/compiling/rcondapython",editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/compiling/02_rcondapython.md",version:"current",sidebarPosition:2,frontMatter:{slug:"rcondapython"},sidebar:"tutorialSidebar",previous:{title:"Available Software Environments",permalink:"/docs/compiling/easybuild"},next:{title:"Programming and Development Environments",permalink:"/docs/compiling/environment"}},l=[{value:"Conda",id:"conda",children:[{value:"One time setup",id:"one-time-setup",children:[]},{value:"Switching to a new Conda Version",id:"switching-to-a-new-conda-version",children:[]}]},{value:"Python",id:"python",children:[]},{value:"R",id:"r",children:[]}],s={toc:l};function p(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is important to run all package compilations on the ",(0,i.kt)("strong",{parentName:"p"},"log-in node")," before deploying these environments on the ",(0,i.kt)("strong",{parentName:"p"},"compute nodes"),"."))),(0,i.kt)("h2",{id:"conda"},"Conda"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ module load Anaconda3/2022.05\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"An older version of Anaconda3 (2021.11) is still available. It is recommended to switch to the newer version as soon as possible. It will be removed in May 2023."))),(0,i.kt)("h3",{id:"one-time-setup"},"One time setup"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ conda config --add channels defaults\n[..]$ conda config --add channels bioconda\n[..]$ conda config --add channels conda-forge\n[..]$ conda init\n")),(0,i.kt)("p",null,"Log out and log in to Elja again. Your conda is now ready."),(0,i.kt)("p",null,"Create environments (and install packages):"),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ conda create -y -p /hpcdata/Mimir/<uname>/env_mimir bowtie2\n")),(0,i.kt)("p",null,"This will create an environment called \u201cenv","_","mimir\u201d and install\nbowtie2 (and some dependencies).\nAll binaries go into ",(0,i.kt)("strong",{parentName:"p"},"/hpcdata/Mimir/<uname",">","/env","_","mimir")),(0,i.kt)("p",null,"When installation is complete activate your environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ conda activate /hpcdata/Mimir/<uname>/env_mimir\n")),(0,i.kt)("p",null,"This environment contains bowtie2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"(../<uname>/env_mimir) [..]$ bowtie2 --version\n/hpcdata/Mimir/<uname>/env_mimir/bin/bowtie2-align-s version 2.4.5\n")),(0,i.kt)("p",null,"You can install additional packages into this environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"(../<uname>/env_mimir) [..]$ conda install -c bioconda macs2\n")),(0,i.kt)("p",null,"After the installation the environment contains macs2 in addition to bowtie2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"(../<uname>/env_mimir) [..]$ macs2 --version\nmacs2 2.2.7.1\n")),(0,i.kt)("p",null,"To leave the environment type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"(../<uname>/env_mimir) [..]$ conda deactivate\n")),(0,i.kt)("p",null,"You can always start a new environment and install different packages into it, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ conda create -y -p /hpcdata/Mimir/<uname>/env_mimir2\n[..]$ conda activate /hpcdata/Mimir/<uname>/env_mimir2\n(../<uname>/env_mimir2) [..]$ conda install -c bioconda trim-galore\n(../<uname>/env_mimir2) [..]$ trim_galore --version\n\n                        Quality-/Adapter-/RRBS-/Speciality-Trimming\n                                [powered by Cutadapt]\n                                  version 0.6.7\n\n                               Last update: 11 05 2020\n")),(0,i.kt)("p",null,"This allows you to have separate environments for different tasks. "),(0,i.kt)("p",null,"If you are not using a particular environment anymore please remove it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ conda env remove --name env_name\n")),(0,i.kt)("p",null,"This removes the installed binaries, and saves up space for other users."),(0,i.kt)("h3",{id:"switching-to-a-new-conda-version"},"Switching to a new Conda Version"),(0,i.kt)("p",null,"The conda initialization writes a small snippet of code into your ",(0,i.kt)("strong",{parentName:"p"},".basrhc")," which looks like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# >>> conda initialize >>>\n# !! Contents within this block are managed by \'conda init\' !!\n__conda_setup="$(\'/hpcapps/lib-mimir/software/Anaconda3/2021.11/bin/conda\' \'shell.bash\' \'hook\' 2> /dev/null)"\nif [ $? -eq 0 ]; then\n    eval "$__conda_setup"\nelse\n    if [ -f "/hpcapps/lib-mimir/software/Anaconda3/2021.11/etc/profile.d/conda.sh" ]; then\n        . "/hpcapps/lib-mimir/software/Anaconda3/2021.11/etc/profile.d/conda.sh"\n    else\n        export PATH="/hpcapps/lib-mimir/software/Anaconda3/2021.11/bin:$PATH"\n    fi\nfi\nunset __conda_setup\n# <<< conda initialize <<<\n')),(0,i.kt)("p",null,"To switch to the new version ",(0,i.kt)("strong",{parentName:"p"},"Anaconda3/2022.05")," simply change these lines in your ",(0,i.kt)("strong",{parentName:"p"},".basrhc")," to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'else\n    if [ -f "/hpcapps/lib-mimir/software/Anaconda3/2022.05/etc/profile.d/conda.sh" ]; then\n        . "/hpcapps/lib-mimir/software/Anaconda3/2022.05/etc/profile.d/conda.sh"\n    else\n        export PATH="/hpcapps/lib-mimir/software/Anaconda3/2022.05/bin:$PATH"\n    fi\nfi\n')),(0,i.kt)("p",null,"Now ",(0,i.kt)("strong",{parentName:"p"},"log out")," and ",(0,i.kt)("strong",{parentName:"p"},"log in")," again to implement the changes."),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,"A specialized version of Python - Biopython - is available for use on Elja.\nThe base version of Python is 3.9.6. It includes pip 21.2.2."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ module load Biopython\n[..]$ python --version\nPython 3.9.6\n[..]$ $ pip --version\npip 21.2.2\n")),(0,i.kt)("p",null,"In order to install your own Python packages with pip the flag --user must be included to install the packages locally (in your homespace), for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ pip install --user alfpy\n")),(0,i.kt)("p",null,"The Python package alfpy is installed, and is located in ",(0,i.kt)("strong",{parentName:"p"},"/users/home/<uname",">","/.local/lib/python3.9/site-packages/"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ python\n>>> import alfpy\n>>> print(alfpy.__version__)\n1.0.6\n")),(0,i.kt)("h2",{id:"r"},"R"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Mimir users!"),"\nIt is recommended that the user creates a directory called \u201c.local/R/library\u201d in their /hpcdata/Mimir/<uname",">"," directory. "))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ mkdir -p /hpcdata/Mimir/<uname>/.local/R/library\n")),(0,i.kt)("p",null,"and uses this directory to install additional R packages via CRAN. For R packages installed with release binaries (.tar.gz files for example), another directory is created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ mkdir -p /hpcdata/Mimir/<uname>/.local/R_libs\n")),(0,i.kt)("p",null,"To make use of these directory it is further recommented to create\na small bash script (for example .bashrc","_","R) which includes these lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ cat >> ~/.bashrc_R << EOF\n# add these lines after '>' one-by-one:\n> module load R\n> if [ -n $R_LIBS ]; then\n>   export R_LIBS=/hpcdata/Mimir/$USER/.local/R/library:/hpcdata/Mimir/$USER/.local/R_libs$R_LIBS\n> else \n>   export R_LIBS=/hpcdata/Mimir/$USER/.local/R/library:/hpcdata/Mimir/$USER/.local/R_libs\n> fi\n> EOF\n")),(0,i.kt)("p",null,"Sourcing this bash script loads in the R module,\nand appends your local directory to the R-library list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ R --version\nR version 4.1.2 (2021-11-01) -- "Bird Hippie"\nCopyright (C) 2021 The R Foundation for Statistical Computing\nPlatform: x86_64-pc-linux-gnu (64-bit)\n[..]$ R\n> .libPaths()\n[1] "/hpcdata/Mimir/<uname>/.local/R/library"\n[2] "/hpcdata/Mimir/<uname>/.local/R_libs"\n[3] "/hpcapps/lib-mimir/software/R/4.1.2-foss-2021b/lib64/R/library"\n')),(0,i.kt)("p",null,"The ordering of the library paths is important, since it will first look in your local libraries when loading an R packages."),(0,i.kt)("p",null,"To install a package via CRAN to this library type, for example :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'> install.packages("vioplot", repos="http://cran.r-project.org", lib="/hpcdata/Mimir/<uname>/.local/R/library")\n')),(0,i.kt)("p",null,"To load the package type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'> library("vioplot")\n')),(0,i.kt)("p",null,"To install R packages from a source directory (release binaries), we first download the package. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ wget http://cran.r-project.org/src/contrib/Archive/ggplot2/ggplot2_2.0.0.tar.gz\n")),(0,i.kt)("p",null,"Run the command below to install the package to your \u201cR","_","libs\u201d directory.\nIf we do not specify the path, installation will fail since by default the\npackage will be installed in root directory which you do not have write priviliges to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ R CMD INSTALL --library=/hpcdata/Mimir/<uname>/.local/R_libs ggplot2_2.0.0.tar.gz\n")),(0,i.kt)("p",null,"Open the R console and load the package with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'> library("ggplot2") \n')))}p.isMDXComponent=!0}}]);