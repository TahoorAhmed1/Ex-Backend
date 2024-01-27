const { Router } = require("express");
const {
  getTag,
  createTag,
  updateTag,
  deleteTag,
} = require("@/controllers/tags/tags.controller");

const validateRequest = require("@/middleware/validateRequestJoi.middleware");
const {
  updateTagSchema,
  createTagSchema,
  deleteTagSchema,
} = require("@/validation/tags");
const restrictToAdmins = require("../../middleware/restrictToAdmins");

const router = Router();

router.get("/", getTag);
router.post("/", restrictToAdmins, validateRequest(createTagSchema), createTag);
router.patch(
  "/:tagId",
  restrictToAdmins,
  validateRequest(updateTagSchema),
  updateTag
);
// router.delete(
//   "/:tagId",
//   restrictToAdmins,
//   validateRequest(deleteTagSchema),
//   deleteTag
// );

module.exports = router;
