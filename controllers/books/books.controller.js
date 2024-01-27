const { prisma } = require("@/configs/prisma");
const {
  createSuccessResponse,
  updateSuccessResponse,
  deleteSuccessResponse,
  okResponse,
} = require("@/constants/responses");

const getBook = async (req, res, next) => {
  const { userId } = req.user;
  try {
    const { page = 1, pageLimit = 12 } = req.query;
    const skipAmount = (page - 1) * +pageLimit;

    const filter = {
      skip: skipAmount,
      take: +pageLimit,
      include: {
        book_download_url: {
          select: {
            download_url: true,
          },
        },
      },
    };

    if (!userId) delete filter.include;
    const result = await prisma.books.findMany({
      ...filter,
    });

    const bookLength = await prisma.books.findMany();
    const pages = Math.ceil(bookLength.length / +pageLimit);

    const response = okResponse({ result, totalPage: pages });
    return res.status(response.status.code).json(response);
  } catch (error) {
    // console.log("error", error);
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  const { userId } = req.user;
  const { bookId } = req.params;
  try {
    const filter = {
      where: { id: Number(bookId) },
      include: {
        book_download_url: {
          select: {
            download_url: true,
          },
        },
      },
    };

    if (!userId) delete filter.include;

    const result = await prisma.books.findUnique({
      ...filter,
    });

    const response = okResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  const { download_url, ...book } = req.body;
  try {
    const result = await prisma.books.create({
      data: {
        ...book,
        book_download_url: {
          create: {
            download_url: download_url,
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

const updateBook = async (req, res, next) => {
  const { bookId } = req.params;
  const { download_url, ...book } = req.body;
  try {
    const result = await prisma.books.update({
      where: {
        id: Number(bookId),
      },
      data: {
        ...book,
        book_download_url: {
          update: {
            download_url: download_url,
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

const deleteBook = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    await prisma.books.delete({
      where: {
        id: Number(bookId),
      },
    });

    const response = deleteSuccessResponse();
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
