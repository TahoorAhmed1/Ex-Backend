const { Router } = require("express");
const {
  getSize,
  createSize,
  updateSize,
  deleteSize,
} = require("@/controllers/sizes/sizes.controller");

const validateRequest = require("@/middleware/validateRequestJoi.middleware");
const { createSizeSchema, updateSizeSchema } = require("@/validation/sizes");
const restrictToAdmins = require("../../middleware/restrictToAdmins");

const router = Router();

router.get("/", getSize);
router.post(
  "/",
  restrictToAdmins,
  validateRequest(createSizeSchema),
  createSize
);
router.patch(
  "/:sizeId",
  restrictToAdmins,
  validateRequest(updateSizeSchema),
  updateSize
);
router.delete("/:sizeId", restrictToAdmins, deleteSize);

module.exports = router;
