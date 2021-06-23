(self.webpackChunk=self.webpackChunk||[]).push([[2438],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7689);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,h=u["".concat(p,".").concat(f)]||u[f]||s[f]||i;return t?n.createElement(h,l(l({ref:r},d),{},{components:t})):n.createElement(h,l({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6303:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>o,metadata:()=>p,toc:()=>c,default:()=>s});var n=t(1424),a=t(2489),i=(t(7689),t(9848)),l=["components"],o={id:"why",title:"pnpm why"},p={unversionedId:"cli/why",id:"version-5.x/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"Shows all packages that depend on the specified package.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/tr/5.x/cli/why",editUrl:"https://crowdin.com/project/pnpm/tr",version:"5.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-5.x/docs",previous:{title:"pnpm outdated",permalink:"/tr/5.x/cli/outdated"},next:{title:"pnpm run",permalink:"/tr/5.x/cli/run"}},c=[{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],d={toc:c};function s(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Shows all packages that depend on the specified package."),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"S\xfcr\xfcm 3.7.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Show information in JSON format."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"Show verbose output."),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"Show parseable output instead of tree view."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Only display the dependency tree for packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Only display the dependency tree for packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tr/5.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}s.isMDXComponent=!0}}]);