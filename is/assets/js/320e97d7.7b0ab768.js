"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[4668],{3905:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>m});var i=e(7294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function o(n,t){if(null==n)return{};var e,i,a=function(n,t){if(null==n)return{};var e,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var u=i.createContext({}),s=function(n){var t=i.useContext(u),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},p=function(n){var t=s(n.components);return i.createElement(u.Provider,{value:t},n.children)},c="mdxType",g={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(n,t){var e=n.components,a=n.mdxType,r=n.originalType,u=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),c=s(e),k=a,m=c["".concat(u,".").concat(k)]||c[k]||g[k]||r;return e?i.createElement(m,l(l({ref:t},p),{},{components:e})):i.createElement(m,l({ref:t},p))}));function m(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var r=e.length,l=new Array(r);l[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=n,o[c]="string"==typeof n?n:a,l[1]=o;for(var s=2;s<r;s++)l[s]=e[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,e)}k.displayName="MDXCreateElement"},1580:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=e(7462),a=(e(7294),e(3905));const r={slug:"windowsconnecting"},l="Windows",o={unversionedId:"connecting/windows",id:"connecting/windows",title:"Windows",description:"PuTTygen & PuTTy",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/connecting/03_windows.md",sourceDirName:"connecting",slug:"/connecting/windowsconnecting",permalink:"/is/docs/connecting/windowsconnecting",draft:!1,editUrl:"https://github.com/irhpc/irhpc.github.io/edit/main/docs/connecting/03_windows.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"windowsconnecting"},sidebar:"tutorialSidebar",previous:{title:"UNIX",permalink:"/is/docs/connecting/unixconnecting"},next:{title:"SFTP: Cyberduck/FileZilla",permalink:"/is/docs/connecting/sftpconnecting"}},u={},s=[{value:"PuTTygen &amp; PuTTy",id:"puttygen--putty",level:2},{value:"B\xfaa til SSH-lykil",id:"b\xfaa-til-ssh-lykil",level:3},{value:"Skilr\xedki \xed PuTTy",id:"skilr\xedki-\xed-putty",level:3},{value:"Geyma lotuna og tengjast",id:"geyma-lotuna-og-tengjast",level:3}],p={toc:s},c="wrapper";function g(n){let{components:t,...r}=n;return(0,a.kt)(c,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"windows"},"Windows"),(0,a.kt)("h2",{id:"puttygen--putty"},"PuTTygen & PuTTy"),(0,a.kt)("p",null,"M\xe6lt er me\xf0 \xfev\xed a\xf0 nota PuTTy til a\xf0 tengjast innskr\xe1ningarhn\xfatnum Elju.\nS\xe6ktu PuTTy ",(0,a.kt)("a",{parentName:"p",href:"https://www.putty.org/"},"h\xe9r"),".\nInnifali\xf0 er t\xf3l sem kallast PuTTygen sem er nota\xf0 til a\xf0 b\xfaa til SSH lyklapar."),(0,a.kt)("p",null,"SSH lyklapari\xf0 sem er b\xfai\xf0 til me\xf0 PuTTygen er nota\xf0 til a\xf0 tengjast \xfej\xf3ninum \xe1 \xf6ruggan h\xe1tt,\nanna\xf0 hvort beint \xed gegnum PuTTy e\xf0a \xfeegar \xfe\xfa notar SFTP skr\xe1aflutningshugb\xfana\xf0 eins og\nFileZilla e\xf0a Cyberduck."),(0,a.kt)("h3",{id:"b\xfaa-til-ssh-lykil"},"B\xfaa til SSH-lykil"),(0,a.kt)("p",null,"Byrja\xf0u PuTTygen - veldu lykiltegund RSA og fj\xf6lga\xf0u bitafj\xf6lda \xed 4096:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"D\xe6mi PuTTygen",src:e(5250).Z,width:"601",height:"433"})),(0,a.kt)("p",null,"\xddttu \xe1 ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate")," og hreyf\xf0u m\xfasarbendilinn \xed kring.\nEftir a\xf0 \xfe\xfa hefur b\xfai\xf0 til lykil mun skj\xe1rinn l\xedta svona \xfat:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"D\xe6mi 2 PuTTygen",src:e(1445).Z,width:"602",height:"432"})),(0,a.kt)("p",null,'Opinberi lykillinn er s\xfdndur \xed textareitnum.\nAnna\xf0 hvort afrita\xf0u hann inn \xed textaskr\xe1,\ne\xf0a vista\xf0u \xfea\xf0 me\xf0 \xfev\xed a\xf0 \xfdta \xe1 "Save public key" hnappinn.\nEinnig \xfearf a\xf0 vista einkalykilinn (',(0,a.kt)("strong",{parentName:"p"},"ekki s\xfdndur!"),').\n\xddttu \xe1 "Save private key" og settu hann \xed m\xf6ppu sem er ekki \xed augs\xfdn\n(en au\xf0velt fyrir \xfeig a\xf0 muna sta\xf0setningu).'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\xdea\xf0 er \xed lagi a\xf0 skilja lykilor\xf0i\xf0 eftir t\xf3mt. Ef \xfe\xfa velur lykilor\xf0 skaltu hafa \xed huga a\xf0 lykillinn er ekki h\xe6gt a\xf0 nota me\xf0 SFTP skr\xe1aflutningshugb\xfana\xf0i eins og FileZilla.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Ekki deila einkalyklaskr\xe1nni, e\xf0a innihaldi skr\xe1arinnar.\nEkki senda skr\xe1na, jafnvel til \xfe\xedn, og\ns\xe9rstaklega ekki 'admins'."))),(0,a.kt)("p",null,"Opinbera lyklinum \xfearf a\xf0 deila me\xf0 stj\xf3rnendum,\nog afrit af \xfev\xed er gert \xed m\xf6ppunni \xfeinni \xe1 klasanum."),(0,a.kt)("h3",{id:"skilr\xedki-\xed-putty"},"Skilr\xedki \xed PuTTy"),(0,a.kt)("p",null,"Opna\xf0u PuTTy og far\xf0u \xed ",(0,a.kt)("strong",{parentName:"p"},"Connection > SSH > Auth"),' vinstra megin \xed flokkaspjaldinu.\n\xddttu \xe1 "Browse" vi\xf0 hli\xf0ina \xe1 au\xf0a reitnum fyrir ne\xf0an "Private key for authentication:" og veldu\neinkalykillinn \xfeinn (t.d. ',"*",".ppk sem er b\xfainn til me\xf0 PuTTygen):"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example PuTTy",src:e(9711).Z,width:"594",height:"537"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\xcd s\xed\xf0ari \xfatg\xe1fum af PuTTy m\xe1 finna reitinn \u201ePrivate key for authentication\u201c \xed ",(0,a.kt)("strong",{parentName:"p"},"Connection > SSH > Auth > Credentials"),". Sj\xe1 mynd h\xe9r a\xf0 ne\xf0an.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example_PuTTy",src:e(1254).Z,width:"2900",height:"2881"})),(0,a.kt)("h3",{id:"geyma-lotuna-og-tengjast"},"Geyma lotuna og tengjast"),(0,a.kt)("p",null,"Far\xf0u aftur \xed ",(0,a.kt)("strong",{parentName:"p"},"Session"),' vinstra megin og fylltu \xfat "Host name" sem "elja.hi.is". Sl\xe1\xf0u inn nafn \xed t\xf3ma \u201eVistar lotur\u201c reitinn (til d\xe6mis elja) og \xfdttu \xe1 \u201eVista\u201c. PuTTy mun geyma uppl\xfdsingar um h\xfdsingara\xf0ila og tengja vi\xf0 einkalykil\nKerfisstj\xf3rinn \xfearf afrit af opinbera lyklinum til a\xf0 veita \xfe\xe9r a\xf0gang a\xf0 innskr\xe1ningarhn\xfatnum.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example 2 PuTTy",src:e(9390).Z,width:"597",height:"540"})),(0,a.kt)("p",null,'\xddttu n\xfa \xe1 "Open". \xde\xfa ver\xf0ur n\xfa tengdur (\xfdttu \xe1 "Accept" ef be\xf0i\xf0 er um \xfea\xf0) vi\xf0 innskr\xe1ningarhn\xfatinn. Eftir a\xf0 \xfe\xfa hefur slegi\xf0 inn notandanafni\xf0 \xfeitt \xed skipanal\xednuna \xe6tti skj\xe1rinn \xfeinn a\xf0 l\xedta svona \xfat:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example 3 PuTTy",src:e(6335).Z,width:"601",height:"378"})),(0,a.kt)("p",null,"\xde\xfa ert n\xfana skr\xe1\xf0ur inn! Veri\xf0 velkomin \xe1 Elju."),(0,a.kt)("p",null,"N\xe6st \xfeegar \xfe\xfa opnar PuTTy skaltu bara velja vistu\xf0u lotuna \u201eelja\u201c og \xfdta \xe1 opna."))}g.isMDXComponent=!0},1254:(n,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/PuttyVNew-63fa7433c6b54f42c983f7f9269b5056.png"},9711:(n,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/putty-261d40d032221d75c116bde03532dcd8.png"},9390:(n,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/putty2-862b26be68adefaf83da41bcfc7a1dde.png"},6335:(n,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/putty3-a5a751f3560a087fa81b748db9780e7b.png"},5250:(n,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/puttygen-9bb13b4acb2ff3be249c705b43d1ff88.png"},1445:(n,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/puttygen2-7e58099db5eb3ae53a7773c4fb93c4d6.png"}}]);