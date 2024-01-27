const express = require("express");
const cors = require("cors");

const { reqLogger } = require("./configs/logger");
const errorHandlerMiddleware = require("./middleware/errorHandler.middleware");

const app = express();
const adminRoutes = require("./routes");

app.use(express.json({ limit: "100mb" }));
app.use(cors());
app.use(reqLogger);
app.use("/api/admin", adminRoutes);
app.use(errorHandlerMiddleware);

module.exports = app;
