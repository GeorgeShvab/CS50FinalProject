const { getTestsByUserId } = require('../dao/test')

const accountGET = (req, res) => {
    if (req.user) {
        const userId = req.user.id

        getTestsByUserId(userId, (err, result) => {
            if (err) {
                res.render('account', {
                    scripts: [],
                    authorization: req.user ? true : false,
                    error: true,
                    pageName: 'Профіль',
                })
            } else {
                res.render('account', {
                    userName: result[0].user[0].name,
                    scripts: [],
                    data: result,
                    authorization: req.user ? true : false,
                    pageName: 'Профіль',
                })
            }
        })
    } else {
        res.redirect('/')
    }
}

module.exports = { accountGET }
