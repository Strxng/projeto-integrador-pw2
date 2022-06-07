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

    const user = await this.loadUserByEmailRepository.find(email)
    if (!user) {
      throw new Error('Usuário ou senha inválidos')
    }

    const isCorrectlyPassword = await this.encrypter.compare(password, user.password)
    if (!isCorrectlyPassword) {
      throw new Error('Usuário ou senha inválidos')
    }

    const payload = {
      idUser: user.id_user,
      idLevel: user.id_level,
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
