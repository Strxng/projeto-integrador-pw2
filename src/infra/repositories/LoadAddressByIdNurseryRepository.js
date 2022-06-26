module.exports = class LoadAddressByIdNurseryRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idNursery) {
    return await this.dbConnection.selectOne(`  
      select
        adresses.id_address as idAddress,
        adresses.postal_code as postalCode,
        adresses.street,
        adresses.number,
        adresses.complement
      from nursery.adresses
      inner join nursery.nurseries
      on adresses.id_address = nurseries.id_address
      where id_nursery = :idNursery
    `,
    { idNursery })
  }
}
