const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
  try {
    const token = req.header('x-auth-token')

    // checks if token does not exist
    if (!token) {
      return res
        .status(401)
        .json({ msg: 'No token, access denied' })
    }

    // checks if token is not verified and created by jwt
    const verified = await jwt.verify(token, 'passwordKey')
    if (!verified) {
      return res
        .status(401)
        .json({ msg: 'Token verification failed, access denied' })
    }

    // otherwise, save token to user object
    req.user = verified.id
    // runs next function
    next()
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message })
  }
}

module.exports = auth
