const Test = require('../schemas/test')
const Answer = require('../schemas/answer')
const { ObjectId } = require('mongodb')

const insertTest = ({ title, elements, authorId }, done) => {
    try {
        const test = new Test({
            questions: elements,
            date: Date.now(),
            author_id: authorId,
            title: title,
            answersCount: 0,
        })

        test.save().then((res) => done(null, res))
    } catch (e) {
        console.log(e)
        done('Error')
    }
}

const getTest = (id, done) => {
    try {
        Test.findOne({ _id: id }).then((res) => done(null, res))
    } catch (e) {
        console.log(e)
        done('Error')
    }
}

const insertAnswer = ({ testId, answers }, done) => {
    try {
        const answer = new Answer({
            test_id: testId,
            answers: answers,
            date: Date.now(),
        })

        answer.save().then((res) => done(null, res))
    } catch (e) {
        console.log(e)
        done('Error')
    }
}

const updateAnswerCount = async (testId) => {
    try {
        await Test.updateOne(
            { _id: testId },
            { $inc: { answersCount: 1 } }
        ).then((res) => console.log(res))
    } catch (e) {
        console.log(e)
    }
}

const getTestsByUserId = (authorId, done) => {
    try {
        Test.aggregate([
            {
                $match: { author_id: ObjectId(authorId) },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'author_id',
                    foreignField: '_id',
                    as: 'user',
                },
            },
        ]).then((res) => done(null, res))
    } catch (e) {
        console.log(e)
        done('Error')
    }
}

module.exports = {
    insertTest,
    getTest,
    insertAnswer,
    updateAnswerCount,
    getTestsByUserId,
}
