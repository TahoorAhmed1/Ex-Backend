const {
  forbiddenResponse,
  badRequestResponse,
} = require("../constants/responses");
const jwt = require("jsonwebtoken");

const restrictToAdmins = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    const response = badRequestResponse("Token not provided.");
    return res.status(response.status.code).json(response);
  }

  const { tokenValid, decodedData } = verifyAndDecodeToken(token);

  if (!tokenValid) {
    const response = forbiddenResponse("Invalid token.");
    return res.status(response.status.code).json(response);
  }

  if (decodedData?.role === "admin" || decodedData?.role === "super_admin") {
    next();
  } else {
    const response = forbiddenResponse("User is not authorized.");
    return res.status(response.status.code).json(response);
  }
};

const verifyAndDecodeToken = (token) => {
  const result = jwt.verify(
    token,
    process.env.JWT_SECRET_KEY,
    (err, decodedData) => {
      if (err) {
        return { tokenValid: false };
      }
      return { tokenValid: true, decodedData };
    }
  );
  return result;
};

module.exports = restrictToAdmins;
