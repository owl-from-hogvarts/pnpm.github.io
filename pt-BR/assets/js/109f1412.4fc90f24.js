(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(8),r=(n(0),n(448)),i={id:"motivation",title:"Motivation"},s={unversionedId:"motivation",id:"motivation",isDocsHomePage:!1,title:"Motivation",description:"Saving disk space and boosting installation speed",source:"@site/docs/motivation.md",slug:"/motivation",permalink:"/pt-BR/next/motivation",editUrl:"https://crowdin.com/project/pnpm/pt-BR",version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1617492775,formattedLastUpdatedAt:"03/04/2021",sidebar:"docs",next:{title:"Installation",permalink:"/pt-BR/next/installation"}},l=[{value:"Saving disk space and boosting installation speed",id:"saving-disk-space-and-boosting-installation-speed",children:[]},{value:"Creating a non-flat node_modules directory",id:"creating-a-non-flat-node_modules-directory",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"saving-disk-space-and-boosting-installation-speed"},"Saving disk space and boosting installation speed"),Object(r.b)("p",null,"When using npm or Yarn, if you have 100 projects using a dependency, you will\nhave 100 copies of that dependency saved on disk. With pnpm, the dependency will be\nstored in a content-addressable store, so:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"If you depend on different versions of the dependency, only the files that\ndiffer are added to the store. For instance, if it has 100 files, and a new\nversion has a change in only one of those files, ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm update")," will only add 1\nnew file to the store, instead of cloning the entire dependency just for the\nsingular change."),Object(r.b)("li",{parentName:"ol"},"All the files are saved in a single place on the disk. When packages are\ninstalled, their files are hard-linked from that single place, consuming no\nadditional disk space. This allows you to share dependencies of the same version\nacross projects.")),Object(r.b)("p",null,"As a result, you save a lot of space on your disk proportional to the number of\nprojects and dependencies, and you have a lot faster installations!"),Object(r.b)("h2",{id:"creating-a-non-flat-node_modules-directory"},"Creating a non-flat node_modules directory"),Object(r.b)("p",null,"When installing dependencies with npm, all packages are hoisted to the root of the\nmodules directory. As a result, source code has access to dependencies that are\nnot added as dependencies to the project."),Object(r.b)("p",null,"pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory.\nIf you'd like more details about the unique ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm\ncreates and why it works fine with the Node.js ecosystem, read:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pt-BR/next/symlinked-node-modules-structure"},"Symlinked node_modules structure"))))}d.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||r;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);