const router = require('express').Router()
const shoesCtrl = require('../controllers/shoes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, shoesCtrl.index)
router.post('/', checkAuth, shoesCtrl.create)
router.put('/:id', checkAuth, shoesCtrl.update)
router.delete('/:id', shoesCtrl.delete)




module.exports = router