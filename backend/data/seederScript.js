// require('dotenv').config()

// const productsData = require('./zz_products')
// const companiesData = require('./zz_companies')

// const connectDB = require('../utils/nosql_db')
// const Product = require('../models/products')
// const Company = require('../models/companies')

// // connectDB()

// const importData = async () => {
//     try {
//         await Product.deleteMany({})
//         await Company.deleteMany({})
//         await Product.insertMany(productsData)
//         await Company.insertMany(companiesData)

//         console.log('Data import OK');
//         process.exit()

//     } catch (error) {
//         console.log('Data import FAILED');
//         process.exit(1)

//     }
// }
// // importData()
