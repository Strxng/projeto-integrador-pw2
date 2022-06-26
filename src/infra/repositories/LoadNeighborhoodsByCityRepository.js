module.exports = class LoadNeighborhoodsByCityRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idCity) {
    return await this.dbConnection.selectList(`  
      SELECT 
        id_neighborhood as idNeighborhood, 
        name
      FROM nursery.neighborhoods
      WHERE id_city = :idCity
    `,
    { idCity })
  }
}
