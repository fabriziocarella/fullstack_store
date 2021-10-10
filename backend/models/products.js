const mongoose = require('../utils/nosql_db')

const productSchema = new mongoose.Schema({
    productTitle: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productStock: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('product', productSchema)
