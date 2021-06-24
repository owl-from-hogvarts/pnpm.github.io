(self.webpackChunk=self.webpackChunk||[]).push([[2817],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7689);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9268:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>m});var r=n(2791),i=n(9698),o=(n(7689),n(9848)),l=["components"],a={id:"link",title:"pnpm link"},p=void 0,c={unversionedId:"cli/link",id:"version-6.x/cli/link",isDocsHomePage:!1,title:"pnpm link",description:"Aliases: ln",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/pt/cli/link",editUrl:"https://crowdin.com/project/pnpm/pt",version:"6.x",frontMatter:{id:"link",title:"pnpm link"},sidebar:"version-6.x/docs",previous:{title:"pnpm remove",permalink:"/pt/cli/remove"},next:{title:"pnpm unlink",permalink:"/pt/cli/unlink"}},u=[{value:"Options",id:"options",children:[{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",children:[]}]}],s={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"ln")),(0,o.kt)("p",null,"Makes the current local package accessible system-wide, or in another location."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Default"),": Current working directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": Path string")),(0,o.kt)("p",null,"Changes the link location to ",(0,o.kt)("inlineCode",{parentName:"p"},"<dir>"),"."))}m.isMDXComponent=!0}}]);