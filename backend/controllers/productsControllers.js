const model = require('../models/products')
const api = {
    products: async (req, res) => {
        try {
            const response = await model.getAllProducts()
            res.status(200).json(response.rows);
        } catch (err) {
            res.status(400).json({
                error: error.message
            });
        }
    },
}
module.exports = api