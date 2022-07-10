const express = require('express')
const config = require('./config.json')
const db = require('mongoose')
const router = require('./router')
const path = require('path')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const authorization = require('./middlewares/authorization')

const PORT = process.env.PORT || config.PORT

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(authorization)
app.use(router)

const start = () => {
    app.listen(PORT, () => {
        console.log('Server started on', PORT)
    })
}

const connectToDb = () => {
    db.connect(
        'mongodb+srv://Georgiy:CS50123456CS50@cs50.n5yjolx.mongodb.net/?retryWrites=true&w=majority',
        { dbname: 'CS50' }
    )
        .then((res) => {
            console.log('connected')
            start()
        })
        .catch((err) => {
            console.log('err')
        })
}

connectToDb()

hbs.handlebars.registerHelper('scriptLink', function (name) {
    return '/scripts/' + name
})

hbs.handlebars.registerHelper('returnAnswers', (obj) => {
    return obj.answers
})

hbs.handlebars.registerHelper('objEntries', (value) => {
    return Object.entries(value)
})

hbs.handlebars.registerHelper('console', (value) => {
    console.log(value)
})

hbs.handlebars.registerHelper('addOne', (value) => value + 1)

hbs.handlebars.registerHelper('isQue', (value, index) => {
    if (index == 0 || index % 2 == 0) {
        return true
    } else {
        return false
    }
})
