const express = require('express')
require('dotenv').config()
require('./utils/nosql_db') // Runs NOSQL Database with Mongoose
// require('./utils/sql_db') // Runs SQL Database with Postgres
const path = require('path');
// const passport = require('passport')
// const cookieParser = require('cookie-parser');
// require('./middlewares/passport_google_setup')
// require('./middlewares/passport_github_setup')
// const router_web = require('./routes/router_web') // Retreive the web endpoints
// const router_api = require('./routes/router_api') // Retreive the API endpoints 

const app = express()
const port = process.env.PORT

// Uso de archivos estáticos
// app.use("/public", express.static(path.join(__dirname, 'public')));

app.use("/utils", express.static(path.join(__dirname, 'utils')));

// Motor de vistas
// app.set('view engine', 'pug')
// app.set('views', './views')

//Middlewares
// app.use(passport.initialize()); // Used to initialize passport
// app.use(passport.session()); // Used to persist login sessions
// app.use(express.json()) //Para convertir a JSON
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser());

// app.use('/', router_web) // Web endpoints
// app.use('/api', router_api) // API endpoints

// Error handling in case of mistyping URL
app.get('*', (req, res) => {
  res.status(404).send({ message: "Route " + req.url + " Not found." })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})