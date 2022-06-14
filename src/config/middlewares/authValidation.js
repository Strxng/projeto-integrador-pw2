const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) res.status(400).json({ error: 'Nenhum usuário logado' })

  const payload = jwt.decode(authorization, process.env.TOKEN_AUTH)
  req.headers = { ...req.headers, ...payload }
  next()
}
