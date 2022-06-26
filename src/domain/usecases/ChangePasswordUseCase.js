module.exports = class changePasswordUseCase {
  constructor ({ loadUserByEmailRepository, encrypter } = {}) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.encrypter = encrypter
  }

  async change (email, currentPassword, newPassword) {
    const user = await this.loadUserByEmailRepository.load(email)

    const isValidPassword = await this.encrypter.compare(currentPassword, user.password)
    if (!isValidPassword) {
      throw new Error('Senha atual incorreta')
    }
  }
}
