const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        name: String,
        email: String,
        passwordHash: String,
        role: String,
    },
    {
        versionKey: false,
    }
)

const User = mongoose.model('users', userSchema)

module.exports = User