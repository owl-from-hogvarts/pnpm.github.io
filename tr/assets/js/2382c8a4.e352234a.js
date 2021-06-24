(self.webpackChunk=self.webpackChunk||[]).push([[1955],{9848:(e,a,n)=>{"use strict";n.d(a,{Zo:()=>m,kt:()=>u});var t=n(7689);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),d=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=d(e.components);return t.createElement(o.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},s=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(n),u=l,c=s["".concat(o,".").concat(u)]||s[u]||k[u]||r;return n?t.createElement(c,i(i({ref:a},m),{},{components:n})):t.createElement(c,i({ref:a},m))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9425:(e,a,n)=>{"use strict";n.r(a),n.d(a,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>d,toc:()=>m,default:()=>s});var t=n(2791),l=n(9698),r=(n(7689),n(9848)),i=["components"],p={id:"install",title:"pnpm install"},o=void 0,d={unversionedId:"cli/install",id:"version-5.x/cli/install",isDocsHomePage:!1,title:"pnpm install",description:"Ayr\u0131ca: i",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/tr/5.x/cli/install",editUrl:"https://crowdin.com/project/pnpm/tr",version:"5.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-5.x/docs",previous:{title:"pnpm add <k\xfct\xfcphane>",permalink:"/tr/5.x/cli/add"},next:{title:"pnpm update",permalink:"/tr/5.x/cli/update"}},m=[{value:"K\u0131saca;",id:"k\u0131saca",children:[]},{value:"Parametreler",id:"parametreler",children:[{value:"--offline",id:"--offline",children:[]},{value:"--prefer-offline",id:"--prefer-offline",children:[]},{value:"--ignore-scripts",id:"--ignore-scripts",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--lockfile-only",id:"--lockfile-only",children:[]},{value:"--frozen-lockfile",id:"--frozen-lockfile",children:[]},{value:"--reporter=&lt;de\u011fer&gt;",id:"--reporterde\u011fer",children:[]},{value:"--use-store-server",id:"--use-store-server",children:[]},{value:"--shamefully-hoist",id:"--shamefully-hoist",children:[]},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",children:[]}]}],k={toc:m};function s(e){var a=e.components,p=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},k,p,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ayr\u0131ca: ",(0,r.kt)("inlineCode",{parentName:"p"},"i")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," ile projede tan\u0131ml\u0131 olan t\xfcm k\xfct\xfcphaneleri y\xfckleyebilirsin."),(0,r.kt)("p",null,"Fakat y\xfckleme komutu, g\xfcncel olmayan bir ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131yla CI ortam\u0131nda \xe7al\u0131\u015ft\u0131r\u0131ld\u0131\u011f\u0131 zaman, hata verir."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," komutu, workspace (\xe7al\u0131\u015fma ortam\u0131) i\xe7erisinde \xe7al\u0131\u015ft\u0131r\u0131ld\u0131\u011f\u0131 zaman ise, workspace i\xe7erisindeki t\xfcm projelere tan\u0131ml\u0131 olan t\xfcm k\xfct\xfcphaneleri y\xfckler. Her hangi bir sebepten dolay\u0131 bu \xf6zelli\u011fi devre d\u0131\u015f\u0131 b\u0131rakmak istersen, ",(0,r.kt)("inlineCode",{parentName:"p"},"recursive-install")," ayar\u0131n\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," olarak ayarlayabilirsin."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6197).Z})),(0,r.kt)("h2",{id:"k\u0131saca"},"K\u0131saca;"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Komut"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0130\u015flevi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"\xc7evrimd\u0131\u015f\u0131 \u015fekilde, ortak alandan y\xfckleme yapar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},"Sadece ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," odakl\u0131 y\xfckleme yapar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," dosyas\u0131n\u0131 g\xfcnceller")))),(0,r.kt)("h2",{id:"parametreler"},"Parametreler"),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Kullan\u0131ld\u0131\u011f\u0131nda veya ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," olarak belirtildi\u011finde pnpm, \xe7evrimd\u0131\u015f\u0131 \u015fekilde sadece ortak alanda depolanan paketler ile i\u015flem sa\u011flamaya \xe7al\u0131\u015f\u0131r. E\u011fer paket depolama alan\u0131nda bulunmazsa, y\xfckleme i\u015flemi hata verecektir."),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.28.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Kullan\u0131ld\u0131\u011f\u0131nda veya ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," olarak belirtildi\u011finde pnpm, \xf6nbellekte bulunan veriler \xfczerinde zaman a\u015f\u0131m\u0131 (eski olmas\u0131 durumu) kontrol\xfc/denetimi yapmadan y\xfckleme yapar ve eksik bir veriyle kar\u015f\u0131la\u015f\u0131rsa e\u011fer, indirmeye \xe7al\u0131\u015f\u0131r. E\u011fer tam anlam\u0131yla \xe7evrimd\u0131\u015f\u0131 \xe7al\u0131\u015fmas\u0131 gerekirse, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," parametresini kullanabilirsin."),(0,r.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," i\xe7erisinde tan\u0131ml\u0131 olan t\xfcm komutlar\u0131 (scripts) g\xf6z ard\u0131 ederek i\u015flem yapar, yani hi\xe7 birini \xe7al\u0131\u015ft\u0131rmaz/tetiklemez."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This flag does not prevent the execution of ",(0,r.kt)("a",{parentName:"p",href:"/tr/5.x/pnpmfile"},"pnpmfile.js")))),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," de\u011fi\u015fkeni ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," olarak ayarland\u0131\u011f\u0131nda pnpm, ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131nda belirtilen t\xfcm k\xfct\xfcphaneleri g\xf6z ard\u0131 ederek y\xfckleme yapar. Parametrenin kullan\u0131lmas\u0131 durumunda, \xf6n tan\u0131ml\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," de\u011fi\u015fkenindeki de\u011feri g\xf6z ard\u0131 ederek, ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," seviyesinde y\xfckleme yapar."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," de\u011feri ne olursa olsun, sadece ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131ndaki k\xfct\xfcphaneleri y\xfckler."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131ndaki k\xfct\xfcphaneleri g\xf6z ard\u0131 ederek y\xfckleme yapar."),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.26.0 ve sonras\u0131nda ge\xe7erli (eski ad\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only")," idi)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Kullan\u0131ld\u0131\u011f\u0131 zaman, sadece ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," ve ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," dosyas\u0131n\u0131 yeniler. Projeye dahil edilen k\xfct\xfcphaneleri indirmeden ve ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," klas\xf6r\xfcn\xfc denetlemeden i\u015flem yapar."),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.37.1 ve sonras\u0131nda ge\xe7erli (eski ad\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap")," idi)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Normalde: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"CI ortam\u0131nda: ",(0,r.kt)("strong",{parentName:"li"},"true"),", tabi ",(0,r.kt)("inlineCode",{parentName:"li"},"lock")," dosyas\u0131 varsa e\u011fer"))),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Kullan\u0131ld\u0131\u011f\u0131nda veya ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," olarak belirtildi\u011finde pnpm, sadece ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131n\u0131 baz alarak ve ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131nda hi\xe7 bir de\u011fi\u015fiklik yapmadan y\xfckleme yapar. E\u011fer ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131 g\xfcncel de\u011filse veya hi\xe7 olu\u015fturulmam\u0131\u015fsa, i\u015flem hata verecektir."),(0,r.kt)("h3",{id:"--reporterde\u011fer"},"--reporter=","<","de\u011fer",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TTY ak\u0131\u015fl\u0131 ortamda: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"TTY ak\u0131\u015f\u0131 olmayan ortamda: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"Y\xfckleme i\u015flemiyle alakal\u0131 ay\u0131klama (debug) bilgilerinin, konsolda hangi ve ne \u015fekilde g\xf6sterilece\u011fini belirlemek i\xe7in kullanabilirsin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - sessiz mod. \xd6nemli hatalar haricindeki her \u015feyi gizler"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - varsay\u0131lan mod. TTY ak\u0131\u015fa sahip ortamda kullan\u0131l\u0131r"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," (S\xfcr\xfcm 1.29.1 ve sonras\u0131nda ge\xe7erli) - ay\u0131klama bilgilerini, d\xfcz bi\xe7imde son sat\u0131ra ekleyerek g\xf6sterir. \u0130mle\xe7 hareketleri vs. kullan\u0131lamaz"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - detayl\u0131 veri \xe7\u0131k\u0131\u015f\u0131 i\xe7in kullan\u0131l\u0131r. \xc7\u0131kt\u0131lar\u0131n tamam\u0131n\u0131, ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," bi\xe7iminde g\xf6sterir")),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Arka planda \xe7al\u0131\u015fan bir depolama sunucusu olu\u015fturur. Y\xfckleme i\u015flemi tamamlansa dahi, depolama sunucusu arka planda \xe7al\u0131\u015fmaya devam eder. Durdurmak i\xe7in, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")," komutunu kullanabilirsin"),(0,r.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm")," ve ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn'\u0131n")," kulland\u0131\u011f\u0131na benzeyen d\xfcz, klasik bir ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," dizin yap\u0131s\u0131 olu\u015fturur. ",(0,r.kt)("strong",{parentName:"p"},"UYARI"),": A\xe7\u0131k\xe7as\u0131 bu parametrenin kullan\u0131m\u0131n\u0131 \xf6nermiyoruz."),(0,r.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/tr/5.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}s.isMDXComponent=!0},6197:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);