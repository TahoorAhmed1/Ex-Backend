const {
  forbiddenResponse,
  badRequestResponse,
} = require("../constants/responses");
const jwt = require("jsonwebtoken");

const guestAccess = (req, res, next) => {
  const { authorization: token } = req.headers;
  req.user = {};
  if (!token) {
    return next();
  }

  const { tokenValid, decodedData } = verifyAndDecodeToken(token);

  if (!tokenValid) {
    return next();
  }

  if (decodedData?.role === "admin" || decodedData?.role === "super_admin") {
    req.user = decodedData;
    return next();
  } else {
    return next();
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

module.exports = guestAccess;
