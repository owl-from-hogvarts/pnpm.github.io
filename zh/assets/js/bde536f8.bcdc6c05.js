(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{311:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(394)),b={id:"installation",title:"\u5b89\u88c5"},p={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"\u5b89\u88c5",description:"\u4f7f\u7528 npm",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation.md",slug:"/installation",permalink:"/zh/next/installation",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/installation.md",version:"current",sidebar:"docs",previous:{title:"\u52a8\u673a",permalink:"/zh/next/motivation"},next:{title:"pnpm CLI",permalink:"/zh/next/pnpm-cli"}},c=[{value:"\u4f7f\u7528 npm",id:"\u4f7f\u7528-npm",children:[]},{value:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",children:[]},{value:"\u901a\u8fc7 npx \u5b89\u88c5",id:"\u901a\u8fc7-npx-\u5b89\u88c5",children:[]},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",children:[]},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",children:[]}],i={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 npm"),Object(l.b)("p",null,"\u8fd9\u662f\u76ee\u524d\u4e3a\u6b62\u6700\u5feb\u3001\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),Object(l.b)("h2",{id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"},"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -L https://pnpm.js.org/pnpm.js | node - add --global pnpm\n")),Object(l.b)("p",null,"\u5728 Windows\uff08PowerShell\uff09\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://pnpm.js.org/pnpm.js' -UseBasicParsing).Content | node - add --global pnpm\n")),Object(l.b)("h2",{id:"\u901a\u8fc7-npx-\u5b89\u88c5"},"\u901a\u8fc7 npx \u5b89\u88c5"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),Object(l.b)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),Object(l.b)("p",null,"\u4e00\u65e6\u4f60\u5b89\u88c5\u4e86 pnpm\uff0c\u5c31\u65e0\u9700\u518d\u4f7f\u7528\u5176\u4ed6\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u8fdb\u884c\u5347\u7ea7\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528 pnpm\u5347\u7ea7\u81ea\u5df1\uff0c\u50cf\u8fd9\u6837\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"\u4f60\u5e0c\u671b\u5728 CI \u670d\u52a1\u5668\u4e0a\u4f7f\u7528 pnpm \u5417\uff1f \u53c2\u9605\uff1a",Object(l.b)("a",{parentName:"p",href:"continuous-integration"},"\u6301\u7eed\u96c6\u6210"),"\u3002"))),Object(l.b)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),Object(l.b)("p",null,"\u4ee5\u4e0b\u662f\u5404\u7248\u672c pnpm \u4e0e\u5404\u7248\u672c Node.js \u4e4b\u95f4\u7684\u652f\u6301\u8868\u683c\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Node.js"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 1"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 2"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 3"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 4"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 5"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 6"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 4"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 6"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 8"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 10"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 12"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 14"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))))}o.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,j=m["".concat(b,".").concat(d)]||m[d]||u[d]||l;return n?r.a.createElement(j,p(p({ref:t},i),{},{components:n})):r.a.createElement(j,p({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,b[1]=p;for(var i=2;i<l;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);