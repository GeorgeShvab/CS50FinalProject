const User = require('../schemas/user')
const jwt = require('jsonwebtoken')
const { KEY } = require('../config.json')
const { findByPasswordAndEmail } = require('../dao/user')

const loginGET = (req, res) => {
    res.render('login', {
        scripts: ['login.js', 'md5.min.js'],
        authorization: req.user ? true : false,
        pageName: 'Вхід',
    })
}

const loginPOST = (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        res.render('login', {
            scripts: ['login.js', 'md5.min.js'],
            error: 'Заповніть всі поля',
            authorization: req.user ? true : false,
            pageName: 'Вхід',
        })
    } else {
        findByPasswordAndEmail(
            { password: password, email: email },
            (err, result) => {
                if (err) {
                    res.status(500)
                    res.render('login', {
                        scripts: ['login.js', 'md5.min.js'],
                        error: 'Помилка серверу, спробуйте будь ласка пізніше',
                        authorization: req.user ? true : false,
                        pageName: 'Вхід',
                    })
                } else if (!result) {
                    res.render('login', {
                        scripts: ['login.js', 'md5.min.js'],
                        error: 'Неправильний емейл або пароль',
                        authorization: req.user ? true : false,
                        pageName: 'Вхід',
                    })
                } else if (result.passwordHash == password) {
                    let options = {
                        maxAge: 1000 * 60 * 60 * 24 * 7,
                        httpOnly: true,
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
                                    error: 'Помилка серверу, спробуйте будь ласка пізніше',
                                    authorization: req.user ? true : false,
                                    pageName: 'Вхід',
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
                        error: 'Помилка серверу, спробуйте будь ласка пізніше',
                        authorization: req.user ? true : false,
                        pageName: 'Вхід',
                    })
                }
            }
        )
    }
}

module.exports = { loginGET, loginPOST }
