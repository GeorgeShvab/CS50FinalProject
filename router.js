const { Router } = require('express')
const { index } = require('./controllers/main')
const {
    registrationGET,
    registrationPOST,
} = require('./controllers/registration')
const { loginGET, loginPOST } = require('./controllers/login')
const {
    newTestGET,
    newTestPOST,
    newTestSuccess,
} = require('./controllers/newTest')
const { testGET, testPOST, deleteTestAPIPOST } = require('./controllers/test')
const { accountGET } = require('./controllers/account')
const { resultsGET } = require('./controllers/results')
const { documentationGET } = require('./controllers/documentation')

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
router.get('/test/:testId/success', newTestSuccess)
router.get('/documentation', documentationGET)
router.get('/api/delete-test/:testId', deleteTestAPIPOST)

module.exports = router
