(self.webpackChunk=self.webpackChunk||[]).push([[9757],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7689);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(t),f=i,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||l;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=s;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1296:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>s});var n=t(2791),i=t(9698),l=(t(7689),t(9848)),o=["components"],a={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"version-5.x/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0435 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/ru/5.x/cli/why",editUrl:"https://crowdin.com/project/pnpm/ru",version:"5.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-5.x/docs",previous:{title:"pnpm outdated",permalink:"/ru/5.x/cli/outdated"},next:{title:"pnpm run",permalink:"/ru/5.x/cli/run"}},u=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],d={toc:u};function s(e){var r=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0435 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u0435\u0440\u0435\u0432\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u0432 \u043f\u043e\u0434\u043f\u0430\u043f\u043a\u0430\u0445, \u0438\u043b\u0438 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u043f\u0430\u043a\u0435\u0442\u0435 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: 3.7.0"),(0,l.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0432 JSON \u0444\u043e\u0440\u043c\u0430\u0442\u0435."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e."),(0,l.kt)("h3",{id:"--parseable"},"--parseable"),(0,l.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u043c \u0434\u043b\u044f \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0435, \u0432\u043c\u0435\u0441\u0442\u043e \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0434\u0435\u0440\u0435\u0432\u0430."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0432\u043c\u0435\u0441\u0442\u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u0435\u0440\u0435\u0432\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u0435\u0440\u0435\u0432\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ru/5.x/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);