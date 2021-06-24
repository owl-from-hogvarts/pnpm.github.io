(self.webpackChunk=self.webpackChunk||[]).push([[9813],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7689);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=l,c=m["".concat(p,".").concat(u)]||m[u]||k[u]||r;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},461:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>m});var a=n(2791),l=n(9698),r=(n(7689),n(9848)),i=["components"],o={id:"install",title:"pnpm install",original_id:"install"},p=void 0,s={unversionedId:"cli/install",id:"version-4.x/cli/install",isDocsHomePage:!1,title:"pnpm install",description:"pnpm install ile projede tan\u0131ml\u0131 olan t\xfcm k\xfct\xfcphaneleri y\xfckleyebilirsin.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/tr/4.x/cli/install",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"install",title:"pnpm install",original_id:"install"},sidebar:"version-4.x/docs",previous:{title:"pnpm add <paket-ad\u0131>",permalink:"/tr/4.x/cli/add"},next:{title:"pnpm update",permalink:"/tr/4.x/cli/update"}},d=[{value:"tl;dr",id:"tldr",children:[]},{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--offline",id:"--offline",children:[]},{value:"--prefer-offline",id:"--prefer-offline",children:[]},{value:"--ignore-scripts",id:"--ignore-scripts",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--lockfile-only",id:"--lockfile-only",children:[]},{value:"--frozen-lockfile",id:"--frozen-lockfile",children:[]},{value:"--reporter=&lt;name&gt;",id:"--reportername",children:[]},{value:"--use-store-server",id:"--use-store-server",children:[]},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",children:[]}]}],k={toc:d};function m(e){var t=e.components,o=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," ile projede tan\u0131ml\u0131 olan t\xfcm k\xfct\xfcphaneleri y\xfckleyebilirsin."),(0,r.kt)("p",null,"Fakat y\xfckleme komutu, g\xfcncel olmayan bir ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131yla CI ortam\u0131nda \xe7al\u0131\u015ft\u0131r\u0131ld\u0131\u011f\u0131 zaman, hata verir."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6197).Z})),(0,r.kt)("h2",{id:"tldr"},"tl;dr"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Komut"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0130\u015flevi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"no network requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},"Sadece ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," odakl\u0131 y\xfckleme yapar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --prefer-frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},"when possible, ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is not updated")))),(0,r.kt)("h2",{id:"parametreler"},"Parametreler"),(0,r.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,r.kt)("p",null,"Concurrently runs install in all subdirectories with a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Kullan\u0131ld\u0131\u011f\u0131nda veya ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," olarak belirtildi\u011finde pnpm, \xe7evrimd\u0131\u015f\u0131 \u015fekilde sadece ortak alanda depolanan paketler ile i\u015flem sa\u011flamaya \xe7al\u0131\u015f\u0131r. E\u011fer paket depolama alan\u0131nda bulunmazsa, y\xfckleme i\u015flemi hata verecektir."),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.28.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If true, staleness checks for cached data will be bypassed, but missing data will be requested from the server. E\u011fer tam anlam\u0131yla \xe7evrimd\u0131\u015f\u0131 \xe7al\u0131\u015fmas\u0131 gerekirse, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," parametresini kullanabilirsin."),(0,r.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Do not execute any scripts defined in the project ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," and its dependencies."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this flag does not prevent the execution of ",(0,r.kt)("a",{parentName:"p",href:"/tr/4.x/pnpmfile"},"pnpmfile.js"))),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"pnpm will not install any package listed in ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," if the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set to production. Use this flag to instruct pnpm to ignore ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production-or-not status from this flag instead."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," de\u011feri ne olursa olsun, sadece ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131ndaki k\xfct\xfcphaneleri y\xfckler."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131ndaki k\xfct\xfcphaneleri g\xf6z ard\u0131 ederek y\xfckleme yapar."),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.26.0 ve sonras\u0131nda ge\xe7erli (eski ad\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only")," idi)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When used, only updates ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," instead of checking ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," and downloading dependencies."),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.37.1 ve sonras\u0131nda ge\xe7erli (eski ad\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap")," idi)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Normalde: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"CI ortam\u0131nda: ",(0,r.kt)("strong",{parentName:"li"},"true"),", tabi ",(0,r.kt)("inlineCode",{parentName:"li"},"lock")," dosyas\u0131 varsa e\u011fer"))),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails if an update is needed or no lockfile is present."),(0,r.kt)("h3",{id:"--reportername"},"--reporter=","<","name>"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TTY ak\u0131\u015fl\u0131 ortamda: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"TTY ak\u0131\u015f\u0131 olmayan ortamda: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"Allows to choose the reporter that will print info about the installation progress."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - sessiz mod. \xd6nemli hatalar haricindeki her \u015feyi gizler"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - varsay\u0131lan mod. TTY ak\u0131\u015fa sahip ortamda kullan\u0131l\u0131r"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," (S\xfcr\xfcm 1.29.1 ve sonras\u0131nda ge\xe7erli) - ay\u0131klama bilgilerini, d\xfcz bi\xe7imde son sat\u0131ra ekleyerek g\xf6sterir. \u0130mle\xe7 hareketleri vs. kullan\u0131lamaz"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - detayl\u0131 veri \xe7\u0131k\u0131\u015f\u0131 i\xe7in kullan\u0131l\u0131r. \xc7\u0131kt\u0131lar\u0131n tamam\u0131n\u0131, ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," bi\xe7iminde g\xf6sterir")),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Arka planda \xe7al\u0131\u015fan bir depolama sunucusu olu\u015fturur. The store server will keep running after installation is done. Durdurmak i\xe7in, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")," komutunu kullanabilirsin"),(0,r.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/tr/4.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}m.isMDXComponent=!0},6197:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);