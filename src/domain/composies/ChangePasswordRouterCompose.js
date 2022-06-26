const ChangePasswordRouter = require('../../presentation/routers/ChangePasswordRouter')
const ChangePasswordUseCase = require('../usecases/ChangePasswordUseCase')
const LoadUserByEmailRepository = require('../../infra/repositories/LoadUserByEmailRepository')
const UpdateUserPasswordByIdUserRepository = require('../../infra/repositories/UpdateUserPasswordByIdUserRepository')
const Encrypter = require('../../utils/Encrypter')
const dbConnection = require('../../infra/DbConnection')

module.exports = class ChangePasswordRouterCompose {
  compose () {
    const loadUserByEmailRepository = new LoadUserByEmailRepository({ dbConnection })
    const updateUserPasswordByIdUserRepository = new UpdateUserPasswordByIdUserRepository({ dbConnection })
    const encrypter = new Encrypter()
    const changePasswordUseCase = new ChangePasswordUseCase({ loadUserByEmailRepository, updateUserPasswordByIdUserRepository, encrypter })
    return new ChangePasswordRouter({ changePasswordUseCase })
  }
}
