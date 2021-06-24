(self.webpackChunk=self.webpackChunk||[]).push([[8343],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7689);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(v,l(l({ref:t},u),{},{components:r})):n.createElement(v,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8803:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>d});var n=r(2791),o=r(9698),a=(r(7689),r(9848)),l=["components"],i={id:"server",title:"pnpm server",original_id:"server"},p=void 0,s={unversionedId:"cli/server",id:"version-4.x/cli/server",isDocsHomePage:!1,title:"pnpm server",description:"Manage a store server.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/ru/4.x/cli/server",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",frontMatter:{id:"server",title:"pnpm server",original_id:"server"},sidebar:"version-4.x/docs",previous:{title:"pnpm recursive",permalink:"/ru/4.x/cli/recursive"},next:{title:"pnpm store",permalink:"/ru/4.x/cli/store"}},u=[{value:"Commands",id:"commands",children:[{value:"pnpm server start",id:"pnpm-server-start",children:[]},{value:"pnpm server stop",id:"pnpm-server-stop",children:[]},{value:"pnpm server status",id:"pnpm-server-status",children:[]}]},{value:"Options",id:"options",children:[{value:"--background",id:"--background",children:[]},{value:"--protocol",id:"--protocol",children:[]},{value:"--port",id:"--port",children:[]},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",children:[]},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",children:[]}]}],c={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Manage a store server."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,a.kt)("p",null,"Added in: v1.30.0"),(0,a.kt)("p",null,"Starts a server that does all interactions with the store. Other commands will delegate any store-related tasks to this server."),(0,a.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,a.kt)("p",null,"Added in: v1.30.0"),(0,a.kt)("p",null,"Stops the store server."),(0,a.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,a.kt)("p",null,"Added in: v2.5.0"),(0,a.kt)("p",null,"Prints information about the running server."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--background"},"--background"),(0,a.kt)("p",null,"Added in: v1.30.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Runs the server in the background."),(0,a.kt)("h3",{id:"--protocol"},"--protocol"),(0,a.kt)("p",null,"Added in: v1.30.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"auto")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"auto"),", ",(0,a.kt)("strong",{parentName:"li"},"tcp"),", ",(0,a.kt)("strong",{parentName:"li"},"ipc"))),(0,a.kt)("p",null,"The communication protocol used by the server. When ",(0,a.kt)("strong",{parentName:"p"},"auto")," is used, ",(0,a.kt)("strong",{parentName:"p"},"ipc")," used on non-Windows servers and ",(0,a.kt)("strong",{parentName:"p"},"tcp")," on Windows."),(0,a.kt)("h3",{id:"--port"},"--port"),(0,a.kt)("p",null,"Added in: v1.30.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"5813")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"port number"))),(0,a.kt)("p",null,"The port number to use, when TCP is used for communication. If port is specified and ",(0,a.kt)("strong",{parentName:"p"},"protocol")," is set to auto, ",(0,a.kt)("strong",{parentName:"p"},"tcp")," protocol is used."),(0,a.kt)("p",null,"Other configs that are used by ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm server"),": ",(0,a.kt)("strong",{parentName:"p"},"store"),", ",(0,a.kt)("strong",{parentName:"p"},"lock"),"."),(0,a.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,a.kt)("p",null,"Added in: v1.30.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Disallows stopping the server using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),(0,a.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,a.kt)("p",null,"Added in: v1.31.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Disallows creating new side effect cache during install."))}d.isMDXComponent=!0}}]);