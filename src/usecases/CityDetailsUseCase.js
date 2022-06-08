module.exports = class CityDetailsUseCase {
  constructor ({ loadUfsRepository } = {}) {
    this.loadUfsRepository = loadUfsRepository
  }

  async getUfs () {
    return await this.loadUfsRepository.load()
  }
}
