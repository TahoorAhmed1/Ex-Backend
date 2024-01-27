const { prisma } = require("@/configs/prisma");
const {
  createSuccessResponse,
  updateSuccessResponse,
  deleteSuccessResponse,
  okResponse,
} = require("@/constants/responses");

const getTag = async (req, res, next) => {
  try {
    const result = await prisma.tags.findMany();
    const response = okResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const createTag = async (req, res, next) => {
  try {
    const result = await prisma.tags.create({
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

const updateTag = async (req, res, next) => {
  const { tagId } = req.params;
  try {
    const result = await prisma.tags.update({
      where: {
        id: Number(tagId),
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

const deleteTag = async (req, res, next) => {
  const { tagId } = req.params;
  try {
    await prisma.tags.delete({
      where: {
        id: Number(tagId),
      },
    });

    const response = deleteSuccessResponse();
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTag,
  createTag,
  updateTag,
  deleteTag,
};
