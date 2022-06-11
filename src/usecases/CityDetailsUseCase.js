module.exports = class CityDetailsUseCase {
  constructor ({
    loadUfsRepository,
    loadCitiesByStateRepository,
    loadNeighborhoodsByCityRepository,
    loadNurseriesByNeighborhoodRepository
  } = {}) {
    this.loadUfsRepository = loadUfsRepository
    this.loadCitiesByStateRepository = loadCitiesByStateRepository
    this.loadNeighborhoodsByCityRepository = loadNeighborhoodsByCityRepository
    this.loadNurseriesByNeighborhoodRepository = loadNurseriesByNeighborhoodRepository
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

  async getNurseriesByNeighborhoods (idNeighborhood) {
    return await this.loadNurseriesByNeighborhoodRepository.load(idNeighborhood)
  }
}
