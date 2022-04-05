const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2eea3c8171074c",
    pass: "6f9430f3880a85",
  },
});

module.exports = { transporter };
