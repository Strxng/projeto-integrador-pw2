module.exports = class NeighborhoodsRouter {
  constructor ({ cityDetailsUseCase } = {}) {
    this.cityDetailsUseCase = cityDetailsUseCase
  }

  async route (req, res) {
    try {
      const { idCity } = req.params
      const neighborhoods = await this.cityDetailsUseCase.getNeighborhoodsByCity(idCity)
      res.send(neighborhoods)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
