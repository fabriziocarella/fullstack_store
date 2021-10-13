const { Pool } = require('pg') // Pool se usa para la conexión, y permite tener varias conexiones

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'fabrizio',
    database: 'fullstack_store',
});

pool.connect()
    .then(client => console.log('connection to PostGres Database established'))
    .catch(error => console.log(error))

module.exports = pool