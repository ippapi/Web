require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3308,
    waitForConnections: process.env.DB_WAITFOR,
    connectionLimit: process.env.DB_CONNECTLIMIT,
    queueLimit: process.env.DB_QUEUELIMIT
});

module.exports = connection;