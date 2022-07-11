const { insertTest } = require('../dao/test')
const errorPage = require('./error')

const newTestGET = (req, res) => {
    if (req.user) {
        res.render('newTest', {
            scripts: ['newTest.js'],
            authorization: req.user ? true : false,
            pageName: 'Новий тест',
            styles: ['newTest.css'],
        })
    } else {
        res.redirect('/login')
    }
}

const newTestPOST = (req, res) => {
    if (req.user) {
        const title = req.body.testTitle || 'Новий тест'
        const authorId = req.user.id
        let elements = []

        for (let key in req.body) {
            if (/queTitle/i.test(key)) {
                elements.push(req.body[key])
            }
        }

        insertTest({ title, authorId, elements }, (err, result) => {
            if (err) {
                errorPage(req, res, 'Помилка на сервері', 500)
            } else {
                res.redirect(`/test/${result._id}/success`)
            }
        })
    } else {
        res.redirect('/login')
    }
}

const newTestSuccess = (req, res) => {
    const testId = req.params.testId

    res.render('newTestSuccess', {
        scripts: [],
        authorization: req.user ? true : false,
        pageName: 'Тест створено',
        testLink: `http://localhost:3000/test/${testId}`,
        styles: ['newTest.css'],
    })
}

module.exports = { newTestGET, newTestPOST, newTestSuccess }
