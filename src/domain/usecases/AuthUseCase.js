module.exports = class AuthUseCase {
  constructor ({ loadUserByEmailRepository, encrypter, authTokenGenerator } = {}) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.encrypter = encrypter
    this.authTokenGenerator = authTokenGenerator
  }

  async auth (email, password) {
    const user = await this.loadUserByEmailRepository.load(email)
    if (!user) {
      throw new Error('Usuário ou senha inválidos')
    }

    const isCorrectlyPassword = await this.encrypter.compare(password, user.password)
    if (!isCorrectlyPassword) {
      throw new Error('Usuário ou senha inválidos')
    }

    const payload = {
      idUser: user.idUser,
      idLevel: user.idLevel,
      name: user.name,
      email: user.email
    }

    const accessToken = this.authTokenGenerator.generate(payload)

    return {
      ...payload,
      accessToken
    }
  }
}
