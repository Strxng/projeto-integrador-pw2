const VacanciesRouter = require('../../presentation/routers/VacanciesRouter')
const VacanciesUseCase = require('../usecases/VacanciesUseCase')
const LoadVacanciesDirectorByIdUserRepository = require('../../infra/repositories/LoadVacanciesDirectorByIdUserRepository')
const LoadVacanciesAdminRepository = require('../../infra/repositories/LoadVacanciesAdminRepository')
const dbConnection = require('../../infra/DbConnection')

module.exports = class VacanciesRouterCompose {
  compose () {
    const loadVacanciesAdminRepository = new LoadVacanciesAdminRepository({ dbConnection })
    const loadVacanciesDirectorByIdUserRepository = new LoadVacanciesDirectorByIdUserRepository({ dbConnection })
    const vacanciesUseCase = new VacanciesUseCase({ loadVacanciesDirectorByIdUserRepository, loadVacanciesAdminRepository })
    return new VacanciesRouter({ vacanciesUseCase })
  }
}
