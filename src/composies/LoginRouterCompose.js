const LoginRouter = require('../routers/LoginRouter')
const AuthUseCase = require('../usecases/AuthUseCase')
const Encrypter = require('../utils/Encrypter')
const LoadUserByEmailRepository = require('../infra/repositories/LoadUserByEmailRepository')
const dbConnection = require('../infra/dbConnection')
const AuthTokenGenerator = require('../utils/AuthTokenGenerator')

module.exports = class LoginRouterCompose {
  compose () {
    const encrypter = new Encrypter()
    const authTokenGenerator = new AuthTokenGenerator()
    const loadUserByEmailRepository = new LoadUserByEmailRepository({ dbConnection })
    const authUseCase = new AuthUseCase({ encrypter, loadUserByEmailRepository, authTokenGenerator })
    return new LoginRouter({ authUseCase })
  }
}
