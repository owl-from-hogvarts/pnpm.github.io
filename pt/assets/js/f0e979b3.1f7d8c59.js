(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{300:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return i})),n.d(o,"metadata",(function(){return s})),n.d(o,"toc",(function(){return d})),n.d(o,"default",(function(){return l}));var a=n(3),t=n(8),r=(n(0),n(318)),i={id:"motivation",title:"Motiva\xe7\xe3o"},s={unversionedId:"motivation",id:"version-6.x/motivation",isDocsHomePage:!1,title:"Motiva\xe7\xe3o",description:"Economizando espa\xe7o em disco e aumentando a velocidade de instala\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/motivation.md",slug:"/motivation",permalink:"/pt/motivation",editUrl:"https://crowdin.com/project/pnpm/pt",version:"6.x",sidebar:"version-6.x/docs",next:{title:"Installation",permalink:"/pt/installation"}},d=[{value:"Economizando espa\xe7o em disco e aumentando a velocidade de instala\xe7\xe3o",id:"economizando-espa\xe7o-em-disco-e-aumentando-a-velocidade-de-instala\xe7\xe3o",children:[]},{value:"Cria\xe7\xe3o de um diret\xf3rio node_modules non-flat",id:"cria\xe7\xe3o-de-um-diret\xf3rio-node_modules-non-flat",children:[]}],c={toc:d};function l(e){var o=e.components,n=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:o,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"economizando-espa\xe7o-em-disco-e-aumentando-a-velocidade-de-instala\xe7\xe3o"},"Economizando espa\xe7o em disco e aumentando a velocidade de instala\xe7\xe3o"),Object(r.b)("p",null,"Ao usar npm ou Yarn, se voc\xea tiver 100 projetos usando uma depend\xeancia, voc\xea ter\xe1 100 c\xf3pias dessa depend\xeancia salva no disco. Com o pnpm, a depend\xeancia ser\xe1 armazenada em uma store que pode ser endere\xe7\xe1vel por seu conte\xfado, ent\xe3o:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Se voc\xea depende de diferentes vers\xf5es da depend\xeancia, apenas os arquivos que diferem s\xe3o adicionados \xe0 store. Por exemplo, se ele tiver 100 arquivos, e uma nova vers\xe3o tiver uma altera\xe7\xe3o em apenas um desses arquivos, o ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm update")," adicionar\xe1 apenas 1 novo arquivo \xe0 store, em vez de clonar toda a depend\xeancia por causa de uma simples mudan\xe7a."),Object(r.b)("li",{parentName:"ol"},"Todos os arquivos s\xe3o salvos em um \xfanico lugar no disco. Quando os pacotes s\xe3o instalados, seus arquivos s\xe3o vinculados a partir desse \xfanico local, n\xe3o consumindo espa\xe7o adicional em disco. Isso permite que voc\xea compartilhe depend\xeancias da mesma vers\xe3o entre projetos.")),Object(r.b)("p",null,"Como resultado, voc\xea economiza muito espa\xe7o em seu disco proporcional ao n\xfamero de projetos e depend\xeancias e tem instala\xe7\xf5es muito mais r\xe1pidas!"),Object(r.b)("h2",{id:"cria\xe7\xe3o-de-um-diret\xf3rio-node_modules-non-flat"},"Cria\xe7\xe3o de um diret\xf3rio node_modules non-flat"),Object(r.b)("p",null,"Ao instalar depend\xeancias com o npm, todos os pacotes s\xe3o i\xe7ados para a raiz do m\xf3dulos. Como resultado, o c\xf3digo fonte tem acesso a depend\xeancias que n\xe3o s\xe3o adicionadas como depend\xeancias do projeto."),Object(r.b)("p",null,"pnpm usa symlinks (links simb\xf3licos) para adicionar apenas as depend\xeancias diretas do projeto \xe0 raiz do diret\xf3rio de m\xf3dulos. Se voc\xea quiser mais detalhes sobre a estrutura \xfanica que o pnpm cria para o ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," e por que funciona bem com o ecossistema.js Node, leia:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat Node_modules n\xe3o \xe9 a \xfanica maneira")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pt/symlinked-node-modules-structure"},"Estrutura node_modules symlinked"))))}l.isMDXComponent=!0},318:function(e,o,n){"use strict";n.d(o,"a",(function(){return u})),n.d(o,"b",(function(){return b}));var a=n(0),t=n.n(a);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function d(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=t.a.createContext({}),l=function(e){var o=t.a.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},u=function(e){var o=l(e.components);return t.a.createElement(c.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.a.createElement(t.a.Fragment,{},o)}},m=t.a.forwardRef((function(e,o){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return n?t.a.createElement(b,s(s({ref:o},c),{},{components:n})):t.a.createElement(b,s({ref:o},c))}));function b(e,o){var n=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);