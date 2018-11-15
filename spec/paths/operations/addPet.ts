import * as Api from 'swagger-schema-official'
import { refs } from '../../definitions'

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
    },
    default: {
      description: 'unexpected error',
      schema: { $ref: refs.ErrorResponse },
    },
  },
}

export { addPet as default }
