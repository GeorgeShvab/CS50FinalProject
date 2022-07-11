const {
    getTest,
    insertAnswer,
    updateAnswerCount,
    deleteTest,
} = require('../dao/test')
const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const errorPage = require('./error')

const testGET = (req, res) => {
    let testId = req.params.testId

    if (!isNaN(testId)) {
        testId = Number(testId)
    }

    if (!testId || !mongoose.isValidObjectId(testId)) {
        errorPage(req, res, 'Survey Not Found', 404)
    } else {
        getTest(new ObjectId(testId), (err, result) => {
            if (err) {
                errorPage(req, res, 'Server Error', 500)
            } else if (!result) {
                errorPage(req, res, 'Survey Not Found', 404)
            } else {
                res.render('test', {
                    scripts: ['test.js'],
                    questions: result.questions,
                    title: result.title,
                    testId: testId,
                    authorization: req.user ? true : false,
                    pageName: 'Survey',
                    styles: ['test.css'],
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
            errorPage(req, res, 'Server Error', 500)
        } else {
            updateAnswerCount(testId)
            res.redirect('/')
        }
    })
}

const deleteTestAPIPOST = (req, res) => {
    const testId = req.params.testId

    const userId = req.user.id

    if (!isNaN(testId)) {
        testId = Number(testId)
    }

    if (!testId || !mongoose.isValidObjectId(testId)) {
        errorPage(req, res, 'Survey Not Found', 404)
    } else {
        getTest(new ObjectId(testId), (err, result) => {
            console.log(result)
            if (err) {
                res.status(500)
                res.send({ data: 'Error' })
            } else if (!result) {
                res.status(404)
                res.send({ data: 'Error' })
            } else {
                if (result.author_id == userId) {
                    deleteTest(testId, (err, result2) => {
                        if (err) {
                            res.status(500)
                            res.send('Error')
                        } else {
                            res.status(200)
                            res.send({ data: 'Deleted' })
                        }
                    })
                } else {
                    res.status(403)
                    res.send({ data: 'Forbidden' })
                }
            }
        })
    }
}

module.exports = { testGET, testPOST, deleteTestAPIPOST }
