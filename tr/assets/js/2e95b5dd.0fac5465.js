(self.webpackChunk=self.webpackChunk||[]).push([[4354],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7689);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(n),k=r,m=u["".concat(d,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1026:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>o,toc:()=>s,default:()=>u});var a=n(2791),r=n(9698),l=(n(7689),n(9848)),i=["components"],p={id:"update",title:"pnpm update",original_id:"update"},d=void 0,o={unversionedId:"cli/update",id:"version-4.x/cli/update",isDocsHomePage:!1,title:"pnpm update",description:"Ayr\u0131ca: up",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/tr/4.x/cli/update",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"update",title:"pnpm update",original_id:"update"},sidebar:"version-4.x/docs",previous:{title:"pnpm install",permalink:"/tr/4.x/cli/install"},next:{title:"pnpm remove",permalink:"/tr/4.x/cli/remove"}},s=[{value:"Synopsis",id:"synopsis",children:[]},{value:"tl;dr",id:"tldr",children:[]},{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--latest, -L",id:"--latest--l",children:[]},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--interactive, -i",id:"--interactive--i",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ayr\u0131ca: ",(0,l.kt)("inlineCode",{parentName:"p"},"up")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified range."),(0,l.kt)("p",null,"When used without arguments, updates all dopependencies. You can use patterns to update all dependencies that match it."),(0,l.kt)("h2",{id:"synopsis"},"Synopsis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm update [-r] [--filter <package selector>]\n            [<package pattern> ...]\n\npnpm recursive update [--filter <package selector>]\n                      [<package pattern> ...]\n")),(0,l.kt)("h2",{id:"tldr"},"tl;dr"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Komut"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0130\u015flevi"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,l.kt)("td",{parentName:"tr",align:null},"updates all dependencies. Adheres ranges specified in ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,l.kt)("td",{parentName:"tr",align:null},"updates all dependencies. Ignores ranges specified in ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,l.kt)("td",{parentName:"tr",align:null},"updates ",(0,l.kt)("inlineCode",{parentName:"td"},"foo")," to the latest v2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up @babel/*")),(0,l.kt)("td",{parentName:"tr",align:null},"updates all dependencies with the ",(0,l.kt)("inlineCode",{parentName:"td"},"@babel")," scope")))),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Concurrently runs update in all subdirectories with a ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,l.kt)("p",null,"\u015eu \u015fekilde kullan\u0131l\u0131r:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,l.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,l.kt)("p",null,"S\xfcr\xfcm 3.2.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," i\xe7erisinde belirtilen s\xfcr\xfcm aral\u0131klar\u0131n\u0131/s\u0131n\u0131rlar\u0131n\u0131 yok saymay\u0131 sa\u011flar. Y\xfckleme s\u0131ras\u0131nda k\xfct\xfcphanelerin, ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," etiketiyle belirlenen s\xfcr\xfcm\xfc y\xfckler (paketlerin en b\xfcy\xfck s\xfcr\xfcm numaras\u0131n\u0131 hedefleyerek en son s\xfcr\xfcmlerine g\xfcnceller)."),(0,l.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/tr/4.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Global olarak y\xfcklenen k\xfct\xfcphaneleri/paketleri g\xfcnceller."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"S\xfcr\xfcm 4.4.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm [-r] update --workspace [<pkg>...]\n")),(0,l.kt)("p",null,"Workspace i\xe7erisinde t\xfcm paketleri ili\u015fkilendirmeye \xe7al\u0131\u015f\u0131r. G\xfcncelleme i\u015flemi s\u0131ras\u0131nda proje i\xe7erisindeki di\u011fer projeyi eski s\xfcr\xfcm\xfcyle miras alan paket s\xfcr\xfcmlerini, paketin kayna\u011f\u0131nda belirtilen s\xfcr\xfcmle de\u011fi\u015ftirir."),(0,l.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies is not found inside the workspace. For instance, the following command fails if ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package: ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Update packages only in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Update packages only in ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"G\xfcncelleme yaparken, ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131na eklenmi\u015f paketleri g\xf6z ard\u0131 eder."),(0,l.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,l.kt)("p",null,"S\xfcr\xfcm 4.8.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"G\xfcncellenmesi gereken paketleri/k\xfct\xfcphaneleri listeleyerek, se\xe7im yap\u0131lmas\u0131n\u0131 bekler ve sonra g\xfcncelleme yapar."))}u.isMDXComponent=!0}}]);