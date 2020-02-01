const mysql = require("mysql2");

module.exports.connection = mysql
  .createConnection({
    host: "db4free.net",
    user: "s0o0ia",
    database: "s0o0ia",
    password: "3ej4vn15"
  }).promise();
