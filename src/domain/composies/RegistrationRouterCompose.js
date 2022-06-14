const RegistrationRouter = require('../../presentation/routers/RegistrationRouter')

module.exports = class RegistrationRouterCompose {
  compose () {
    return new RegistrationRouter()
  }
}
