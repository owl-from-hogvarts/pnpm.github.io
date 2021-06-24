(self.webpackChunk=self.webpackChunk||[]).push([[1466],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9545:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var r=n(2791),a=n(9698),l=(n(7689),n(9848)),i=["components"],o={id:"recursive",title:"pnpm recursive",original_id:"recursive"},p=void 0,c={unversionedId:"cli/recursive",id:"version-4.x/cli/recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"tl;dr",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/es/4.x/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",frontMatter:{id:"recursive",title:"pnpm recursive",original_id:"recursive"},sidebar:"version-4.x/docs",previous:{title:"pnpm publish",permalink:"/es/4.x/cli/publish"},next:{title:"pnpm server",permalink:"/es/4.x/cli/server"}},s=[{value:"tl;dr",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"workspace-concurrency",id:"workspace-concurrency",children:[]},{value:"bail",id:"bail",children:[]},{value:"sort",id:"sort",children:[]}]},{value:"pnpm recursive exec",id:"pnpm-recursive-exec",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tldr"},"tl;dr"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm install -r")),(0,l.kt)("td",{parentName:"tr",align:null},"runs installation for every package in every subfolder")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm run build --filter foo-*")),(0,l.kt)("td",{parentName:"tr",align:null},"builds all packages with names that start with ",(0,l.kt)("inlineCode",{parentName:"td"},"foo-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm update -- login-page...")),(0,l.kt)("td",{parentName:"tr",align:null},"updates dependencies in ",(0,l.kt)("inlineCode",{parentName:"td"},"login-page")," and any dependencies of ",(0,l.kt)("inlineCode",{parentName:"td"},"login-page")," that are also in the repository")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/es/4.x/filtering"},"Read more about filtering.")),(0,l.kt)("h3",{id:"workspace-concurrency"},"workspace-concurrency"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"4")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"Set the maximum number of concurrency. For unlimited concurrency use ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,l.kt)("h3",{id:"bail"},"bail"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If true, stops when a task throws an error."),(0,l.kt)("p",null,"This config does not affect the exit code. Even if ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-bail")," is used, all tasks will finish but if any of the tasks fail, the command will exit with a non-zero code."),(0,l.kt)("p",null,"Usage example. Run tests in every package. Continue if tests fail in one of the packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm recursive test --no-bail\n")),(0,l.kt)("h3",{id:"sort"},"sort"),(0,l.kt)("p",null,"Added in: v2.14.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents). Pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive test --no-sort\n")),(0,l.kt)("h2",{id:"pnpm-recursive-exec"},"pnpm recursive exec"),(0,l.kt)("p",null,"Added in: v2.9.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-test"},"pnpm recursive exec -- <command> [args...]\n")),(0,l.kt)("p",null,"This command runs a command in each package of the monorepo."),(0,l.kt)("p",null,"The name of the current package is available through the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0)."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive exec -- rm -rf node_modules\npnpm recursive exec -- pnpm view $PNPM_PACKAGE_NAME\n")))}d.isMDXComponent=!0}}]);