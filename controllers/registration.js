const User = require('../schemas/user')
const { findUserByEmail, registerUser } = require('../dao/user')

const registrationGET = (req, res) => {
    res.render('registration')
}

const registrationPOST = (req, res) => {
    const { name, email, password, passwordConfirmation } = req.body

    if (!name || !email || !password || !passwordConfirmation) {
        res.status(400)
        res.render('registration', {
            error: 'Заповніть всі поля',
            scripts: ['registration.js', 'md5.min.js'],
            authorization: req.user ? true : false,
        })
    } else if (password != passwordConfirmation) {
        res.status(400)
        res.render('registration', {
            error: 'Паролі не збігаються',
            scripts: ['registration.js', 'md5.min.js'],
            authorization: req.user ? true : false,
        })
    } else if (password.length < 6) {
        res.status(400)
        res.render('registration', {
            error: 'Пароль повинен містити не менше 6 символів',
            scripts: ['registration.js', 'md5.min.js'],
            authorization: req.user ? true : false,
        })
    } else {
        findUserByEmail(email, (err, result) => {
            if (err) {
                res.status(500)
                res.render('registration', {
                    error: 'Помилка серверу, будь ласка, спробуйте пізніше',
                    scripts: ['registration.js', 'md5.min.js'],
                    authorization: req.user ? true : false,
                })
            } else if (result) {
                res.render('registration', {
                    error: 'Користувач з таким емейлом вже існує',
                    scripts: ['registration.js', 'md5.min.js'],
                    authorization: req.user ? true : false,
                })
            } else {
                registerUser(
                    {
                        name: name,
                        email: email,
                        passwordHash: password,
                        role: 'user',
                    },
                    (err, result) => {
                        if (err) {
                            res.status(500)
                            res.render('registration', {
                                error: 'Помилка серверу, будь ласка, спробуйте пізніше',
                                scripts: ['registration.js', 'md5.min.js'],
                                authorization: req.user ? true : false,
                            })
                        } else {
                            res.redirect('/login')
                        }
                    }
                )
            }
        })
    }
}

module.exports = { registrationGET, registrationPOST }
