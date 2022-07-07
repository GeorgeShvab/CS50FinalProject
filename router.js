const { Router } = require('express')
const { index } = require('./controllers/main')
const {
    registrationGET,
    registrationPOST,
} = require('./controllers/registration')

const router = Router()

router.get('/', index)
router.get('/registration', registrationGET)
router.post('/registration', registrationPOST)

module.exports = router
