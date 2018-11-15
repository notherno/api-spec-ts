import * as Api from 'swagger-schema-official'
import findPets from './operations/findPets'
import findPetById from './operations/findPetById'
import addPet from './operations/addPet'
import deletePet from './operations/deletePet'

const paths: { [pathname: string]: Api.Path } = {
  '/pets': {
    get: findPets,
    post: addPet,
  },
  '/pets/{id}': {
    get: findPetById,
    delete: deletePet,
  },
}

export { paths as default }
