module.exports = class LoadNurseryByIdRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection
  }

  async load (idNursery) {
    return await this.dbConnection.selectOne(`  
        select
          nurseries.id_nursery as idNursery,
          nurseries.name,
          nurseries.cnpj,
          nurseries.image,
          nurseries.created_at as createdAt
        from nursery.nurseries
        where id_nursery = :idNursery
    `,
    { idNursery })
  }
}
