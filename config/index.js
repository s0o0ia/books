const mysql = require("mysql2");
const nodemailer = require("nodemailer");

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
    user: "sofishandala13@gmail.com",
    pass: "3Zi4Po15"
  },
  tls: {
    rejectUnauthorized: false
  }
});
