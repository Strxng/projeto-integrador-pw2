module.exports = class NurseryDetailsUseCase {
  constructor ({ loadAddressByIdNurseryRepository, loadNurseryByIdRepository, loadDirectorByIdNurseryRepository }) {
    this.loadAddressByIdNurseryRepository = loadAddressByIdNurseryRepository
    this.loadNurseryByIdRepository = loadNurseryByIdRepository
    this.loadDirectorByIdNurseryRepository = loadDirectorByIdNurseryRepository
  }

  async getNursery (idNursery) {
    const address = await this.loadAddressByIdNurseryRepository.load(idNursery)
    const { name: director } = await this.loadDirectorByIdNurseryRepository.load(idNursery)
    const nursery = await this.loadNurseryByIdRepository.load(idNursery)
    nursery.director = director
    nursery.address = address
    return nursery
  }
}
