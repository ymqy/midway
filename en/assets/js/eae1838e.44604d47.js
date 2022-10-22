"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const s={},i="cfork",a={unversionedId:"extensions/cfork",id:"extensions/cfork",title:"cfork",description:"Many students have not heard of cfork. cfork library is the library used to start the main process in egg-scripts. it is one of the basic libraries used by egg. its function is to start the process and maintain the preservation of multiple processes.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/cfork.md",sourceDirName:"extensions",slug:"/extensions/cfork",permalink:"/en/docs/extensions/cfork",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/cfork.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"pm2",permalink:"/en/docs/extensions/pm2"},next:{title:"Alinode",permalink:"/en/docs/extensions/alinode"}},c={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cfork"},"cfork"),(0,o.kt)("p",null,"Many students have not heard of cfork. cfork library is the library used to start the main process in egg-scripts. it is one of the basic libraries used by egg. its function is to start the process and maintain the preservation of multiple processes."),(0,o.kt)("p",null,"The document is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/node-modules/cfork"},"https:// github.com/node-modules/cfork"),"."),(0,o.kt)("p",null,"Due to the characteristics of bootstrap.js, it is sometimes not very suitable for pm2 deployment (for example, within the group, the global installation is not installed and API startup is required)."),(0,o.kt)("p",null,"We can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," as the portal for the main process and use ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," as the startup portal for each subprocess."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// server.js\n\n'use strict';\n\nconst cfork = require('cfork');\nconst util = require('util');\nconst path = require('path');\nconst OS = require(' OS ');\n\n// Get cpu cores\nconst cpuNumbers = OS .cpus().length;\n\ncfork ({\n  exec: path.join(__dirname, './bootstrap.js')\n  count: cpuNumbers\n})\n  .on('fork', (worker) => {\n    console.warn('[%s] [worker:%d] new worker start', Date(), worker.process.pid);\n  })\n  .on('disconnect', (worker) => {\n    console.warn (\n      '[%s] [master:%s] wroker:%s disconnect, exitedAfterDisconnect: %s, state: %s .',\n      Date()\n      process.pid\n      worker.process.pid\n      worker.exitedAfterDisconnect\n      worker.state\n    );\n  })\n  .on('exit', (worker, code, signal) => {\n    const exitCode = worker.process.exitCode;\n    const err = new Error (\n      util.format (\n        'worker %s died (code: %s, signal: %s, exitedAfterDisconnect: %s, state: %s)',\n        worker.process.pid\n        exitCode\n        signal\n        worker.exitedAfterDisconnect\n        worker.state\n      )\n    );\n    err.name = 'WorkerDiedError';\n    console.error('[%s] [master:%s] wroker exit: %s', Date(), process.pid, err.stack);\n  });\n")),(0,o.kt)("p",null,"Finally, start ",(0,o.kt)("inlineCode",{parentName:"p"},"node server.js"),"."))}u.isMDXComponent=!0}}]);