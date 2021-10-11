const Product = require('../models/products')
const Company = require('../models/companies')

const api = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find({})
            res.status(200).json(products)
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },

    getProductByName: async (req, res) => {
        try {
            const product = await Product.findBy({})
            res.status(200).json(products)
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }
}

module.exports = api
