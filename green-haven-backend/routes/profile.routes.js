const express = require("express");
const {
  updateProfile,
  getUser,
  followUser,
  updatePassword
} = require("../controllers/profile.controllers");
const router = express.Router();

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/images/profile-pics"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname);
  },
});

// upload middleware
const upload = multer({ storage });

router.put("/", upload.single("file"), updateProfile);
router.get("/:id", getUser);
router.put("/followOrUnfollow", followUser);
router.put("/password", updatePassword)

module.exports = router;
