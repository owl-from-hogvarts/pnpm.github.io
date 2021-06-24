(self.webpackChunk=self.webpackChunk||[]).push([[2264],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),y=o,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7309:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>m});var r=n(2791),o=n(9698),a=(n(7689),n(9848)),i=["components"],p={id:"releasing-apps",title:"Releasing apps",original_id:"releasing-apps"},l=void 0,s={unversionedId:"releasing-apps",id:"version-4.x/releasing-apps",isDocsHomePage:!1,title:"Releasing apps",description:"There are two ways to release an app with pnpm. One way is to commit pnpm-lock.yaml into your repo. Which we recommend doing anyway. And then in prod you'll have just to run pnpm install. You'll be sure in that case that the same dependencies will be used, with which you tested your app in other environments.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/releasing-apps.md",sourceDirName:".",slug:"/releasing-apps",permalink:"/hu/4.x/releasing-apps",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",frontMatter:{id:"releasing-apps",title:"Releasing apps",original_id:"releasing-apps"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two ways to release an app with pnpm. One way is to commit ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," into your repo. Which we recommend doing anyway. And then in prod you'll have just to run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),". You'll be sure in that case that the same dependencies will be used, with which you tested your app in other environments."),(0,a.kt)("p",null,"If you'd like to copy packages to prod, you'll have to commit ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," anyway. And you'll have to copy paste the global store to production. The global store location is configurable via the ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," config key. Then you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --offline")," in your app and pnpm will be using packages that are already in the global store without making any requests to the npm registry."))}m.isMDXComponent=!0}}]);