const { prisma } = require("@/configs/prisma");

const blogViews = new Map();

const clearViews = () => {
  blogViews.clear();
};

setInterval(clearViews, 60 * 60 * 1000);

const updateBlogView = async (req, res, next) => {
  const ip = req.ip;
  const blogId = Number(req.params.blogId);
  // console.log(ip);
  try {
    // console.log(blogViews);
    if (blogViews.has(ip)) {
      // console.log("yes");
      const blogIds = blogViews.get(ip);
      // console.log(blogIds, "123465");
      if (blogIds[blogId]) {
        // console.log("yes1");
        return next();
      } else {
        // console.log("yes2");
        await prisma.blogs.update({
          where: {
            id: blogId,
          },
          data: {
            views: { increment: 1 },
          },
        });
        blogViews.set(ip, { ...blogIds, [blogId]: Date.now() });
        return next();
      }
    } else {
      // console.log("yes3");
      blogViews.set(ip, { [blogId]: Date.now() });
      // console.log(blogViews, "2");
      await prisma.blogs.update({
        where: {
          id: blogId,
        },
        data: {
          views: { increment: 1 },
        },
      });
      return next();
    }
  } catch (error) {
    next(error);
  }
};
module.exports = updateBlogView;
