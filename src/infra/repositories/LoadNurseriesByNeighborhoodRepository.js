module.exports = class LoadNurseriesByNeighborhoodRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idNeighborhood) {
    return await this.dbConnection.selectList(`  
      select
        nurseries.id_nursery as idNursery,
        nurseries.name,
        nurseries.phone,
        nurseries.image,
        adresses.street,
        adresses.number,
        adresses.complement
      from nursery.nurseries
      inner join nursery.adresses
      on nurseries.id_address = adresses.id_address
      where id_neighborhood = :idNeighborhood
    `,
    { idNeighborhood })
  }
}
