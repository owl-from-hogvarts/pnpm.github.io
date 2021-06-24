(self.webpackChunk=self.webpackChunk||[]).push([[4252],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7689);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,m=u["".concat(o,".").concat(k)]||u[k]||c[k]||i;return n?a.createElement(m,p(p({ref:t},s),{},{components:n})):a.createElement(m,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var d=2;d<i;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1392:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>d,toc:()=>s,default:()=>u});var a=n(2791),r=n(9698),i=(n(7689),n(9848)),p=["components"],l={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"version-5.x/cli/update",isDocsHomePage:!1,title:"pnpm update",description:"Aliases: up",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-5.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/hu/5.x/cli/update",editUrl:"https://crowdin.com/project/pnpm/hu",version:"5.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-5.x/docs",previous:{title:"pnpm install",permalink:"/hu/5.x/cli/install"},next:{title:"pnpm remove",permalink:"/hu/5.x/cli/remove"}},s=[{value:"TL;DR",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--latest, -L",id:"--latest--l",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--interactive, -i",id:"--interactive--i",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"up")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified range."),(0,i.kt)("p",null,"When used without arguments, updates all dependencies. You can use patterns to update specific dependencies."),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,i.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, adhering to ranges specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,i.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, ignoring ranges specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,i.kt)("td",{parentName:"tr",align:null},"Updates ",(0,i.kt)("inlineCode",{parentName:"td"},"foo")," to the latest version on v2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,i.kt)("td",{parentName:"tr",align:null},"Updates all dependencies under the ",(0,i.kt)("inlineCode",{parentName:"td"},"@babel")," scope")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Concurrently runs update in all subdirectories with a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,i.kt)("p",null,"Usage examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,i.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,i.kt)("p",null,"Added in: v3.2.0"),(0,i.kt)("p",null,"Ignores the version range specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Update global packages."),(0,i.kt)("h3",{id:"--workspace"},"--workspace"),(0,i.kt)("p",null,"Added in: v4.4.0"),(0,i.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,i.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",(0,i.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package: ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Only update packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Only update packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Don't update packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,i.kt)("p",null,"Added in: v4.8.0"),(0,i.kt)("p",null,"Show outdated dependencies and select which ones to update."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/hu/5.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);