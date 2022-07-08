const User = require('../schemas/user')

const findUserByEmail = (email, done) => {
    try {
        User.findOne({ email: email }).then((res) => done(null, res))
    } catch (e) {
        done('Error')
        console.log(e)
    }
}

const registerUser = (data, done) => {
    const user = new User({
        name: data.name,
        email: data.email,
        passwordHash: data.passwordHash,
        role: 'user',
    })

    user.save().then((res) => done(null, res))
}

const findByPasswordAndEmail = ({ password, email }, done) => {
    try {
        User.findOne({ passwordHash: password, email: email }).then((res) =>
            done(null, res)
        )
    } catch (e) {
        console.log(e)
        done('Error')
    }
}

module.exports = { findUserByEmail, registerUser, findByPasswordAndEmail }
