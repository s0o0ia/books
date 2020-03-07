const { transporter } = require("../config");

class Email {
  static confirm(el) {
    const mailOptions = {
      from: "s0shandala@gmail.com",
      to: el.email,
      subject: el.message,
      html: `Тестовий email ві:  ${el.name}`,
      bcc: el.email
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
      from: el.email,
      to: "s0shandala@gmail.com",
      subject: "bla",
      html: el.message,
      bcc: "s0shandala@gmail.com"
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
      from: "s0shandala@gmail.com",
      to: el.email,
      subject: `Новина для: ${el.name}`,
      html: `${el.news}`,
      bcc: el.email
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

module.exports.Email = Email;
