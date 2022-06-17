module.exports = class LoadUfsRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load () {
    return await this.dbConnection.selectList(`  
      SELECT id_state, uf, name
      FROM nursery.states
    `)
  }
}
