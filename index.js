const express = require('express')
const config = require('./config.json')
const db = require('mongoose')
const router = require('./router')
const path = require('path')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || config.PORT

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
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
