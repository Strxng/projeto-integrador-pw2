module.exports = class NurseryDetailsUseCase {
  constructor ({
    loadAddressByIdNurseryRepository,
    loadNurseryByIdRepository,
    loadDirectorByIdNurseryRepository,
    loadVacanciesByIdNurseryRepository
  }) {
    this.loadAddressByIdNurseryRepository = loadAddressByIdNurseryRepository
    this.loadNurseryByIdRepository = loadNurseryByIdRepository
    this.loadDirectorByIdNurseryRepository = loadDirectorByIdNurseryRepository
    this.loadVacanciesByIdNurseryRepository = loadVacanciesByIdNurseryRepository
  }

  async getNursery (idNursery) {
    const address = await this.loadAddressByIdNurseryRepository.load(idNursery)
    const { name: director } = await this.loadDirectorByIdNurseryRepository.load(idNursery)
    const vacancies = await this.loadVacanciesByIdNurseryRepository.load(idNursery)
    const nursery = await this.loadNurseryByIdRepository.load(idNursery)

    nursery.director = director
    nursery.address = address
    nursery.vacancies = vacancies
    return nursery
  }
}
