(self.webpackChunk=self.webpackChunk||[]).push([[8303],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7689);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},579:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>o,metadata:()=>c,toc:()=>p,default:()=>s});var n=r(1424),i=r(2489),l=(r(7689),r(9848)),a=["components"],o={id:"link",title:"pnpm link"},c={unversionedId:"cli/link",id:"cli/link",isDocsHomePage:!1,title:"pnpm link",description:"Aliases: ln",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/tr/next/cli/link",editUrl:"https://crowdin.com/project/pnpm/tr",version:"current",frontMatter:{id:"link",title:"pnpm link"},sidebar:"docs",previous:{title:"pnpm remove",permalink:"/tr/next/cli/remove"},next:{title:"pnpm unlink",permalink:"/tr/next/cli/unlink"}},p=[{value:"Parametreler",id:"parametreler",children:[{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",children:[]}]}],u={toc:p};function s(e){var t=e.components,r=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"ln")),(0,l.kt)("p",null,"Makes the current local package accessible system-wide, or in another location."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default"),": Current working directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type"),": Path string")),(0,l.kt)("p",null,"Changes the link location to ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>"),"."))}s.isMDXComponent=!0}}]);