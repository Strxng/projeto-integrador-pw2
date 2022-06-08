module.exports = class HomeRouter {
  constructor ({ cityDetailsUseCase } = {}) {
    this.cityDetailsUseCase = cityDetailsUseCase
  }

  async route (req, res) {
    try {
      const cities = await this.cityDetailsUseCase.getCities()
      res.send(cities)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
