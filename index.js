require('dotenv/config')
const Express = require('express')
const setupApp = require('./src/config/setupApp')
const routes = require('./src/routes')

const app = Express()
setupApp(app)

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Server running in http://localhost:${process.env.PORT}`);
})