const HomeRouter = require('../routers/HomeRouter')

module.exports = class HomeRouterCompose {
  compose () {
    return new HomeRouter()
  }
}
