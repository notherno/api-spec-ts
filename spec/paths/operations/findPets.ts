import * as Api from 'swagger-schema-official'
import { Pet, Error } from '../../definitions'

const findPets: Api.Operation = {
  description:
    'Returns all pets from the system that the user has access to\nNam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.\n\nSed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.\n',
  operationId: 'findPets',
  parameters: [
    {
      name: 'tags',
      in: 'query',
      description: 'tags to filter by',
      required: false,
      type: 'array',
      collectionFormat: 'csv',
      items: {
        type: 'string',
      },
    },
    {
      name: 'limit',
      in: 'query',
      description: 'maximum number of results to return',
      required: false,
      type: 'integer',
      format: 'int32',
    },
  ],
  responses: {
    200: {
      description: 'pet response',
      schema: {
        type: 'array',
        items: { $ref: Pet.$ref },
      },
    },
    default: {
      description: 'unexpected error',
      schema: { $ref: Error.$ref },
    },
  },
}

export { findPets as default }
