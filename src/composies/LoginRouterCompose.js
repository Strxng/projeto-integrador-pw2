const LoginRouter = require('../routers/LoginRouter')
const AuthUseCase = require('../usecases/AuthUseCase')

module.exports = class LoginRouterCompose {
  compose(){
    const authUseCase = new AuthUseCase()
    return new LoginRouter({ authUseCase })
  }
}