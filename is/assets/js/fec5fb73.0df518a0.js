"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[4881],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},g=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),u=m(a),d=n,k=u["".concat(o,".").concat(d)]||u[d]||s[d]||l;return a?r.createElement(k,i(i({ref:e},g),{},{components:a})):r.createElement(k,i({ref:e},g))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6714:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={slug:"Metaerg"},i="Metaerg",p={unversionedId:"compiling/Metaerg",id:"compiling/Metaerg",title:"Metaerg",description:"0. Inngangur",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/compiling/06_Metaerg.md",sourceDirName:"compiling",slug:"/compiling/Metaerg",permalink:"/is/docs/compiling/Metaerg",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/compiling/06_Metaerg.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"Metaerg"},sidebar:"tutorialSidebar",previous:{title:"Jupyterlab \xe1 Elja",permalink:"/is/docs/compiling/jupyterlab"},next:{title:"TensorFlow",permalink:"/is/docs/compiling/TensorFlow-GPU"}},o={},m=[{value:"0. Inngangur",id:"0-inngangur",level:2},{value:"1. A\xf0 byrja",id:"1-a\xf0-byrja",level:2},{value:"1.1 Uppsetning",id:"11-uppsetning",level:3},{value:"1.2 Required Tools and libraries",id:"12-required-tools-and-libraries",level:3},{value:"2 Run Metaerg on Elja",id:"2-run-metaerg-on-elja",level:2},{value:"2.1 Loading Metaerg",id:"21-loading-metaerg",level:3},{value:"2.2 Running Metaerg",id:"22-running-metaerg",level:3}],g={toc:m},u="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"metaerg"},"Metaerg"),(0,n.kt)("h2",{id:"0-inngangur"},"0. Inngangur"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg"))," er sj\xe1lfvirk lei\xf0sla sem notar hugb\xfana\xf0 fr\xe1 \xferi\xf0ja a\xf0ila \xe1samt st\xf3rum gagnagrunni til a\xf0 gera athugasemdir vi\xf0 erf\xf0amengi e\xf0a sett af h\xf3lfum fr\xe1 \xf6rveruvistkerfum. D\xe6mi um sl\xedk sk\xfdringarverkefni eru eiginleikasp\xe1 me\xf0 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"HMM")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"BLAST"))," og ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"DIAMOND")),"."),(0,n.kt)("p",null,"f\xe1\xf0u frekari uppl\xfdsingar um ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg"))," me\xf0 \xfev\xed a\xf0 lesa \xfar ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/xiaoli-dong/metaerg"},"github geymslunni")," og eftirfarandi ","[grein]","(",(0,n.kt)("a",{parentName:"p",href:"https://www.frontiersin.org/"},"https://www.frontiersin.org/")," articles/10.3389/fgene.2019.00999/full) \xed ",(0,n.kt)("a",{parentName:"p",href:"https://www.frontiersin.org/"},"frontiersin")," sem var skrifa\xf0 af s\xf6mu a\xf0ilum og ger\xf0u ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg")),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"1-a\xf0-byrja"},"1. A\xf0 byrja"),(0,n.kt)("h3",{id:"11-uppsetning"},"1.1 Uppsetning"),(0,n.kt)("p",null,"\xdea\xf0 eru margir m\xf6guleikar \xfeegar kemur a\xf0 uppsetningu ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg")),". Ein lei\xf0in er a\xf0 nota ",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," sem var ekki nota\xf0 \xfear sem Elja veitir ekki g\xe1mastu\xf0ning eins og er. Annar m\xf6guleiki var a\xf0 nota ",(0,n.kt)("a",{parentName:"p",href:"https://docs.easybuild.io/"},"Easybuild")," sem veitir ekki n\xfdjustu \xfatg\xe1funa (veitir a\xf0eins \xfatg\xe1fu ","[1.2.3]","(",(0,n.kt)("a",{parentName:"p",href:"https://docs.easybuild.io/version-specific"},"https://docs.easybuild.io/version-specific")," /studd-software/#metaerg)) af ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg")),".\n\xderi\xf0ji kosturinn sem var valinn var a\xf0 setja upp ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg"))," og \xf6nnur hj\xe1lparforrit \xfeess handvirkt, byrja \xe1 \xfev\xed a\xf0 kl\xf3na ",(0,n.kt)("a",{parentName:"p",href:"https://docs.easybuild.io/version-specific/supported-software/#metaerg"},"\xfeetta")," git repository og fylgja uppsetningarlei\xf0beiningum og kr\xf6fum \xed README.md skr\xe1nni."),(0,n.kt)("h3",{id:"12-required-tools-and-libraries"},"1.2 Required Tools and libraries"),(0,n.kt)("center",null,(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Perl Modules")," "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Dependencies"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Archive::Extract")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bio::Perl")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bio::DB::EUtilities")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DBD::SQLite")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DBI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File::Copy::Recursive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HTML::Entities")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LWP::Protocol::https")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SWISS::Entry")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Table 1. This table displays all required Perl modules that are required to run Metaerg"))),(0,n.kt)("center",null,(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Dependencies"),(0,n.kt)("th",{parentName:"tr",align:null},"Req. version"),(0,n.kt)("th",{parentName:"tr",align:null},"Version on Elja"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"antismash"),(0,n.kt)("td",{parentName:"tr",align:null},"\u22656.0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"7.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ARAGORN"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"1.2.41")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"minced"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"0.4.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BLAST+ executeables"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"2.13.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DIAMOND"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.13"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GenomeTools"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"1.6.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HMMER"),(0,n.kt)("td",{parentName:"tr",align:null},"3.x.x"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Infernal"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"1.1.4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"prodigal"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"2.6.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pyarrow"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"12.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Python"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"3.10.4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RepeatMasker"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"4.1.4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RepeatScout"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"1.0.6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"signalp"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"0.5b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tmhmm"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tandem Repeats Finder"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"4.09.1")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Table 2. This table displays all main dependencies that are required to install MetaErg"))),(0,n.kt)("h2",{id:"2-run-metaerg-on-elja"},"2 Run Metaerg on Elja"),(0,n.kt)("h3",{id:"21-loading-metaerg"},"2.1 Loading Metaerg"),(0,n.kt)("p",null,"Before being able to run ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg"))," on Elja, you will have to load the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg"))," module. To do this you type these following commands in the terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ ml use /hpcapps/libbio-gpu/modules/all\n[..]$ ml load Metaerg\xb4\xb4\xb4\n")),(0,n.kt)("h3",{id:"22-running-metaerg"},"2.2 Running Metaerg"),(0,n.kt)("p",null,"To run ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg"))," you will have to type ",(0,n.kt)("inlineCode",{parentName:"p"},"metaerg")," with parameters which you can find ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kinestetika/MetaErg#usage"},"here"),". An example of a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg"))," run would look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[..] $ metaerg --contig_file dir-with contig-files --database_dir /AlphaFoldData/MetaergData/ \\ --file_extension .fa\n")),(0,n.kt)("p",null,"Note that ",(0,n.kt)("strong",{parentName:"p"},"--database_dir /AlphaFoldData/MetaergData/")," is always necessary as this is the location of the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Metaerg"))," database which the machine learned code is based on."))}s.isMDXComponent=!0}}]);