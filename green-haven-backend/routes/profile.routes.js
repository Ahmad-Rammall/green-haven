const express = require("express");
const {
  updateProfile,
  getUser,
  followUser,
} = require("../controllers/profile.controllers");
const router = express.Router();

router.put("/", updateProfile);
router.get("/:id", getUser);
router.put("/followOrUnfollow", followUser);

module.exports = router;
