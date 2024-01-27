const { prisma } = require("../../configs/prisma");
const jwt = require("jsonwebtoken");

const {
  serverErrorResponse,
  okResponse,
  badRequestResponse,
} = require("../../constants/responses");

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.admins.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      const response = badRequestResponse("Invalid credentials.");
      return res.status(response.status.code).json(response);
    }

    const doPasswordsMatch = password === user?.password;

    if (!doPasswordsMatch) {
      const response = badRequestResponse("Invalid credentials.");
      return res.status(response.status.code).json(response);
    }

    const token = jwt.sign(
      { userId: user.id, role: "admin" },
      process.env.JWT_SECRET_KEY
    );

    const response = okResponse({ token }, "Admin login successful.");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = {
  loginAdmin,
};
