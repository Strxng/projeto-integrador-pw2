const CitiesRouter = require('../routers/CitiesRouter')

module.exports = class CitiesRouterCompose {
  compose () {
    return new CitiesRouter()
  }
}
