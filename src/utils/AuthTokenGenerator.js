const jwt = require('jsonwebtoken')

module.exports = class AuthTokenGenerator {
  generate (payload) {
    return jwt.sign(payload, process.env.TOKEN_SECRET)
  }
}
