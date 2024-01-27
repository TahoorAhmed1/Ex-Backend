const { Router } = require("express");
const {
  getBlog,
  getBlogById,
  createBlog,
  updateBlog,
  delateBlog,
} = require("@/controllers/blogs/blogs.controller");

const validateRequest = require("@/middleware/validateRequestJoi.middleware");

const {
  updateBlogSchema,
  createBlogSchema,
  getBlogByIdSchema,
  deleteBlogSchema,
  getAllBlogsSchema,
} = require("@/validation/blogs");
const restrictToAdmins = require("../../middleware/restrictToAdmins");
const updateBlogView = require("@/middleware/updateView");

const router = Router();
router.get("/", validateRequest(getAllBlogsSchema), getBlog);
router.get(
  "/:blogId",
  validateRequest(getBlogByIdSchema),
  updateBlogView,
  getBlogById
);

router.post(
  "/",
  restrictToAdmins,
  validateRequest(createBlogSchema),
  createBlog
);
router.patch(
  "/:blogId",
  restrictToAdmins,
  validateRequest(updateBlogSchema),
  updateBlog
);
router.delete(
  "/:blogId",
  restrictToAdmins,
  validateRequest(deleteBlogSchema),
  delateBlog
);

module.exports = router;
