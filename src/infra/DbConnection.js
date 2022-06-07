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
  }
}
