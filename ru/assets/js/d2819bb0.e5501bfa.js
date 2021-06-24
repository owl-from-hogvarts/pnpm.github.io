(self.webpackChunk=self.webpackChunk||[]).push([[3581],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,k=s["".concat(o,".").concat(m)]||s[m]||u[m]||p;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<p;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1442:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>d,toc:()=>c,default:()=>s});var r=n(2791),a=n(9698),p=(n(7689),n(9848)),l=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"version-5.x/cli/update",isDocsHomePage:!1,title:"pnpm update",description:"\u0410\u043b\u0438\u0430\u0441\u044b: up",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/ru/5.x/cli/update",editUrl:"https://crowdin.com/project/pnpm/ru",version:"5.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-5.x/docs",previous:{title:"pnpm install",permalink:"/ru/5.x/cli/install"},next:{title:"pnpm remove",permalink:"/ru/5.x/cli/remove"}},c=[{value:"TL;DR",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--latest, -L",id:"--latest--l",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--interactive, -i",id:"--interactive--i",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u0410\u043b\u0438\u0430\u0441\u044b: ",(0,p.kt)("inlineCode",{parentName:"p"},"up")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm update")," \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b \u0434\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430."),(0,p.kt)("p",null,"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0431\u0435\u0437 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."),(0,p.kt)("h2",{id:"tldr"},"TL;DR"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,p.kt)("th",{parentName:"tr",align:null},"\u041e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,p.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u043f\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044f\u0441\u044c \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u043e\u0432 \u0432\u0435\u0440\u0441\u0438\u0439, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0432 ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,p.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044f \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u044b \u0432\u0435\u0440\u0441\u0438\u0439 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432 ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,p.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 ",(0,p.kt)("inlineCode",{parentName:"td"},"foo")," \u0434\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432 \u043c\u0430\u0436\u043e\u0440\u043d\u043e\u0439 v2")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,p.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c\u044e ",(0,p.kt)("inlineCode",{parentName:"td"},"@babel"))))),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u043e \u0432\u0441\u0435\u0445 \u043f\u043e\u0434\u043f\u0430\u043f\u043a\u0430\u0445 \u0441 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," (\u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0430\u043f\u043a\u0438 node_modules)."),(0,p.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0441 \u0433\u043b\u0443\u0431\u0438\u043d\u043e\u0439 \u0434\u043e 100 \u043f\u043e\u0434\u043f\u0430\u043f\u043e\u043a\npnpm --recursive update --depth 100\n# \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 typescript \u0434\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u043f\u0430\u043a\u0435\u0442\u0435\npnpm --recursive update typescript@latest\n")),(0,p.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,p.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v3.2.0"),(0,p.kt)("p",null,"\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0432\u0435\u0440\u0441\u0438\u0439, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". \u0412\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432\u0435\u0440\u0441\u0438\u044e \u043f\u043e\u0434 \u0442\u0435\u0433\u043e\u043c ",(0,p.kt)("inlineCode",{parentName:"p"},"latest")," (\u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u044f \u043f\u0430\u043a\u0435\u0442\u044b \u043c\u0435\u0436\u0434\u0443 \u043c\u0430\u0436\u043e\u0440\u043d\u044b\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438)."),(0,p.kt)("h3",{id:"--global"},"--global"),(0,p.kt)("p",null,"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b."),(0,p.kt)("h3",{id:"--workspace"},"--workspace"),(0,p.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v4.4.0"),(0,p.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,p.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",(0,p.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package: ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies")," \u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"\u041d\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,p.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v4.8.0"),(0,p.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u043a\u0438\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ru/5.x/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);