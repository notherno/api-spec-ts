import * as Api from 'swagger-schema-official'
import { Error } from '../../definitions'

const deletePet: Api.Operation = {
  description: 'deletes a single pet based on the ID supplied',
  operationId: 'deletePet',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of pet to delete',
      required: true,
      type: 'integer',
      format: 'int64',
    },
  ],
  responses: {
    '204': {
      description: 'pet deleted',
    },
    default: {
      description: 'unexpected error',
      schema: { $ref: Error.$ref },
    },
  },
}

export { deletePet as default }
