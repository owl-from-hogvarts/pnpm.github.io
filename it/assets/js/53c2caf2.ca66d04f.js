(self.webpackChunk=self.webpackChunk||[]).push([[4275],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7689);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3394:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>a,metadata:()=>l,toc:()=>u,default:()=>d});var r=n(2791),i=n(9698),o=(n(7689),n(9848)),p=["components"],c={id:"prune",title:"pnpm prune",original_id:"prune"},a=void 0,l={unversionedId:"cli/prune",id:"version-4.x/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Removes extraneous packages",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-4.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/it/4.x/cli/prune",editUrl:"https://crowdin.com/project/pnpm/it",version:"4.x",frontMatter:{id:"prune",title:"pnpm prune",original_id:"prune"},sidebar:"version-4.x/docs",previous:{title:"pnpm rebuild",permalink:"/it/4.x/cli/rebuild"},next:{title:"pnpm install-test",permalink:"/it/4.x/cli/install-test"}},u=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--prod",id:"--prod",children:[]}]}],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Removes extraneous packages"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm prune [--prod]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--prod"},"--prod"),(0,o.kt)("p",null,"Rimuove i pacchetti specificati nelle ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."))}d.isMDXComponent=!0}}]);