const { getTestAnswers } = require('../dao/answer')
const { getTest } = require('../dao/test')
const { ObjectId } = require('mongodb')
const errorPage = require('./error')

const resultsGET = (req, res) => {
    const testId = req.params.testId

    if (req.user) {
        const userId = req.user.id

        getTest(testId, (err, result) => {
            if (err) {
                errorPage(req, res, 'Помилка на сервері', 500)
            } else if (!result) {
                errorPage(req, res, 'Тест не знайдено', 404)
            } else {
                if (result.author_id == userId) {
                    getTestAnswers(ObjectId(testId), (err, result) => {
                        if (err) {
                            errorPage(req, res, 'Помилка на сервері', 500)
                        } else {
                            res.render('results', {
                                scripts: ['results.js'],
                                answers: result.answers,
                                test: result.test,
                                answersCount: result.test.answersCount,
                                title: result.test.title,
                                authorization: req.user ? true : false,
                                pageName: 'Результати тесту',
                                styles: ['results.css'],
                                testLink: `http://localhost:3000/test/${testId}`,
                            })
                        }
                    })
                } else {
                    res.redirect('/login')
                }
            }
        })
    } else {
        res.redirect('/login')
    }
}

module.exports = { resultsGET }
