(self.webpackChunk=self.webpackChunk||[]).push([[6854],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>m,kt:()=>u});var r=t(7689);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||p;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4856:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>l,toc:()=>m,default:()=>d});var r=t(2791),a=t(9698),p=(t(7689),t(9848)),o=["components"],i={id:"pnpm-vs-npm",title:"pnpm vs npm",original_id:"pnpm-vs-npm"},s=void 0,l={unversionedId:"pnpm-vs-npm",id:"version-4.x/pnpm-vs-npm",isDocsHomePage:!1,title:"pnpm vs npm",description:"npm's flat tree",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/pnpm-vs-npm.md",sourceDirName:".",slug:"/pnpm-vs-npm",permalink:"/tr/4.x/pnpm-vs-npm",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"pnpm-vs-npm",title:"pnpm vs npm",original_id:"pnpm-vs-npm"}},m=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",children:[]},{value:"Kurulum",id:"kurulum",children:[]},{value:"Directory dependencies",id:"directory-dependencies",children:[]}],c={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"npms-flat-tree"},"npm's flat tree"),(0,p.kt)("p",null,"npm maintains a ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"flattened dependency tree")," as of version 3. This leads to less disk space bloat, with a messy ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," directory as a side effect."),(0,p.kt)("p",null,"On the other hand, pnpm manages ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," as an addressable storage in its ",(0,p.kt)("a",{parentName:"p",href:"/tr/4.x/about-package-store"},"store layout"),". This nets you the benefits of less disk space usage, while keeping your ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," clean."),(0,p.kt)("p",null,"The good thing about pnpm's proper ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," structure is that it ",(0,p.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs")," by making it impossible to use modules that are not specified in the project's ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("h2",{id:"kurulum"},"Kurulum"),(0,p.kt)("p",null,"pnpm does not allow installations of packages without saving them to ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". If no parameters are passed to ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install"),", packages are saved as regular dependencies. Like with npm, ",(0,p.kt)("inlineCode",{parentName:"p"},"--save-dev")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"--save-optional")," can be used to install packages as dev or optional dependencies."),(0,p.kt)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages when they use pnpm. That's why pnpm's implementation of the ",(0,p.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/prune"},"prune command")," does not have the possibility of prunning specific packages. pnpm's prune always removes all the extraneous packages."),(0,p.kt)("h2",{id:"directory-dependencies"},"Directory dependencies"),(0,p.kt)("p",null,"Directory dependencies are the ones that start with the ",(0,p.kt)("inlineCode",{parentName:"p"},"file:")," prefix and point to a directory in the filesystem. Like npm, pnpm symlinks those dependencies. Unlike npm, pnpm does not perform installation for the file dependencies. So if you have package ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," (in ",(0,p.kt)("inlineCode",{parentName:"p"},"home/src/foo"),"), that has a dependency ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@file:../bar"),", pnpm won't perform installation in ",(0,p.kt)("inlineCode",{parentName:"p"},"/home/src/bar"),"."),(0,p.kt)("p",null,"If you need to run installations in several packages at the same time (maybe you have a monorepo), you might want to use ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpmr"},"pnpmr"),". pnpmr searches for packages and runs ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," for them in the correct order."))}d.isMDXComponent=!0}}]);