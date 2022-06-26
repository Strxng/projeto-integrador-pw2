module.exports = class ProfileRouter {
  constructor ({ userDetailsUseCase } = {}) {
    this.userDetailsUseCase = userDetailsUseCase
  }

  async route (req, res) {
    const { idUser } = req.headers
    const userDetails = await this.userDetailsUseCase.getDetails(idUser)
    res.send(userDetails)
  }
}
