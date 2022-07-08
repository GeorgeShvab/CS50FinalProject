const { Router } = require('express')
const { index } = require('./controllers/main')
const {
    registrationGET,
    registrationPOST,
} = require('./controllers/registration')
const {loginGET, loginPOST} = require("./controllers/login")

const router = Router()

router.get('/', index)
router.get('/registration', registrationGET)
router.post('/registration', registrationPOST)
router.get('/login', loginGET)
router.post('/login', loginPOST)

module.exports = router
