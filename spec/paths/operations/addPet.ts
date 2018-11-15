import * as Api from 'swagger-schema-official'

const addPet: Api.Operation = {
  description: 'Creates a new pet in the store.  Duplicates are allowed',
  operationId: 'addPet',
  parameters: [
    {
      name: 'pet',
      in: 'body',
      description: 'Pet to add to the store',
      required: true,
      schema: {
        $ref: '#/definitions/NewPet',
      },
    },
  ],
  responses: {
    '200': {
      description: 'pet response',
      schema: {
        $ref: '#/definitions/Pet',
      },
    },
    default: {
      description: 'unexpected error',
      schema: {
        $ref: '#/definitions/Error',
      },
    },
  },
}

export { addPet as default }
