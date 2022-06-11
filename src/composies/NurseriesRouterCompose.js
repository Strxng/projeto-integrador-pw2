const NurseriesRouter = require('../routers/NurseriesRouter')
const CityDetailsUseCase = require('../usecases/CityDetailsUseCase')
const LoadNurseriesByNeighborhoodRepository = require('../infra/repositories/LoadNurseriesByNeighborhoodRepository')
const dbConnection = require('../infra/DbConnection')

module.exports = class NurseriesRouterCompose {
  compose () {
    const loadNurseriesByNeighborhoodRepository = new LoadNurseriesByNeighborhoodRepository({ dbConnection })
    const cityDetailsUseCase = new CityDetailsUseCase({ loadNurseriesByNeighborhoodRepository })
    return new NurseriesRouter({ cityDetailsUseCase })
  }
}
