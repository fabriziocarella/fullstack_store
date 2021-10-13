const pool = require('../utils/sql_db')

const products = {
    getAllProducts: async () => {
        try {
            const response = await pool.query(`SELECT * FROM products`)
            console.log(response);
            return response
        } catch (err) {
            console.log(err.stack)
        }
    },
    // getProduct: async (title) => {
    //     try {
    //         const response = await pool.query('SELECT * FROM users WHERE title=$1', [title])
    //         return response.rows
    //     } catch (err) {
    //         console.log(err.stack)
    //     }
    // }
}
module.exports = products