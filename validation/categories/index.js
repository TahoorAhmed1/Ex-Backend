const Joi = require("joi");

const createCategoriesSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().required(),
  }),
});
const updateCategoriesSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    categorieId: Joi.number().min(1).required(),
  }),
  body: Joi.object({
    name: Joi.string().optional(),
  }).min(1),
});

module.exports = { createCategoriesSchema, updateCategoriesSchema };
