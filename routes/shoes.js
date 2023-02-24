const router = require('express').Router()
const shoesCtrl = require('../controllers/shoes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, shoesCtrl.create)


module.exports = router