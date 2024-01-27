const path = require("path");
const multer = require("multer");

const { badRequestResponse } = require("@/constants/responses");

const storage = multer.memoryStorage();
const limits = { fileSize: 10 * 1024 * 1024 }; // Allow up to 10 MB per file
const fields = [
  { name: "podcast", maxCount: 1 },
  { name: "blog", maxCount: 1 },
  { name: "book", maxCount: 1 },
  { name: "merchandise", maxCount: 10 },
  { name: "e_book", maxCount: 1 },
  { name: "preview_pdf", maxCount: 1 },
  { name: "audio_book", maxCount: 1 },
];

const handleMulterError = (err) => {
  if (err && err instanceof multer.MulterError) {
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return "Unable to upload image. Make sure that only allowed key name is used and only one file is uploaded at a time.";
    }
    if (err.code === "LIMIT_FILE_SIZE") {
      return "Unable to upload image. Max file size limit is 10MB.";
    }
  } else if (err) {
    return err.message;
  }
};

function handleMultipartData(req, res, next) {
  const upload = multer({
    storage,
    limits,
    fileFilter: function (req, file, callback) {
      const fieldname = file.fieldname;
      const ext = path.extname(file.originalname).toLowerCase();

      if (
        fieldname !== "e_book" &&
        fieldname !== "preview_pdf" &&
        fieldname !== "audio_book"
      ) {
        if (
          ext !== ".png" &&
          ext !== ".jpg" &&
          ext !== ".jpeg" &&
          ext !== ".webp"
        ) {
          return callback(
            new Error("Only png, jpg/jpeg or webP images are allowed")
          );
        }
      } else if (fieldname === "e_book" || fieldname === "preview_pdf") {
        if (ext !== ".pdf") {
          return callback(
            new Error("Only pdf file format is allowed are allowed")
          );
        }
      } else if (fieldname === "audio_book") {
        if (ext !== ".mp3" && ext !== ".wav") {
          return callback(
            new Error(
              "Only mp3 or wav file formats are allowed is allowed are allowed"
            )
          );
        }
      }

      callback(null, true);
    },
  }).fields(fields);

  upload(req, res, (err) => {
    const error = handleMulterError(err);

    if (error) {
      const response = badRequestResponse(error);
      return res.status(response.status.code).json(response);
    }

    if (!Object.keys(req.files).length) {
      const response = badRequestResponse("No file to upload.");
      return res.status(response.status.code).json(response);
    }

    next();
  });
}
module.exports = handleMultipartData;
