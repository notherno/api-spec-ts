import * as Api from 'swagger-schema-official'

const findPetById: Api.Operation = {
  description:
    'Returns a user based on a single ID, if the user does not have access to the pet',
  operationId: 'findPetById',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of pet to fetch',
      required: true,
      type: 'integer',
      format: 'int64',
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

export { findPetById as default }
