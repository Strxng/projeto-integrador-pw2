module.exports = class LoadAddressByIdNurseryRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idNursery) {
    return await this.dbConnection.selectOne(`  
      select
        adresses.postal_code as postalCode,
        adresses.street,
        adresses.number,
        adresses.complement,
        neighborhoods.name as neighborhood
      from nursery.adresses
      inner join nursery.nurseries on adresses.id_address = nurseries.id_address
      inner join nursery.neighborhoods on adresses.id_neighborhood = neighborhoods.id_neighborhood
      where id_nursery = 1
    `,
    { idNursery })
  }
}
