module.exports = class LoadCitiesByStateRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection.getConnection()
  }

  async load (idState) {
    return await this.dbConnection.query(`  
      SELECT id_city, name
      FROM nursery.cities
      WHERE id_state = :idState
    `,
    {
      replacements: { idState },
      type: this.dbConnection.QueryTypes.SELECT
    })
  }
}
