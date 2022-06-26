const LoadRegistrationsByIdUserRepository = require('../../infra/repositories/LoadRegistrationsByIdUserRepository')
const UserRegistrationsRouter = require('../../presentation/routers/UserRegistrationsRouter')
const RegistrationUseCase = require('../usecases/RegistrationUseCase')
const dbConnection = require('../../infra/DbConnection')

module.exports = class UserRegistrationsRouterCompose {
  compose () {
    const loadRegistrationsByIdUserRepository = new LoadRegistrationsByIdUserRepository({ dbConnection })
    const registrationUseCase = new RegistrationUseCase({ loadRegistrationsByIdUserRepository })
    return new UserRegistrationsRouter({ registrationUseCase })
  }
}
