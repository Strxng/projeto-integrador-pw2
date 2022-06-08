const CitiesRouter = require('../routers/CitiesRouter')
const CityDetailsUseCase = require('../usecases/CityDetailsUseCase')
const LoadCitiesByStateRepository = require('../infra/repositories/LoadCitiesByStateRepository')
const dbConnection = require('../infra/DbConnection')

module.exports = class CitiesRouterCompose {
  compose () {
    const loadCitiesByStateRepository = new LoadCitiesByStateRepository({ dbConnection })
    const cityDetailsUseCase = new CityDetailsUseCase({ loadCitiesByStateRepository })
    return new CitiesRouter({ cityDetailsUseCase })
  }
}
