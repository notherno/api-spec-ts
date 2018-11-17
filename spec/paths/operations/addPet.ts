import { OperationObject } from 'openapi3-ts'
import { refs, NewPet, ErrorResponse } from '../../schemas'
import { rabbit } from '../../examples/Pet'

const errorExample: ErrorResponse = {
  code: 400,
  message: 'something went wrong',
}

const addPet: OperationObject = {
  description: 'Creates a new pet in the store.  Duplicates are allowed',
  operationId: 'addPet',
  requestBody: {
    content: {
      'application/json': {
        name: 'pet',
        in: 'body',
        description: 'Pet to add to the store',
        required: true,
        schema: { $ref: refs.NewPet },
        example: <NewPet>{
          name: 'rabbit',
          tag: 'rabbit',
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: { $ref: refs.Pet },
          example: rabbit,
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: { $ref: refs.ErrorResponse },
          example: errorExample,
        },
      },
    },
  },
}

export { addPet as default }
