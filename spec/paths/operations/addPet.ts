import * as Api from 'swagger-schema-official'
import { refs, ErrorResponse } from '../../definitions'
import { rabbit } from '../../examples/Pet'

const errorExample: ErrorResponse = {
  code: 400,
  message: 'something went wrong'
}

const addPet: Api.Operation = {
  description: 'Creates a new pet in the store.  Duplicates are allowed',
  operationId: 'addPet',
  parameters: [
    {
      name: 'pet',
      in: 'body',
      description: 'Pet to add to the store',
      required: true,
      schema: { $ref: refs.NewPet },
    },
  ],
  responses: {
    '200': {
      description: 'pet response',
      schema: { $ref: refs.Pet },
      examples: { 'application/json': rabbit },
    },
    default: {
      description: 'unexpected error',
      schema: { $ref: refs.ErrorResponse },
      examples: { 'application/json': errorExample },
    },
  },
}

export { addPet as default }
