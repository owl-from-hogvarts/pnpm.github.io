(self.webpackChunk=self.webpackChunk||[]).push([[8346],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7689);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8635:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>a,metadata:()=>p,toc:()=>c,default:()=>s});var n=t(1424),i=t(2489),l=(t(7689),t(9848)),o=["components"],a={id:"link",title:"pnpm link"},p={unversionedId:"cli/link",id:"version-6.x/cli/link",isDocsHomePage:!1,title:"pnpm link",description:"Aliases: ln",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/tr/cli/link",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",frontMatter:{id:"link",title:"pnpm link"},sidebar:"version-6.x/docs",previous:{title:"pnpm remove",permalink:"/tr/cli/remove"},next:{title:"pnpm unlink",permalink:"/tr/cli/unlink"}},c=[{value:"Parametreler",id:"parametreler",children:[{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",children:[]}]}],u={toc:c};function s(e){var r=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"ln")),(0,l.kt)("p",null,"Makes the current local package accessible system-wide, or in another location."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default"),": Current working directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type"),": Path string")),(0,l.kt)("p",null,"Changes the link location to ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>"),"."))}s.isMDXComponent=!0}}]);