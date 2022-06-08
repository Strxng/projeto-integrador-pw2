const HomeRouter = require('../routers/HomeRouter')
const CityDetailsUseCase = require('../usecases/CityDetailsUseCase')

module.exports = class HomeRouterCompose {
  compose () {
    const cityDetailsUseCase = new CityDetailsUseCase()
    return new HomeRouter({ cityDetailsUseCase })
  }
}
