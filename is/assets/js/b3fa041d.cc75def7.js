"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[8544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),o=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(r),c=n,d=m["".concat(s,".").concat(c)]||m[c]||k[c]||i;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[m]="string"==typeof e?e:n,l[1]=u;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const i={slug:"submit_jobs"},l="Senda inn lotuverkefni",u={unversionedId:"elja/submit",id:"elja/submit",title:"Senda inn lotuverkefni",description:"SLURM",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/elja/02_submit.md",sourceDirName:"elja",slug:"/elja/submit_jobs",permalink:"/is/docs/elja/submit_jobs",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/02_submit.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"submit_jobs"},sidebar:"tutorialSidebar",previous:{title:"Bash",permalink:"/is/docs/elja/bash"},next:{title:"Skrapdiskar",permalink:"/is/docs/elja/scratch_disk"}},s={},o=[{value:"SLURM",id:"slurm",level:2},{value:"Fairshare",id:"fairshare",level:3},{value:"Job Array",id:"job-array",level:3},{value:"Lotust\xf6rf",id:"lotust\xf6rf",level:3}],p={toc:o},m="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"senda-inn-lotuverkefni"},"Senda inn lotuverkefni"),(0,n.kt)("h2",{id:"slurm"},"SLURM"),(0,n.kt)("p",null,"Elja notar ",(0,n.kt)("inlineCode",{parentName:"p"},"SLURM")," sem lotu\xe1\xe6tlun og tilfangastj\xf3ra.\nAlgengar grunnskipanir eru teknar saman h\xe9r a\xf0 ne\xf0an."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Skipun"),(0,n.kt)("th",{parentName:"tr",align:null},"L\xfdsing"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"sbatch")),(0,n.kt)("td",{parentName:"tr",align:null},"Senda inn lotuskriftu")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"srun")),(0,n.kt)("td",{parentName:"tr",align:null},"Keyrir samhli\xf0a lotu")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"squeue")," (-a, -u $USER)"),(0,n.kt)("td",{parentName:"tr",align:null},"s\xfdnur st\xf6\xf0u SLURM bi\xf0ra\xf0rinnar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"sinfo")),(0,n.kt)("td",{parentName:"tr",align:null},"S\xfdnir uppl\xfdsingar um hn\xfata og snei\xf0ar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"scancel")," ",(0,n.kt)("strong",{parentName:"td"},"JOBID")),(0,n.kt)("td",{parentName:"tr",align:null},"H\xe6tta vi\xf0 keyrslu")))),(0,n.kt)("h3",{id:"fairshare"},"Fairshare"),(0,n.kt)("p",null,"T\xf6lvuKlasinn veitir Slurm Fairshare Algr\xedm. Hann skipuleggur hva\xf0a vinnslur \xed slurm bi\xf0r\xf6\xf0inni \xe6tti a\xf0 keyrast \xe1 undan og metur \xfea\xf0 \xfatfr\xe1 sanngj\xf6rnum hlutdeildarstu\xf0li milli vinnsla sem er reikna\xf0 \xfat me\xf0 \xe1kv\xf0enari j\xf6fnu."),(0,n.kt)("p",null,"\xdeessi jafna tekur tillit til margra \xfe\xe1tta eins og fj\xf6lda hn\xfata sem notandi \xf3skar eftir. N\xe1nari uppl\xfdsingar um \xfeessa j\xf6fnu er a\xf0 h\xe6gt a\xf0 finna ",(0,n.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/fair_tree.html#fairshare"},"h\xe9r"),". "),(0,n.kt)("p",null,"Var\xf0andi meiri hvar er h\xe6gt a\xf0 finna fleiri uppl\xfdsingar um Fairshare \xfe\xe1 er h\xe6gt a\xf0 finna \xfea\xf0 \xe1  opinberu vefs\xed\xf0unni \xfeeirra ",(0,n.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/fair_tree.html"},"h\xe9r")," og ",(0,n.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/SLUG19/Priority_and_Fair_Trees.pdf"},"h\xe9r"),". "),(0,n.kt)("h3",{id:"job-array"},"Job Array"),(0,n.kt)("p",null,"\xdea\xf0 geta komi\xf0 tilfelli \xfeegar notandi notar margar n\xf3\xf0ur sem keyra sama hlutinn nema me\xf0 \xf6\xf0rum parametrum. \xdeetta getur valdi\xf0 \xfev\xed a\xf0 margir reiknihn\xfatar ver\xf0a uppteknir og hefur \xfea\xf0 a\xf0 verkum a\xf0 a\xf0rir notendur geti ekki nota\xf0 n\xf3\xf0urnar sem eru \xed notkun \xfat af \xfeessari st\xf3rri vinnslu. ",(0,n.kt)("em",{parentName:"p"},"Job Array")," bi\xf0ur upp \xe1 a\xf0 geta b\xe6\xf0i keyrt og haldi\xf0 utan um safn af svipu\xf0um vinnslum. \xdeessar vinnslur geta ver settar inn \xed bi\xf0ra\xf0akerfi\xf0 mj\xf6g flj\xf3tlega. Eina sem \xfearf a\xf0 hafa \xed huga er a\xf0 vinnslurnar \xfeurfa a\xf0 hafa s\xf6mu kr\xf6fur \xe1\xf0ur en \xfe\xe6r eru keyr\xf0ar.  "),(0,n.kt)("p",null,"Til \xfeess a\xf0 setja \xfeetta upp \xfe\xe1 \xfearf a\xf0 b\xe6ta l\xednunni  yfir \xed ",(0,n.kt)("inlineCode",{parentName:"p"},"#SBATCH --array=... #example --array=1-5 ")," sbatch script-una og einnig a\xf0 auki \xfearf a\xf0 b\xe6ta vi\xf0  ",(0,n.kt)("inlineCode",{parentName:"p"},"$SLURM_ARRAY_TASK_ID"),"  sem parametri \xed forriti\xf0 sem notandi \xe6tlar a\xf0 keyra d\xe6mi um sl\xedka \xfaitf\xe6rslu:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun python job.py $SLURM_ARRAY_TASK_ID\n")),(0,n.kt)("p",null,"Hvernig \xe1 a\xf0 setja upp sbatch skript-u er h\xe6gt a\xf0 finna \xed ",(0,n.kt)("a",{parentName:"p",href:"#lotust%C3%B6rf"},"\xfeessum")," kafla"),(0,n.kt)("h3",{id:"lotust\xf6rf"},"Lotust\xf6rf"),(0,n.kt)("p",null,"Skipunin ",(0,n.kt)("inlineCode",{parentName:"p"},"sbatch")," er notu\xf0 til \xe1\xf0 senda verk \xed ",(0,n.kt)("inlineCode",{parentName:"p"},"SLURM")," bi\xf0r\xf6\xf0ina"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ sbatch submit_script\n")),(0,n.kt)("p",null,"Lotu skrifta byrjar vanalega svona"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n#SBATCH --mail-type=ALL\n#SBATCH --mail-user=<Your E-mail> # for example uname@hi.is\n#SBATCH --partition=48cpu_192mem  # request node from a specific partition\n#SBATCH --nodes=2                 # number of nodes\n#SBATCH --ntasks-per-node=48      # 48 cores per node (96 in total)\n#SBATCH --mem-per-cpu=3900        # MB RAM per cpu core\n#SBATCH --time=0-04:00:00         # run for 4 hours maximum (DD-HH:MM:SS)\n#SBATCH --hint=nomultithread      # Suppress multithread\n#SBATCH --output=slurm_job_output.log   \n#SBATCH --error=slurm_job_errors.log   # Logs if job crashes\n\n. ~/.program_env_bash\n\nmpirun python job.py\n")),(0,n.kt)("p",null,"H\xe9r er be\xf0i\xf0 um tvo hn\xfata \xfar ",(0,n.kt)("inlineCode",{parentName:"p"},"48mem_192mem")," skiptingunni, sem notar 48 \xf6rgj\xf6rva \xe1 hvern hn\xfat fyrir samtals 96 \xf6rgj\xf6rva. Minni\xf0 \xe1 hvern kjarna er stillt \xe1 3900MB vinnsluminni. Sj\xe1 ",(0,n.kt)("a",{parentName:"p",href:"/docs/hardware/parthardw"},"Skilr\xfam og b\xfana\xf0ur")," fyrir uppl\xfdsingar um tilt\xe6kar skiptingarnar."),(0,n.kt)("p",null,"\xdeegar ",(0,n.kt)("inlineCode",{parentName:"p"},"SLURM")," \xe1\xe6tlarinn hefur \xfathluta\xf0 tilf\xf6ngum eru n\xe6stu l\xednur keyr\xf0ar \xed r\xf6\xf0. Fyrst er forritunar umhverfi\xf0 hla\xf0i\xf0 inn (sj\xe1 ",(0,n.kt)("a",{parentName:"p",href:"/docs/compiling/easybuild"},"Forritunar Umhverfi"),"), og ",(0,n.kt)("inlineCode",{parentName:"p"},"mpirun")," tilvik af Python skriftu er keyrt."),(0,n.kt)("p",null,"Of\xf0r\xe1\xf0un (e. Hyper-threading) er sj\xe1lfgefi\xf0 \xe1 Intel \xf6rgj\xf6rvum, og er m\xe6lt me\xf0 \xfev\xed a\xf0 b\xe6la \xfea\xf0 ni\xf0ur \xed lotu (e\xf0\xe1 .bashrc) skriftunni \xfeinni (Nema hugb\xfana\xf0urinn \xfeinn sty\xf0ji og s\xe9 r\xe9tt settur saman me\xf0 openmp)"),(0,n.kt)("p",null,"Fyrir .basrhc"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export OMP_NUM_THREADS=1\nexport MKL_NUM_THREADS=1\n")),(0,n.kt)("p",null,"Eftir a\xf0 skila inn lotustarfi getur \xfe\xfa s\xe9\xf0 st\xf6\xf0u og starfsau\xf0kenni \xe1 \xfeennan h\xe1tt:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ squeue -u $USER\nJOBID PARTITION     NAME    USER    ST  TIME  NODES NODELIST(REASON)\n11729 48cpu_192 Interact   <uname>  R   2:10      1 compute-17\n")),(0,n.kt)("p",null,"\xde\xfa getur h\xe6tt vi\xf0 lotustarf me\xf0 starfsau\xf0kennis n\xfamerinu eins og \xed \xfeessu d\xe6mi:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ scancel 11729\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"EF")," lotustarfi\xf0 \xfeitt \xfearf miki\xf0 af inntaks g\xf6gnum, e\xf0a ef \xfea\xf0 framkallar miki\xf0 \xfattak, er m\xe6lt me\xf0 \xfev\xed a\xf0 nota ",(0,n.kt)("strong",{parentName:"p"},"/scratch/")," disk sem er \xed bo\xf0i \xe1 \xf6llum reiknihn\xfatum. Sj\xe1 n\xe6sta ",(0,n.kt)("a",{parentName:"p",href:"scratch_disk"},"li\xf0"),"."))}k.isMDXComponent=!0}}]);