module.exports = class LoadCitiesByStateRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idState) {
    return await this.dbConnection.selectList(`  
      SELECT 
        id_city as idCity, 
        name
      FROM nursery.cities
      WHERE id_state = :idState
    `,
    { idState })
  }
}
