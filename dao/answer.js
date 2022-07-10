const Answer = require('../schemas/answer')
const { getTest } = require('./test')

const getTestAnswers = (testId, done) => {
    try {
        Answer.find({ test_id: testId }).then((res) => {
            getTest(testId, (err, result) => {
                if (err) {
                    done('Error')
                } else {
                    done(null, { test: result, answers: res })
                }
            })
        })
    } catch (e) {
        console.log(e)
        done('Error')
    }
}

module.exports = { getTestAnswers }
