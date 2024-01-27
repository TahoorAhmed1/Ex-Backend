/** @format */

const Joi = require("joi");

const createMerchandiseSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    title: Joi.string().max(250).required(),
    description: Joi.string().max(1000).required(),
    price: Joi.number().min(1).required(),
    category_id: Joi.number().min(1).required(),
    sizes: Joi.array().items().unique().required(),
    pictures: Joi.array().items().unique().required(),
  }),
});
const updateMerchandiseSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    merchandiseId: Joi.number().min(1).required(),
  }),
  body: Joi.object({
    title: Joi.string().max(250).optional(),
    description: Joi.string().max(1000).optional(),
    price: Joi.number().min(1).optional(),
    category_id: Joi.number().min(1).optional(),
    sizes: Joi.array().items().unique().optional(),
    pictures: Joi.array().items().unique().optional(),
  }).min(1),
});

const updateMerchandiseImageSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    merchandiseImageId: Joi.number().min(1).required(),
  }),
  body: Joi.object({
    picture: Joi.string().max(250).optional(),
  }).min(1),
});

module.exports = {
  createMerchandiseSchema,
  updateMerchandiseSchema,
  updateMerchandiseImageSchema,
};
