import * as Api from 'swagger-schema-official'

const definitions: { [name: string]: Api.Schema } = {
  Pet: {
    type: 'object',
    allOf: [
      {
        $ref: '#/definitions/NewPet',
      },
      {
        required: ['id'],
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
          },
        },
      },
    ],
  },
  NewPet: {
    type: 'object',
    required: ['name'],
    properties: {
      name: {
        type: 'string',
      },
      tag: {
        type: 'string',
      },
    },
  },
  Error: {
    type: 'object',
    required: ['code', 'message'],
    properties: {
      code: {
        type: 'integer',
        format: 'int32',
      },
      message: {
        type: 'string',
      },
    },
  },
}

export { definitions as default }
