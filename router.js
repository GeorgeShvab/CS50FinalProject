const { Router } = require('express')
const { index } = require('./controllers/main')
const {
    registrationGET,
    registrationPOST,
} = require('./controllers/registration')
const { loginGET, loginPOST } = require('./controllers/login')
const { newTestGET, newTestPOST } = require('./controllers/newTest')
const { testGET, testPOST } = require('./controllers/test')
const { accountGET } = require('./controllers/account')
const { resultsGET } = require('./controllers/results')

const router = Router()

router.get('/', index)
router.get('/registration', registrationGET)
router.post('/registration', registrationPOST)
router.get('/login', loginGET)
router.post('/login', loginPOST)
router.get('/new-test', newTestGET)
router.post('/new-test', newTestPOST)
router.get('/test/:testId', testGET)
router.post('/test/:testId', testPOST)
router.get('/account', accountGET)
router.get('/test/:testId/results', resultsGET)

module.exports = router
