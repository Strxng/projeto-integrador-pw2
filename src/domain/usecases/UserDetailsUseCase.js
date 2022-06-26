module.exports = class UserDetailsUseCase {
  constructor ({ loadUserDetailsByIdUser } = {}) {
    this.loadUserDetailsByIdUser = loadUserDetailsByIdUser
  }

  async getDetails (idUser) {
    const userDetails = await this.loadUserDetailsByIdUser.load(idUser)
    return userDetails
  }
}
