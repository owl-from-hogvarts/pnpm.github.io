(self.webpackChunk=self.webpackChunk||[]).push([[9457],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7689);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=l(t),m=a,d=k["".concat(s,".").concat(m)]||k[m]||u[m]||o;return t?r.createElement(d,p(p({ref:n},c),{},{components:t})):r.createElement(d,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=k;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2303:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>l,toc:()=>c,default:()=>k});var r=t(2791),a=t(9698),o=(t(7689),t(9848)),p=["components"],i={id:"workspace",title:"Workspace",original_id:"workspace"},s=void 0,l={unversionedId:"workspace",id:"version-4.x/workspace",isDocsHomePage:!1,title:"Workspace",description:"pnpm supports concurrent actions in multi-package repositories (workspaces).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/workspace.md",sourceDirName:".",slug:"/workspace",permalink:"/es/4.x/workspace",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",frontMatter:{id:"workspace",title:"Workspace",original_id:"workspace"}},c=[{value:"Workspace ranges (workspace:)",id:"workspace-ranges-workspace",children:[]},{value:"Publishing workspace packages",id:"publishing-workspace-packages",children:[]}],u={toc:c};function k(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm supports concurrent actions in multi-package repositories (workspaces)."),(0,o.kt)("p",null,"By default, when you run the ",(0,o.kt)("a",{parentName:"p",href:"/es/4.x/pnpm-recursive"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm recursive [action]"))," commands, all the directories are searched for packages (directories with ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file). You can control what directories are searched by passing an array of globs to ",(0,o.kt)("inlineCode",{parentName:"p"},"packages")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),"."),(0,o.kt)("p",null,"An example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  # the root package.json\n  - '.'\n  # all packages in subdirs of packages/ and components/\n  - 'packages/**'\n  - 'components/**'\n  # exclude packages that are inside test/ directories\n  - '!**/test/**'\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," should be in the root of the workspace."),(0,o.kt)("h2",{id:"workspace-ranges-workspace"},"Workspace ranges (workspace:)"),(0,o.kt)("p",null,"Supported since v3.7.0."),(0,o.kt)("p",null,"By default, pnpm will link packages from the workspace if the available packages match the declared ranges. For instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in dependencies. But if ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace then ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),(0,o.kt)("p",null,"Luckily, pnpm supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol (same as in Yarn v2). When this protocol is used pnpm will refuse to resolve to anything else than a local workspace package. So if you set ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"')," installation will fail telling that no ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," is present in the workspace."),(0,o.kt)("h2",{id:"publishing-workspace-packages"},"Publishing workspace packages"),(0,o.kt)("p",null,"When a workspace package is packed into an archive (whether it's through ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,o.kt)("inlineCode",{parentName:"li"},"*"),")"),(0,o.kt)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),(0,o.kt)("p",null,"So for example, if we assume we have three workspace packages whose current version is ",(0,o.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "workspace:*",\n    "bar": "workspace:^1.2.3"\n  }\n}\n')),(0,o.kt)("p",null,"Will be transformed into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "1.5.0",\n    "bar": "^1.2.3"\n  }\n}\n')),(0,o.kt)("p",null,"This feature allows you to not have to depend on something else than your local workspace packages, while still being able to publish the resulting packages to the remote registry without having to run intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefiting from the guarantees semver offers."))}k.isMDXComponent=!0}}]);