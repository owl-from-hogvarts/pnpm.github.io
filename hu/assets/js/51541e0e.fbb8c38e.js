(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{181:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return p})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return l}));var a=r(3),t=r(8),o=(r(0),r(448)),i={id:"workspace",title:"Workspace",original_id:"workspace"},p={unversionedId:"workspace",id:"version-2.x/workspace",isDocsHomePage:!1,title:"Workspace",description:"pnpm supports concurrent actions in multi-package repositories (workspaces).",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-2.x/workspace.md",slug:"/workspace",permalink:"/hu/2.x/workspace",editUrl:"https://crowdin.com/project/pnpm/hu",version:"2.x",sidebar:"version-2.x/docs",previous:{title:"Continuous Integration",permalink:"/hu/2.x/continuous-integration"},next:{title:"Benchmark",permalink:"/hu/2.x/benchmark"}},c=[{value:"Linking packages inside a workspace",id:"linking-packages-inside-a-workspace",children:[]},{value:"Using a shared <code>shrinkwrap.yaml</code>",id:"using-a-shared-shrinkwrapyaml",children:[]}],s={toc:c};function l(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm supports concurrent actions in multi-package repositories (workspaces)."),Object(o.b)("p",null,"By default, when you run the ",Object(o.b)("a",{parentName:"p",href:"/hu/2.x/pnpm-recursive"},Object(o.b)("inlineCode",{parentName:"a"},"pnpm recursive [action]"))," commands, all the directories are searched for packages (directories with ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file). From ",Object(o.b)("inlineCode",{parentName:"p"},"v1.35.0"),", you can control what directories are searched by passing an array of globs to ",Object(o.b)("inlineCode",{parentName:"p"},"packages")," in ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),"."),Object(o.b)("p",null,"An example of a ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  # the root package.json\n  - '.'\n  # all packages in subdirs of packages/ and components/\n  - 'packages/**'\n  - 'components/**'\n  # exclude packages that are inside test/ directories\n  - '!**/test/**'\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," should be in the root of the workspace."),Object(o.b)("h2",{id:"linking-packages-inside-a-workspace"},"Linking packages inside a workspace"),Object(o.b)("p",null,"(This example will work with pnpm v2.14.0 or newer)"),Object(o.b)("p",null,"When working inside a workspace, you want your dependencies to be linked from the monorepo but declared as regular dependencies. Let's suppose that you have this workspace:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},".\n\u251c\u2500 pnpm-workspace.yaml\n\u2514\u2500 packages\n   \u251c\u2500 car\n   \u2514\u2500 garage\n")),Object(o.b)("p",null,"If you create a ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file in the root of your repository and set the value of ",Object(o.b)("inlineCode",{parentName:"p"},"link-workspace-packages")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", the install command will try to find packages in the repository before resolving them from the registry."),Object(o.b)("p",null,"So when you run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install car")," in ",Object(o.b)("inlineCode",{parentName:"p"},"/packages/garage"),", pnpm will link ",Object(o.b)("inlineCode",{parentName:"p"},"car")," to ",Object(o.b)("inlineCode",{parentName:"p"},"garage/node_modules/car")," from ",Object(o.b)("inlineCode",{parentName:"p"},"packages/car"),". Even though ",Object(o.b)("inlineCode",{parentName:"p"},"car")," will be linked, it will be added as a regular semver dependency to the dependencies of ",Object(o.b)("inlineCode",{parentName:"p"},"garage"),". So if the version of ",Object(o.b)("inlineCode",{parentName:"p"},"car")," in the workspace is ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.0")," then this is how the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," of ",Object(o.b)("inlineCode",{parentName:"p"},"garage")," will look like after running ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install car"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "garage",\n  "version": "1.0.0",\n  "dependencies": {\n    "car": "^1.0.0"\n  }\n}\n')),Object(o.b)("h2",{id:"using-a-shared-shrinkwrapyaml"},"Using a shared ",Object(o.b)("inlineCode",{parentName:"h2"},"shrinkwrap.yaml")),Object(o.b)("p",null,"As of v2, pnpm creates a dedicated ",Object(o.b)("inlineCode",{parentName:"p"},"shrinkwrap.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder for each workspace package by default. But from ",Object(o.b)("inlineCode",{parentName:"p"},"v2.17.0"),", it is possible to add ",Object(o.b)("a",{parentName:"p",href:"/hu/2.x/pnpm-recursive#shared-workspace-shrinkwrap"},"shared-workspace-shrinkwrap=true")," to the root ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," of your monorepo. When and ",Object(o.b)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", packages use a single ",Object(o.b)("inlineCode",{parentName:"p"},"shrinkwrap.yaml")," in the root of the monorepo. This config will be ",Object(o.b)("inlineCode",{parentName:"p"},"true")," by default from pnpm v3."))}l.isMDXComponent=!0},448:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return m}));var a=r(0),t=r.n(a);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=t.a.createContext({}),l=function(e){var n=t.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},b=function(e){var n=l(e.components);return t.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},u=t.a.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return r?t.a.createElement(m,p(p({ref:n},s),{},{components:r})):t.a.createElement(m,p({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);