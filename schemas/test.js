const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema

const testSchema = new Schema(
    {
        title: String,
        author_id: ObjectId,
        date: Number,
        questions: Array,
        answersCount: Number,
    },
    {
        versionKey: false,
    }
)

const Test = mongoose.model('tests', testSchema)

module.exports = Test
