const mysql = require('mysql')

const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'updato-user'
})


connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database connected")
    }
})


module.exports = connection;