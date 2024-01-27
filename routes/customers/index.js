const { Router } = require("express");
const {
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require("@/controllers/customers/customers.controller.js");

const validateRequest = require("@/middleware/validateRequestJoi.middleware");

const { updateCoustomerSchema } = require("@/validation/customers");

const router = Router();

router.get("/", getCustomer);
// router.patch(
//   "/:customerId",
//   validateRequest(updateCoustomerSchema),
//   updateCustomer
// );
// router.delete("/:customerId", deleteCustomer);

module.exports = router;
