const ChangePasswordRouter = require('../../presentation/routers/ChangePasswordRouter')
const ChangePasswordUseCase = require('../usecases/ChangePasswordUseCase')
const LoadUserByEmailRepository = require('../../infra/repositories/LoadUserByEmailRepository')
const Encrypter = require('../../utils/Encrypter')
const dbConnection = require('../../infra/DbConnection')

module.exports = class ChangePasswordRouterCompose {
  compose () {
    const loadUserByEmailRepository = new LoadUserByEmailRepository({ dbConnection })
    const encrypter = new Encrypter()
    const changePasswordUseCase = new ChangePasswordUseCase({ loadUserByEmailRepository, encrypter })
    return new ChangePasswordRouter({ changePasswordUseCase })
  }
}
