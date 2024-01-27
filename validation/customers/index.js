const Joi = require("joi");

const createCoustomerSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    first_name: Joi.string().max(250).required(),
    last_name: Joi.string().max(250).required(),
    email: Joi.string().email().required(),
    phone_number: Joi.string().min(1).required(),
    address: Joi.string().max(1000).required(),
  }),
});

const updateCoustomerSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    customerId: Joi.number().min(1).required(),
  }),
  body: Joi.object({
    first_name: Joi.string().max(250).optional(),
    last_name: Joi.string().max(250).optional(),
    email: Joi.string().email().optional(),
    phone_number: Joi.string().min(1).optional(),
    address: Joi.string().max(1000).optional(),
  }).min(1),
});

module.exports = { createCoustomerSchema, updateCoustomerSchema };
