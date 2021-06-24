(self.webpackChunk=self.webpackChunk||[]).push([[7198],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,v=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5714:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>s});var r=n(2791),o=n(9698),i=(n(7689),n(9848)),a=["components"],l={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Alias: rm, uninstall, un",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/it/next/cli/remove",editUrl:"https://crowdin.com/project/pnpm/it",version:"current",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"docs",previous:{title:"pnpm update",permalink:"/it/next/cli/update"},next:{title:"pnpm link",permalink:"/it/next/cli/link"}},u=[{value:"Opzioni",id:"opzioni",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],d={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alias: rm, uninstall, un"),(0,i.kt)("p",null,"Rimuove i pacchetti da ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," e dal ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," del progetto."),(0,i.kt)("h2",{id:"opzioni"},"Opzioni"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Quando usato in un ",(0,i.kt)("a",{parentName:"p",href:"/it/next/workspaces"},"workspace"),", rimuove una dipendenza (o un gruppo di dipendenze) per ogni pacchetto nel workspace."),(0,i.kt)("p",null,"Quando non \xe8 usato in un workspace, rimuove una dipendenza (o un gruppo di dipendenze) da ogni pacchetto trovato nelle sottodirectory."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Rimuove un pacchetto installato globalmente."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Rimuove la dipendenza solo da ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Rimuove la dipendenza solo da ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Rimuove la dipendenza solo da ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/it/next/filtering"},"Ulteriori informazioni sui filtri.")))}s.isMDXComponent=!0}}]);