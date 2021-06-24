(self.webpackChunk=self.webpackChunk||[]).push([[6941],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>c});var o=t(7689);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),c=r,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||a;return t?o.createElement(k,s(s({ref:n},p),{},{components:t})):o.createElement(k,s({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>u});var o=t(2791),r=t(9698),a=(t(7689),t(9848)),s=["components"],i={id:"symlinked-node-modules-structure",title:"Symlinked `node_modules` structure"},l=void 0,d={unversionedId:"symlinked-node-modules-structure",id:"version-6.x/symlinked-node-modules-structure",isDocsHomePage:!1,title:"Symlinked `node_modules` structure",description:"This article only describes how pnpm's node_modules are structured when there are no packages with peer dependencies. For the more complex scenario of dependencies with peers, see how peers are resolved.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/symlinked-node-modules-structure.md",sourceDirName:".",slug:"/symlinked-node-modules-structure",permalink:"/es/symlinked-node-modules-structure",editUrl:"https://crowdin.com/project/pnpm/es",version:"6.x",frontMatter:{id:"symlinked-node-modules-structure",title:"Symlinked `node_modules` structure"},sidebar:"version-6.x/docs",previous:{title:"Limitations",permalink:"/es/limitations"},next:{title:"How peers are resolved",permalink:"/es/how-peers-are-resolved"}},p=[],m={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This article only describes how pnpm's ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," are structured when there are no packages with peer dependencies. For the more complex scenario of dependencies with peers, see ",(0,a.kt)("a",{parentName:"p",href:"/es/how-peers-are-resolved"},"how peers are resolved"),"."))),(0,a.kt)("p",null,"pnpm's ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," layout uses symbolic links to create a nested structure of dependencies."),(0,a.kt)("p",null,"Every file of every package inside ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," is a hard link to the content-addressable store. Let's say you install ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," that depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),". pnpm will hard link both packages to ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2502           \u251c\u2500\u2500 index.js\n    \u2502           \u2514\u2500\u2500 package.json\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u2514\u2500\u2500 foo -> <store>/foo\n                \u251c\u2500\u2500 index.js\n                \u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,'These are the only "real" files in ',(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),". Once all the packages are hard linked to ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),", symbolic links are created to build the nested dependency graph structure."),(0,a.kt)("p",null,"As you might have noticed, both packages are hard linked into a subfolder inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder (",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo"),"). This is needed to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"allow packages to import themselves.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"foo")," should be able to ",(0,a.kt)("inlineCode",{parentName:"li"},"require('foo/package.json')")," or ",(0,a.kt)("inlineCode",{parentName:"li"},'import * as package from "foo/package.json"'),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"avoid circular symlinks.")," Dependencies of packages are placed in the same folder in which the dependent packages are. For Node.js it doesn't make a difference whether dependencies are inside the package's ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," or in any other ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," in the parent directories.")),(0,a.kt)("p",null,"The next stage of installation is symlinking dependencies. ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," is going to be symlinked to the ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),(0,a.kt)("p",null,"Next, direct dependencies are handled. ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," is going to be symlinked into the root ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder because ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," is a dependency of the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),(0,a.kt)("p",null,"This is a very simple example. However, the layout will maintain this structure regardless of the number of dependencies and the depth of the dependency graph."),(0,a.kt)("p",null,"Let's add ",(0,a.kt)("inlineCode",{parentName:"p"},"qar@2.0.0")," as a dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),". This is how the new structure will look:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 bar -> <store>/bar\n    \u2502       \u2514\u2500\u2500 qar -> ../../qar@2.0.0/node_modules/qar\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo -> <store>/foo\n    \u2502       \u251c\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u2514\u2500\u2500 qar -> ../../qar@2.0.0/node_modules/qar\n    \u2514\u2500\u2500 qar@2.0.0\n        \u2514\u2500\u2500 node_modules\n            \u2514\u2500\u2500 qar -> <store>/qar\n")),(0,a.kt)("p",null,"As you may see, even though the graph is deeper now (",(0,a.kt)("inlineCode",{parentName:"p"},"foo > bar > qar"),"), the directory depth in the file system is still the same."),(0,a.kt)("p",null,"This layout might look weird at first glance, but it is completely compatible with Node's module resolution algorithm! When resolving modules, Node ignores symlinks, so when ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," is required from ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo/index.js"),", Node does not use ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/bar"),", but instead, ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," is resolved to its real location (",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules/bar"),"). As a consequence, ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," can also resolve its dependencies which are in ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules"),"."),(0,a.kt)("p",null,"A great bonus of this layout is that only packages that are really in the dependencies are accessible. With a flattened ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),' structure, all hoisted packages are accessible. To read more about why this is an advantage, see "',(0,a.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"pnpm's strictness helps to avoid silly bugs"),'"'))}u.isMDXComponent=!0}}]);