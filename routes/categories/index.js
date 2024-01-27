const { Router } = require("express");
const {
  getCategorie,
  createCategorie,
  updateCategorie,
  deleteCategorie,
} = require("@/controllers/categories/categories.controller");

const validateRequest = require("@/middleware/validateRequestJoi.middleware");
const {
  createCategoriesSchema,
  updateCategoriesSchema,
} = require("@/validation/categories");
const restrictToAdmins = require("../../middleware/restrictToAdmins");

const router = Router();

router.get("/", getCategorie);
router.post(
  "/",
  restrictToAdmins,
  validateRequest(createCategoriesSchema),
  createCategorie
);
router.patch(
  "/:categorieId",
  restrictToAdmins,
  validateRequest(updateCategoriesSchema),
  updateCategorie
);
router.delete("/:categorieId", restrictToAdmins, deleteCategorie);

module.exports = router;
