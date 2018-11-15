import * as Api from 'swagger-schema-official'
import { Error, Pet } from '../../definitions'

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
      schema: { $ref: Pet.$ref },
    },
    default: {
      description: 'unexpected error',
      schema: { $ref: Error.$ref },
    },
  },
}

export { findPetById as default }
