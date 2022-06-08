const UfsRouter = require('../routers/UfsRouter')

module.exports = class UfsRouterCompose {
  compose () {
    return new UfsRouter()
  }
}
