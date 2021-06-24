(self.webpackChunk=self.webpackChunk||[]).push([[2335],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7689);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=p,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9017:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>m});var r=n(2791),p=n(9698),a=(n(7689),n(9848)),o=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"pnpx-cli",isDocsHomePage:!1,title:"pnpx CLI",description:"For new users",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/fr/next/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/fr",version:"current",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"docs",previous:{title:"pnpm CLI",permalink:"/fr/next/pnpm-cli"},next:{title:"Configuring",permalink:"/fr/next/configuring"}},s=[{value:"For new users",id:"for-new-users",children:[]},{value:"For npm users",id:"for-npm-users",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"for-new-users"},"For new users"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) is a command line tool that fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),(0,a.kt)("p",null,"For example, to use ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,a.kt)("p",null,"This will fetch ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments. For more information, you may want to look at ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," from npm, as it offers the same interface, except it uses ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," under the hood."),(0,a.kt)("p",null,"If you just want to run a binary of a project's dependency, see ",(0,a.kt)("a",{parentName:"p",href:"/fr/next/cli/exec"},"pnpm exec"),"."),(0,a.kt)("h2",{id:"for-npm-users"},"For npm users"),(0,a.kt)("p",null,"npm has a great package runner called ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}m.isMDXComponent=!0}}]);