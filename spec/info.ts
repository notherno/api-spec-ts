import { InfoObject } from 'openapi3-ts'

const info: InfoObject = {
  version: '1.0.0',
  title: 'Swagger Petstore',
  description:
    'A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification',
  termsOfService: 'http://swagger.io/terms/',
  contact: {
    name: 'Swagger API Team',
    email: 'foo@example.com',
    url: 'http://madskristensen.net',
  },
  license: {
    name: 'MIT',
    url: 'https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT',
  },
}

export { info as default }
