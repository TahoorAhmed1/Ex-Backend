const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "deifqa0lz",
  api_key: "517247174645312",
  api_secret: "mVU1ggAUKmuzJLiO4R__uINkqOk",
  // secure: true
});

module.exports = cloudinary;
