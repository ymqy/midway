"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[556],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],s={title:"\u805a\u5408\u90e8\u7f72"},o=void 0,p={unversionedId:"serverless/serverless_aggr",id:"serverless/serverless_aggr",title:"\u805a\u5408\u90e8\u7f72",description:"Midway \u9488\u5bf9 HTTP \u573a\u666f\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u805a\u5408\u90e8\u7f72\u7684\u65b9\u5f0f\uff0c\u5728\u5f00\u53d1\u65f6\u548c\u4f20\u7edf Web \u5e94\u7528\u7c7b\u4f3c\uff0c\u5728\u90e8\u7f72\u65f6\u5c06\u591a\u4e2a\u8def\u7531\u90e8\u7f72\u5728\u540c\u4e00\u4e2a\u51fd\u6570\u5bb9\u5668\u4e2d\uff0c\u53ef\u4ee5\u8282\u7701\u51b7\u542f\u52a8\u65f6\u95f4\uff0c\u8282\u7701\u8d39\u7528\u3002",source:"@site/docs/serverless/serverless_aggr.md",sourceDirName:"serverless",slug:"/serverless/serverless_aggr",permalink:"/docs/serverless/serverless_aggr",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/serverless_aggr.md",tags:[],version:"current",frontMatter:{title:"\u805a\u5408\u90e8\u7f72"}},c={},m=[{value:"\u521b\u5efa\u4ee3\u7801",id:"\u521b\u5efa\u4ee3\u7801",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u51fd\u6570\u6587\u4ef6",id:"\u51fd\u6570\u6587\u4ef6",level:2},{value:"\u51fd\u6570\u5b9a\u4e49\u6587\u4ef6",id:"\u51fd\u6570\u5b9a\u4e49\u6587\u4ef6",level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1",level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",level:2},{value:"\u548c\u7eaf\u51fd\u6570\u7684\u533a\u522b",id:"\u548c\u7eaf\u51fd\u6570\u7684\u533a\u522b",level:2},{value:"\u51fd\u6570\u540d\u89c4\u5219",id:"\u51fd\u6570\u540d\u89c4\u5219",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Midway \u9488\u5bf9 HTTP \u573a\u666f\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u805a\u5408\u90e8\u7f72\u7684\u65b9\u5f0f\uff0c\u5728\u5f00\u53d1\u65f6\u548c\u4f20\u7edf Web \u5e94\u7528\u7c7b\u4f3c\uff0c\u5728\u90e8\u7f72\u65f6\u5c06\u591a\u4e2a\u8def\u7531\u90e8\u7f72\u5728\u540c\u4e00\u4e2a\u51fd\u6570\u5bb9\u5668\u4e2d\uff0c\u53ef\u4ee5\u8282\u7701\u51b7\u542f\u52a8\u65f6\u95f4\uff0c\u8282\u7701\u8d39\u7528\u3002"),(0,i.kt)("p",null,"\u805a\u5408\u90e8\u7f72\u6a21\u5f0f\u7279\u522b\u9002\u5408\u7528\u4e8e\u4f20\u7edf\u4e2d\u540e\u53f0\u670d\u52a1\u3002"),(0,i.kt)("h2",{id:"\u521b\u5efa\u4ee3\u7801"},"\u521b\u5efa\u4ee3\u7801"),(0,i.kt)("p",null,"\u521b\u5efa\u805a\u5408\u90e8\u7f72\u7684\u4ee3\u7801\u793a\u4f8b\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"v3 \u7684\u805a\u5408\u90e8\u7f72\u65b9\u6848\u6211\u4eec\u6682\u672a\u51c6\u5907\u597d\u3002"))),(0,i.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\u7684\u6700\u7cbe\u7b80\u7684\u7ed3\u6784\uff0c\u6838\u5fc3\u4f1a\u5305\u62ec\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," \u6807\u51c6\u5316\u51fd\u6570\u6587\u4ef6\uff0c\u4ee5\u53ca TypeScript \u7684\u9879\u76ee\u7ed3\u6784\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 f.yml           # \u6807\u51c6\u5316 spec \u6587\u4ef6\n\u251c\u2500\u2500 package.json    # \u9879\u76ee\u4f9d\u8d56\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 index.ts    # \u51fd\u6570\u5165\u53e3\n\u2514\u2500\u2500 tsconfig.json\n")),(0,i.kt)("p",null,"\u6211\u4eec\u6765\u7b80\u5355\u4e86\u89e3\u4e00\u4e0b\u6587\u4ef6\u5185\u5bb9\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"f.yml"),"  \u51fd\u6570\u5b9a\u4e49\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," tsc \u914d\u7f6e\u6587\u4ef6\uff08\u6ca1\u6709 IDE \u4f1a\u62a5\u9519\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src")," \u51fd\u6570\u6e90\u7801\u76ee\u5f55"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/index.ts")," \u793a\u4f8b\u51fd\u6570\u6587\u4ef6")),(0,i.kt)("h2",{id:"\u51fd\u6570\u6587\u4ef6"},"\u51fd\u6570\u6587\u4ef6"),(0,i.kt)("p",null,"\u6211\u4eec\u9996\u5148\u6765\u770b\u770b\u51fd\u6570\u6587\u4ef6\uff0c\u4f20\u7edf\u7684\u51fd\u6570\u662f\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," \uff0c\u4e3a\u4e86\u66f4\u7b26\u5408 midway \u4f53\u7cfb\uff0c\u4ee5\u53ca\u4f7f\u7528\u6211\u4eec\u7684\u4f9d\u8d56\u6ce8\u5165\uff0c\u8fd9\u91cc\u5c06\u5b83\u53d8\u6210\u4e86 Class\u3002"),(0,i.kt)("p",null,"\u548c\u4f20\u7edf\u5e94\u7528\u76f8\u540c\uff0c\u6211\u4eec\u4f9d\u65e7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Controller")," \u88c5\u9970\u5668\u6765\u5f00\u53d1\u805a\u5408\u7684 HTTP \u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u5982\u4e0b\u4ee3\u7801\uff0c\u6211\u4eec\u66b4\u9732\u4e86\u4e09\u4e2a\u8def\u7531\uff0c\u5728\u805a\u5408\u90e8\u7f72\u6a21\u5f0f\u4e0b\uff0c\u4f1a\u53ea\u90e8\u7f72\u6210\u4e00\u4e2a HTTP \u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Provide, Controller, Get, Post } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\n@Controller('/')\nexport class APIService {\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async hello() {\n    return 'Hello Midwayjs';\n  }\n\n  @Get('/get')\n  async get() {\n    return this.ctx.query;\n  }\n\n  @Post('/post')\n  async post() {\n    return this.ctx.method;\n  }\n}\n")),(0,i.kt)("h2",{id:"\u51fd\u6570\u5b9a\u4e49\u6587\u4ef6"},"\u51fd\u6570\u5b9a\u4e49\u6587\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," \u662f\u51fd\u6570\u7684\u5b9a\u4e49\u6587\u4ef6\uff0c\u901a\u8fc7\u8fd9\u4e2a\u6587\u4ef6\uff0c\u5728\u6784\u5efa\u65f6\u751f\u6210\u4e0d\u540c\u5e73\u53f0\u6240\u80fd\u8ba4\u8bc6\u7684\u6587\u4ef6\uff0c\u793a\u4f8b\u4e2d\u7684\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples ## \u51fd\u6570\u7ec4\u540d\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u5e94\u7528\u540d\n\nprovider:\n  name: aliyun ## \u53d1\u5e03\u7684\u5e73\u53f0\uff0c\u8fd9\u91cc\u662f\u963f\u91cc\u4e91\n\naggregation: ## \u5bf9 HTTP \u51fd\u6570\u4f7f\u7528\u805a\u5408\u6a21\u5f0f\u90e8\u7f72\n  all: ## \u90e8\u7f72\u7684\u51fd\u6570\u540d\n    functionsPattern: ## \u5339\u914d\u7684\u51fd\u6570\u89c4\u5219\n      - '*'\n")),(0,i.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,i.kt)("p",null,"HTTP \u51fd\u6570\u672c\u5730\u5f00\u53d1\u548c\u4f20\u7edf Web \u76f8\u540c\uff0c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run dev\n$ open http://localhost:7001\n")),(0,i.kt)("p",null,"Midway \u4f1a\u542f\u52a8 HTTP \u670d\u52a1\u5668\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee ",(0,i.kt)("inlineCode",{parentName:"p"},"[http://127.0.0.1:7001](http://127.0.0.1:7001)")," \uff0c\u6d4f\u89c8\u5668\u4f1a\u6253\u5370\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello midwayjs"),"  \u7684\u4fe1\u606f\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1615045887650-73a90be7-1d49-4024-82c4-fd6b5192e75e.png#height=384&id=JCH29&margin=%5Bobject%20Object%5D&name=image.png&originHeight=768&originWidth=1268&originalType=binary&ratio=1&size=85174&status=done&style=none&width=634",width:"634"}),(0,i.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u4f7f\u7528\u548c\u5e94\u7528\u76f8\u540c\u7684\u6d4b\u8bd5\u65b9\u6cd5\u6765\u6d4b\u8bd5\uff0c\u9488\u5bf9 HTTP \u51fd\u6570\uff0c\u4f7f\u7528\u5c01\u88c5\u4e86 supertest \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"createHttpRequest")," \u65b9\u6cd5\u521b\u5efa HTTP \u5ba2\u6237\u7aef\u3002"),(0,i.kt)("p",null,"\u552f\u4e00\u548c\u5e94\u7528\u4e0d\u540c\u7684\u662f\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u65b9\u6cd5\u521b\u5efa\u51fd\u6570\u5e94\u7528\uff08app\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u65b9\u6cd5\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"createApp")," \u65b9\u6cd5\u5728\u51fd\u6570\u573a\u666f\u4e0b\u7684\u5b9a\u5236\uff08\u5176\u4e2d\u6307\u5b9a\u4e86\u51fd\u6570\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/serverless-app")," \u6846\u67b6\uff09\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u4e0d\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u6846\u67b6\uff0c\u800c\u662f\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/serverless-app"),"  \u6846\u67b6\uff0c\u56e0\u4e3a\u540e\u8005\u5305\u542b\u4e86\u7f51\u5173\u6a21\u62df\u5230\u51fd\u6570\u8c03\u7528\u7684\u7cfb\u5217\u6b65\u9aa4\u3002"))),(0,i.kt)("p",null,"HTTP \u6d4b\u8bd5\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';\nimport { Framework } from '@midwayjs/serverless-app';\nimport * as assert from 'assert';\n\ndescribe('test/index.test.ts', () => {\n  it('should get /', async () => {\n    // create app\n    const app = await createFunctionApp<Framework>();\n\n    // make request\n    const result = await createHttpRequest(app).get('/');\n\n    // use expect by jest\n    expect(result.status).toBe(200);\n    expect(result.text).toBe('Hello Midwayjs');\n\n    const result2 = await createHttpRequest(app).get('/get').query({ name: 123 });\n    // or use assert\n    assert.deepStrictEqual(result2.status, 200);\n    assert.deepStrictEqual(result2.body.name, '123');\n\n    // close app\n    await close(app);\n  });\n});\n")),(0,i.kt)("h2",{id:"\u548c\u7eaf\u51fd\u6570\u7684\u533a\u522b"},"\u548c\u7eaf\u51fd\u6570\u7684\u533a\u522b"),(0,i.kt)("p",null,"\u666e\u901a\u7684\u51fd\u6570\uff0c\u4f1a\u5c06\u5355\u4e2a\u7684\u51fd\u6570\u6ce8\u518c\u5230\u7279\u5b9a\u7684\u8def\u7531\u4e0a\u3002\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u6d41\u91cf\uff0c\u4f1a\u5206\u522b\u6253\u5230\u4e0d\u540c\u7684\u51fd\u6570\u5b9e\u4f8b\u4e0a\uff0c\u8fd9\u6837\u7684\u597d\u5904\u662f\u6bcf\u4e2a\u63a5\u53e3\u5bf9\u5e94\u7684\u51fd\u6570\u5b9e\u4f8b\u6570\u91cf\u53ef\u80fd\u90fd\u662f\u4e0d\u540c\u7684\uff0c\u8c03\u7528\u591a\u7684\u63a5\u53e3\uff0c\u5b9e\u4f8b\u5c31\u591a\uff0c\u8c03\u7528\u5c11\u7684\u63a5\u53e3\u5c31\u4f1a\u5c11\u3002"),(0,i.kt)("p",null,"\u574f\u5904\u5c31\u662f\uff0c\u5982\u679c\u8c03\u7528\u91cf\u8f83\u5c11\uff0c\u51fd\u6570\u7684\u51b7\u542f\u52a8\u6982\u7387\u5c31\u5927\uff0c\u8c03\u7528\u7684\u65f6\u95f4\u4f1a\u660e\u663e\u53d8\u5927\uff0c\u7531\u4e8e\u6bcf\u4e2a\u51fd\u6570\u90fd\u4f1a\u6709\u5f00\u9500\uff0c\u8d44\u6e90\u6ca1\u6709\u590d\u7528\uff0c\u6700\u7ec8\u7684\u6536\u8d39\u4e5f\u4f1a\u53d8\u591a\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618156727582-20f0df7c-9f91-430b-87a6-1796b1ee35e1.png#height=494&id=Rdl50&margin=%5Bobject%20Object%5D&name=image.png&originHeight=988&originWidth=1912&originalType=binary&ratio=1&size=85218&status=done&style=none&width=956",width:"956"}),(0,i.kt)("p",null,"\u800c\u805a\u5408\u90e8\u7f72\uff0c\u4f1a\u5c06\u6240\u6709\u7684\u8def\u7531\u90fd\u6ce8\u518c\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"/*")," \u8def\u7531\u4e0a\uff0c\u7531\u6846\u67b6\u5185\u90e8\u7684\u8def\u7531\u4ee3\u7801\u8fdb\u884c\u5206\u53d1\uff0c\u6240\u6709\u7684\u51fd\u6570\u5171\u4eab\u540c\u4e00\u4e2a\u5bb9\u5668\uff0c\u4efb\u610f\u7684\u8bf7\u6c42\u90fd\u4f1a\u8ba9\u8fd9\u4e2a\u5bb9\u5668\u4fdd\u6d3b\uff0c\u4f7f\u5f97\u51b7\u542f\u52a8\u7684\u53ef\u80fd\u6027\u5927\u5927\u51cf\u5c11\u3002\u540c\u65f6\uff0c\u7531\u4e8e\u4ee3\u7801\u662f\u590d\u7528\u7684\uff0c\u5bb9\u5668\u7684\u590d\u7528\u7387\u5927\u5927\u589e\u52a0\uff0c\u6bd4\u8f83\u9002\u5408\u4e8e\u4e2d\u540e\u53f0\u8fd9\u7c7b\u8bf7\u6c42\u5747\u8861\u4e14\u63a5\u53e3\u7684\u8c03\u7528\u91cf\u76f8\u5bf9\u5747\u8861\u7684\u573a\u666f\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618156735858-4ddb1d49-357d-4cec-8201-b2e49bde4b5f.png#height=456&id=I9ZeD&margin=%5Bobject%20Object%5D&name=image.png&originHeight=912&originWidth=1770&originalType=binary&ratio=1&size=59657&status=done&style=none&width=885",width:"885"}),(0,i.kt)("h2",{id:"\u51fd\u6570\u540d\u89c4\u5219"},"\u51fd\u6570\u540d\u89c4\u5219"),(0,i.kt)("p",null,"\u4f7f\u7528\u805a\u5408\u6a21\u5f0f\u90e8\u7f72\u7684\u51fd\u6570\uff0c\u6211\u4eec\u4e00\u822c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Controller")," \u88c5\u9970\u5668\u6216\u8005\u4e00\u4f53\u5316\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u548c\u4f20\u7edf Web \u5f00\u53d1\u3001\u6d4b\u8bd5\u4fdd\u6301\u4e00\u81f4\u3002"),(0,i.kt)("p",null,"\u5728\u6784\u5efa\u65f6\uff0c\u6211\u4eec\u4f1a\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," \u5b57\u6bb5\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u7528\u6237\u4e0d\u9700\u8981\u5173\u5fc3\u51fd\u6570\u540d\uff0c\u63a5\u53e3\u7b49\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Controller")," \u88c5\u9970\u5668\u7684\u60c5\u51b5\u4e0b\uff0c\u751f\u6210\u7684\u51fd\u6570\u540d\u89c4\u5219\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"providerId_methodName"),"\uff0c\u5373\u4f9d\u8d56\u6ce8\u5165\u7684 key \u548c\u65b9\u6cd5\u540d\u7684\u7ec4\u5408\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide('userService') // <--- \u53d6\u7684\u662f\u8fd9\u4e2a\u540d\u5b57\uff0c\u5982\u679c\u4e0d\u586b\uff0c\u9ed8\u8ba4\u662f\u7c7b\u540d\u7684\u9a7c\u5cf0\u5f62\u5f0f\n@Controller('/api')\nexport class UserService {\n  @Get('/get/:id')\n  async getUser(@Query() name) {}\n\n  @Post('/create')\n  async createUser(@Query() name) {}\n}\n")),(0,i.kt)("p",null,"\u6784\u5efa\u65f6\u4f1a\u81ea\u52a8\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"userService_getUser")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"userService_createUser")," \u4e24\u4e2a\u51fd\u6570\u5e76\u505a\u5185\u90e8\u8def\u7531\u5904\u7406\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u751f\u6210\u7684 YAML \u4f2a\u4ee3\u7801\uff08\u5b9e\u9645\u7531\u4e8e\u662f\u805a\u5408\u90e8\u7f72\uff0c\u53d8\u4e3a\u5185\u90e8\u8def\u7531\uff0c\u5e76\u4e0d\u4f1a\u521b\u5efa\u8fd9\u6bb5\u4ee3\u7801\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"functions:\n    userService_getUser:\n    events:\n        - http:\n          method: get\n          path: /get/[:id]\n  userService_createUser:\n    events:\n        - http:\n          method: post\n          path: /create\n")))}u.isMDXComponent=!0}}]);