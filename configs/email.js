const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "***.gmail.com",
  port: 11,
  secure: false,
  auth: {
    user: "******",
    pass: "hlblypcxoghkmfkv",
  },
});

module.exports = transporter;
