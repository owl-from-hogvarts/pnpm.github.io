(self.webpackChunk=self.webpackChunk||[]).push([[7820],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7689);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8762:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>l,toc:()=>c,default:()=>m});var a=t(2791),r=t(9698),o=(t(7689),t(9848)),i=["components"],p={id:"package_json",title:"package.json",original_id:"package_json"},s=void 0,l={unversionedId:"package_json",id:"version-4.x/package_json",isDocsHomePage:!1,title:"package.json",description:"The manifest file of a package.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/ru/4.x/package_json",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",frontMatter:{id:"package_json",title:"package.json",original_id:"package_json"},sidebar:"version-4.x/docs",previous:{title:"pnpm store",permalink:"/ru/4.x/cli/store"},next:{title:".npmrc",permalink:"/ru/4.x/npmrc"}},c=[{value:"Fields",id:"fields",children:[{value:"engines",id:"engines",children:[]},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[]},{value:"publishConfig",id:"publishconfig",children:[]}]}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The manifest file of a package."),(0,o.kt)("h2",{id:"fields"},"Fields"),(0,o.kt)("h3",{id:"engines"},"engines"),(0,o.kt)("p",null,"You can specify the version of Node and pnpm that your stuff works on:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,o.kt)("p",null,"During local development, pnpm will always fail with an error message when its version will not match the one in ",(0,o.kt)("inlineCode",{parentName:"p"},"engines.pnpm"),"."),(0,o.kt)("p",null,"Unless the user has set the ",(0,o.kt)("inlineCode",{parentName:"p"},"engine-strict")," config flag, this field is advisory only and will only produce warnings when your package is installed as a dependency."),(0,o.kt)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,o.kt)("p",null,"This field lists some extra information related to the dependencies listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies")," field."),(0,o.kt)("h4",{id:"peerdependenciesmetapkgoptional"},"peerDependenciesMeta","[pkg]",".optional"),(0,o.kt)("p",null,"If true, the selected peer dependency will be marked as optional by the package manager and the consumer omitting it won't be reported as an error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "react-dom": "1"\n    },\n    "peerDependenciesMeta": {\n        "react-dom": {\n            "optional": true\n        },\n        // express is not specified in the peerDependencies field,\n        // so pnpm will assume that any version of express is fine\n        "express": {\n            "optional": true\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"publishconfig"},"publishConfig"),(0,o.kt)("p",null,"Added in: v3.4.0"),(0,o.kt)("p",null,"It is possible to override some fields in the manifest, before the package is packed. The following fields may be overridden: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},(0,o.kt)("inlineCode",{parentName:"a"},"bin")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},(0,o.kt)("inlineCode",{parentName:"a"},"main")),", ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,o.kt)("inlineCode",{parentName:"a"},"exports")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},(0,o.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,o.kt)("inlineCode",{parentName:"a"},"typings")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},(0,o.kt)("inlineCode",{parentName:"a"},"module")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},(0,o.kt)("inlineCode",{parentName:"a"},"browser")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},(0,o.kt)("inlineCode",{parentName:"a"},"esnext")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},(0,o.kt)("inlineCode",{parentName:"a"},"es2015")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,o.kt)("inlineCode",{parentName:"a"},"unpkg"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},(0,o.kt)("inlineCode",{parentName:"a"},"umd:main")),"."),(0,o.kt)("p",null,"To override a field, add the publish version of the field to ",(0,o.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,o.kt)("p",null,"For instance, the following ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,o.kt)("p",null,"Will be published as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')))}m.isMDXComponent=!0}}]);