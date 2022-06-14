module.exports = class NurseryDetailRouter {
  constructor ({ nurseryDetailsUseCase } = {}) {
    this.nurseryDetailsUseCase = nurseryDetailsUseCase
  }

  async route (req, res) {
    try {
      const { idNursery } = req.params
      const nursery = await this.nurseryDetailsUseCase.getNursery(idNursery)
      res.send(nursery)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
