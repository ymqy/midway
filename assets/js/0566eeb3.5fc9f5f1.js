"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,u=m["".concat(p,".").concat(c)]||m[c]||k[c]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},i="\u8de8\u57df",o={unversionedId:"extensions/cross_domain",id:"extensions/cross_domain",title:"\u8de8\u57df",description:"\u9002\u7528\u4e8e @midwayjs/faas \u3001@midwayjs/web \u3001@midwayjs/koa \u548c @midwayjs/express \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u8de8\u57df\u7ec4\u4ef6\uff0c\u652f\u6301 cors \u3001jsonp \u591a\u79cd\u6a21\u5f0f\u3002",source:"@site/docs/extensions/cross_domain.md",sourceDirName:"extensions",slug:"/extensions/cross_domain",permalink:"/docs/extensions/cross_domain",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/cross_domain.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u9759\u6001\u6587\u4ef6\u6258\u7ba1",permalink:"/docs/extensions/static_file"},next:{title:"HTTP \u4ee3\u7406",permalink:"/docs/extensions/http-proxy"}},p={},d=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:2},{value:"CORS",id:"cors",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"JSONP",id:"jsonp",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-1",level:3}],s={toc:d},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8de8\u57df"},"\u8de8\u57df"),(0,r.kt)("p",null,"\u9002\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u8de8\u57df\u7ec4\u4ef6\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"cors")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"jsonp")," \u591a\u79cd\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"web \u652f\u6301\u60c5\u51b5"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/cross-domain --save\n")),(0,r.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u4e2d\u5f15\u5165\u7ec4\u4ef6,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as crossDomain from '@midwayjs/cross-domain';\n@Configuration({\n  imports: [\n    // ...other components\n    crossDomain\n  ],\n})\nexport class MainConfiguration {}\n")),(0,r.kt)("h2",{id:"cors"},"CORS"),(0,r.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config/config.default")," \u4e2d\u8fdb\u884c CORS \u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  cors: {\n    credentials: false,\n  },\n}\n")),(0,r.kt)("p",null,"\u53ef\u7528\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowMethods"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," \u3001",(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET,HEAD,PUT,POST,DELETE,PATCH")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8de8\u57df\u7684\u65b9\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET,POST"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"['GET', 'POST']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"origin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," \u3001",(0,r.kt)("inlineCode",{parentName:"td"},"(request) => string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u83b7\u53d6\u8bf7\u6c42 Headers \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"origin")," \u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"Access-Control-Allow-Origin")," \u7684\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://test.midwayjs.org"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," \u3001",(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u83b7\u53d6\u8bf7\u6c42 Headers \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"Access-Control-Request-Headers")," \u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"Access-Control-Allow-Headers")," \u7684\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Content-Type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exposeHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," \u3001",(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"Access-Control-Expose-Headers")," \u7684\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"credentials"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," \u3001",(0,r.kt)("inlineCode",{parentName:"td"},"(request) => boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"Access-Control-Allow-Credentials")," \u7684\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxAge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"Access-Control-Max-Age")," \u7684\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepHeadersOnError"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728\u6267\u884c\u62a5\u9519\u7684\u65f6\u5019\uff0c\u628a\u8de8\u57df\u7684 header \u4fe1\u606f\u5199\u5165\u5230 error \u5bf9\u7684 headers \u5c5e\u6027\u4e2d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const cors = {\n  // \u5141\u8bb8\u8de8\u57df\u7684\u65b9\u6cd5\uff0c\u3010\u9ed8\u8ba4\u503c\u3011\u4e3a GET,HEAD,PUT,POST,DELETE,PATCH\n  allowMethods: string |string[];\n  // \u8bbe\u7f6e Access-Control-Allow-Origin \u7684\u503c\uff0c\u3010\u9ed8\u8ba4\u503c\u3011\u4f1a\u83b7\u53d6\u8bf7\u6c42\u5934\u4e0a\u7684 origin\n  // \u4e5f\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e00\u4e2a\u56de\u8c03\u65b9\u6cd5\uff0c\u4f20\u5165\u7684\u53c2\u6570\u4e3a request\uff0c\u9700\u8981\u8fd4\u56de origin \u503c\n  // \u4f8b\u5982\uff1ahttp://test.midwayjs.org\n  // \u5982\u679c\u8bbe\u7f6e\u4e86 credentials\uff0c\u5219 origin \u4e0d\u80fd\u8bbe\u7f6e\u4e3a *\n  origin: string|Function;\n  // \u8bbe\u7f6e Access-Control-Allow-Headers \u7684\u503c\uff0c\u3010\u9ed8\u8ba4\u503c\u3011\u4f1a\u83b7\u53d6\u8bf7\u6c42\u5934\u4e0a\u7684 Access-Control-Request-Headers\n  allowHeaders: string |string[];\n  // \u8bbe\u7f6e Access-Control-Expose-Headers \u7684\u503c\n  exposeHeaders: string |string[];\n  // \u8bbe\u7f6e Access-Control-Allow-Credentials\uff0c\u3010\u9ed8\u8ba4\u503c\u3011false\n   // \u4e5f\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e00\u4e2a\u56de\u8c03\u65b9\u6cd5\uff0c\u4f20\u5165\u7684\u53c2\u6570\u4e3a request\uff0c\u8fd4\u56de\u503c\u4e3a true \u6216 false\n  credentials: boolean|Function;\n  // \u662f\u5426\u5728\u6267\u884c\u62a5\u9519\u7684\u65f6\u5019\uff0c\u628a\u8de8\u57df\u7684 header \u4fe1\u606f\u5199\u5165\u5230 error \u5bf9\u7684 headers \u5c5e\u6027\u4e2d\uff0c\u3010\u9ed8\u8ba4\u503c\u3011false\n  keepHeadersOnError: boolean;\n  // \u8bbe\u7f6e Access-Control-Max-Age\n  maxAge: number;\n}\n")),(0,r.kt)("h2",{id:"jsonp"},"JSONP"),(0,r.kt)("p",null,"JSONP \u5de5\u4f5c\u539f\u7406\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/19966531"},"\u300aJSONP \u7684\u5de5\u4f5c\u539f\u7406\u662f\u4ec0\u4e48\uff1f\u300b")),(0,r.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"\u5f53\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u5f15\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"cross_domain")," \u7ec4\u4ef6\u540e\uff0c\u5728\u8bf7\u6c42\u4f5c\u7528\u57df\u5185\uff0c\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.jsonp")," \u65b9\u6cd5\u6765\u5bf9\u54cd\u5e94\u7684\u6570\u636e\u8fdb\u884c\u5305\u88f9\u5904\u7406\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jsonp")," \u65b9\u6cd5\u4f1a\u6839\u636e\u914d\u7f6e\u7684 callback \u5c5e\u6027\uff08\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonp"),"\uff0c\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"?jsonp=xxx123"),"\uff09\uff0c\u4ece\u8bf7\u6c42\u7684 query","[callback]"," \u4e2d\u83b7\u53d6\u56de\u8c03\u7684\u65b9\u6cd5\u540d\uff08\u5982\u679c\u83b7\u53d6\u4e0d\u5230\u5219\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"\uff09\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 jsonp \u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u6765\u8986\u76d6\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," \u6587\u4ef6\u4e2d\u7684\u9ed8\u8ba4 jsonp \u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx;\n\n  @Get('/ctx-jsonp')\n  async ctxJsonp() {\n    return this.ctx.jsonp({ test: 456 }, { callback: 'callback' });\n  }\n}\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e-1"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config/config.default")," \u4e2d\u8fdb\u884c JSONP \u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  jsonp: {\n    // jsonp \u7684\u56de\u8c03\n    callback: 'jsonp',\n    limit: 512,\n  },\n}\n")),(0,r.kt)("p",null,"\u53ef\u7528\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jsonp")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u83b7\u53d6 JSONP \u7684\u56de\u8c03\u65b9\u6cd5\u540d\u7684 query key"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?jsonp=callback"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"512")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e \u56de\u8c03\u65b9\u6cd5\u540d \u7684\u6700\u5927\u957f\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"512"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"csrf"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5f00\u542f security \u7ec4\u4ef6\u7684 csrf \u5b89\u5168\u9009\u9879\u540e\uff0c\u662f\u5426\u9a8c\u8bc1 jsonp \u7684 csrf"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))))}k.isMDXComponent=!0}}]);