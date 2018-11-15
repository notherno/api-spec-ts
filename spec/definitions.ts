import * as Api from 'swagger-schema-official'

export const NewPet: Api.Schema = {
  $ref: '#/definitions/NewPet',
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
}

export const Pet: Api.Schema = {
  $ref: '#/definitions/Pet',
  type: 'object',
  allOf: [
    {
      $ref: NewPet.$ref,
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
}

export const Error: Api.Schema = {
  $ref: '#/definitions/Error',
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
}

const definitions: { [name: string]: Api.Schema } = {
  Pet,
  NewPet,
  Error,
}

export { definitions as default }
