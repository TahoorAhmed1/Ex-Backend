const { Router } = require("express");
const { contact } = require("@/controllers/contact/contact.controller");

const validateRequest = require("@/middleware/validateRequestJoi.middleware");
const { contactSchema } = require("@/validation/contact");

const router = Router();

router.post("/", validateRequest(contactSchema), contact);

module.exports = router;
