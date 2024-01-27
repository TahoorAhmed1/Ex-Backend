/** @format */

const { Router } = require("express");
const router = Router();

const handleMultipartData = require("../middleware/populateMultipartData.middleware");
const uploadImage = require("../middleware/uploadPicture.middleware");

const adminUserRoutes = require("./adminUser");
const podcastRouter = require("./podcasts");
const tagsRouter = require("./tags");
const blogsRouter = require("./blogs");
const booksRouter = require("./books");
const sizeRouter = require("./sizes");
const categoriesRouter = require("./categories");
const contactRouter = require("./contact");
const customerRouter = require("./customers");
const merchandiseRouter = require("./merchandise");
const ordersRouter = require("./orders");

router.post("/upload", handleMultipartData, uploadImage);

router.use("/user", adminUserRoutes);
router.use("/podcast", podcastRouter);
router.use("/tag", tagsRouter);
router.use("/blog", blogsRouter);
router.use("/book", booksRouter);
router.use("/size", sizeRouter);
router.use("/category", categoriesRouter);
router.use("/contact", contactRouter);
router.use("/customer", customerRouter);
router.use("/merchandise", merchandiseRouter);
router.use("/order", ordersRouter);
module.exports = router;
