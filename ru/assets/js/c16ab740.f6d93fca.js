(self.webpackChunk=self.webpackChunk||[]).push([[8286],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7689);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(v,a(a({ref:t},s),{},{components:r})):n.createElement(v,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8353:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>u,toc:()=>s,default:()=>d});var n=r(2791),i=r(9698),o=(r(7689),r(9848)),a=["components"],l={id:"audit",title:"pnpm audit"},p=void 0,u={unversionedId:"cli/audit",id:"version-6.x/cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: 4.3.0",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/ru/cli/audit",editUrl:"https://crowdin.com/project/pnpm/ru",version:"6.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-6.x/docs",previous:{title:"pnpm install-test",permalink:"/ru/cli/install-test"},next:{title:"pnpm list",permalink:"/ru/cli/list"}},s=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[{value:"--audit-level &lt;\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c&gt;",id:"--audit-level-\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c",children:[]},{value:"--json",id:"--json",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",children:[]}]}],c={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: 4.3.0"),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u0430\u043c\u0438."),(0,o.kt)("p",null,"If security issues are found, try to update your dependencies via ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm update"),". If a simple update does not fix all the issues, use ",(0,o.kt)("a",{parentName:"p",href:"/ru/package_json#pnpmoverrides"},"overrides")," to force versions that are not vulnerable. For instance, if ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," is vulnerable, use this overrides to force ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,o.kt)("h3",{id:"--audit-level-\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c"},"--audit-level ","<","\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0432 JSON \u0444\u043e\u0440\u043c\u0430\u0442\u0435."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0443\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e dev \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0443\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e production \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"\u041d\u0435 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0443\u0434\u0438\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,o.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v6.7.1"),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0440\u0435\u0435\u0441\u0442\u0440 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441-\u043a\u043e\u0434\u043e\u043c \u043e\u0442\u043b\u0438\u0447\u043d\u044b\u043c \u043e\u0442 200, \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f \u0441 \u043a\u043e\u0434\u043e\u043c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f 0. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f \u043d\u0435\u0443\u0434\u0430\u0447\u0435\u0439 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0440\u0435\u0435\u0441\u0442\u0440 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442 \u043d\u0430 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0435 \u0443\u044f\u0437\u0432\u0438\u043c\u043e\u0441\u0442\u0438."))}d.isMDXComponent=!0}}]);