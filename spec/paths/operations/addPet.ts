import * as Api from 'swagger-schema-official'
import { NewPet, Pet, Error } from '../../definitions'

const addPet: Api.Operation = {
  description: 'Creates a new pet in the store.  Duplicates are allowed',
  operationId: 'addPet',
  parameters: [
    {
      name: 'pet',
      in: 'body',
      description: 'Pet to add to the store',
      required: true,
      schema: { $ref: NewPet.$ref },
    },
  ],
  responses: {
    '200': {
      description: 'pet response',
      schema: { $ref: Pet.$ref },
    },
    default: {
      description: 'unexpected error',
      schema: { $ref: Error.$ref },
    },
  },
}

export { addPet as default }
