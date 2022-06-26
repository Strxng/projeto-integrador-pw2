const ProfileRouter = require('../../presentation/routers/ProfileRouter')
const UserDetailsUseCase = require('../usecases/UserDetailsUseCase')
const LoadUserDetailsByIdUserRepository = require('../../infra/repositories/LoadUserDetailsByIdUserRepository')
const dbConnection = require('../../infra/DbConnection')

module.exports = class ProfileRouterCompose {
  compose () {
    const loadUserDetailsByIdUserRepository = new LoadUserDetailsByIdUserRepository({ dbConnection })
    const userDetailsUseCase = new UserDetailsUseCase({ loadUserDetailsByIdUserRepository })
    return new ProfileRouter({ userDetailsUseCase })
  }
}
