(self.webpackChunk=self.webpackChunk||[]).push([[5370],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7689);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),h=i,g=d["".concat(o,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6545:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>d});var n=r(2791),i=r(9698),a=(r(7689),r(9848)),l=["components"],p={id:"publish",title:"pnpm publish",original_id:"publish"},o=void 0,s={unversionedId:"cli/publish",id:"version-4.x/cli/publish",isDocsHomePage:!1,title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/es/4.x/cli/publish",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",frontMatter:{id:"publish",title:"pnpm publish",original_id:"publish"},sidebar:"version-4.x/docs",previous:{title:"pnpm stop",permalink:"/es/4.x/cli/stop"},next:{title:"pnpm recursive",permalink:"/es/4.x/cli/recursive"}},c=[{value:"Options",id:"options",children:[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[]},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Publishes a package to the registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm [-r] publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>]\n")),(0,a.kt)("p",null,"When publishing a package inside a ",(0,a.kt)("a",{parentName:"p",href:"/es/4.x/workspaces"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),(0,a.kt)("p",null,"You may override some fields before publish, using the ",(0,a.kt)("a",{parentName:"p",href:"/es/4.x/package_json#publishconfig"},"publishConfig")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("p",null,"When running this command recursively (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all the packages that have versions not yet published to the registry."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag>"),(0,a.kt)("p",null,"Publishes the package with the given tag. By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," tag."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,a.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted>"),(0,a.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,a.kt)("p",null,"Added in: 4.6.0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/es/4.x/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);