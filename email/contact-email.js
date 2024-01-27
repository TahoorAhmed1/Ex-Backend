const transporter = require("@/configs/email");
const { logger } = require("../configs/logger");

const contactEmail = async (data) => {
  const mailOptions = {
    to: data.email,
    subject: data.subject,
    html: `
    <p>Name: ${data.name}</p>
    <p>Message: ${data.message}</p>
    `,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Email sent: ${info.response}`);
    
  } catch (error) {
    logger.error(error);
    throw new Error("Error while sending Email");
  }
};



module.exports = contactEmail;
