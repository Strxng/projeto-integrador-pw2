const RegistrationRouter = require('../../presentation/routers/RegistrationRouter')
const RegistrationUseCase = require('../usecases/RegistrationUseCase')
const InsertRegistrationRepository = require('../../infra/repositories/InsertRegistrationRepository')
const dateFormat = require('../../utils/dateFormat')
const dbConnection = require('../../infra/DbConnection')

module.exports = class RegistrationRouterCompose {
  compose () {
    const insertRegistrationRepository = new InsertRegistrationRepository({ dbConnection })
    const registrationUseCase = new RegistrationUseCase({ insertRegistrationRepository, dateFormat })
    return new RegistrationRouter({ registrationUseCase })
  }
}
