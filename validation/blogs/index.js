const Joi = require("joi");

const getAllBlogsSchema = Joi.object({
  query: Joi.object({
    page: Joi.number().min(1).optional(),
    pageLimit: Joi.number().min(1).optional(),
    tagIds: Joi.string().optional(),
  }),
  params: Joi.object({}),
  body: Joi.object({}),
});

const getBlogByIdSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    blogId: Joi.number().min(1).required(),
  }),
  body: Joi.object({}),
});

const createBlogSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    title: Joi.string().max(250).required(),
    picture: Joi.string().max(250).optional(),
    description: Joi.string().max(1000).required(),
    content: Joi.string().required(),
    readingTime: Joi.number().min(1).required(),
    tags: Joi.array().items(Joi.number()).unique().required(),
  }),
});
const updateBlogSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    blogId: Joi.number().min(1).required(),
  }),
  body: Joi.object({
    title: Joi.string().max(250).optional(),
    picture: Joi.string().max(250).optional(),
    description: Joi.string().max(1000).optional(),
    content: Joi.string().optional(),
    readingTime: Joi.number().min(1).optional(),
    tags: Joi.array().items(Joi.number()).unique().optional(),
  }).min(1),
});

const deleteBlogSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    blogId: Joi.number().min(1).required(),
  }),
  body: Joi.object({}),
});

module.exports = {
  getAllBlogsSchema,
  getBlogByIdSchema,
  createBlogSchema,
  updateBlogSchema,
  deleteBlogSchema,
};
