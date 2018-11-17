import { PathsObject } from 'openapi3-ts'
import findPets from './operations/findPets'
import findPetById from './operations/findPetById'
import addPet from './operations/addPet'
import deletePet from './operations/deletePet'

const paths: PathsObject = {
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
