const { pool, client } = require('../utils/sql_db')

const api = {
    getAllProducts: async () => {
        try {
            const response = await pool.query('SELECT * FROM products')
            return response.rows
        } catch (err) {
            console.log(err.stack)
        }
    },
    getProduct: async (title) => {
        try {
            const response = await pool.query('SELECT * FROM users WHERE title=$1', [title])
            return response.rows
        } catch (err) {
            console.log(err.stack)
        }
    }
}
module.exports = api

// getProductByName: async (req, res) => {
//     try {
//         const product = await Product.findBy({})
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(400).json({
//             error: error.message
//         });
//     }
// }