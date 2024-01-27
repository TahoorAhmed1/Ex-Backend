const Joi = require("joi");

const createPodcastSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    title: Joi.string().max(250).required(),
    picture: Joi.string().max(250).optional(),
    description: Joi.string().required(),
    duration: Joi.number().min(1).required(),
    url: Joi.string().max(500).required(),
  }),
});
const updatePodcastSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    podcastId: Joi.number().min(1).required(),
  }),
  body: Joi.object({
    title: Joi.string().max(250).optional(),
    picture: Joi.string().max(250).optional(),
    description: Joi.string().optional(),
    duration: Joi.number().min(1).optional(),
    url: Joi.string().max(500).optional(),
  }).min(1),
});
const deletePodcastSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    podcastId: Joi.number().min(1).required(),
  }),
  body: Joi.object({}),
});
module.exports = {
  createPodcastSchema,
  updatePodcastSchema,
  deletePodcastSchema,
};
