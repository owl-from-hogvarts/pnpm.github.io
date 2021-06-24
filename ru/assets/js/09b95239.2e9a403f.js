(self.webpackChunk=self.webpackChunk||[]).push([[7703],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||p;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9057:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>l,toc:()=>u,default:()=>d});var r=t(2791),o=t(9698),p=(t(7689),t(9848)),i=["components"],a={id:"pnpm-run",title:"pnpm run",original_id:"pnpm-run"},c=void 0,l={unversionedId:"pnpm-run",id:"version-4.x/pnpm-run",isDocsHomePage:!1,title:"pnpm run",description:"Runs a defined package script.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/pnpm-run.md",sourceDirName:".",slug:"/pnpm-run",permalink:"/ru/4.x/pnpm-run",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",frontMatter:{id:"pnpm-run",title:"pnpm run",original_id:"pnpm-run"}},u=[],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Runs a defined package script."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm run <command> [-- <args>...]\n")),(0,p.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run")," adds ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," to the ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace, ",(0,p.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts"),"."))}d.isMDXComponent=!0}}]);