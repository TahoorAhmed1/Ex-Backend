/** @format */

require("module-alias/register");

const env = require("dotenv");
const path = require("path");

const { logger } = require("./configs/logger");

if (process.env.NODE_ENV === "development") {
  env.config({ path: path.join(__dirname, ".env.development") });
} else if (process.env.NODE_ENV === "staging") {
  env.config({ path: path.join(__dirname, ".env.staging") });
} else if (process.env.NODE_ENV === "test") {
  env.config({ path: path.join(__dirname, ".env.test") });
} else {
  env.config();
}

const app = require("./app");

app.get("/checkout", (req, res) => {
  res.send("Payment Successfully");
});

app.listen(process.env.PORT, () => {
  logger.info(`listening on ${process.env.BACKEND_DOMAIN}`);
});
