(self.webpackChunk=self.webpackChunk||[]).push([[745],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7689);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5339:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var n=r(2791),i=r(9698),o=(r(7689),r(9848)),l=["components"],a={id:"rebuild",title:"pnpm rebuild"},c=void 0,p={unversionedId:"cli/rebuild",id:"cli/rebuild",isDocsHomePage:!1,title:"pnpm rebuild",description:"Aliases: rb",source:"@site/docs/cli/rebuild.md",sourceDirName:"cli",slug:"/cli/rebuild",permalink:"/next/cli/rebuild",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/rebuild.md",version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615633789,formattedLastUpdatedAt:"3/13/2021",frontMatter:{id:"rebuild",title:"pnpm rebuild"},sidebar:"docs",previous:{title:"pnpm import",permalink:"/next/cli/import"},next:{title:"pnpm prune",permalink:"/next/cli/prune"}},u=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"rb")),(0,o.kt)("p",null,"Rebuild a package."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"This command runs the ",(0,o.kt)("strong",{parentName:"p"},"pnpm rebuild")," command in every package of the monorepo."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);