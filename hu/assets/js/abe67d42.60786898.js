(self.webpackChunk=self.webpackChunk||[]).push([[8446],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>l,kt:()=>m});var a=t(7689);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=c(t),m=s,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||r;return t?a.createElement(d,i(i({ref:n},l),{},{components:t})):a.createElement(d,i({ref:n},l))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1016:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>l,default:()=>h});var a=t(2791),s=t(9698),r=(t(7689),t(9848)),i=["components"],o={id:"using-changesets",title:"Using Changesets with pnpm"},p=void 0,c={unversionedId:"using-changesets",id:"version-4.x/using-changesets",isDocsHomePage:!1,title:"Using Changesets with pnpm",description:"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/hu/4.x/using-changesets",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",frontMatter:{id:"using-changesets",title:"Using Changesets with pnpm"}},l=[{value:"Setup",id:"setup",children:[]},{value:"Adding new changesets",id:"adding-new-changesets",children:[]},{value:"Releasing changes",id:"releasing-changes",children:[]},{value:"Using GitHub Actions",id:"using-github-actions",children:[]}],u={toc:l};function h(e){var n=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To setup changesets on a pnpm workspace, install changesets as a dev dependency in the root of the workspace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),(0,r.kt)("p",null,"Then changesets' init command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx changeset init\n")),(0,r.kt)("h2",{id:"adding-new-changesets"},"Adding new changesets"),(0,r.kt)("p",null,"To generate a new changeset, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx changeset")," in the root of the repository. The generated markdown files in the ",(0,r.kt)("inlineCode",{parentName:"p"},".changeset")," directory should be committed to the repository."),(0,r.kt)("h2",{id:"releasing-changes"},"Releasing changes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpx changeset version"),". This will bump the versions of the packages previously specified with ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpx changeset")," (and any dependents of those) and update the changelog files."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm install"),". This will update the lockfile and rebuild packages."),(0,r.kt)("li",{parentName:"ol"},"Commit the changes."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),". This command will publish all packages that have bumped versions not yet present in the registry.")),(0,r.kt)("h2",{id:"using-github-actions"},"Using GitHub Actions"),(0,r.kt)("p",null,"To automate the process, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),(0,r.kt)("p",null,"In a nutshell, the action will detect new changesets on the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch, apply them, commit the updated metadata and changelogs, and open a Pull Request. You could also publish your packages automatically."),(0,r.kt)("p",null,"More info and documentation regarding this action can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Changesets\non:\n  push:\n    branches:\n      - master\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: 'chore: update versions'\n          title: 'chore: update versions'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n")))}h.isMDXComponent=!0}}]);