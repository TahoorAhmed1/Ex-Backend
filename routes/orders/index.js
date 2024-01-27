/** @format */

const { Router } = require("express");
const router = Router();
const {
  getOrder,
  getOrderById,
  createOrder,
  deleteOrder,
  orderSuccess,
  getOrderByUserSecret,
  updateOrder,
} = require("@/controllers/orders/orders.controller");
const validateRequest = require("@/middleware/validateRequestJoi.middleware");
const { createOrderSchema, updateOrderSchema } = require("@/validation/orders");
const restrictToAdmins = require("../../middleware/restrictToAdmins");

router.get("/", restrictToAdmins, getOrder);
router.get("/orderSuccess", orderSuccess);
router.get("/orderBySecret/:secret_id", getOrderByUserSecret);
router.get("/:orderId", restrictToAdmins, getOrderById);
router.post("/", validateRequest(createOrderSchema), createOrder);
router.patch(
  "/:orderId",
  validateRequest(updateOrderSchema),
  restrictToAdmins,
  updateOrder
);
router.delete("/:orderId", restrictToAdmins, deleteOrder);

module.exports = router;
