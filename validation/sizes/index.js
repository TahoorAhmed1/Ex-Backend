const Joi = require("joi");

const createSizeSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    code: Joi.string().required(),
    name: Joi.string().required(),
  }),
});
const updateSizeSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    sizeId: Joi.number().min(1).required(),
  }),
  body: Joi.object({
    code: Joi.string().optional(),
    name: Joi.string().optional(),
  }).min(1),
});

module.exports = { createSizeSchema, updateSizeSchema };
