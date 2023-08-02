import { Configuration, Controller, Get, Inject, MidwayWebRouterService } from '@midwayjs/core';
import { Context } from '../../../../src';

@Controller('/')
export class Home {

  @Inject()
  ctx: Context;

  @Get('/exists')
  async home() {
    return this.ctx.forward('/api/getData');
  }

  @Get('/not-exists')
  async home1() {
    return this.ctx.forward('/api/not-exists');
  }

  @Get('/forward-function')
  async home2() {
    return this.ctx.forward('/api/user');
  }
}

@Controller('/api')
export class API {

  @Inject()
  ctx: Context;

  @Get('/getData')
  async getData() {
    return 'exists';
  }
}


@Configuration({
  imports: [
    require('../../../../src')
  ],
  importConfigs: [
    {
      default: {
        keys: 'keys'
      }
    }
  ]
})
export class ContainerConfiguration {
  @Inject()
  webRouterService: MidwayWebRouterService;

  async onReady() {
    // koa/egg 格式
    this.webRouterService.addRouter(async (ctx) => {
      return 'hello world';
    }, {
      url: '/api/user',
      requestMethod: 'GET',
    });
  }
}
