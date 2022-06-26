const UserRegistrationsRouter = require('../../presentation/routers/UserRegistrationsRouter')

module.exports = class UserRegistrationsRouterCompose {
  compose () {
    return new UserRegistrationsRouter()
  }
}
