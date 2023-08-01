"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[6438],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>k});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),g=r,k=c["".concat(o,".").concat(g)]||c[g]||m[g]||i;return a?t.createElement(k,l(l({ref:n},p),{},{components:a})):t.createElement(k,l({ref:n},p))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6423:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=a(7462),r=(a(7294),a(3905));const i={slug:"unixconnecting"},l="UNIX",s={unversionedId:"connecting/unix",id:"connecting/unix",title:"UNIX",description:"Terminal",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/connecting/02_unix.md",sourceDirName:"connecting",slug:"/connecting/unixconnecting",permalink:"/is/docs/connecting/unixconnecting",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/connecting/02_unix.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"unixconnecting"},sidebar:"tutorialSidebar",previous:{title:"SSH lyklar og tengingar.",permalink:"/is/docs/connecting/connectingssh"},next:{title:"Windows",permalink:"/is/docs/connecting/windowsconnecting"}},o={},u=[{value:"Terminal",id:"terminal",level:2},{value:"Villur",id:"villur",level:2},{value:"Leyfi hafna\xf0",id:"leyfi-hafna\xf0",level:3}],p={toc:u},c="wrapper";function m(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unix"},"UNIX"),(0,r.kt)("h2",{id:"terminal"},"Terminal"),(0,r.kt)("p",null,"Til a\xf0 b\xfaa til SSH lyklapar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ ssh-keygen -f ~/.ssh/id_name -t rsa -b 4096\n")),(0,r.kt)("p",null,'H\xe9r er lyklapari\xf0 nefnt "id',"_",'name" sem d\xe6mi.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\xdea\xf0 er \xed lagi a\xf0 skilja lykilor\xf0i\xf0 eftir t\xf3mt \xfeegar be\xf0i\xf0 er um \xfea\xf0 (\xfe.e. ekkert lykilor\xf0). Veri\xf0 me\xf0vitu\xf0 um a\xf0 ef \xfei\xf0 velji\xf0 lykilor\xf0 g\xe6ti SSH-lyklaa\xf0gangurinn \xfeinn ekki virka me\xf0 SFTP hugb\xfana\xf0i eins og FileZilla.")),(0,r.kt)("p",null,'Opinberi hluti lykilsins er a\xf0 finna h\xe9r "~/.ssh/id',"_",'name.pub", og \xfea\xf0 er au\xf0veldast a\xf0 sko\xf0a efni\xf0 \xe1 \xfeennan h\xe1tt:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ cat ~/.ssh/id_name.pub\n")),(0,r.kt)("p",null,"Afrita\xf0u innihaldi\xf0 og sendu \xfea\xf0 til stj\xf3rnenda."),(0,r.kt)("p",null,"Eftir a\xf0 almenni lykillinn hefur veri\xf0 hla\xf0i\xf0 upp \xe1 innskr\xe1ningarhn\xfatinn af stj\xf3rnandanum getur\xf0u skr\xe1\xf0 \xfeig inn \xed kerfi\xf0 \xe1 \xfeennan h\xe1tt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ ssh <uname>@elja.hi.is\n# or if you are juggling many SSH keys\n[..]$ ssh -i ~/.ssh/id_name <uname>@elja.hi.is\n")),(0,r.kt)("p",null,"Terminal gluggin \xfeinn \xe6tti a\xf0 birta innskr\xe1ningarskilabo\xf0, fylgt eftir me\xf0 skipanal\xednu eins og \xfeessari:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[<uname>@elja-ihpc ~]$\n")),(0,r.kt)("p",null,'Til a\xf0 f\xe1 skj\xf3tan a\xf0gang er m\xe6lt me\xf0 \xfev\xed a\xf0 b\xfaa til "alias" \xed "~/.bashrc" \xe1 einkav\xe9linni \xfeinni:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[..]$ cat >> ~/.bashrc << EOF\n> alias elja="ssh -i ~/.ssh/id_name <uname>@elja.hi.is\nEOF\n')),(0,r.kt)("p",null,'Eftir a\xf0 n\xfdju "~/.bashrc" skr\xe1ini hefur veri\xf0 hla\xf0i\xf0 getur \xfe\xfa skr\xe1\xf0 \xfeig inn \xe1 \xfeennan h\xe1tt:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ elja                          \n")),(0,r.kt)("p",null,"A\xf0 \xf6\xf0rum kosti getur\xf0u b\xe6tt vi\xf0 ",(0,r.kt)("strong",{parentName:"p"},"config")," skr\xe1 \xed ",(0,r.kt)("strong",{parentName:"p"},".ssh")," m\xf6ppuna \xfe\xedna"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ touch ~/.ssh/config\n[..]$ chmod 600 ~/.ssh/config\n")),(0,r.kt)("p",null,"b\xe6ttu svo uppl\xfdsingum um ",(0,r.kt)("strong",{parentName:"p"},"Elju")," vi\xf0 stillingarskr\xe1na"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ cat >> ~/.ssh/config << EOF\n> Host Elja\n>    HostName elja.hi.is\n>    User <uname>\n>    Port 22\n>    IdentityFile ~/.ssh/id_elja\nEOF\n")),(0,r.kt)("p",null,"\xde\xfa getur n\xfa skr\xe1\xf0 \xfeig inn me\xf0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[..]$ ssh Elja\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\xdeessar lei\xf0beiningar virka ekki fyrir Windows skipanal\xednuna"))),(0,r.kt)("h2",{id:"villur"},"Villur"),(0,r.kt)("h3",{id:"leyfi-hafna\xf0"},"Leyfi hafna\xf0"),(0,r.kt)("p",null,"Ef \xfe\xfa f\xe6r\xf0 ",(0,r.kt)("inlineCode",{parentName:"p"},"permission denied")," villu \xfeegar \xfe\xfa reynir a\xf0 tengjast Elju getur\xf0u gert eftirfarandi til a\xf0 leysa vandam\xe1li\xf0 \xfeitt:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},".ssh"))," skr\xe1in \xfe\xedn er \xed $HOME skr\xe1nni \xfeinni. Far\xf0u \xed $HOME og skrifa\xf0u:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd $HOME\n$ ls -la .ssh\n")),(0,r.kt)("p",null,"\xdeetta mun birta heimildir fyrir ",(0,r.kt)("strong",{parentName:"p"},".ssh")," m\xf6ppunni og skr\xe1r \xed m\xf6ppunni. Algengar skr\xe1r \xfe\xednar (t.d. \xfeekktir_h\xfdsingar) og opinber lykilskr\xe1r ver\xf0a a\xf0 hafa eftirfarandi heimildir: ",(0,r.kt)("strong",{parentName:"p"},"-rw-r--r--")),(0,r.kt)("p",null,"Til a\xf0 breyta \xed r\xe9tta tegund leyfis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ chmod 644 .ssh/known_hosts\n$ chmod 644 .ssh/*.pub\n")),(0,r.kt)("p",null,"\xde\xednir einkalyklar ver\xf0a a\xf0 hafa leyfi: ",(0,r.kt)("strong",{parentName:"p"},"-rw-------")),(0,r.kt)("p",null,"Til a\xf0 breyta \xed r\xe9tta tegund leyfis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ chmod 600 .ssh/nameofkey\n")),(0,r.kt)("p",null,"A\xf0 lokum ver\xf0ur ",(0,r.kt)("strong",{parentName:"p"},".ssh")," mappan a\xf0 hafa eftirfarandi leyfi: ",(0,r.kt)("strong",{parentName:"p"},"drwx------")),(0,r.kt)("p",null,"Til a\xf0 breyta \xed r\xe9tta tegund leyfis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ chmod 700 .ssh/\n")))}m.isMDXComponent=!0}}]);