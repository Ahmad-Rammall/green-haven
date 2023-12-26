const express = require("express");
const { getFollowingPosts, addPost, updatePost, deletePost, getUserPosts} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/", getFollowingPosts);
router.post("/", addPost);
router.put("/", updatePost);
router.delete("/", deletePost);
router.get("/:userId", getUserPosts);
router.put("/:id/like", likePost);

module.exports = router;
