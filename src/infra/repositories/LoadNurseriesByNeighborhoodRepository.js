module.exports = class LoadNurseriesByNeighborhoodRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection.getConnection()
  }

  async load (idNeighborhood) {
    return await this.dbConnection.query(`  
      select
        nurseries.id_nursery,
        nurseries.name,
        nurseries.cnpj,
        nurseries.image
      from nursery.nurseries
      inner join nursery.adresses
      on nurseries.id_address = adresses.id_address
      where id_neighborhood = :idNeighborhood
    `,
    {
      replacements: { idNeighborhood },
      type: this.dbConnection.QueryTypes.SELECT
    })
  }
}
