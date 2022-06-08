const InsertAddressRepository = require('../infra/repositories/InsertAddressRepository')
const InsertUserRepository = require('../infra/repositories/InsertUserRepository')
const LoadUserByEmailRepository = require('../infra/repositories/LoadUserByEmailRepository')
const SignUpRouter = require('../routers/SignUpRouter')
const SignUpUseCase = require('../usecases/SignUpUseCase')
const AuthTokenGenerator = require('../utils/AuthTokenGenerator')
const Encrypter = require('../utils/Encrypter')
const dateFormat = require('../utils/dateFormat')
const dbConnection = require('../infra/DbConnection')

module.exports = class SignUpRouterCompose {
  compose () {
    const insertAddressRepository = new InsertAddressRepository({ dbConnection })
    const insertUserRepository = new InsertUserRepository({ dbConnection })
    const loadUserByEmailRepository = new LoadUserByEmailRepository({ dbConnection })
    const authTokenGenerator = new AuthTokenGenerator()
    const encrypter = new Encrypter()
    const signUpUseCase = new SignUpUseCase({ insertAddressRepository, insertUserRepository, loadUserByEmailRepository, authTokenGenerator, dateFormat, encrypter })
    return new SignUpRouter({ signUpUseCase })
  }
}
