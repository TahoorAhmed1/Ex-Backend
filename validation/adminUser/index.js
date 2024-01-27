const Joi = require("joi");

const loginSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    email: Joi.string().email().max(100).required(),
    password: Joi.string().min(8).max(20).required(),
  }),
});

module.exports = {
  loginSchema,
};
