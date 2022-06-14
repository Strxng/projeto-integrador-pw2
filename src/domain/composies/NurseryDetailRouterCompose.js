const NurseryDetailRouter = require('../../presentation/routers/NurseryDetailRouter')
const LoadNurseryByIdRepository = require('../../infra/repositories/LoadNurseryByIdRepository')
const NurseryDetailsUseCase = require('../usecases/NurseryDetailsUseCase')
const LoadAddressByIdNurseryRepository = require('../../infra/repositories/LoadAddressByIdNurseryRepository')
const LoadDirectorByIdNurseryRepository = require('../../infra/repositories/LoadDirectorByIdNurseryRepository')
const LoadVacanciesByIdNurseryRepository = require('../../infra/repositories/LoadVacanciesByIdNurseryRepository')
const dbConnection = require('../../infra/DbConnection')

module.exports = class NurseryDetailRouterCompose {
  compose () {
    const loadDirectorByIdNurseryRepository = new LoadDirectorByIdNurseryRepository({ dbConnection })
    const loadVacanciesByIdNurseryRepository = new LoadVacanciesByIdNurseryRepository({ dbConnection })
    const loadAddressByIdNurseryRepository = new LoadAddressByIdNurseryRepository({ dbConnection })
    const loadNurseryByIdRepository = new LoadNurseryByIdRepository({ dbConnection })
    const nurseryDetailsUseCase = new NurseryDetailsUseCase({
      loadNurseryByIdRepository,
      loadAddressByIdNurseryRepository,
      loadDirectorByIdNurseryRepository,
      loadVacanciesByIdNurseryRepository
    })
    return new NurseryDetailRouter({ nurseryDetailsUseCase })
  }
}
