const Test = require('../schemas/test')

const insertTest = ({ title, elements, authorId }, done) => {
    try {
        const test = new Test({
            questions: elements,
            date: Date.now(),
            author_id: authorId,
            title: title,
        })

        test.save().then((res) => done(null, res))
    } catch (e) {
        console.log(e)
        done('Error')
    }
}

module.exports = { insertTest }
