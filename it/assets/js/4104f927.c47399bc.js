(self.webpackChunk=self.webpackChunk||[]).push([[4045],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9065:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>m});var r=t(2791),i=t(9698),l=(t(7689),t(9848)),o=["components"],a={id:"link",title:"pnpm link"},p=void 0,c={unversionedId:"cli/link",id:"version-5.x/cli/link",isDocsHomePage:!1,title:"pnpm link",description:"Alias: ln",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/it/5.x/cli/link",editUrl:"https://crowdin.com/project/pnpm/it",version:"5.x",frontMatter:{id:"link",title:"pnpm link"},sidebar:"version-5.x/docs",previous:{title:"pnpm remove",permalink:"/it/5.x/cli/remove"},next:{title:"pnpm unlink",permalink:"/it/5.x/cli/unlink"}},u=[{value:"Options",id:"options",children:[{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",children:[]}]}],s={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"ln")),(0,l.kt)("p",null,"Rende il pacchetto locale accessibile a livello di sistema, o in un'altra posizione."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link\npnpm link <pkg>\npnpm link <dir>\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default"),": Cartella di lavoro corrente"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tipo"),": Percorso string")),(0,l.kt)("p",null,"Cambia la posizione del collegamento in ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>"),"."))}m.isMDXComponent=!0}}]);