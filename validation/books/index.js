const Joi = require("joi");

const getBookByIdSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({ bookId: Joi.number().min(1).required() }),
  body: Joi.object({}),
});

const createBookSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    title: Joi.string().max(250).required(),
    picture: Joi.string().max(250).optional(),
    description: Joi.string().max(1000).required(),
    price: Joi.number().min(1).required(),
    preview_url: Joi.alternatives().conditional("type", {
      is: Joi.any().valid("PHYSICAL_BOOK"),
      then: Joi.string().required(),
      otherwise: Joi.forbidden(),
    }),
    active: Joi.boolean().optional(),
    type: Joi.string()
      .valid("PHYSICAL_BOOK", "E_BOOK", "AUDIO_BOOK")
      .required(),
    download_url: Joi.alternatives().conditional("type", {
      is: Joi.any().valid("E_BOOK", "AUDIO_BOOK"),
      then: Joi.string().required(),
      otherwise: Joi.forbidden(),
    }),
  }),
});

const updateBookSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    bookId: Joi.number().min(1).required(),
  }),
  body: Joi.object({
    title: Joi.string().max(250).optional(),
    picture: Joi.string().max(250).optional(),
    description: Joi.string().max(1000).optional(),
    price: Joi.number().min(1).optional(),
    preview_url: Joi.string().optional(),
    active: Joi.boolean().optional(),
    type: Joi.string()
      .valid("PHYSICAL_BOOK", "E_BOOK", "AUDIO_BOOK")
      .optional(),
    download_url: Joi.string().optional(),
  }).min(1),
});

module.exports = { getBookByIdSchema, createBookSchema, updateBookSchema };
