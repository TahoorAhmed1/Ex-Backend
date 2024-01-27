const { Router } = require("express");
const {
  getPodcast,
  createPodcast,
  updatePodcast,
  deletePodcast,
  getPodcastId,
} = require("@/controllers/podcasts/podcasts.controller");

const restrictToAdmins = require("../../middleware/restrictToAdmins");
const validateRequest = require("@/middleware/validateRequestJoi.middleware");
const {
  createPodcastSchema,
  updatePodcastSchema,
  deletePodcastSchema,
} = require("@/validation/podcasts");

const router = Router();

router.get("/", getPodcast);
router.get("/:podcastId", getPodcastId);

router.post(
  "/",
  restrictToAdmins,
  validateRequest(createPodcastSchema),
  createPodcast
);
router.patch(
  "/:podcastId",
  restrictToAdmins,
  validateRequest(updatePodcastSchema),
  updatePodcast
);
router.delete(
  "/:podcastId",
  restrictToAdmins,
  validateRequest(deletePodcastSchema),
  deletePodcast
);

module.exports = router;
