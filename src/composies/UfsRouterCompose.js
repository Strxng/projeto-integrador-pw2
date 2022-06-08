const UfsRouter = require('../routers/UfsRouter')
const CityDetailsUseCase = require('../usecases/CityDetailsUseCase')
const LoadUfsRepository = require('../infra/repositories/LoadUfsRepository')
const dbConnection = require('../infra/dbConnection')

module.exports = class UfsRouterCompose {
  compose () {
    const loadUfsRepository = new LoadUfsRepository({ dbConnection })
    const cityDetailsUseCase = new CityDetailsUseCase({ loadUfsRepository })
    return new UfsRouter({ cityDetailsUseCase })
  }
}
