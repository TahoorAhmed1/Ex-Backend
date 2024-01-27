const { prisma } = require("@/configs/prisma");
const {
  createSuccessResponse,
  updateSuccessResponse,
  deleteSuccessResponse,
  okResponse,
} = require("@/constants/responses");

const getPodcast = async (req, res, next) => {
  const { page = 1, pageLimit = 12 } = req.query;
  const skipAmount = (page - 1) * +pageLimit;
  try {
    const result = await prisma.podcasts.findMany({
      skip: skipAmount,
      take: +pageLimit,
    });

    const podcastLength = await prisma.podcasts.count();

    const pages = Math.ceil(podcastLength / +pageLimit);
    const response = okResponse({ result, totalPage: pages });
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const getPodcastId = async (req, res, next) => {
  try {
    const { podcastId } = req.params;
    const result = await prisma.podcasts.findUnique({
      where: { id: Number(podcastId) },
    });
    const response = okResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const createPodcast = async (req, res, next) => {
  try {
    const result = await prisma.podcasts.create({
      data: { ...req.body },
    });
    const response = createSuccessResponse(result);
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

const updatePodcast = async (req, res, next) => {
  const { podcastId } = req.params;
  try {
    const result = await prisma.podcasts.update({
      where: {
        id: Number(podcastId),
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

const deletePodcast = async (req, res, next) => {
  const { podcastId } = req.params;
  try {
    await prisma.podcasts.delete({
      where: {
        id: Number(podcastId),
      },
    });

    const response = deleteSuccessResponse();
    return res.status(response.status.code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPodcast,
  getPodcastId,
  createPodcast,
  updatePodcast,
  deletePodcast,
};
