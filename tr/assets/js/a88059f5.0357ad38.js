(self.webpackChunk=self.webpackChunk||[]).push([[7071],{9848:(e,a,n)=>{"use strict";n.d(a,{Zo:()=>u,kt:()=>p});var t=n(7689);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),s=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(d.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,c=m["".concat(d,".").concat(p)]||m[p]||k[p]||i;return n?t.createElement(c,l(l({ref:a},u),{},{components:n})):t.createElement(c,l({ref:a},u))}));function p(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4826:(e,a,n)=>{"use strict";n.r(a),n.d(a,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>s,toc:()=>u,default:()=>m});var t=n(2791),r=n(9698),i=(n(7689),n(9848)),l=["components"],o={id:"motivation",title:"Motivasyon"},d=void 0,s={unversionedId:"motivation",id:"motivation",isDocsHomePage:!1,title:"Motivasyon",description:"Daha az disk t\xfcketimi ve a\u015f\u0131r\u0131 h\u0131zl\u0131 kurulum",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/tr/next/motivation",editUrl:"https://crowdin.com/project/pnpm/tr",version:"current",frontMatter:{id:"motivation",title:"Motivasyon"},sidebar:"docs",next:{title:"Kurulum",permalink:"/tr/next/installation"}},u=[{value:"Daha az disk t\xfcketimi ve a\u015f\u0131r\u0131 h\u0131zl\u0131 kurulum",id:"daha-az-disk-t\xfcketimi-ve-a\u015f\u0131r\u0131-h\u0131zl\u0131-kurulum",children:[]},{value:"D\xfcz, klasik, &quot;hepsi bir arada&quot; node_modules dizin yap\u0131s\u0131ndan kurtulma",id:"d\xfcz-klasik-hepsi-bir-arada-node_modules-dizin-yap\u0131s\u0131ndan-kurtulma",children:[]}],k={toc:u};function m(e){var a=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"daha-az-disk-t\xfcketimi-ve-a\u015f\u0131r\u0131-h\u0131zl\u0131-kurulum"},"Daha az disk t\xfcketimi ve a\u015f\u0131r\u0131 h\u0131zl\u0131 kurulum"),(0,i.kt)("p",null,"Varsayal\u0131m ",(0,i.kt)("inlineCode",{parentName:"p"},"abc")," ad\u0131nda bir k\xfct\xfcphaneyi (dependency), 100 adet projende kullan\u0131yorsun. Yarn ve npm kullan\u0131rken, ",(0,i.kt)("inlineCode",{parentName:"p"},"abc")," ad\u0131ndaki k\xfct\xfcphane, 100 adet projende tek tek klonlanarak y\xfcklendi\u011finden, disk t\xfcketimini x100 defa artt\u0131rarak depolam\u0131\u015f olursun. Pnpm ise",(0,i.kt)("inlineCode",{parentName:"p"},"abc")," k\xfct\xfcphanesini ortak bir alanda depolar ve:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"E\u011fer, ",(0,i.kt)("inlineCode",{parentName:"li"},"abc")," k\xfct\xfcphanesinin birden fazla s\xfcr\xfcm\xfcn\xfcn kullan\u0131lmas\u0131 gerekiyorsa, ortak alanda sadece farkl\u0131 olan dosyalar depolan\u0131r ve fazla yer t\xfcketimine m\xfcsade etmez. \xd6rne\u011fin, ",(0,i.kt)("inlineCode",{parentName:"li"},"abc")," k\xfct\xfcphanesinde 100 adet dosya y\xfcklenmi\u015f ise ve gelecekte yay\u0131nlanacak olan yeni s\xfcr\xfcmde 1 adet dosyada de\u011fi\u015fiklik olmu\u015fsa; ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm update")," komutu, yeni s\xfcr\xfcm i\xe7in 100 adet dosyay\u0131 yeniden indirmek/y\xfcklemek yerine sadece de\u011fi\u015ftirilmi\u015f olan o 1 dosyay\u0131 \xe7ekerek g\xfcncellemeyi uygular."),(0,i.kt)("li",{parentName:"ol"},"B\xfct\xfcn dosyalar, disk \xfczerinde sadece bir yerde depolan\u0131r. Bu durumda ",(0,i.kt)("inlineCode",{parentName:"li"},"abc")," k\xfct\xfcphanesini farkl\u0131 bir projeye dahil etmek istedi\u011fin zaman, h\xe2li haz\u0131rda ortak alanda depolanan dosyalara, hard-link (sembolik ba\u011f) olu\u015fturularak, ekstra disk t\xfcketiminden tasarruf edilmi\u015f olur. B\xf6ylece bir paketin ayn\u0131 s\xfcr\xfcm\xfcn\xfc, projelerin aras\u0131nda payla\u015ft\u0131rma imkan\u0131 elde etmi\u015f olursun.")),(0,i.kt)("p",null,"Sonu\xe7 olarak, projelerinde kulland\u0131\u011f\u0131n k\xfct\xfcphanelerin say\u0131s\u0131na orant\u0131l\u0131 olarak disk t\xfcketiminde ve y\xfckleme h\u0131z\u0131nda, m\xfcthi\u015f bir seviyede kazan\xe7 sa\u011flam\u0131\u015f olursun!"),(0,i.kt)("h2",{id:"d\xfcz-klasik-hepsi-bir-arada-node_modules-dizin-yap\u0131s\u0131ndan-kurtulma"},'D\xfcz, klasik, "hepsi bir arada" node_modules dizin yap\u0131s\u0131ndan kurtulma'),(0,i.kt)("p",null,"Normalde, npm ile projeye dahil etti\u011fimiz k\xfct\xfcphane ve bu k\xfct\xfcphane ile birlikte gelen yan k\xfct\xfcphanelerin tamam\u0131, node_modules klas\xf6r\xfcn\xfcn ana dizininde, yan yana depolan\u0131r. Haliyle sonu\xe7 olarak, projeye kesin olarak dahil etmedi\u011fimiz yan k\xfct\xfcphanelere, kaynak koduz eri\u015fim sa\u011flayabilir."),(0,i.kt)("p",null,"pnpm ise, sembolik ba\u011flar (symlink) olu\u015fturarak projenin node_modules klas\xf6r\xfcne sadece kesin olarak belirtilmi\u015f k\xfct\xfcphaneleri dahil eder. Pnpm'in, benzersiz ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," klas\xf6r yap\u0131s\u0131 ve bu yap\u0131n\u0131n Node.js ekosistemi ile nas\u0131l ve neden uyumlu bi\xe7imde \xe7al\u0131\u015ft\u0131\u011f\u0131 hakk\u0131nda daha fazla bilgi almak istersen e\u011fer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"D\xfcz, klasik node_modules yap\u0131s\u0131 art\u0131k tek yol de\u011fil")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tr/next/symlinked-node-modules-structure"},(0,i.kt)("inlineCode",{parentName:"a"},"node_modules"),"'da sembolik ba\u011f (symlink) yap\u0131s\u0131"))))}m.isMDXComponent=!0}}]);