const ProfileRouter = require('../../presentation/routers/ProfileRouter')
const UserDetailsUseCase = require('../usecases/UserDetailsUseCase')
const LoadUserDetailsByIdUser = require('../../infra/repositories/LoadUserDetailsByIdUser')
const dbConnection = require('../../infra/DbConnection')

module.exports = class ProfileRouterCompose {
  compose () {
    const loadUserDetailsByIdUser = new LoadUserDetailsByIdUser({ dbConnection })
    const userDetailsUseCase = new UserDetailsUseCase({ loadUserDetailsByIdUser })
    return new ProfileRouter({ userDetailsUseCase })
  }
}
