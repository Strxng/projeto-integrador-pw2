const LoadRegistrationsByIdUserRepository = require('../../infra/repositories/LoadRegistrationsByIdUserRepository')
const UserRegistrationsRouter = require('../../presentation/routers/UserRegistrationsRouter')
const RegistrationUseCase = require('../usecases/RegistrationUseCase')
const DirectorRegistrationsUseCase = require('../usecases/DirectorRegistrationsUseCase')
const LoadRegistrationForDirectorByIdUserRepository = require('../../infra/repositories/LoadRegistrationForDirectorByIdUserRepository')
const dbConnection = require('../../infra/DbConnection')

module.exports = class UserRegistrationsRouterCompose {
  compose () {
    const loadRegistrationForDirectorByIdUserRepository = new LoadRegistrationForDirectorByIdUserRepository({ dbConnection })
    const directorRegistrationsUseCase = new DirectorRegistrationsUseCase({ loadRegistrationForDirectorByIdUserRepository })
    const loadRegistrationsByIdUserRepository = new LoadRegistrationsByIdUserRepository({ dbConnection })
    const registrationUseCase = new RegistrationUseCase({ loadRegistrationsByIdUserRepository })
    return new UserRegistrationsRouter({ registrationUseCase, directorRegistrationsUseCase })
  }
}
