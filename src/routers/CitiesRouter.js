module.exports = class CitiesRouter {
  constructor ({ cityDetailsUseCase } = {}) {
    this.cityDetailsUseCase = cityDetailsUseCase
  }

  async route (req, res) {
    try {
      const { idState } = req.params
      const cities = await this.cityDetailsUseCase.getCitiesByState(idState)
      res.send(cities)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
