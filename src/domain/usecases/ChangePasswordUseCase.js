module.exports = class changePasswordUseCase {
  constructor ({ loadUserByEmailRepository, encrypter, updateUserPasswordByIdUserRepository } = {}) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.updateUserPasswordByIdUserRepository = updateUserPasswordByIdUserRepository
    this.encrypter = encrypter
  }

  async change (email, currentPassword, newPassword) {
    const user = await this.loadUserByEmailRepository.load(email)

    const isValidPassword = await this.encrypter.compare(currentPassword, user.password)

    if (!isValidPassword) {
      throw new Error('Senha atual incorreta')
    }

    const encryptedNewPassword = await this.encrypter.crypt(newPassword)

    await this.updateUserPasswordByIdUserRepository.update(user.id_user, encryptedNewPassword)
  }
}
