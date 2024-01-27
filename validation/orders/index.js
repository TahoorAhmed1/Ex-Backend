const Joi = require("joi");

const createOrderSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    email: Joi.string().email().required(),
    first_name: Joi.string().max(250).required(),
    last_name: Joi.string().max(250).required(),
    phone_number: Joi.string().required(),
    address: Joi.string().max(1000).required(),
    sub_total: Joi.number().min(1).required(),
    shipping_cost: Joi.number().min(1).required(),
    tax_rate: Joi.number().min(1).optional(),
    tax_amount: Joi.number().min(1).required(),
    total_amount: Joi.number().min(1).required(),
    books: Joi.array().optional(),
    merchandises: Joi.array().optional(),
  }),
});

const updateOrderSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    orderId: Joi.number().min(1).required(),
  }),
  body: Joi.object({
    fulfilled: Joi.boolean().required(),
  }),
});
module.exports = { createOrderSchema, updateOrderSchema };
