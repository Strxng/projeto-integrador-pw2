module.exports = class InsertAddressRepository {
  constructor ({ dbConnection } = {}) {
    this.dbConnection = dbConnection.getConnection()
  }

  async insert (address) {
    address.createdAt = new Date()
    address.updatedAt = new Date()

    const result = await this.dbConnection.query(`  
      INSERT INTO nursery.adresses 
        (id_neighborhood, postal_code, street, number, complement, created_at, updated_at)
      OUTPUT INSERTED.*
      VALUES
        (:idNeighborhood, :postalCode, :street, :number, :complement, :createdAt, :updatedAt)
    `,
    {
      replacements: {
        ...address
      },
      type: this.dbConnection.QueryTypes.INSERT
    })

    return result[0].length > 0 ? result[0][0] : null
  }
}
