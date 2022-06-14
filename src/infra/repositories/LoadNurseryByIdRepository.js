module.exports = class LoadNurseryByIdRepository {
  constructor ({ dbConnection }) {
    this.dbConnection = dbConnection.getConnection()
  }

  async load (idNursery) {
    const result = await this.dbConnection.query(`  
        select
          nurseries.id_nursery,
          nurseries.name,
          nurseries.cnpj,
          nurseries.image,
          nurseries.created_at
        from nursery.nurseries
        where id_nursery = :idNursery
    `,
    {
      replacements: { idNursery },
      type: this.dbConnection.QueryTypes.SELECT
    })

    return result.length > 0 ? result[0] : null
  }
}
