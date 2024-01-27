const { prisma } = require("@/configs/prisma");
const {
  createSuccessResponse,
  updateSuccessResponse,
  deleteSuccessResponse,
  okResponse,
} = require("@/constants/responses");

const getCategorie = async (req, res, next) => {
  try {
    const result = await prisma.categories.findMany();
    const response = okResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const createCategorie = async (req, res, next) => {
  try {
    const result = await prisma.categories.create({
      data: {
        ...req.body,
      },
    });
    const response = createSuccessResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const updateCategorie = async (req, res, next) => {
  const { categorieId } = req.params;
  try {
    const result = await prisma.categories.update({
      where: {
        id: Number(categorieId),
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

const deleteCategorie = async (req, res, next) => {
  const { categorieId } = req.params;
  try {
    await prisma.categories.delete({
      where: {
        id: Number(categorieId),
      },
    });

    const response = deleteSuccessResponse();
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategorie,
  createCategorie,
  updateCategorie,
  deleteCategorie,
};
