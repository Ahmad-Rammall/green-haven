const express = require("express");
const {
  updateProfile,
  getUser,
  followUser,
  unfollowUser,
} = require("../controllers/profile.controllers");
const router = express.Router();

router.put("/", updateProfile);
router.get("/:id", getUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);

module.exports = router;
