var mysql = require('mysql')
var db = mysql.createConnection({
    host: '203.154.39.185',
    user: 'Db_Lms',
    password: 'Admin@123#',
    database: 'db_isuzu'
})
module.exports = db