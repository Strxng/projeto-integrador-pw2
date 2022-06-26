module.exports = class AuthUseCase {
  constructor ({ loadUserByEmailRepository, encrypter, authTokenGenerator } = {}) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.encrypter = encrypter
    this.authTokenGenerator = authTokenGenerator
  }

  async auth (email, password) {
    if (!email || !password) {
      throw new Error('Preencha todos os campos')
    }

    const user = await this.loadUserByEmailRepository.load(email)
    if (!user) {
      throw new Error('Usuário ou senha inválidos')
    }

    const isCorrectlyPassword = await this.encrypter.compare(password, user.password)
    if (!isCorrectlyPassword) {
      throw new Error('Usuário ou senha inválidos')
    }

    const accessToken = this.authTokenGenerator.generate({ idUser: user.id_user })

    return {
      ...user,
      accessToken
    }
  }
}
