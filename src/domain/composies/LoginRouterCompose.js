const LoginRouter = require('../../presentation/routers/LoginRouter')
const AuthUseCase = require('../../domain/usecases/AuthUseCase')
const Encrypter = require('../../utils/Encrypter')
const LoadUserByEmailRepository = require('../../infra/repositories/LoadUserByEmailRepository')
const dbConnection = require('../../infra/DbConnection')
const AuthTokenGenerator = require('../../utils/AuthTokenGenerator')

module.exports = class LoginRouterCompose {
  compose () {
    const encrypter = new Encrypter()
    const authTokenGenerator = new AuthTokenGenerator()
    const loadUserByEmailRepository = new LoadUserByEmailRepository({ dbConnection })
    const authUseCase = new AuthUseCase({ encrypter, loadUserByEmailRepository, authTokenGenerator })
    return new LoginRouter({ authUseCase })
  }
}
