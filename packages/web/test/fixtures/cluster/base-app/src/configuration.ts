import { Configuration } from '@midwayjs/decorator';
import { join } from 'path';

@Configuration({
  imports: [
    require('../../../../../')
  ],
  importConfigs: [
    join(__dirname, './config')
  ]
})
export class ContainerConfiguration {
}