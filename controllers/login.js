const User = require('../schemas/user')
const jwt = require('jsonwebtoken')
const { KEY } = require('../config.json')
const { findByPasswordAndEmail } = require('../dao/user')

const loginGET = (req, res) => {
    res.render('login', {
        scripts: ['login.js', 'md5.min.js'],
        authorization: req.user ? true : false,
        pageName: 'Sign In',
        styles: ['log-reg.css'],
    })
}

const loginPOST = (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        res.render('login', {
            scripts: ['login.js', 'md5.min.js'],
            error: 'Fill all fields',
            authorization: req.user ? true : false,
            pageName: 'Sign In',
            styles: ['log-reg.css'],
        })
    } else {
        findByPasswordAndEmail(
            { password: password, email: email },
            (err, result) => {
                if (err) {
                    res.status(500)
                    res.render('login', {
                        scripts: ['login.js', 'md5.min.js'],
                        error: 'Server Error. Please try again later',
                        authorization: req.user ? true : false,
                        pageName: 'Sign In',
                        styles: ['log-reg.css'],
                    })
                } else if (!result) {
                    res.render('login', {
                        scripts: ['login.js', 'md5.min.js'],
                        error: 'Incorrect email or password',
                        authorization: req.user ? true : false,
                        pageName: 'Sign In',
                        styles: ['log-reg.css'],
                    })
                } else if (result.passwordHash == password) {
                    let options = {
                        maxAge: 1000 * 60 * 60 * 24 * 7,
                    }

                    jwt.sign(
                        { email: email, role: result.role, id: result._id },
                        KEY,
                        {
                            expiresIn: '7d',
                            algorithm: 'HS256',
                        },
                        (err, token) => {
                            if (err) {
                                res.status(500)
                                res.render('login', {
                                    scripts: ['login.js', 'md5.min.js'],
                                    error: 'Server Error. Please try again later',
                                    authorization: req.user ? true : false,
                                    pageName: 'Sign In',
                                    styles: ['log-reg.css'],
                                })
                            } else {
                                res.cookie('Authorization', token, options)
                                res.redirect('/')
                            }
                        }
                    )
                } else {
                    res.status(500)
                    res.render('login', {
                        scripts: ['login.js', 'md5.min.js'],
                        error: 'Server Error. Please try again later',
                        authorization: req.user ? true : false,
                        pageName: 'Sign In',
                        styles: ['log-reg.css'],
                    })
                }
            }
        )
    }
}

module.exports = { loginGET, loginPOST }
