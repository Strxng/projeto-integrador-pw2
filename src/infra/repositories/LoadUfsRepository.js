module.exports = class LoadUfsRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection.getConnection()
  }

  async load () {
    return await this.dbConnection.query(`  
      SELECT id_state, uf, name
      FROM nursery.states
    `,
    {
      type: this.dbConnection.QueryTypes.SELECT
    })
  }
}
