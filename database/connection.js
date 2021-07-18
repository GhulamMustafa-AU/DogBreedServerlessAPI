const sql = require("mysql")

// create a sql connection pool with arguments initialized by envirionment of docker container on cloud 
const pool = sql.createPool({
    user:process.env.DB_USER, 
    password:process.env.DB_PASS, 
    database:process.env.DB_NAME, 
    socketPath:`/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`, 
})

module.exports = pool;