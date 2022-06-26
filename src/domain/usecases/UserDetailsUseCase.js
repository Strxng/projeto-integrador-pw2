module.exports = class UserDetailsUseCase {
  constructor ({ loadUserDetailsByIdUserRepository } = {}) {
    this.loadUserDetailsByIdUserRepository = loadUserDetailsByIdUserRepository
  }

  async getDetails (idUser) {
    const userDetails = await this.loadUserDetailsByIdUserRepository.load(idUser)
    return userDetails
  }
}
