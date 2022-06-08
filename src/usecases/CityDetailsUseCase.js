module.exports = class CityDetailsUseCase {
  constructor ({ loadUfsRepository, loadCitiesByStateRepository } = {}) {
    this.loadUfsRepository = loadUfsRepository
    this.loadCitiesByStateRepository = loadCitiesByStateRepository
  }

  async getUfs () {
    return await this.loadUfsRepository.load()
  }

  async getCitiesByState (idState) {
    return await this.loadCitiesByStateRepository.load(idState)
  }
}
