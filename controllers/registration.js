const User = require('../schemas/user')
const { findUserByEmail, registerUser } = require('../dao/user')

const registrationGET = (req, res) => {
    res.render('registration', {
        scripts: ['registration.js', 'md5.min.js'],
        authorization: req.user ? true : false,
        pageName: 'Sign Up',
        styles: ['log-reg.css'],
    })
}

const registrationPOST = (req, res) => {
    const { name, email, password, passwordConfirmation } = req.body

    if (!name || !email || !password || !passwordConfirmation) {
        res.status(400)
        res.render('registration', {
            error: 'Fill all fields',
            scripts: ['registration.js', 'md5.min.js'],
            authorization: req.user ? true : false,
            pageName: 'Sign Up',
            styles: ['log-reg.css'],
        })
    } else if (password != passwordConfirmation) {
        res.status(400)
        res.render('registration', {
            error: 'The passwords are not the same',
            scripts: ['registration.js', 'md5.min.js'],
            authorization: req.user ? true : false,
            pageName: 'Sign Up',
            styles: ['log-reg.css'],
        })
    } else if (password.length < 6) {
        res.status(400)
        res.render('registration', {
            error: 'Password must has at least 6 symbols',
            scripts: ['registration.js', 'md5.min.js'],
            authorization: req.user ? true : false,
            pageName: 'Sign Up',
            styles: ['log-reg.css'],
        })
    } else {
        findUserByEmail(email, (err, result) => {
            if (err) {
                res.status(500)
                res.render('registration', {
                    error: 'Server error. Please, try again later',
                    scripts: ['registration.js', 'md5.min.js'],
                    authorization: req.user ? true : false,
                    pageName: 'Sign Up',
                    styles: ['log-reg.css'],
                })
            } else if (result) {
                res.render('registration', {
                    error: 'This email has already registered',
                    scripts: ['registration.js', 'md5.min.js'],
                    authorization: req.user ? true : false,
                    pageName: 'Sign Up',
                    styles: ['log-reg.css'],
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
                                error: 'Server error. Please, try again later',
                                scripts: ['registration.js', 'md5.min.js'],
                                authorization: req.user ? true : false,
                                pageName: 'Sign Up',
                                styles: ['log-reg.css'],
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
