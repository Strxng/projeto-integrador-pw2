module.exports = class UfsRouter {
  constructor ({ cityDetailsUseCase } = {}) {
    this.cityDetailsUseCase = cityDetailsUseCase
  }

  async route (req, res) {
    try {
      const ufs = await this.cityDetailsUseCase.getUfs()
      res.send(ufs)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
