(self.webpackChunk=self.webpackChunk||[]).push([[5657],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||p;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},881:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>d});var r=t(2791),o=t(9698),p=(t(7689),t(9848)),a=["components"],i={id:"pnpm-run",title:"pnpm run",original_id:"pnpm-run"},c=void 0,l={unversionedId:"pnpm-run",id:"version-4.x/pnpm-run",isDocsHomePage:!1,title:"pnpm run",description:"Runs a defined package script.",source:"@site/versioned_docs/version-4.x/pnpm-run.md",sourceDirName:".",slug:"/pnpm-run",permalink:"/4.x/pnpm-run",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-4.x/pnpm-run.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"3/7/2021",frontMatter:{id:"pnpm-run",title:"pnpm run",original_id:"pnpm-run"}},s=[],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Runs a defined package script."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm run <command> [-- <args>...]\n")),(0,p.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run")," adds ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\nto the ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace,\n",(0,p.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool\nis installed in the workspace root, it may be called in any workspace package's ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts"),"."))}d.isMDXComponent=!0}}]);