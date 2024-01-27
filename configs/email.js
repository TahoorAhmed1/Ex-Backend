const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "inl2.0developers@gmail.com",
    pass: "hlblypcxoghkmfkv",
  },
});

module.exports = transporter;
