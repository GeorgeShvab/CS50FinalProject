const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema

const answer = new Schema(
    {
        test_id: ObjectId,
        answers: Array,
        date: Number,
    },
    {
        versionKey: false,
    }
)

const Answer = mongoose.model('answers', answer)

module.exports = Answer
