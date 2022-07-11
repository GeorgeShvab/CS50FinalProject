const { getTestsByUserId } = require('../dao/test')
const errorPage = require('./error')
const { findById } = require('../dao/user')

const accountGET = (req, res) => {
    if (req.user) {
        const userId = req.user.id

        findById(userId, (err, result) => {
            if (err) {
                errorPage(req, res, 'Server error', 500)
            } else if (!result) {
                res.redirect('/login')
            } else {
                getTestsByUserId(userId, (err, result2) => {
                    if (err) {
                        errorPage(req, res, 'Server error', 500)
                    } else {
                        res.render('account', {
                            userName: result.name,
                            scripts: [],
                            data: result2,
                            authorization: req.user ? true : false,
                            pageName: 'Account',
                            styles: ['account.css'],
                        })
                    }
                })
            }
        })
    } else {
        res.redirect('/login')
    }
}

module.exports = { accountGET }
