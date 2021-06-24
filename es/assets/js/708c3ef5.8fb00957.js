(self.webpackChunk=self.webpackChunk||[]).push([[3555],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2607:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>d});var r=t(2791),i=t(9698),o=(t(7689),t(9848)),a=["components"],p={id:"run",title:"pnpm run",original_id:"run"},s=void 0,c={unversionedId:"cli/run",id:"version-4.x/cli/run",isDocsHomePage:!1,title:"pnpm run",description:"Aliases: run-script",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/es/4.x/cli/run",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",frontMatter:{id:"run",title:"pnpm run",original_id:"run"},sidebar:"version-4.x/docs",previous:{title:"pnpm why",permalink:"/es/4.x/cli/why"},next:{title:"pnpm test",permalink:"/es/4.x/cli/test"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--if-present",id:"--if-present",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"run-script")),(0,o.kt)("p",null,"Runs a defined package script."),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm run [[-r] [--no-bail] [--no-sort] [--workspace-concurrency=<number>]]\n     <command> [-- <args>...]\n\npnpm multi run <command> [-- <args>...]\n\npnpm recursive run <command> [-- <args>...]\n")),(0,o.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run")," adds ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace, ",(0,o.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,o.kt)("h3",{id:"--if-present"},"--if-present"),(0,o.kt)("p",null,"Added in: v4.5.0"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/es/4.x/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);