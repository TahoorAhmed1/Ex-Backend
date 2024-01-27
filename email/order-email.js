const { default: orderTemplete } = require("./orderTemplete");

const orderEmail = async (user, books, merchandises) => {
  const mailOptions = {
    to: user.email,
    subject: "Order Confirmed Successfully",
    html: orderTemplete(books, merchandises),
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Email sent: ${info.response}`);
  } catch (error) {
    logger.error(error);
    throw new Error("Error while sending Email");
  }
};
module.exports = { orderEmail };
