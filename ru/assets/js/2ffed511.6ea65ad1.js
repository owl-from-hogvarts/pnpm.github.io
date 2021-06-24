(self.webpackChunk=self.webpackChunk||[]).push([[395],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9273:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>m,default:()=>c});var r=n(2791),o=n(9698),l=(n(7689),n(9848)),a=["components"],i={id:"uninstall",title:"Uninstalling pnpm"},p=void 0,s={unversionedId:"uninstall",id:"version-6.x/uninstall",isDocsHomePage:!1,title:"Uninstalling pnpm",description:"Removing the globally installed packages",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/ru/uninstall",editUrl:"https://crowdin.com/project/pnpm/ru",version:"6.x",frontMatter:{id:"uninstall",title:"Uninstalling pnpm"},sidebar:"version-6.x/docs",previous:{title:"How peers are resolved",permalink:"/ru/how-peers-are-resolved"}},m=[{value:"Removing the globally installed packages",id:"removing-the-globally-installed-packages",children:[]},{value:"Removing the pnpm CLI",id:"removing-the-pnpm-cli",children:[]},{value:"Removing the global content-addressable store",id:"removing-the-global-content-addressable-store",children:[]},{value:"Removing the state file",id:"removing-the-state-file",children:[]}],u={toc:m};function c(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"removing-the-globally-installed-packages"},"Removing the globally installed packages"),(0,l.kt)("p",null,"Before removing the pnpm CLI, it might make sense to remove all globall packages that were installed by pnpm."),(0,l.kt)("p",null,"To list all the global packages, run ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". There are two ways to remove the global packages:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," with each global package listed."),(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," to find the location of the global directory and remove it manually.")),(0,l.kt)("h2",{id:"removing-the-pnpm-cli"},"Removing the pnpm CLI"),(0,l.kt)("p",null,"If you used the standalone script to install pnpm (or npx), then you should be able to uninstall the pnpm CLI using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,l.kt)("p",null,"If you used npm to install pnpm, then you should use npm to uninstall pnpm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,l.kt)("h2",{id:"removing-the-global-content-addressable-store"},"Removing the global content-addressable store"),(0,l.kt)("p",null,"If you used pnpm only in the primary disk, then you will have a global store in the home directory. So just remove it via:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,l.kt)("p",null,"If you used pnpm in non-primary disks, then the store is in the root of that disk. For instance, if you used pnpm on disk ",(0,l.kt)("inlineCode",{parentName:"p"},"D:")," on Windows, remove the store from ",(0,l.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,l.kt)("h2",{id:"removing-the-state-file"},"Removing the state file"),(0,l.kt)("p",null,"pnpm also saves some state in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". You may remove this file."))}c.isMDXComponent=!0}}]);