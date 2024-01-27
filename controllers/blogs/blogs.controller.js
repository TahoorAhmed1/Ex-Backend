const { prisma } = require("@/configs/prisma");
const {
  createSuccessResponse,
  updateSuccessResponse,
  deleteSuccessResponse,
  okResponse,
} = require("@/constants/responses");

const getBlog = async (req, res, next) => {
  try {
    const page = Number(req.query?.page || 1);
    const pageLimit = Number(req.query?.pageLimit || 12);
    const tagIds = JSON.parse(req.query?.tagIds || "[]");

    const skipAmount = (page - 1) * pageLimit;

    const allBlogs = await prisma.blogs.count();

    let result = [];

    if (tagIds.length) {
      result = await prisma.blog_tags.findMany({
        where: {
          tagId: {
            in: tagIds,
          },
        },
        include: {
          blog: {
            include: {
              tags: {
                select: {
                  tag: {
                    select: {
                      id: true,
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      result = result.map(({ blog }) => {
        return blog;
      });
    } else {
      const obj =
        page && pageLimit ? { skip: skipAmount, take: pageLimit } : {};

      result = await prisma.blogs.findMany({
        include: {
          tags: {
            select: {
              tag: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
        ...obj,
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    const pages = tagIds.length ? null : Math.ceil(allBlogs / pageLimit);

    const response = okResponse({ result, totalPage: pages });
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const getBlogById = async (req, res, next) => {
  try {
    const { blogId } = req.params;
    const result = await prisma.blogs.findUnique({
      where: { id: Number(blogId) },
      include: {
        tags: {
          select: {
            tag: {
              select: {
                id: true,
                name: true,
              },
            },
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

const createBlog = async (req, res, next) => {
  try {
    const { tags } = req.body;
    const newtags = tags.map((key) => {
      return { tagId: key };
    });

    const result = await prisma.blogs.create({
      data: {
        ...req.body,
        tags: {
          createMany: {
            data: newtags,
          },
        },
      },
      include: {
        tags: {
          select: {
            tag: {
              select: {
                id: true,
                name: true,
              },
            },
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

const updateBlog = async (req, res, next) => {
  const { blogId } = req.params;
  try {
    const { tags, ...blogData } = req.body;

    const newtags = tags
      ? tags.map((tag) => {
          return { tagId: tag };
        })
      : [];
    if (newtags?.length) {
      await prisma.blog_tags.deleteMany({
        where: { blogId: Number(blogId) },
      });
    }
    const result = await prisma.blogs.update({
      data: {
        ...blogData,
        tags: {
          createMany: {
            data: newtags,
          },
        },
      },
      where: { id: Number(blogId) },
      include: {
        tags: {
          select: {
            tag: {
              select: {
                id: true,
                name: true,
              },
            },
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

const delateBlog = async (req, res, next) => {
  const { blogId } = req.params;
  try {
    await prisma.blogs.delete({
      where: {
        id: Number(blogId),
      },
    });

    const response = deleteSuccessResponse();
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBlog,
  getBlogById,
  createBlog,
  updateBlog,
  delateBlog,
};
