import { OpenAPIObject } from 'openapi3-ts'
import info from './info'
import paths from './paths'
import { schemas } from './schemas'

const spec: OpenAPIObject = {
  openapi: '3.0.0',
  info,
  paths,
  servers: [
    {
      url: 'http://petstore.swagger.io/v1',
    },
  ],
  components: { schemas },
}

export { spec as default }
