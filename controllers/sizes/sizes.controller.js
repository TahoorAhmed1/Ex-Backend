const { prisma } = require("@/configs/prisma");
const {
  createSuccessResponse,
  updateSuccessResponse,
  deleteSuccessResponse,
  okResponse,
} = require("@/constants/responses");

const getSize = async (req, res, next) => {
  try {
    const result = await prisma.sizes.findMany();
    const response = okResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};
const createSize = async (req, res, next) => {
  try {
    const result = await prisma.sizes.create({
      data: { ...req.body },
    });
    const response = createSuccessResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const updateSize = async (req, res, next) => {
  const { sizeId } = req.params;
  try {
    const result = await prisma.sizes.update({
      where: {
        id: Number(sizeId),
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

const deleteSize = async (req, res, next) => {
  const { sizeId } = req.params;
  try {
    await prisma.sizes.delete({
      where: {
        id: Number(sizeId),
      },
    });

    const response = deleteSuccessResponse();
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSize,
  createSize,
  updateSize,
  deleteSize,
};
