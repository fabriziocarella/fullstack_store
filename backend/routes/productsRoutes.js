const router = require('express').Router();
const api = require('../controllers/productsControllers')

// router.get('/', getAllProducts)
router.get('/products', api.getAllProducts)
// router.get('/:id?', api.getProductByName)

module.exports = router