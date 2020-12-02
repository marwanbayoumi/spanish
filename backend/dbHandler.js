require('dotenv').config();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

function getContents(table,callback){
    connection.query("SELECT * FROM ??",table, (err, rows) => {
        if (err) {
            return callback(err);
        } else {
            callback(null,rows);
        }
    })
}
    

module.exports= {getContents}