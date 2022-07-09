const { insertTest } = require('../dao/test')

const newTestGET = (req, res) => {
    if (req.user) {
        res.render('newTest', {
            scripts: ['newTest.js'],
            authorization: req.user ? true : false,
        })
    } else {
        res.redirect('/login')
    }
}

const newTestPOST = (req, res) => {
    if (req.user) {
        const title = req.body.testTitle
        const authorId = req.user.id
        let elements = []

        for (let key in req.body) {
            if (/queTitle/i.test(key)) {
                elements.push(req.body[key])
            }
        }

        insertTest({ title, authorId, elements }, (err, result) => {
            if (err) {
                res.send('Помилка')
            } else {
                res.redirect('/account')
            }
        })
    } else {
        res.redirect('/login')
    }
}

module.exports = { newTestGET, newTestPOST }
