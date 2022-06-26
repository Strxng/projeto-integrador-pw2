const RegistrationRouter = require('../../presentation/routers/RegistrationRouter')
const RegistrationUseCase = require('../usecases/RegistrationUseCase')
const InsertRegistrationRepository = require('../../infra/repositories/InsertRegistrationRepository')
const LoadVacancyByIdRepository = require('../../infra/repositories/LoadVacancyByIdRepository')
const UpdateVacancyAmountByIdRepository = require('../../infra/repositories/UpdateVacancyAmountByIdRepository')
const dateFormat = require('../../utils/dateFormat')
const dbConnection = require('../../infra/DbConnection')

module.exports = class RegistrationRouterCompose {
  compose () {
    const updateVacancyAmountByIdRepository = new UpdateVacancyAmountByIdRepository({ dbConnection })
    const loadVacancyByIdRepository = new LoadVacancyByIdRepository({ dbConnection })
    const insertRegistrationRepository = new InsertRegistrationRepository({ dbConnection })
    const registrationUseCase = new RegistrationUseCase({
      insertRegistrationRepository,
      loadVacancyByIdRepository,
      dateFormat,
      updateVacancyAmountByIdRepository
    })
    return new RegistrationRouter({ registrationUseCase })
  }
}
