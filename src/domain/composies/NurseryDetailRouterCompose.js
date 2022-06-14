const NurseryDetailRouter = require('../../presentation/routers/NurseryDetailRouter')
const LoadNurseryByIdRepository = require('../../infra/repositories/LoadNurseryByIdRepository')
const NurseryDetailsUseCase = require('../usecases/NurseryDetailsUseCase')
const LoadAddressByIdNurseryRepository = require('../../infra/repositories/LoadAddressByIdNurseryRepository')
const LoadDirectorByIdNurseryRepository = require('../../infra/repositories/LoadDirectorByIdNurseryRepository')
const dbConnection = require('../../infra/DbConnection')

module.exports = class NurseryDetailRouterCompose {
  compose () {
    const loadDirectorByIdNurseryRepository = new LoadDirectorByIdNurseryRepository({ dbConnection })
    const loadAddressByIdNurseryRepository = new LoadAddressByIdNurseryRepository({ dbConnection })
    const loadNurseryByIdRepository = new LoadNurseryByIdRepository({ dbConnection })
    const nurseryDetailsUseCase = new NurseryDetailsUseCase({
      loadNurseryByIdRepository,
      loadAddressByIdNurseryRepository,
      loadDirectorByIdNurseryRepository
    })
    return new NurseryDetailRouter({ nurseryDetailsUseCase })
  }
}
