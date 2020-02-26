const { transporter } = require("../config");

class eemail {
  static confirm(el) {
    const mailOptions = {
      from: "sofishandala13@gmail.com",
      to: `${el.email}`,
      subject: "test send",
      html: `${el.message}`,
      bcc: `${el.email}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  static reset(el) {
    const mailOptions = {
      from: "sofishandala13@gmail.com",
      to: `${el.email}`,
      subject: "reset password",
      html: " reset password",
      bcc: `${el.email}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  static news(el) {
    const mailOptions = {
      from: "sofishandala13@gmail.com",
      to: `${el.email}`,
      subject: ` news for ${el.name}`,
      html: `${el.news}`,
      bcc: `${el.email}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}

module.exports.eemail = eemail;
