/** @format */

const { prisma } = require("@/configs/prisma");
const {
  createSuccessResponse,
  updateSuccessResponse,
  deleteSuccessResponse,
  okResponse,
} = require("@/constants/responses");

const getMerchandise = async (req, res, next) => {
  try {
    const { page = 1, pageLimit = 12 } = req.query;
    const skipAmount = (page - 1) * +pageLimit;

    const result = await prisma.merchandises.findMany({
      select: {
        id: true,
        title: true,
        price: true,
        category: true,
        description: true,
        pictures: {
          select: {
            id: true,
            url: true,
          },
        },
        sizes: {
          select: {
            size: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },
          },
        },
      },
      skip: skipAmount,
      take: +pageLimit,
    });
    const merchandiseLength = await prisma.books.findMany();
    const pages = Math.ceil(merchandiseLength.length / +pageLimit);

    let response = okResponse({ result, totalPage: pages });

    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const getMerchandiseById = async (req, res, next) => {
  try {
    const { merchandiseId } = req.params;
    const result = await prisma.merchandises.findUnique({
      where: { id: Number(merchandiseId) },
      include: {
        category: true,
        sizes: {
          select: {
            size: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },
          },
        },
        pictures: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });

    const response = okResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const createMerchandise = async (req, res, next) => {
  try {
    const { sizes, pictures } = req.body;
    const merchandise_sizes = sizes.map((item) => {
      return { size_id: +item };
    });

    const merchandise_pictures = pictures.map((item) => {
      return { url: item };
    });

    const result = await prisma.merchandises.create({
      data: {
        ...req.body,
        sizes: {
          createMany: {
            data: merchandise_sizes,
          },
        },
        pictures: {
          createMany: {
            data: merchandise_pictures,
          },
        },
      },
      include: {
        sizes: {
          select: {
            size: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },
          },
        },
        pictures: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });

    const response = createSuccessResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const updateMerchandiseImage = async (req, res, next) => {
  const { merchandiseImageId } = req.params;
  try {
    const { picture } = req.body;

    const result = await prisma.merchandise_pictures.update({
      data: {
        url: picture,
      },
      where: {
        id: Number(merchandiseImageId),
      },
    });

    const response = updateSuccessResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const updateMerchandise = async (req, res, next) => {
  const { merchandiseId } = req.params;
  try {
    const { pictures, sizes, ...merchandiseData } = req.body;
    const merchandise_pictures = pictures
      ? pictures.map((item) => {
          return { url: item };
        })
      : [];

    const merchandise_sizes = sizes
      ? sizes.map((item) => {
          return { size_id: +item };
        })
      : [];
    if (merchandise_sizes?.length) {
      await prisma.merchandise_sizes.deleteMany({
        where: { merchandise_id: Number(merchandiseId) },
      });
    }
    const result = await prisma.merchandises.update({
      data: {
        ...merchandiseData,
        sizes: {
          createMany: {
            data: merchandise_sizes,
          },
        },
        pictures: {
          createMany: {
            data: merchandise_pictures,
          },
        },
      },
      where: { id: Number(merchandiseId) },
      include: {
        sizes: {
          select: {
            size: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        pictures: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });

    const response = updateSuccessResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const deleteMerchandiseImage = async (req, res, next) => {
  const { merchandiseImageId } = req.params;
  try {
    await prisma.merchandise_pictures.delete({
      where: {
        id: Number(merchandiseImageId),
      },
    });

    const response = deleteSuccessResponse();
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const deleteMerchandise = async (req, res, next) => {
  const merchandiseId = Number(req.params.merchandiseId);

  try {
    await prisma.$transaction([
      prisma.merchandise_pictures.deleteMany({
        where: {
          merchandise_id: merchandiseId,
        },
      }),
      prisma.merchandise_sizes.deleteMany({
        where: {
          id: merchandiseId,
        },
      }),
      prisma.merchandises.delete({
        where: {
          id: merchandiseId,
        },
      }),
    ]);
    // await prisma.merchandises.delete({
    //   where: {
    //     id: merchandiseId,
    //   },
    // });
    const response = deleteSuccessResponse();
    return res.status(response.status.code).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getMerchandise,
  getMerchandiseById,
  createMerchandise,
  updateMerchandise,
  updateMerchandiseImage,
  deleteMerchandiseImage,
  deleteMerchandise,
};
