const Joi = require("joi");

const contactSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().max(250).required(),
    email: Joi.string().email().required(),
    subject: Joi.string().max(1000).required(),
    message: Joi.string().max(1000).required(),
  }),
});
module.exports = { contactSchema };
