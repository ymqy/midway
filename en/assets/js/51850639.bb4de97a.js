"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),u=o,m=g["".concat(l,".").concat(u)]||g[u]||d[u]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="egg:ts-helper",s={unversionedId:"tool/egg-ts-helper",id:"tool/egg-ts-helper",title:"egg:ts-helper",description:"For scenarios where midway supports Egg.js, the original egg-ts-helper package is rewritten, and the original TS and AST analysis dependencies are removed.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tool/egg-ts-helper.md",sourceDirName:"tool",slug:"/tool/egg-ts-helper",permalink:"/en/docs/tool/egg-ts-helper",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/tool/egg-ts-helper.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"sequelize-auto-midway",permalink:"/en/docs/tool/sequelize_generator"},next:{title:"Server startup failure troubleshooting",permalink:"/en/docs/ops/ecs_start_err"}},l={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eggts-helper"},"egg:ts-helper"),(0,o.kt)("p",null,"For scenarios where midway supports Egg.js, the original ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/whxaxes/egg-ts-helper"},"egg-ts-helper")," package is rewritten, and the original TS and AST analysis dependencies are removed."),(0,o.kt)("p",null,"The ts v3 environment that the original package depends on depends on the egg directory structure, considering many possibilities, it will not be used in the midway scenario. Based on the above considerations, midway rewrites this package to provide egg definitions in the simplest way."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/egg-ts-helper"},"@midwayjs/egg-ts-helper")," package provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"ets")," global command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/egg-ts-helper --save-dev\n$ ets\n")),(0,o.kt)("p",null,"Usually we will add it to the development command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "dev": "cross-env ets && cross-env NODE_ENV=local midway-bin dev --ts \\",\n  },\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This package is customized for midway and can only be used for the new version of midway and its supporting code.")),(0,o.kt)("p",null,"Finally, a ",(0,o.kt)("inlineCode",{parentName:"p"},"typings")," directory will be generated in the project root directory with the following definition structure and files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 ...\n\u2514\u2500\u2500 typings\n    \u251c\u2500\u2500 extend\n    \u2502       \u251c\u2500\u2500 request.d.ts\n    \u2502       \u251c\u2500\u2500 response.d.ts\n    \u2502       \u251c\u2500\u2500 application.d.ts\n    \u2502   \u2514\u2500\u2500 context.d.ts\n    \u251c\u2500\u2500 app\n    \u2502   \u2514\u2500\u2500 index.d.ts\n    \u2514\u2500\u2500 config\n        \u251c\u2500\u2500 index.d.ts\n        \u2514\u2500\u2500 plugin.d.ts\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that this module only aggregates the framework and plug-in definitions of midway v2(Egg.js), so that the current business code can smoothly read the definitions of the framework and plug-in. It does not support the definition of the business code itself or the definition when developing egg plug-ins.")))}d.isMDXComponent=!0}}]);