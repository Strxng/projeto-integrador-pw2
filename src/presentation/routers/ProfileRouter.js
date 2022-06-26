module.exports = class ProfileRouter {
  constructor ({ userDetailsUseCase } = {}) {
    this.userDetailsUseCase = userDetailsUseCase
  }

  async route (req, res) {
    try {
      const { idUser } = req.headers
      const userDetails = await this.userDetailsUseCase.getDetails(idUser)
      res.send(userDetails)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
