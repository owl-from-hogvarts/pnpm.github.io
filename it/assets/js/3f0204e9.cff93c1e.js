(self.webpackChunk=self.webpackChunk||[]).push([[5835],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7689);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2199:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>m});var r=n(2791),i=n(9698),o=(n(7689),n(9848)),l=["components"],a={id:"unlink",title:"pnpm unlink"},c=void 0,p={unversionedId:"cli/unlink",id:"version-5.x/cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Scollega un pacchetto a livello di sistema (operazione inversa di pnpm link).",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/it/5.x/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/it",version:"5.x",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"version-5.x/docs",previous:{title:"pnpm link",permalink:"/it/5.x/cli/link"},next:{title:"pnpm import",permalink:"/it/5.x/cli/import"}},s=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Scollega un pacchetto a livello di sistema (operazione inversa di ",(0,o.kt)("a",{parentName:"p",href:"/it/5.x/cli/link"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,o.kt)("p",null,"Se chiamato senza parametri, tutte le dipendenze collegate verranno scollegate."),(0,o.kt)("p",null,"\xc8 simile a ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", anche se pnpm reinstalla le dipendenze dopo aver rimosso i link esterni."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Esegue lo scollegamento per ogni pacchetto trovato in sottodirectory o in ogni pacchetto all'interno del workspace, se eseguito in un ",(0,o.kt)("a",{parentName:"p",href:"/it/5.x/workspaces"},"workspace"),"."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/it/5.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);