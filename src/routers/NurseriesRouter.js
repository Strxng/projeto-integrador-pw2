module.exports = class NurseriesRouter {
  constructor ({ cityDetailsUseCase } = {}) {
    this.cityDetailsUseCase = cityDetailsUseCase
  }

  async route (req, res) {
    try {
      const { idNeighborhood } = req.params
      const nurseries = await this.cityDetailsUseCase.getNurseriesByNeighborhoods(idNeighborhood)
      res.send(nurseries)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
