const express = require("express");
const {
  getFollowingPosts,
  addPost,
  updatePost,
  deletePost,
  getUserPosts,
  likePost,
  addComment,
  updateComment,
  deleteComment,
  likeComment,
} = require("../controllers/post.controllers");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/images/posts-pics"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname);
  },
});

// upload middleware
const upload = multer({ storage });

router.get("/", getFollowingPosts);
router.post("/", upload.single('file'), addPost);
router.put("/", updatePost);
router.delete("/", deletePost);
router.get("/:userId", getUserPosts);
router.put("/like", likePost);
router.post("/comment", addComment);
router.put("/comment", updateComment);
router.delete("/comment", deleteComment);
router.put("/comment/like", likeComment);

module.exports = router;
