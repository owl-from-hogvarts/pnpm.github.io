(self.webpackChunk=self.webpackChunk||[]).push([[8997],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>c});var a=t(7689);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),o=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(d.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(t),c=l,u=m["".concat(d,".").concat(c)]||m[c]||k[c]||r;return t?a.createElement(u,i(i({ref:n},s),{},{components:t})):a.createElement(u,i({ref:n},s))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4830:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,metadata:()=>d,toc:()=>o,default:()=>k});var a=t(1424),l=t(2489),r=(t(7689),t(9848)),i=["components"],p={id:"add",title:"pnpm add <pkg>",original_id:"add"},d={unversionedId:"cli/add",id:"version-4.x/cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:"Bir paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu paketleri y\xfckler. By default, any new package is installed as a prod dependency.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/tr/4.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"add",title:"pnpm add <pkg>",original_id:"add"},sidebar:"version-4.x/docs",previous:{title:"Filtering",permalink:"/tr/4.x/filtering"},next:{title:"pnpm install",permalink:"/tr/4.x/cli/install"}},o=[{value:"tl;dr",id:"tldr",children:[]},{value:"Desteklenen paket konumlar\u0131",id:"desteklenen-paket-konumlar\u0131",children:[{value:"Npm kay\u0131t defterinden y\xfckleyin",id:"npm-kay\u0131t-defterinden-y\xfckleyin",children:[]},{value:"\xc7al\u0131\u015fma alan\u0131ndan y\xfckleyin",id:"\xe7al\u0131\u015fma-alan\u0131ndan-y\xfckleyin",children:[]},{value:"Yerel dosya sisteminden y\xfckleyin",id:"yerel-dosya-sisteminden-y\xfckleyin",children:[]},{value:"Install from remote gzipped tarball",id:"install-from-remote-gzipped-tarball",children:[]},{value:"Git deposundan y\xfckleyin",id:"git-deposundan-y\xfckleyin",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--workspace",id:"--workspace",children:[]}]}],s={toc:o};function k(e){var n=e.components,p=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,p,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bir paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu paketleri y\xfckler. By default, any new package is installed as a prod dependency."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3127).Z})),(0,r.kt)("h2",{id:"tldr"},"tl;dr"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,r.kt)("td",{parentName:"tr",align:null},"save to ",(0,r.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,r.kt)("td",{parentName:"tr",align:null},"save to ",(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,r.kt)("td",{parentName:"tr",align:null},"save to ",(0,r.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify tag ",(0,r.kt)("inlineCode",{parentName:"td"},"next"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"S\xfcr\xfcm belirt ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,r.kt)("h2",{id:"desteklenen-paket-konumlar\u0131"},"Desteklenen paket konumlar\u0131"),(0,r.kt)("p",null,"A package can be installed from different locations:"),(0,r.kt)("h3",{id:"npm-kay\u0131t-defterinden-y\xfckleyin"},"Npm kay\u0131t defterinden y\xfckleyin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," will install the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"package-name")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"."),(0,r.kt)("p",null,"Paketleri \u015fu \u015fekilde de kurabilirsiniz:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"etiket: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,r.kt)("li",{parentName:"ul"},"s\xfcr\xfcm: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,r.kt)("li",{parentName:"ul"},"s\xfcr\xfcm aral\u0131\u011f\u0131: ",(0,r.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0<0.2.0"'))),(0,r.kt)("h3",{id:"\xe7al\u0131\u015fma-alan\u0131ndan-y\xfckleyin"},"\xc7al\u0131\u015fma alan\u0131ndan y\xfckleyin"),(0,r.kt)("p",null,"Note that when adding dependencies and working within a ",(0,r.kt)("a",{parentName:"p",href:"/tr/4.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,r.kt)("a",{parentName:"p",href:"/tr/4.x/workspaces#link-workspace-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,r.kt)("a",{parentName:"p",href:"/tr/4.x/workspaces#workspace-ranges-workspace"},(0,r.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,r.kt)("h3",{id:"yerel-dosya-sisteminden-y\xfckleyin"},"Yerel dosya sisteminden y\xfckleyin"),(0,r.kt)("p",null,"Yerel dosya sisteminden y\xfcklemenin iki yolu vard\u0131r:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"tarball dosyas\u0131ndan (",(0,r.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz")," veya ",(0,r.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,r.kt)("li",{parentName:"ol"},"dizinden")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tgz\npnpm add ./some-directory\n")),(0,r.kt)("p",null,"When you install from a directory, a symlink will be created in the current project's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,r.kt)("h3",{id:"install-from-remote-gzipped-tarball"},"Install from remote gzipped tarball"),(0,r.kt)("p",null,'The argument must start with "http://" or "https://".'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,r.kt)("h3",{id:"git-deposundan-y\xfckleyin"},"Git deposundan y\xfckleyin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,r.kt)("p",null,"Paketi, Git ile klonlayarak bar\u0131nd\u0131r\u0131lan Git sa\u011flay\u0131c\u0131s\u0131ndan y\xfckler."),(0,r.kt)("p",null,"Git'ten \u015fu \u015fekilde kurabilirsiniz:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"master'dan son commit: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,r.kt)("li",{parentName:"ul"},"commit: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,r.kt)("li",{parentName:"ul"},"bran\u015f: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,r.kt)("li",{parentName:"ul"},"s\xfcr\xfcm aral\u0131\u011f\u0131: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,r.kt)("p",null,"This will install one or more packages in your ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,r.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-dev")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," will install one or more packages in your ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-optional")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-O")," will install one or more packages in your ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,r.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),(0,r.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,r.kt)("p",null,"Added in: v3.2.0"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,r.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,r.kt)("p",null,"v3.6.0 ile eklendi"),(0,r.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-W")," flag is used. \xd6rne\u011fin, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,r.kt)("h3",{id:"--global"},"--global"),(0,r.kt)("p",null,"Global olarak bir paket y\xfckler."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/tr/4.x/filtering"},"Read more about filtering.")),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"Added in: v4.4.0"),(0,r.kt)("p",null,"Yeni ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 yaln\u0131zca \xe7al\u0131\u015fma alan\u0131nda bulunursa ekler."))}k.isMDXComponent=!0},3127:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});const a=t.p+"assets/images/pnpm-install-package-5a2978bb5d926b98518d1aa3d97b5122.svg"}}]);