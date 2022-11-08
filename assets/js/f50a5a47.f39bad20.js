"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11205],{3905:(r,t,e)=>{e.d(t,{Zo:()=>s,kt:()=>d});var n=e(67294);function a(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function o(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function l(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){a(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function i(r,t){if(null==r)return{};var e,n,a=function(r,t){if(null==r)return{};var e,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)e=o[n],t.indexOf(e)>=0||(a[e]=r[e]);return a}(r,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)e=o[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(a[e]=r[e])}return a}var p=n.createContext({}),m=function(r){var t=n.useContext(p),e=t;return r&&(e="function"==typeof r?r(t):l(l({},t),r)),e},s=function(r){var t=m(r.components);return n.createElement(p.Provider,{value:t},r.children)},c={inlineCode:"code",wrapper:function(r){var t=r.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(r,t){var e=r.components,a=r.mdxType,o=r.originalType,p=r.parentName,s=i(r,["components","mdxType","originalType","parentName"]),u=m(e),d=a,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return e?n.createElement(k,l(l({ref:t},s),{},{components:e})):n.createElement(k,l({ref:t},s))}));function d(r,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof r||a){var o=e.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=r,i.mdxType="string"==typeof r?r:a,l[1]=i;for(var m=2;m<o;m++)l[m]=e[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},72299:(r,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=e(87462),a=(e(67294),e(3905));const o={},l="\u5f02\u5e38\u5904\u7406",i={unversionedId:"error_filter",id:"error_filter",title:"\u5f02\u5e38\u5904\u7406",description:"Midway \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u7f6e\u7684\u5f02\u5e38\u5904\u7406\u5668\uff0c\u8d1f\u8d23\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6240\u6709\u672a\u5904\u7406\u7684\u5f02\u5e38\u3002\u5f53\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u5904\u7406\u65f6\uff0c\u8be5\u5904\u7406\u5668\u5c31\u4f1a\u6355\u83b7\u8be5\u5f02\u5e38\uff0c\u7136\u540e\u7b49\u5f85\u7528\u6237\u5904\u7406\u3002",source:"@site/docs/error_filter.md",sourceDirName:".",slug:"/error_filter",permalink:"/docs/error_filter",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/error_filter.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u670d\u52a1\u548c\u6ce8\u5165",permalink:"/docs/service"},next:{title:"\u5b88\u536b",permalink:"/docs/guard"}},p={},m=[{value:"Http \u5f02\u5e38",id:"http-\u5f02\u5e38",level:2},{value:"\u5f02\u5e38\u5904\u7406\u5668",id:"\u5f02\u5e38\u5904\u7406\u5668",level:2},{value:"404 \u5904\u7406",id:"404-\u5904\u7406",level:3},{value:"500 \u5904\u7406",id:"500-\u5904\u7406",level:3},{value:"\u6d3e\u751f\u5f02\u5e38\u5904\u7406",id:"\u6d3e\u751f\u5f02\u5e38\u5904\u7406",level:2},{value:"\u5f02\u5e38\u65e5\u5fd7",id:"\u5f02\u5e38\u65e5\u5fd7",level:2},{value:"\u5185\u7f6e\u7684 Http \u5f02\u5e38",id:"\u5185\u7f6e\u7684-http-\u5f02\u5e38",level:2}],s={toc:m};function c(r){let{components:t,...e}=r;return(0,a.kt)("wrapper",(0,n.Z)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5f02\u5e38\u5904\u7406"},"\u5f02\u5e38\u5904\u7406"),(0,a.kt)("p",null,"Midway \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u7f6e\u7684\u5f02\u5e38\u5904\u7406\u5668\uff0c\u8d1f\u8d23\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6240\u6709\u672a\u5904\u7406\u7684\u5f02\u5e38\u3002\u5f53\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u5904\u7406\u65f6\uff0c\u8be5\u5904\u7406\u5668\u5c31\u4f1a\u6355\u83b7\u8be5\u5f02\u5e38\uff0c\u7136\u540e\u7b49\u5f85\u7528\u6237\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u5f02\u5e38\u5904\u7406\u5668\u7684\u6267\u884c\u4f4d\u7f6e\u5904\u4e8e\u4e2d\u95f4\u4ef6\u4e4b\u540e\uff0c\u6240\u4ee5\u5b83\u80fd\u62e6\u622a\u6240\u6709\u7684\u4e2d\u95f4\u4ef6\u548c\u4e1a\u52a1\u629b\u51fa\u7684\u9519\u8bef\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN013pvSjT1nWvsLRE4vo_!!6000000005098-2-tps-2000-524.png",alt:"err_filter"})),(0,a.kt)("h2",{id:"http-\u5f02\u5e38"},"Http \u5f02\u5e38"),(0,a.kt)("p",null,"\u5728 Http \u8bf7\u6c42\u4e2d\uff0cMidway \u63d0\u4f9b\u4e86\u901a\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"MidwayHttpError")," \u7c7b\u578b\u7684\u5f02\u5e38\uff0c\u5176\u7ee7\u627f\u4e8e\u6807\u51c6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"MidwayError"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class MidwayHttpError extends MidwayError {\n  // ...\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u8bf7\u6c42\u7684\u8fc7\u7a0b\u4e2d\u629b\u51fa\u8be5\u9519\u8bef\uff0c\u7531\u4e8e\u9519\u8bef\u4e2d\u5305\u542b\u72b6\u6001\u7801\uff0cHttp \u7a0b\u5e8f\u5c06\u4f1a\u81ea\u52a8\u8fd4\u56de\u8be5\u72b6\u6001\u7801\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u629b\u51fa\u4e86\u5305\u542b 400 \u72b6\u6001\u7801\u7684\u9519\u8bef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MidwayHttpError } from '@midwayjs/core';\n\n// ...\n\nasync findAll() {\n  throw new MidwayHttpError('my custom error', HttpStatus.BAD_REQUEST);\n}\n\n// got status: 400\n")),(0,a.kt)("p",null,"\u4f46\u662f\u4e00\u822c\u6211\u4eec\u5f88\u5c11\u8fd9\u4e48\u505a\uff0c\u5927\u591a\u6570\u7684\u4e1a\u52a1\u7684\u9519\u8bef\u90fd\u662f\u590d\u7528\u7684\uff0c\u9519\u8bef\u6d88\u606f\u4e5f\u57fa\u672c\u662f\u56fa\u5b9a\u7684\uff0c\u4e3a\u4e86\u51cf\u5c11\u91cd\u590d\u5b9a\u4e49\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e9b\u5f02\u5e38\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u81ea\u5b9a\u4e49\u4e00\u4e2a\u72b6\u6001\u7801\u4e3a 400 \u7684 Http \u5f02\u5e38\uff0c\u53ef\u4ee5\u5982\u4e0b\u5b9a\u4e49\u9519\u8bef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/error/custom.error.ts\nimport { HttpStatus } from '@midwayjs/core';\n\nexport class CustomHttpError extends MidwayHttpError {\n  constructor() {\n    super('my custom error', HttpStatus.BAD_REQUEST);\n  }\n}\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u4e1a\u52a1\u4e2d\u629b\u51fa\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CustomHttpError } from './error/custom.error';\n\n// ...\n\nasync findAll() {\n  throw new CustomHttpError();\n}\n")),(0,a.kt)("h2",{id:"\u5f02\u5e38\u5904\u7406\u5668"},"\u5f02\u5e38\u5904\u7406\u5668"),(0,a.kt)("p",null,"\u5185\u7f6e\u7684\u5f02\u5e38\u5904\u7406\u5668\u7528\u4e8e\u6807\u51c6\u7684\u8bf7\u6c42\u54cd\u5e94\u573a\u666f\uff0c\u5b83\u53ef\u4ee5\u6355\u83b7\u6240\u6709\u8bf7\u6c42\u4e2d\u629b\u51fa\u7684\u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Catch")," \u88c5\u9970\u5668\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u67d0\u4e00\u7c7b\u5f02\u5e38\u7684\u5904\u7406\u7a0b\u5e8f\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u7684\u6355\u83b7\u67d0\u4e00\u7c7b\u578b\u7684\u9519\u8bef\uff0c\u505a\u51fa\u5904\u7406\uff0c\u4e5f\u53ef\u4ee5\u6355\u83b7\u5168\u5c40\u7684\u9519\u8bef\uff0c\u8fd4\u56de\u7edf\u4e00\u7684\u683c\u5f0f\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u7684 Http \u9519\u8bef\uff0c\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"httpError")," \u8fd9\u4e2a\u5bf9\u8c61\u4e0b\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u6355\u83b7\u629b\u51fa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"InternalServerErrorError")," \u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u4e00\u7c7b\u5f02\u5e38\u5904\u7406\u5668\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," \u76ee\u5f55\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/filter/internal.filter.ts"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/filter/internal.filter.ts\nimport { Catch } from '@midwayjs/decorator';\nimport { httpError, MidwayHttpError } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Catch(httpError.InternalServerErrorError)\nexport class InternalServerErrorFilter {\n  async catch(err: MidwayHttpError, ctx: Context) {\n\n    // ...\n    return 'got 500 error, ' + err.message;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"catch")," \u65b9\u6cd5\u7684\u53c2\u6570\u4e3a\u5f53\u524d\u7684\u9519\u8bef\uff0c\u4ee5\u53ca\u5f53\u524d\u5e94\u7528\u8be5\u5f02\u5e38\u5904\u7406\u5668\u7684\u4e0a\u4e0b\u6587 ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," \u3002\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u7684\u5c06\u54cd\u5e94\u7684\u6570\u636e\u8fd4\u56de\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u5199\u53c2\u6570\uff0c\u90a3\u4e48\u4f1a\u6355\u83b7\u6240\u6709\u7684\u9519\u8bef\uff0c\u4e0d\u7ba1\u662f\u4e0d\u662f HttpError\uff0c\u53ea\u5728\u8981\u8bf7\u6c42\u4e2d\u629b\u51fa\u7684\u9519\u8bef\uff0c\u90fd\u4f1a\u88ab\u8fd9\u91cc\u6355\u83b7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/filter/all.filter.ts\nimport { Catch } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/koa';\n\n@Catch()\nexport class AllErrorFilter {\n  async catch(err: Error, ctx: Context) {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"\u5b9a\u4e49\u7684\u5f02\u5e38\u5904\u7406\u5668\u53ea\u662f\u4e00\u6bb5\u666e\u901a\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5c06\u5b83\u5e94\u7528\u5230\u6211\u4eec\u67d0\u4e2a\u6846\u67b6\u7684 app \u4e2d\uff0c\u6bd4\u5982 http \u534f\u8bae\u7684 app\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u4e2d\u5c06\u9519\u8bef\u5904\u7406\u8fc7\u6ee4\u5668\u5e94\u7528\u4e0a\uff0c\u7531\u4e8e\u53c2\u6570\u53ef\u4ee5\u662f\u6570\u7ec4\uff0c\u6211\u4eec\u53ef\u4ee5\u5e94\u7528\u591a\u4e2a\u9519\u8bef\u5904\u7406\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration, App, Catch } from '@midwayjs/decorator';\nimport { join } from 'path';\nimport * as koa from '@midwayjs/koa';\nimport { InternalServerErrorFilter } from './filter/internal.filter';\n\n@Configuration({\n  imports: [\n    koa\n  ],\n})\nexport class MainConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    this.app.useFilter([InternalServerErrorFilter]);\n  }\n}\n\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u67d0\u4e9b\u975e Midway \u7684\u4e2d\u95f4\u4ef6\u6216\u8005\u6846\u67b6\u5185\u90e8\u8bbe\u7f6e\u7684\u72b6\u6001\u7801\uff0c\u7531\u4e8e\u672a\u4f7f\u7528\u9519\u8bef\u629b\u51fa\u7684\u5f62\u5f0f\uff0c\u6240\u4ee5\u62e6\u622a\u4e0d\u5230\uff0c\u5982\u679c\u5728\u4e1a\u52a1\u4e2d\u8fd4\u56de 400 \u4ee5\u4e0a\u7684\u72b6\u6001\uff0c\u8bf7\u5c3d\u53ef\u80fd\u4f7f\u7528\u6807\u51c6\u7684\u629b\u51fa\u9519\u8bef\u7684\u5f62\u5f0f\uff0c\u65b9\u4fbf\u62e6\u622a\u5668\u505a\u5904\u7406\u3002")),(0,a.kt)("h3",{id:"404-\u5904\u7406"},"404 \u5904\u7406"),(0,a.kt)("p",null,"\u6846\u67b6\u5185\u90e8\uff0c\u5982\u679c\u672a\u5339\u914d\u5230\u8def\u7531\uff0c\u4f1a\u629b\u51fa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"NotFoundError")," \u7684\u5f02\u5e38\u3002\u901a\u8fc7\u5f02\u5e38\u5904\u7406\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5176\u884c\u4e3a\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8df3\u8f6c\u5230\u67d0\u4e2a\u9875\u9762\uff0c\u6216\u8005\u8fd4\u56de\u7279\u5b9a\u7684\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/filter/notfound.filter.ts\nimport { Catch } from '@midwayjs/decorator';\nimport { httpError, MidwayHttpError } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Catch(httpError.NotFoundError)\nexport class NotFoundFilter {\n  async catch(err: MidwayHttpError, ctx: Context) {\n    // 404 \u9519\u8bef\u4f1a\u5230\u8fd9\u91cc\n    ctx.redirect('/404.html');\n\n    // \u6216\u8005\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a\u5185\u5bb9\n    return {\n      message: '404, ' + ctx.path\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"500-\u5904\u7406"},"500 \u5904\u7406"),(0,a.kt)("p",null,"\u5f53\u4e0d\u4f20\u9012\u88c5\u9970\u5668\u53c2\u6570\u65f6\uff0c\u5c06\u6355\u83b7\u6240\u6709\u7684\u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u6355\u83b7\u6240\u6709\u7684\u9519\u8bef\uff0c\u5e76\u8fd4\u56de\u7279\u5b9a\u7684 JSON \u7ed3\u6784\uff0c\u793a\u4f8b\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/filter/default.filter.ts\n\nimport { Catch } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/koa';\n\n@Catch()\nexport class DefaultErrorFilter {\n  async catch(err: Error, ctx: Context) {\n\n    // ...\n    return {\n      status: err.status ?? 500,\n      message: err.message;\n    }\n  }\n\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u4e2d\u5c06\u9519\u8bef\u5904\u7406\u8fc7\u6ee4\u5668\u5e94\u7528\u4e0a\uff0c\u7531\u4e8e\u53c2\u6570\u53ef\u4ee5\u662f\u6570\u7ec4\uff0c\u6211\u4eec\u53ef\u4ee5\u5e94\u7528\u591a\u4e2a\u9519\u8bef\u5904\u7406\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App, Catch } from '@midwayjs/decorator';\nimport { join } from 'path';\nimport * as koa from '@midwayjs/koa';\nimport { DefaultErrorFilter } from './filter/default.filter';\nimport { NotFoundFilter } from './filter/notfound.filter';\n\n@Configuration({\n  imports: [\n    koa\n  ],\n})\nexport class MainConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);\n  }\n}\n\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u5f02\u5e38\u5904\u7406\u5668\u4e0d\u9700\u8981\u8003\u8651\u987a\u5e8f\uff0c\u901a\u7528\u7684\u9519\u8bef\u5904\u7406\u5668\u4e00\u5b9a\u662f\u6700\u540e\u88ab\u5339\u914d\uff0c\u4e14\u4e00\u4e2a app \u4e0a\u6709\u4e14\u53ea\u80fd\u6709\u4e00\u4e2a\u901a\u7528\u7684\u9519\u8bef\u5904\u7406\u5668\u3002"),(0,a.kt)("h2",{id:"\u6d3e\u751f\u5f02\u5e38\u5904\u7406"},"\u6d3e\u751f\u5f02\u5e38\u5904\u7406"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f02\u5e38\u53ea\u4f1a\u8fdb\u884c\u7edd\u5bf9\u5339\u914d\u3002"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u53bb\u6355\u83b7\u6240\u6709\u7684\u6d3e\u751f\u7c7b\uff0c\u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u989d\u5916\u8bbe\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Catch } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/koa';\nimport { MidwayError } from '@midwayjs/core';\n\nclass CustomError extends MidwayError {}\n\nclass CustomError2 extends MidwayError {}\n\n// \u8fd9\u91cc\u4f1a\u6355\u83b7\u6240\u6709\u7684\u5b50\u7c7b\n@Catch([MidwayError], {\n  matchPrototype: true\n})\nclass TestFilter {\n  catch(err, ctx) {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"matchPrototype")," \u53ef\u4ee5\u5339\u914d\u6240\u6709\u7684\u6d3e\u751f\u7684\u7c7b\u3002"),(0,a.kt)("h2",{id:"\u5f02\u5e38\u65e5\u5fd7"},"\u5f02\u5e38\u65e5\u5fd7"),(0,a.kt)("p",null,"Midway \u5185\u7f6e\u4e86\u9ed8\u8ba4\u7684\u5f02\u5e38\u5904\u7406\u884c\u4e3a\u3002"),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("strong",{parentName:"p"},"\u6ca1\u6709\u5339\u914d")," \u5230\u5f02\u5e38\u5904\u7406\u5668\uff0c\u90fd\u4f1a\u88ab\u515c\u5e95\u7684\u5f02\u5e38\u4e2d\u95f4\u4ef6\u62e6\u622a\uff0c\u8bb0\u5f55\u3002"),(0,a.kt)("p",null,"\u53cd\u8fc7\u6765\u8bf4\uff0c\u5982\u679c\u81ea\u5b9a\u4e49\u4e86\u5f02\u5e38\u5904\u7406\u5668\uff0c\u90a3\u4e48\u9519\u8bef\u5c31\u4f1a\u88ab\u5f53\u6210\u6b63\u5e38\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e2a\u65f6\u5019\u5e95\u5c42\u629b\u51fa\u7684\u5f02\u5e38\u5c31\u4f1a\u4f5c\u4e3a\u4e1a\u52a1\u6b63\u5e38\u7684\u5904\u7406\u903b\u8f91\uff0c\u800c ",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a")," \u88ab\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u81ea\u884c\u5728\u5f02\u5e38\u5904\u7406\u5668\u4e2d\u6253\u5370\u65e5\u5fd7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Catch } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/koa';\n\n@Catch()\nexport class DefaultErrorFilter {\n  async catch(err: Error, ctx: Context) {\n\n    // ...\n    ctx.logger.error(err);\n    // ...\n    return 'got 500 error, ' + err.message;\n  }\n}\n")),(0,a.kt)("h2",{id:"\u5185\u7f6e\u7684-http-\u5f02\u5e38"},"\u5185\u7f6e\u7684 Http \u5f02\u5e38"),(0,a.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e9b\u6846\u67b6\u5185\u7f6e\u7684 Http \u5f02\u5e38\uff0c\u90fd\u53ef\u4ee5\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," \u4e2d\u627e\u5230\u5e76\u4f7f\u7528\uff0c\u6bcf\u4e2a\u5f02\u5e38\u90fd\u5df2\u7ecf\u5305\u542b\u9ed8\u8ba4\u7684\u9519\u8bef\u6d88\u606f\u548c\u72b6\u6001\u7801\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BadRequestError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UnauthorizedError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NotFoundError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ForbiddenError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NotAcceptableError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RequestTimeoutError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ConflictError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GoneError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PayloadTooLargeError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UnsupportedMediaTypeError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UnprocessableEntityError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InternalServerErrorError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NotImplementedError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BadGatewayError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ServiceUnavailableError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GatewayTimeoutError"))),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { httpError } from '@midwayjs/core';\n\n// ...\n\nasync findAll() {\n  // something wrong\n  throw new httpError.InternalServerErrorError();\n}\n\n// got status: 500\n\n")))}c.isMDXComponent=!0}}]);