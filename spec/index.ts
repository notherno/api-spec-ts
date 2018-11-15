import * as Api from 'swagger-schema-official'
import info from './info'
import paths from './paths'
import { definitions } from './definitions'

const spec: Api.Spec = {
  swagger: '2.0',
  info,
  host: 'petstore.swagger.io',
  basePath: '/api',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths,
  definitions,
}

export { spec as default }
