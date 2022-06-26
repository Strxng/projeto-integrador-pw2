module.exports = class LoadNurseriesByNeighborhoodRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idNeighborhood) {
    return await this.dbConnection.query(`  
      select
        nurseries.id_nursery as idNursery,
        nurseries.name,
        nurseries.cnpj,
        nurseries.image
      from nursery.nurseries
      inner join nursery.adresses
      on nurseries.id_address = adresses.id_address
      where id_neighborhood = :idNeighborhood
    `,
    { idNeighborhood })
  }
}
