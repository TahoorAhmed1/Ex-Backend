const { Router } = require("express");
const {
  getBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("@/controllers/books/books.controller");

const validateRequest = require("@/middleware/validateRequestJoi.middleware");

const {
  createBookSchema,
  updateBookSchema,
  getBookByIdSchema,
} = require("@/validation/books");
const restrictToAdmins = require("../../middleware/restrictToAdmins");
const guestAccess = require("../../middleware/guestAccess");

const router = Router();

router.get("/", guestAccess, getBook);
router.get(
  "/:bookId",
  guestAccess,
  validateRequest(getBookByIdSchema),
  getBookById
);

router.post(
  "/",
  restrictToAdmins,
  validateRequest(createBookSchema),
  createBook
);
router.patch(
  "/:bookId",
  restrictToAdmins,
  validateRequest(updateBookSchema),
  updateBook
);
router.delete(
  "/:bookId",
  restrictToAdmins,
  validateRequest(getBookByIdSchema),
  deleteBook
);

module.exports = router;
