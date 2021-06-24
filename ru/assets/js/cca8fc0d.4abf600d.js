(self.webpackChunk=self.webpackChunk||[]).push([[3136],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),h=o,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return t?a.createElement(u,r(r({ref:n},d),{},{components:t})):a.createElement(u,r({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9893:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>l,toc:()=>d,default:()=>m});var a=t(2791),o=t(9698),i=(t(7689),t(9848)),r=["components"],s={id:"faq",title:"\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b",original_id:"faq"},p=void 0,l={unversionedId:"faq",id:"version-4.x/faq",isDocsHomePage:!1,title:"\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b",description:"Why does my node_modules folder use disk space if packages are stored in a global store?",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/ru/4.x/faq",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",frontMatter:{id:"faq",title:"\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b",original_id:"faq"}},d=[{value:"Why does my <code>node_modules</code> folder use disk space if packages are stored in a global store?",id:"why-does-my-node_modules-folder-use-disk-space-if-packages-are-stored-in-a-global-store",children:[]},{value:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043b\u0438 \u0432 Windows? It is harder to create symlinks on Windows",id:"\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442-\u043b\u0438-\u0432-windows-it-is-harder-to-create-symlinks-on-windows",children:[]},{value:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043b\u0438 \u0432 Windows? Nested <code>node_modules</code> approach is basically incompatible with Windows",id:"\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442-\u043b\u0438-\u0432-windows-nested-node_modules-approach-is-basically-incompatible-with-windows",children:[]},{value:"\u0410 \u043a\u0430\u043a \u043d\u0430\u0441\u0447\u0435\u0442 \u0437\u0430\u0446\u0438\u043a\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0441\u044b\u043b\u043e\u043a?",id:"\u0430-\u043a\u0430\u043a-\u043d\u0430\u0441\u0447\u0435\u0442-\u0437\u0430\u0446\u0438\u043a\u043b\u0435\u043d\u043d\u044b\u0445-\u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445-\u0441\u0441\u044b\u043b\u043e\u043a",children:[]},{value:"Why have hard links at all? Why not symlink directly to the global store?",id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store",children:[]},{value:"Does pnpm work across multiple hard drives or filesystems?",id:"does-pnpm-work-across-multiple-hard-drives-or-filesystems",children:[{value:"\u0423\u043a\u0430\u0437\u0430\u043d \u043f\u0443\u0442\u044c \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443",id:"\u0443\u043a\u0430\u0437\u0430\u043d-\u043f\u0443\u0442\u044c-\u043a-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443",children:[]},{value:"Store path is NOT specified",id:"store-path-is-not-specified",children:[]}]},{value:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 <code>pnpm store prune</code>? \u042d\u0442\u043e \u043e\u043f\u0430\u0441\u043d\u043e?",id:"\u0447\u0442\u043e-\u0434\u0435\u043b\u0430\u0435\u0442-pnpm-store-prune-\u044d\u0442\u043e-\u043e\u043f\u0430\u0441\u043d\u043e",children:[]},{value:"What does <code>pnpm</code> stand for?",id:"what-does-pnpm-stand-for",children:[]},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",children:[{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 1",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 2",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 3",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3",children:[]}]}],c={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-does-my-node_modules-folder-use-disk-space-if-packages-are-stored-in-a-global-store"},"Why does my ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," folder use disk space if packages are stored in a global store?"),(0,i.kt)("p",null,"pnpm creates ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"hard links")," from the global store to project's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folders. Hard links point to the same place on the disk where the original files are. So, for example, if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," in your project as a dependency and it occupies 1MB of space, then it will look like it occupies 1MB of space in the project's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder and the same amount of space in the global store. However, that 1MB is ",(0,i.kt)("em",{parentName:"p"},"the same space")," on the disk addressed from two different locations. So in total ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," occupies 1MB, not 2MB."),(0,i.kt)("p",null,"For more on this subject:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Why do hard links seem to take the same space as the originals?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"A thread from the pnpm chat room")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"An issue in the pnpm repo"))),(0,i.kt)("h2",{id:"\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442-\u043b\u0438-\u0432-windows-it-is-harder-to-create-symlinks-on-windows"},"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043b\u0438 \u0432 Windows? It is harder to create symlinks on Windows"),(0,i.kt)("p",null,"Using symlinks on Windows is problematic indeed. That is why pnpm uses junctions instead of symlinks on Windows OS."),(0,i.kt)("h2",{id:"\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442-\u043b\u0438-\u0432-windows-nested-node_modules-approach-is-basically-incompatible-with-windows"},"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043b\u0438 \u0432 Windows? Nested ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," approach is basically incompatible with Windows"),(0,i.kt)("p",null,"Early versions of npm had issues because of nesting all ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"Node's nested node_modules approach is basically incompatible with Windows"),"). However, pnpm does not create deep folders, it stores all packages flatly and uses symlinks to create the dependency tree structure."),(0,i.kt)("h2",{id:"\u0430-\u043a\u0430\u043a-\u043d\u0430\u0441\u0447\u0435\u0442-\u0437\u0430\u0446\u0438\u043a\u043b\u0435\u043d\u043d\u044b\u0445-\u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445-\u0441\u0441\u044b\u043b\u043e\u043a"},"\u0410 \u043a\u0430\u043a \u043d\u0430\u0441\u0447\u0435\u0442 \u0437\u0430\u0446\u0438\u043a\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0441\u044b\u043b\u043e\u043a?"),(0,i.kt)("p",null,"Although pnpm uses symlinks to put dependencies into ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folders, circular symlinks are avoided because parent packages are placed into the same ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder in which their dependencies are. So ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies are not in ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/node_modules")," but ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," is in ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/foo"),", together with its own dependencies."),(0,i.kt)("h2",{id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store"},"Why have hard links at all? Why not symlink directly to the global store?"),(0,i.kt)("p",null,"One package can have different sets of dependencies on one machine."),(0,i.kt)("p",null,"In project ",(0,i.kt)("strong",{parentName:"p"},"A")," ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have dependency resolved to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," but in project ",(0,i.kt)("strong",{parentName:"p"},"B")," the same dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," might resolve to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),". So pnpm hard links ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to create different sets of dependencies for it."),(0,i.kt)("p",null,"Direct symlinking to the global store would work with Node's ",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag. But ",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," comes with a bunch of different issues, so we decided to stick with hard links. For more details about why this decision was made, see: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"https://github.com/nodejs/node-eps/issues/46"),"."),(0,i.kt)("h2",{id:"does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"Does pnpm work across multiple hard drives or filesystems?"),(0,i.kt)("p",null,"The package store should be on the same disk as installations. Otherwise packages will be copied, not linked. This is due to a OS limitation in hard-linking. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),(0,i.kt)("p",null,"pnpm functions differently based on the 2 cases below:"),(0,i.kt)("h3",{id:"\u0443\u043a\u0430\u0437\u0430\u043d-\u043f\u0443\u0442\u044c-\u043a-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443"},"\u0423\u043a\u0430\u0437\u0430\u043d \u043f\u0443\u0442\u044c \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443"),(0,i.kt)("p",null,"If the store path is specified via ",(0,i.kt)("a",{parentName:"p",href:"/ru/4.x/configuring"},"the store config"),", then copying occurs between the store and any projects that are on a different disk."),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"D:"),", then the pnpm store must be on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"D:"),". If the pnpm store is located on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"C:"),", then all required packages will be directly copied to the project location. This severely reduces the benefits of pnpm."),(0,i.kt)("h3",{id:"store-path-is-not-specified"},"Store path is NOT specified"),(0,i.kt)("p",null,"If the store path is not set, then multiple stores are created (one per each drive or filesystem)."),(0,i.kt)("p",null,"If installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"D:"),", the store will be created in ",(0,i.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),". If later the installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"C:"),", an independent store will be created in ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\.pnpm-store"),". The projects would still maintain the benefits of pnpm, but each drive may have redundant packages."),(0,i.kt)("h2",{id:"\u0447\u0442\u043e-\u0434\u0435\u043b\u0430\u0435\u0442-pnpm-store-prune-\u044d\u0442\u043e-\u043e\u043f\u0430\u0441\u043d\u043e"},"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm store prune"),"? \u042d\u0442\u043e \u043e\u043f\u0430\u0441\u043d\u043e?"),(0,i.kt)("p",null,"The command ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," removes ",(0,i.kt)("em",{parentName:"p"},"unreferenced packages"),"."),(0,i.kt)("p",null,"Unreferenced packages are packages that are not used by any projects on the system. Packages can become unreferenced after most installation operations."),(0,i.kt)("p",null,"For example: during ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),", package ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages. If package ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced. Running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your projects. If future installations require removed packages, pnpm will download them again."),(0,i.kt)("p",null,"It is best practice to run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Sometimes, unreferenced packages become required again. This could occur when switching branches and installing older dependencies. Then pnpm would need to re-download all removed packages, briefly slowing down the installation process."),(0,i.kt)("h2",{id:"what-does-pnpm-stand-for"},"What does ",(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," stand for?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," stands for ",(0,i.kt)("inlineCode",{parentName:"p"},"performant npm"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"Rico Sta. Cruz")," came up with the name."),(0,i.kt)("h2",{id:"pnpm-does-not-work-with-your-project-here"},(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," does not work with ","<","YOUR-PROJECT-HERE",">","?"),(0,i.kt)("p",null,"In most cases it means that one of the dependencies require packages not declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It is a common mistake caused by flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the dependency should be fixed. That might take time though, so pnpm supports workarounds to make the buggy packages work."),(0,i.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 1"),(0,i.kt)("p",null,"In the following example, a dependency does ",(0,i.kt)("strong",{parentName:"p"},"not")," have the ",(0,i.kt)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),(0,i.kt)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",(0,i.kt)("strong",{parentName:"p"},"add ",(0,i.kt)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",(0,i.kt)("inlineCode",{parentName:"strong"},"package.json")),"."),(0,i.kt)("p",null,"You can do so, by installing it via:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm i iterall")),(0,i.kt)("p",null,"It will be automatically added to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,i.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 2"),(0,i.kt)("p",null,"One of the solutions is to use ",(0,i.kt)("a",{parentName:"p",href:"/ru/4.x/pnpmfile#hooks"},"hooks")," for adding the missing dependencies to the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("p",null,"An example was ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," now."),(0,i.kt)("p",null,"It used to throw an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/.registry.npmjs.org/inspectpack/2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,i.kt)("p",null,"The problem was that ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack")," library which was used by ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),". But ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,i.kt)("p",null,"Solution was to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," with the following contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage (pkg) {\n      switch (pkg.name) {\n        case 'inspectpack':\n          pkg.dependencies['babel-traverse'] = '^6.26.0'\n          break\n      }\n      return pkg\n    }\n  }\n}\n")),(0,i.kt)("p",null,"After creating ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpmfile.js"),", delete ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only. No need to delete ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". Then install the dependencies & it should be working."),(0,i.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 3"),(0,i.kt)("p",null,"In case there are too many issues, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"shamefully-hoist")," config. This creates a flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}m.isMDXComponent=!0}}]);