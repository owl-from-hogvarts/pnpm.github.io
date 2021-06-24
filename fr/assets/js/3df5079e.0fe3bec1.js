(self.webpackChunk=self.webpackChunk||[]).push([[1008],{9848:(e,r,n)=>{"use strict";n.d(r,{Zo:()=>s,kt:()=>f});var t=n(7689);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?t.createElement(m,p(p({ref:r},s),{},{components:n})):t.createElement(m,p({ref:r},s))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var l=2;l<i;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3801:(e,r,n)=>{"use strict";n.r(r),n.d(r,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>d});var t=n(2791),o=n(9698),i=(n(7689),n(9848)),p=["components"],a={id:"prune",title:"pnpm prune",original_id:"prune"},c=void 0,l={unversionedId:"cli/prune",id:"version-4.x/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Removes extraneous packages",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-4.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/fr/4.x/cli/prune",editUrl:"https://crowdin.com/project/pnpm/fr",version:"4.x",frontMatter:{id:"prune",title:"pnpm prune",original_id:"prune"},sidebar:"version-4.x/docs",previous:{title:"pnpm rebuild",permalink:"/fr/4.x/cli/rebuild"},next:{title:"pnpm install-test",permalink:"/fr/4.x/cli/install-test"}},s=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--prod",id:"--prod",children:[]}]}],u={toc:s};function d(e){var r=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Removes extraneous packages"),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm prune [--prod]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--prod"},"--prod"),(0,i.kt)("p",null,"Remove the packages specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."))}d.isMDXComponent=!0}}]);