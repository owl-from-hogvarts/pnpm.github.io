(self.webpackChunk=self.webpackChunk||[]).push([[9740],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>u,kt:()=>v});var n=t(7689);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),v=o,m=d["".concat(p,".").concat(v)]||d[v]||s[v]||i;return t?n.createElement(m,l(l({ref:r},u),{},{components:t})):n.createElement(m,l({ref:r},u))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6635:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>d});var n=t(2791),o=t(9698),i=(t(7689),t(9848)),l=["components"],a={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-6.x/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 node_modules \u0438 \u0438\u0437 package.json \u043f\u0440\u043e\u0435\u043a\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/ru/cli/remove",editUrl:"https://crowdin.com/project/pnpm/ru",version:"6.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-6.x/docs",previous:{title:"pnpm update",permalink:"/ru/cli/update"},next:{title:"pnpm link",permalink:"/ru/cli/link"}},u=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \u0438 \u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,i.kt)("p",null,"\u0410\u043b\u0438\u0430\u0441\u044b: rm, uninstall, un"),(0,i.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 ",(0,i.kt)("a",{parentName:"p",href:"/ru/workspaces"},"\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435"),", \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442(\u044c/\u0438) \u0438\u0437 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430."),(0,i.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0435 \u0432 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435, \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442(\u044c/\u0438) \u0438\u0437 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u0432 \u043f\u043e\u0434\u043f\u0430\u043f\u043a\u0430\u0445."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ru/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}d.isMDXComponent=!0}}]);