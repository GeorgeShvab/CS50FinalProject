const jwt = require('jsonwebtoken')
const { KEY } = require('../config.json')

const authorization = (req, res, next) => {
    const { Authorization: authorization } = req.cookies
    if (authorization) {
        jwt.verify(authorization, KEY, (err, decoded) => {
            if (decoded && !err) {
                req.user = {
                    email: decoded.email,
                    role: decoded.role,
                    id: decoded.id,
                }
            } else {
                req.user = null
            }
        })
    } else {
        req.user = null
    }
    next()
}

module.exports = authorization
