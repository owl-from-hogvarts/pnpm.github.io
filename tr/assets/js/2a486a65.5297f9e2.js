(self.webpackChunk=self.webpackChunk||[]).push([[8997],{9848:(e,a,n)=>{"use strict";n.d(a,{Zo:()=>k,kt:()=>c});var t=n(7689);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),o=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},k=function(e){var a=o(e.components);return t.createElement(d.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,u=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return n?t.createElement(u,i(i({ref:a},k),{},{components:n})):t.createElement(u,i({ref:a},k))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5167:(e,a,n)=>{"use strict";n.r(a),n.d(a,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>o,toc:()=>k,default:()=>m});var t=n(2791),r=n(9698),l=(n(7689),n(9848)),i=["components"],p={id:"add",title:"pnpm add <paket-ad\u0131>",original_id:"add"},d=void 0,o={unversionedId:"cli/add",id:"version-4.x/cli/add",isDocsHomePage:!1,title:"pnpm add <paket-ad\u0131>",description:"Belirtilen paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu di\u011fer paketleri y\xfckler. By default, any new package is installed as a prod dependency.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/tr/4.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"add",title:"pnpm add <paket-ad\u0131>",original_id:"add"},sidebar:"version-4.x/docs",previous:{title:"Filtreleme",permalink:"/tr/4.x/filtering"},next:{title:"pnpm install",permalink:"/tr/4.x/cli/install"}},k=[{value:"tl;dr",id:"tldr",children:[]},{value:"Desteklenen paket kaynaklar\u0131/konumlar\u0131",id:"desteklenen-paket-kaynaklar\u0131konumlar\u0131",children:[{value:"<code>npm</code> kay\u0131tlar\u0131ndan y\xfckleme",id:"npm-kay\u0131tlar\u0131ndan-y\xfckleme",children:[]},{value:"\xc7al\u0131\u015fma alan\u0131ndan/Workspace&#39;den y\xfckleme",id:"\xe7al\u0131\u015fma-alan\u0131ndanworkspaceden-y\xfckleme",children:[]},{value:"Yerel dosya sisteminden y\xfckleme",id:"yerel-dosya-sisteminden-y\xfckleme",children:[]},{value:"Install from remote gzipped tarball",id:"install-from-remote-gzipped-tarball",children:[]},{value:"Git deposundan y\xfckleme",id:"git-deposundan-y\xfckleme",children:[]}]},{value:"Parametreler",id:"parametreler",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",children:[]},{value:"--workspace",id:"--workspace",children:[]}]}],s={toc:k};function m(e){var a=e.components,p=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},s,p,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Belirtilen paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu di\u011fer paketleri y\xfckler. By default, any new package is installed as a prod dependency."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5228).Z})),(0,l.kt)("h2",{id:"tldr"},"tl;dr"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Komut"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0130\u015flevi"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,l.kt)("td",{parentName:"tr",align:null},"save to ",(0,l.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,l.kt)("td",{parentName:"tr",align:null},"save to ",(0,l.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,l.kt)("td",{parentName:"tr",align:null},"save to ",(0,l.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify tag ",(0,l.kt)("inlineCode",{parentName:"td"},"next"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},"Paketin, ",(0,l.kt)("inlineCode",{parentName:"td"},"3.0.0")," s\xfcr\xfcm\xfcn\xfc y\xfckler")))),(0,l.kt)("h2",{id:"desteklenen-paket-kaynaklar\u0131konumlar\u0131"},"Desteklenen paket kaynaklar\u0131/konumlar\u0131"),(0,l.kt)("p",null,"A package can be installed from different locations:"),(0,l.kt)("h3",{id:"npm-kay\u0131tlar\u0131ndan-y\xfckleme"},(0,l.kt)("inlineCode",{parentName:"h3"},"npm")," kay\u0131tlar\u0131ndan y\xfckleme"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," will install the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"package-name")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"."),(0,l.kt)("p",null,"Paket kurulumunu a\u015fa\u011f\u0131daki alternatif \xf6rneklerle de yapabilirsin:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tag/etiket belirterek: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,l.kt)("li",{parentName:"ul"},"s\xfcr\xfcm belirterek: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,l.kt)("li",{parentName:"ul"},"iki s\xfcr\xfcm aral\u0131\u011f\u0131 belirterek: ",(0,l.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0<0.2.0"'))),(0,l.kt)("h3",{id:"\xe7al\u0131\u015fma-alan\u0131ndanworkspaceden-y\xfckleme"},"\xc7al\u0131\u015fma alan\u0131ndan/Workspace'den y\xfckleme"),(0,l.kt)("p",null,"Note that when adding dependencies and working within a ",(0,l.kt)("a",{parentName:"p",href:"/tr/4.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,l.kt)("a",{parentName:"p",href:"/tr/4.x/workspaces#link-workspace-packages"},(0,l.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,l.kt)("a",{parentName:"p",href:"/tr/4.x/workspaces#workspace-ranges-workspace"},(0,l.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,l.kt)("h3",{id:"yerel-dosya-sisteminden-y\xfckleme"},"Yerel dosya sisteminden y\xfckleme"),(0,l.kt)("p",null,"Yerel dosya sisteminden y\xfcklemenin iki yolu var:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"tarball dosyas\u0131 kullanarak (",(0,l.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".tar.gz")," veya ",(0,l.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,l.kt)("li",{parentName:"ol"},"bir dizini kaynak olarak belirterek")),(0,l.kt)("p",null,"\u015eu \u015fekilde:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tgz\npnpm add ./some-directory\n")),(0,l.kt)("p",null,"When you install from a directory, a symlink will be created in the current project's ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,l.kt)("h3",{id:"install-from-remote-gzipped-tarball"},"Install from remote gzipped tarball"),(0,l.kt)("p",null,'The argument must start with "http://" or "https://".'),(0,l.kt)("p",null,"\xd6rnek kullan\u0131m:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,l.kt)("h3",{id:"git-deposundan-y\xfckleme"},"Git deposundan y\xfckleme"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,l.kt)("p",null,"Paketi, Git komut sistemi ile Git deposunu klonlayarak y\xfcklemesini yapar."),(0,l.kt)("p",null,"Git sa\u011flay\u0131c\u0131lar\u0131ndan \u015fu yollar ile y\xfckleme yapabilirsin:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"varsay\u0131lan branch'in son commit'i: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,l.kt)("li",{parentName:"ul"},"hedef commit'i belirterek: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,l.kt)("li",{parentName:"ul"},"hedef branch'i belirterek: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,l.kt)("li",{parentName:"ul"},"s\xfcr\xfcm aral\u0131\u011f\u0131 belirterek: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"This will install one or more packages in your ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-dev")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-D")," will install one or more packages in your ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-optional")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-O")," will install one or more packages in your ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,l.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),(0,l.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,l.kt)("p",null,"S\xfcr\xfcm 3.2.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,l.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,l.kt)("p",null,"S\xfcr\xfcm 3.6.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-W")," flag is used. \xd6rne\u011fin, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Paketi, global olarak y\xfckler."),(0,l.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/tr/4.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"S\xfcr\xfcm 4.4.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Belirlenen paket workspace i\xe7erisinde bulundu\u011fu takdirde, hedef projeye dependency (ba\u011f) olarak y\xfckler."))}m.isMDXComponent=!0},5228:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t=n.p+"assets/images/pnpm-install-package-5a2978bb5d926b98518d1aa3d97b5122.svg"}}]);