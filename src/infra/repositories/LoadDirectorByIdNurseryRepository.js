module.exports = class LoadDirectorByIdNurseryRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idNursery) {
    return await this.dbConnection.selectOne(`  
      select users.name
      from nursery.users
      inner join nursery.nurseries
      on nurseries.id_user = users.id_user
      where id_nursery = :idNursery
    `,
    { idNursery })
  }
}
