const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  if (authorization) {
    const payload = jwt.decode(authorization, process.env.TOKEN_AUTH)
    req.headers = { ...req.headers, ...payload }
  }

  next()
}
