const Sequelize = require('sequelize')

module.exports = {
  async createConnection () {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: 'mssql'
    })

    await sequelize.authenticate()

    this.sequelize = sequelize
    return sequelize
  },

  getConnection () {
    return this.sequelize
  },

  async insert (query, params) {
    const result = await this.sequelize.query(query,
      {
        replacements: params,
        type: this.sequelize.QueryTypes.INSERT
      })

    return result[0].length > 0 ? result[0][0] : null
  },

  async selectOne (query, params) {
    const result = await this.sequelize.query(query,
      {
        replacements: params,
        type: this.sequelize.QueryTypes.SELECT
      })

    return result.length > 0 ? result[0] : null
  },

  async selectList (query, params) {
    const result = await this.sequelize.query(query,
      {
        replacements: params,
        type: this.sequelize.QueryTypes.SELECT
      })

    return result.length > 0 ? result : null
  },

  async update (query, params) {
    return await this.sequelize.query(query,
      {
        replacements: params,
        type: this.sequelize.QueryTypes.UPDATE
      })
  }
}
