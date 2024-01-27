const Joi = require("joi");

const createTagSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().required(),
  }),
});
const updateTagSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    tagId: Joi.number().min(1).required(),
  }),
  body: Joi.object({
    name: Joi.string().optional(),
  }).min(1),
});

const deleteTagSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    tagId: Joi.number().min(1).required(),
  }),
  body: Joi.object({}),
});
module.exports = { createTagSchema, updateTagSchema, deleteTagSchema };
