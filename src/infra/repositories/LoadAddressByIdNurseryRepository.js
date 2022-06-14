module.exports = class LoadAddressByIdNurseryRepository {
  constructor ({ dbConnection }) {
    this.dbConnection = dbConnection.getConnection()
  }

  async load (idNursery) {
    const result = await this.dbConnection.query(`  
      select
        adresses.id_address,
        adresses.postal_code,
        adresses.street,
        adresses.number,
        adresses.complement
      from nursery.adresses
      inner join nursery.nurseries
      on adresses.id_address = nurseries.id_address
      where id_nursery = :idNursery
    `,
    {
      replacements: { idNursery },
      type: this.dbConnection.QueryTypes.SELECT
    })

    return result.length > 0 ? result[0] : null
  }
}
