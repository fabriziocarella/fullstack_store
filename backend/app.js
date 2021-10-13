const express = require('express')
require('dotenv').config()
require('./utils/sql_db') // Runs SQL Database with Postgres
// const path = require('path');
const productsRoutes = require('./routes/productsRoutes') // Retreive the API endpoints 

const app = express()
const port = process.env.PORT

// Uso de archivos estáticos
// app.use("/public", express.static(path.join(__dirname, 'public')));
// app.use("/utils", express.static(path.join(__dirname, 'utils')));

//Middlewares
app.use(express.json()) //Para convertir a JSON
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser());

// app.use('/', router_web) // Web endpoints
app.use('/api', productsRoutes) // API endpoints

// Error handling in case of mistyping URL
app.get('*', (req, res) => {
  res.status(404).send({ message: "Route " + req.url + " Not found." })
})

app.listen(port, () => {
  console.log(`Backend running, example app listening at http://localhost:${port}`)
})