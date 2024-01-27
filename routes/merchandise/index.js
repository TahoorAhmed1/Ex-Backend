/** @format */

const { Router } = require("express");
const {
  getMerchandise,
  getMerchandiseById,
  createMerchandise,
  updateMerchandise,
  deleteMerchandise,
  updateMerchandiseImage,
  deleteMerchandiseImage,
} = require("@/controllers/merchandise/merchandise.controller");

const validateRequest = require("@/middleware/validateRequestJoi.middleware");

const {
  updateMerchandiseSchema,
  createMerchandiseSchema,
  updateMerchandiseImageSchema,
} = require("@/validation/merchandise");
const restrictToAdmins = require("../../middleware/restrictToAdmins");

const router = Router();

router.get("/", getMerchandise);
router.get("/:merchandiseId", getMerchandiseById);
router.post(
  "/",
  restrictToAdmins,
  validateRequest(createMerchandiseSchema),
  createMerchandise
);
router.patch(
  "/:merchandiseId",
  restrictToAdmins,
  validateRequest(updateMerchandiseSchema),
  updateMerchandise
);
router.patch(
  "/image/:merchandiseImageId",
  restrictToAdmins,
  validateRequest(updateMerchandiseImageSchema),
  updateMerchandiseImage
);
router.delete(
  "/image/:merchandiseImageId",
  restrictToAdmins,
  deleteMerchandiseImage
);
router.delete("/:merchandiseId", restrictToAdmins, deleteMerchandise);

module.exports = router;
