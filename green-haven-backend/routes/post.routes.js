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

router.get("/", getFollowingPosts);
router.post("/", addPost);
router.put("/", updatePost);
router.delete("/", deletePost);
router.get("/:userId", getUserPosts);
router.put("/like", likePost);
router.post("/comment", addComment);
router.put("/comment", updateComment);
router.delete("/comment", deleteComment);
router.put("/comment/like", likeComment);

module.exports = router;
