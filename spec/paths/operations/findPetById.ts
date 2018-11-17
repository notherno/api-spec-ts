import { OperationObject } from 'openapi3-ts'
import { refs } from '../../schemas'

const findPetById: OperationObject = {
  description:
    'Returns a user based on a single ID, if the user does not have access to the pet',
  operationId: 'findPetById',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of pet to fetch',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: { $ref: refs.Pet },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: { $ref: refs.ErrorResponse },
        },
      },
    },
  },
}

export { findPetById as default }
