(self.webpackChunk=self.webpackChunk||[]).push([[9495],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2847:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>l,toc:()=>u,default:()=>m});var r=n(2791),o=n(9698),a=(n(7689),n(9848)),i=["components"],c={title:"Node-Modules configuration options with pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},p=void 0,l={permalink:"/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",source:"@site/blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Node-Modules configuration options with pnpm",description:"There are many ways to create a node_modules directory.",date:"2020-10-17T00:00:00.000Z",formattedDate:"October 17, 2020",tags:[],readingTime:1.86,truncated:!0,nextItem:{title:"Flat node_modules is not the only way",permalink:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are many ways to create a node_modules directory.\nYour goal must be to create the most strict one but if that is not possible,\nthere are options to make a loose node_modules as well."))}m.isMDXComponent=!0}}]);