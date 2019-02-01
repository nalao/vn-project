let mysql = require('mysql')

let conn = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    // password:'',
    database: 'db_restfull'    
})

module.exports = conn