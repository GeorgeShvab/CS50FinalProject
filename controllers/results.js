const { getTestAnswers } = require('../dao/answer')
const { ObjectId } = require('mongodb')

const resultsGET = (req, res) => {
    const testId = req.params.testId

    if (req.user) {
        const userId = req.user.id

        getTestAnswers(ObjectId(testId), (err, result) => {
            if (err) {
                res.send('error')
            } else {
                res.render('results', {
                    scripts: [],
                    answers: result.answers,
                    test: result.test,
                    title: result.test.title,
                    authorization: req.user ? true : false,
                    pageName: 'Результати тесту',
                })
            }
        })
    }
}

module.exports = { resultsGET }
