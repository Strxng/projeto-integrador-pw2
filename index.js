require('dotenv/config')
const Express = require('express')
const setupApp = require('./src/config/setupApp')
const routes = require('./src/presentation/routes')
const dbConnection = require('./src/infra/DbConnection')

const app = Express()
setupApp(app)

app.use(routes)

dbConnection.createConnection().then(() => {
  console.log('Banco conectado')

  app.listen(process.env.PORT, () => {
    console.log(`Server running in http://localhost:${process.env.PORT}`)
  })
})
