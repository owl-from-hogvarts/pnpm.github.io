(self.webpackChunk=self.webpackChunk||[]).push([[6243],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7689);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1971:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>m});var r=t(2791),a=t(9698),l=(t(7689),t(9848)),i=["components"],o={id:"recursive",title:"pnpm recursive"},p=void 0,s={unversionedId:"cli/recursive",id:"version-5.x/cli/recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"Runs a pnpm command recursively on all subdirectories in the package or every available workspace. Currently, only the following commands can be used recursively: add, exec, install, list, outdated, publish, rebuild, remove, run, test, unlink, update, why",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-5.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/fr/5.x/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/fr",version:"5.x",frontMatter:{id:"recursive",title:"pnpm recursive"},sidebar:"version-5.x/docs",previous:{title:"pnpm publish",permalink:"/fr/5.x/cli/publish"},next:{title:"pnpm server",permalink:"/fr/5.x/cli/server"}},c=[{value:"Options",id:"options",children:[{value:"--link-workspace-packages",id:"--link-workspace-packages",children:[]},{value:"--workspace-concurrency",id:"--workspace-concurrency",children:[]},{value:"--no-bail",id:"--no-bail",children:[]},{value:"--no-sort",id:"--no-sort",children:[]},{value:"--reverse",id:"--reverse",children:[]}]},{value:"pnpm -r exec",id:"pnpm--r-exec",children:[{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Runs a pnpm command recursively on all subdirectories in the package or every available workspace. Currently, only the following commands can be used recursively: ",(0,l.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"outdated"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"rebuild"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"unlink"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"why")),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,l.kt)("p",null,"Link locally available packages in workspaces of a monorepo into ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of re-downloading them from the registry. This emulates functionality similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,l.kt)("p",null,"When this is set to deep, local packages can also be linked to subdependencies."),(0,l.kt)("p",null,"Be advised that it is encouraged instead to use ",(0,l.kt)("a",{parentName:"p",href:"/fr/5.x/workspaces#link-workspace-packages"},"npmrc")," for this setting, to enforce the same behaviour in all environments. This option exists solely so you may override that if necessary."),(0,l.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"4")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"Set the maximum number of tasks to run simultaneously. For unlimited concurrency use ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,l.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If true, stops when a task throws an error."),(0,l.kt)("p",null,"This config does not affect the exit code. Even if ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-bail")," is used, all tasks will finish but if any of the tasks fail, the command will exit with a non-zero code."),(0,l.kt)("p",null,"Example (run tests in every package, continue if tests fail in one of them):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,l.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,l.kt)("p",null,"Added in: v2.14.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents). Pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,l.kt)("h3",{id:"--reverse"},"--reverse"),(0,l.kt)("p",null,"Added in: v5.17.1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the order of packages is reversed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,l.kt)("h2",{id:"pnpm--r-exec"},"pnpm -r exec"),(0,l.kt)("p",null,"Added in: v2.9.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r exec -- <command> [args...]\n")),(0,l.kt)("p",null,"This command runs a command in each package of the monorepo."),(0,l.kt)("p",null,"The name of the current package is available through the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/fr/5.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);