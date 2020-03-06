const mysql = require("mysql2");
const nodemailer = require("nodemailer");

// MySQL
module.exports.connection = mysql
  .createConnection({
    host: "db4free.net",
    user: "s0o0ia",
    database: "s0o0ia",
    password: "3ej4vn15"
  })
  .promise();

module.exports.transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "s0shandala@gmail.com",
    pass: "3ej4vn15"
  },
  tls: {
    rejectUnauthorized: false
  }
});
