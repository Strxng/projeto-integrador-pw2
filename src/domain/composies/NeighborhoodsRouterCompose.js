const NeighborhoodsRouter = require('../../presentation/routers/NeighborhoodsRouter')
const CityDetailsUseCase = require('../usecases/CityDetailsUseCase')
const LoadNeighborhoodsByCityRepository = require('../../infra/repositories/LoadNeighborhoodsByCityRepository')
const dbConnection = require('../../infra/DbConnection')

module.exports = class NeighborhoodsRouterCompose {
  compose () {
    const loadNeighborhoodsByCityRepository = new LoadNeighborhoodsByCityRepository({ dbConnection })
    const cityDetailsUseCase = new CityDetailsUseCase({ loadNeighborhoodsByCityRepository })
    return new NeighborhoodsRouter({ cityDetailsUseCase })
  }
}
