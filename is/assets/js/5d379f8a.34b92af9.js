"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[1910],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(a),h=l,c=u["".concat(p,".").concat(h)]||u[h]||m[h]||r;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},410:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={slug:"AlphaFold"},o="AlphaFold",i={unversionedId:"compiling/AlphaFold",id:"compiling/AlphaFold",title:"AlphaFold",description:"0. Introduction",source:"@site/docs/compiling/04_AlphaFold.md",sourceDirName:"compiling",slug:"/compiling/AlphaFold",permalink:"/is/docs/compiling/AlphaFold",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/compiling/04_AlphaFold.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"AlphaFold"},sidebar:"tutorialSidebar",previous:{title:"Programming and Development Environments",permalink:"/is/docs/compiling/environment"},next:{title:"Jupyterlab on Elja",permalink:"/is/docs/compiling/jupyterlab"}},p={},d=[{value:"0. Introduction",id:"0-introduction",level:2},{value:"1. Getting Started",id:"1-getting-started",level:2},{value:"1.1 Installation",id:"11-installation",level:3},{value:"1.2 Required Tools and libraries",id:"12-required-tools-and-libraries",level:3},{value:"2 Run AlphaFold on Elja",id:"2-run-alphafold-on-elja",level:2},{value:"2.1 Loading AlphaFold",id:"21-loading-alphafold",level:3},{value:"2.2 Running AlphaFold",id:"22-running-alphafold",level:3}],s={toc:d},u="wrapper";function m(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alphafold"},"AlphaFold"),(0,l.kt)("h2",{id:"0-introduction"},"0. Introduction"),(0,l.kt)("p",null,"In short AlphaFold is groundbreaking AI system that is making research faster in the field of bioinformatics. To use AlphaFold the system first takes in a sequence of an amino acid and will then predict three dimensional structure of a protein and does so extremely efficiently."),(0,l.kt)("p",null,"Read more on the AlphaFold official ",(0,l.kt)("a",{parentName:"p",href:"https://www.deepmind.com/research/highlighted-research/alphafold"},"website"),"."),(0,l.kt)("p",null,"This section on AlphaFold will go through how to use AlphaFold on Elja."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"1-getting-started"},"1. Getting Started"),(0,l.kt)("h3",{id:"11-installation"},"1.1 Installation"),(0,l.kt)("p",null,"There are many ways to get AlphaFold installed. The installation method that was used to install AlphaFold on Elja was cloning the following github ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/deepmind/alphafold.git"},"repository")," developed by Deepmind (creators of AlphaFold)."),(0,l.kt)("p",null,"In that repository is a ",(0,l.kt)("a",{parentName:"p",href:"https://Docker.com"},(0,l.kt)("strong",{parentName:"a"},"Docker"))," file but ",(0,l.kt)("a",{parentName:"p",href:"https://Docker.com"},(0,l.kt)("strong",{parentName:"a"},"Docker"))," will not be implemented on the HPC environment due to ",(0,l.kt)("strong",{parentName:"p"},"security issues"),". What was then decided was to add another git repository into the system called ",(0,l.kt)("strong",{parentName:"p"},"alphafold_non_docker")," which can be cloned from the following github ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kalininalab/alphafold_non_docker"},"repository"),". "),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"12-required-tools-and-libraries"},"1.2 Required Tools and libraries"),(0,l.kt)("p",null,"Table that lists all the  main dependencies required by AlphaFold to run "),(0,l.kt)("center",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Dependencies"),(0,l.kt)("th",{parentName:"tr",align:null},"Req. version"),(0,l.kt)("th",{parentName:"tr",align:null},"Version on Elja"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"\u22653.6"),(0,l.kt)("td",{parentName:"tr",align:null},"3.10.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Biopython"),(0,l.kt)("td",{parentName:"tr",align:null},"1.79"),(0,l.kt)("td",{parentName:"tr",align:null},"1.79")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"absl-py"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chex"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0.7"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dm-haiku"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0.9"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0.10.dev")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dm-tree"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1.6"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1.8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"immutabledict"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jax/jaxlib"),(0,l.kt)("td",{parentName:"tr",align:null},"0.3.25"),(0,l.kt)("td",{parentName:"tr",align:null},"0.4.1.CUDA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ml-collections"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numpy"),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.6"),(0,l.kt)("td",{parentName:"tr",align:null},"1.24.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scipy"),(0,l.kt)("td",{parentName:"tr",align:null},"1.7.0"),(0,l.kt)("td",{parentName:"tr",align:null},"1.11.0dev")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pandas"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3.4"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protobuf"),(0,l.kt)("td",{parentName:"tr",align:null},"3.19.6"),(0,l.kt)("td",{parentName:"tr",align:null},"3.19.6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tensorflow-cpu"),(0,l.kt)("td",{parentName:"tr",align:null},"2.9.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2.11.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenMM-7.7.0"),(0,l.kt)("td",{parentName:"tr",align:null},"7.5.1"),(0,l.kt)("td",{parentName:"tr",align:null},"7.7.0.CUDA")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Table 1. This table displays all main dependencies that are required to install AlphaFold"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"2-run-alphafold-on-elja"},"2 Run AlphaFold on Elja"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Required:")," It is recommended to run AlphaFold on the open-source terminal server tmux to maintain an interactive session. To know how to tmux check on the following page about  ",(0,l.kt)("a",{parentName:"p",href:"/docs/elja/interactive_session#maintained-interactive-sessions"},"Interactive Sessions")," on Elja."),(0,l.kt)("p",{parentName:"admonition"},"Alternatively AlphaFold can be run using sbatch and batch sumbission scripts. To submit it as a job to the SLURM queue using sbatch see the following section: ",(0,l.kt)("a",{parentName:"p",href:"/docs/elja/submit_jobs"},"Submitting Batch Jobs"),"."),(0,l.kt)("p",{parentName:"admonition"},"AlphaFold will only run efficinetly on the gpu compute nodes!!!")),(0,l.kt)("h3",{id:"21-loading-alphafold"},"2.1 Loading AlphaFold"),(0,l.kt)("p",null,"Before being able to run AlphaFold on Elja, you will have to load the AlphaFold module. To do this you type these following commands in the terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ ml use /hpcapps/libbio-gpu/modules/all/\n[..]$ ml load AlphaFold\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"22-running-alphafold"},"2.2 Running AlphaFold"),(0,l.kt)("p",null,"To run AlphaFold you will have to type ",(0,l.kt)("inlineCode",{parentName:"p"},"run_alphaFold.sh")," with parameters which you can find ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kalininalab/alphafold_non_docker#running-alphafold-v231"},"here"),". An example of an AlphaFold run would look like this: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[..] $ run_alphafold.sh -d /AlphaFoldData/AlphaFold/data -o /hpcapps/source/alphafold_non_docker/dummy_test/ -f /hpcapps/source/alphafold_non_docker/example/query.fasta -t 2020-05-14\n")),(0,l.kt)("p",null,"Note that ",(0,l.kt)("strong",{parentName:"p"},"-d /AlphaFoldData/AlphaFold/data")," is always necessary as this is the location of the AlpaFold database which the machine learned code is based on."))}m.isMDXComponent=!0}}]);