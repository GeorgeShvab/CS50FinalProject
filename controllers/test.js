const { getTest, insertAnswer, updateAnswerCount } = require('../dao/test')
const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const testGET = (req, res) => {
    let testId = req.params.testId

    if (!isNaN(testId)) {
        testId = Number(testId)
    }

    if (!testId || !mongoose.isValidObjectId(testId)) {
        res.status(404)
        res.send('Немає такого тесту')
    } else {
        getTest(new ObjectId(testId), (err, result) => {
            if (err) {
                res.status(500)
                res.send('Error')
            } else if (!result) {
                res.status(404)
                res.send('Не знайдено')
            } else {
                res.render('test', {
                    scripts: ['test.js'],
                    questions: result.questions,
                    title: result.title,
                    testId: testId,
                    authorization: req.user ? true : false,
                    pageName: 'Тест',
                })
            }
        })
    }
}

const testPOST = (req, res) => {
    const testId = req.params.testId
    const answers = Object.keys(req.body).map((key, index) => ({
        [key]: Object.values(req.body)[index],
    }))

    insertAnswer({ testId: testId, answers: answers }, (err, result) => {
        if (err) {
            res.status(500)
            res.send('Error')
        } else {
            updateAnswerCount(testId)
            res.redirect('/')
        }
    })
}

module.exports = { testGET, testPOST }
