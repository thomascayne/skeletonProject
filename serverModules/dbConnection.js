/* this file contains the code that makes the connection to the database, so that it can be reused in the multiple route files */

const mysql = require('mysql2');
const dbConfig = require('./dbConfig');

let connection = mysql.createConnection(dbConfig);

module.exports = connection;