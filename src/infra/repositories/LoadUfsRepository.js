module.exports = class LoadUfsRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection.getConnection()
  }

  async load () {
    const result = await this.dbConnection.query(`  
      SELECT id_state, uf, name
      FROM nursery.states
    `,
    {
      type: this.dbConnection.QueryTypes.SELECT
    })

    return result.length > 0 ? result : null
  }
}
