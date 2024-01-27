const express = require("express");

const validateRequest = require("../../middleware/validateRequestJoi.middleware");

const { loginSchema } = require("../../validation/adminUser/index");

const {
  loginAdmin,
} = require("../../controllers/adminUser/adminUser.controller");

const router = express.Router();

router.post("/login", validateRequest(loginSchema), loginAdmin);

module.exports = router;
