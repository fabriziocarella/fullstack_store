const router = require('express').Router();

const api = require('../controllers/productsControllers')

// Get all products
// Get api/products
router.get('/', api.getAllProducts)
router.get('/:id?', api.getProductByName)









module.exports = router
