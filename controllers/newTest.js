const { insertTest } = require('../dao/test')
const errorPage = require('./error')

const newTestGET = (req, res) => {
    if (req.user) {
        res.render('newTest', {
            scripts: ['newTest.js'],
            authorization: req.user ? true : false,
            pageName: 'New survey',
            styles: ['newTest.css'],
        })
    } else {
        res.redirect('/login')
    }
}

const newTestPOST = (req, res) => {
    if (req.user) {
        const title = req.body.testTitle || 'New survey'
        const authorId = req.user.id
        let elements = []

        for (let key in req.body) {
            if (/queTitle/i.test(key)) {
                elements.push(req.body[key])
            }
        }

        insertTest({ title, authorId, elements }, (err, result) => {
            if (err) {
                errorPage(req, res, 'Server Error', 500)
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
        pageName: 'Survey created',
        testLink: `/test/${testId}`,
        styles: ['newTest.css'],
    })
}

module.exports = { newTestGET, newTestPOST, newTestSuccess }
