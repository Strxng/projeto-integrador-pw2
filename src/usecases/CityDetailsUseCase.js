module.exports = class CityDetailsUseCase {
  constructor ({ loadUfsRepository, loadCitiesByStateRepository, loadNeighborhoodsByCityRepository } = {}) {
    this.loadUfsRepository = loadUfsRepository
    this.loadCitiesByStateRepository = loadCitiesByStateRepository
    this.loadNeighborhoodsByCityRepository = loadNeighborhoodsByCityRepository
  }

  async getUfs () {
    return await this.loadUfsRepository.load()
  }

  async getCitiesByState (idState) {
    return await this.loadCitiesByStateRepository.load(idState)
  }

  async getNeighborhoodsByCity (idCity) {
    return await this.loadNeighborhoodsByCityRepository.load(idCity)
  }
}
