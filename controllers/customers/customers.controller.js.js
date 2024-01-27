const { prisma } = require("@/configs/prisma");
const {
  updateSuccessResponse,
  deleteSuccessResponse,
  okResponse,
} = require("@/constants/responses");

const getCustomer = async (req, res, next) => {
  try {
    const result = await prisma.customers.findMany();
    const response = okResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  const { customerId } = req.params;
  try {
    const result = await prisma.customers.update({
      where: {
        id: Number(customerId),
      },
      data: {
        ...req.body,
      },
    });
    const response = updateSuccessResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  const { customerId } = req.params;
  try {
    await prisma.customers.delete({
      where: {
        id: Number(customerId),
      },
    });

    const response = deleteSuccessResponse();
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
