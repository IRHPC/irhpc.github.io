"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[5218],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(t),k=r,c=m["".concat(o,".").concat(k)]||m[k]||g[k]||i;return t?a.createElement(c,l(l({ref:n},p),{},{components:t})):a.createElement(c,l({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=k;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[m]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={slug:"interactive_session"},l="Gagnvirkar lotur",u={unversionedId:"elja/interactive",id:"elja/interactive",title:"Gagnvirkar lotur",description:"Stundum er nau\xf0synlegt a\xf0 keyra hugb\xfana\xf0 - e\xf0a samsetningu hugb\xfana\xf0ar - beint fr\xe1 skipanal\xednunni \xe1 hn\xfat (t.d. fyrir gagnagreiningu og me\xf0fer\xf0).",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/elja/04_interactive.md",sourceDirName:"elja",slug:"/elja/interactive_session",permalink:"/is/docs/elja/interactive_session",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/elja/04_interactive.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"interactive_session"},sidebar:"tutorialSidebar",previous:{title:"Skrapdiskar",permalink:"/is/docs/elja/scratch_disk"},next:{title:"Myndr\xe6nt",permalink:"/is/docs/elja/visualization"}},o={},s=[{value:"Loka lotunni.",id:"loka-lotunni",level:2}],p={toc:s},m="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gagnvirkar-lotur"},"Gagnvirkar lotur"),(0,r.kt)("p",null,"Stundum er nau\xf0synlegt a\xf0 keyra hugb\xfana\xf0 - e\xf0a samsetningu hugb\xfana\xf0ar - beint fr\xe1 skipanal\xednunni \xe1 hn\xfat (t.d. fyrir gagnagreiningu og me\xf0fer\xf0)."),(0,r.kt)("p",null,"Til d\xe6mis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ srun --job-name "InteractiveJob" --partition 48cpu_192mem --cpus-per-task 24 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash\n')),(0,r.kt)("p",null,"SLURM t\xedma\xe1\xe6tlarinn mun \xfathluta umbe\xf0nu tilfangi (ef \xfea\xf0 er tilt\xe6kt), \xed \xfeessu d\xe6mi 24 \xf6rgj\xf6rvum fr\xe1 reiknihn\xfat \xed ",(0,r.kt)("strong",{parentName:"p"},"48cpu_192mem")," skiptingunni og 3900MB af vinnsluminni \xe1 hvern kjarna.\nKeyrslan mun standa \xed 1 dag (0-00:00:00 : D:HH:MM:SS)"),(0,r.kt)("p",null,"Til a\xf0 sj\xe1 hva\xf0a skiptingar eru \xed bo\xf0i skaltu sl\xe1 inn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ sinfo\n")),(0,r.kt)("p",null,"L\xfdsingu \xe1 skiptingunum er a\xf0 finna \xed ",(0,r.kt)("a",{parentName:"p",href:"/docs/hardware/parthardw"},"Skilr\xfam og b\xfana\xf0ur"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\xdea\xf0 er mikilv\xe6gt a\xf0 taka alltaf fram ",(0,r.kt)("inlineCode",{parentName:"p"},"--mem-per-cpu"),", og \xfea\xf0 er m\xe6lt me\xf0 a\xf0 hafa \xfea\xf0 minnst 3900MB \xe1 hvern kjarna. \xde\xfa getur be\xf0i\xf0 um meira minni ef \xfeess er \xfe\xf6rf.\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SLURM")," bi\xf0r\xf6\xf0in og m\xf6rk eru \xed gildi h\xe9r."),(0,r.kt)("p",null,"\xdeegar gagnvirka lotan er hafin munt \xfe\xfa vera skr\xe1\xf0ur inn \xe1 reiknihn\xfatin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[<uname>@compute-xx]$\n")),(0,r.kt)("h2",{id:"loka-lotunni"},"Loka lotunni."),(0,r.kt)("p",null,"Eftir a\xf0 \xfe\xfa hefur kl\xe1ra\xf0 verkefni \xfe\xedn \xed gagnvirku lotuni skalt \xfe\xfa vinsamlegast loka lotunni til a\xf0 gera au\xf0lindina a\xf0gengilega \xf6\xf0rum notendum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[<uname>@compute-xx]$ exit\n")),(0,r.kt)("h1",{id:"geymd-gagnvirk-lota"},"Geymd Gagnvirk lota"),(0,r.kt)("p",null,"Ef notandi missir tengingu, e\xf0a lokar skipana glugganum, mun gagnvirka lotan h\xe6tta og \xf6ll \xf3geymd vinna mun ey\xf0ast.\nTil a\xf0 koma \xed veg fyrir \xfeetta er h\xe6gt nota ",(0,r.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/671422/how-to-use-tmux-on-linux-and-why-its-better-than-screen/"},"tmux")," til a\xf0 geyma\ngagnvirku lotuna \xed a\xf0skyldum skipanaglugga. "),(0,r.kt)("p",null,"Fyrst virkjum vi\xf0 ",(0,r.kt)("strong",{parentName:"p"},"tmux"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux                                          \n")),(0,r.kt)("p",null,"og byrjum gagnvirka lotu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ srun --job-name \u201cInteractiveJob\u201d --partition <partition-name> --cpus-per-task 32 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash                                          \n")),(0,r.kt)("p",null,"Gagnvirka lotan keyrir n\xfa \xe1 ",(0,r.kt)("strong",{parentName:"p"},"tmux"),".\nEftir a\xf0 keyrslan er farin af sta\xf0 getur \xfe\xfa loka\xf0 skipanaglugganum.\n\xde\xfa getur einnig ",(0,r.kt)("strong",{parentName:"p"},"losa\xf0")," \xfeig fr\xe1 ",(0,r.kt)("strong",{parentName:"p"},"tmux")," lotunni og fari\xf0 til baka \xe1 innskr\xe1ningarhn\xfatin\nme\xf0 \xfev\xed a\xf0 \xfdta \xe1 ",(0,r.kt)("strong",{parentName:"p"},"ctrl+b")," og \xfear \xe1 eftir ",(0,r.kt)("strong",{parentName:"p"},"d"),".\nVerki\xf0 \xfeitt mun halda \xe1fram a\xf0 keyra. "),(0,r.kt)("p",null,"Til a\xf0 virkja lotuna aftur eftir innskr\xe1ningu \xe1 Elju:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux attach\n")),(0,r.kt)("p",null,"\xdeegar verki \xfe\xednu er loki\xf0 (og \xfe\xfa hefur loka\xf0 gagnvirku lotuni \xfeinni) muni\xf0 \xfe\xe1 a\xf0 loka einnig ",(0,r.kt)("strong",{parentName:"p"},"tmux")," lotuinni svona:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux kill-session\n")),(0,r.kt)("h1",{id:"margar-gagnvirkar-lotur"},"Margar Gagnvirkar Lotur"),(0,r.kt)("p",null,"\xde\xfa getur byrja\xf0 n\xfdjar e\xf0a margar ",(0,r.kt)("strong",{parentName:"p"},"tmux")," lotur og m\xe6lt er me\xf0 \xfev\xed a\xf0 gefa hverri lotu nafn.\nH\xe9r byrjum vi\xf0 lotu sem heitir ",(0,r.kt)("strong",{parentName:"p"},"inter-1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux new -s inter-1\n")),(0,r.kt)("p",null,"fylgt eftir me\xf0 gagnvirkri keyrslu.\nEftir lokun e\xf0a ",(0,r.kt)("strong",{parentName:"p"},"losun")," getur\xf0u tengst nefndri lotu aftur svona:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux attach-session -t inter-1                                                               \n")),(0,r.kt)("p",null,"\xdeegar \xfe\xfa ert b\xfainn me\xf0 verki\xf0 (og enda\xf0 gagnvirku lotuna), getur\xf0u enda\xf0 nafngreinda lotu svona:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ tmux kill-session -t inter-1                           \n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\xdeegar \xfe\xfa hefu\n\xdeegar gagnvirku keyrsluni er loki\xf0\n(hvort sem \xfe\xfa notar ",(0,r.kt)("strong",{parentName:"p"},"tmux")," e\xf0a ekki) \xe1 t\xf6lvuhn\xfat er mikilv\xe6gt a\xf0 lj\xfaka gagnvirku lotunni:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n[<uname>@compute-xx]$ exit\n")),(0,r.kt)("p",{parentName:"admonition"},"Ef \xfe\xfa ert ekki viss um hvernig \xe1 a\xf0 tengjast aftur vi\xf0 hn\xfatinn getur\xf0u alltaf fengi\xf0 lista af \xfe\xednum lotum svona: "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ squeue -u $USER\nJOBID PARTITION     NAME    USER    ST  TIME  NODES NODELIST(REASON)\n11729 48cpu_192 Interact   <uname>  R   2:10      1 compute-17\n")),(0,r.kt)("p",{parentName:"admonition"},"og st\xf6\xf0va\xf0 lotuna me\xf0 \xfev\xed a\xf0 nota starfsau\xf0kenni\xf0 (\xed \xfeessu d\xe6mi 11729)"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ scancel 11729\n"))))}g.isMDXComponent=!0}}]);