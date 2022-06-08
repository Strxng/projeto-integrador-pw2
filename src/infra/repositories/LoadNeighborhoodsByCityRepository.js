module.exports = class LoadNeighborhoodsByCityRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection.getConnection()
  }

  async load (idCity) {
    return await this.dbConnection.query(`  
      SELECT id_neighborhood, name
      FROM nursery.neighborhoods
      WHERE id_city = :idCity
    `,
    {
      replacements: { idCity },
      type: this.dbConnection.QueryTypes.SELECT
    })
  }
}
