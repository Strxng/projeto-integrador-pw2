module.exports = class UfsRouter {
  constructor ({ getUfsRepository } = {}) {
    this.getUfsRepository = getUfsRepository
  }

  async route (req, res) {
    res.send('tudo ok')
  }
}
