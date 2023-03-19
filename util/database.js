const mysql =require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-sql-complete',
    password:'Dhruv@2808'
})

module.exports=pool.promise();