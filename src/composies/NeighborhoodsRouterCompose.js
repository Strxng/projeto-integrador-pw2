const NeighborhoodsRouter = require('../routers/NeighborhoodsRouter')

module.exports = class NeighborhoodsRouterCompose {
  compose () {
    return new NeighborhoodsRouter()
  }
}
