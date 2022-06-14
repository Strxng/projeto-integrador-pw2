module.exports = class LoadDirectorByIdNurseryRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection.getConnection()
  }

  async load (idNursery) {
    const result = await this.dbConnection.query(`  
      select users.name
      from nursery.users
      inner join nursery.nurseries
      on nurseries.id_user = users.id_user
      where id_nursery = :idNursery
    `,
    {
      replacements: { idNursery },
      type: this.dbConnection.QueryTypes.SELECT
    })

    return result.length > 0 ? result[0] : null
  }
}
