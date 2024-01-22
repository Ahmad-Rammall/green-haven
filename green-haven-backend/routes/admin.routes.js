const router = require("express").Router();
const { getCounts, getAllUsers, getAllPosts, deletePost } = require("../controllers/admin.controllers");

router.get("/", getCounts);
router.get("/users", getAllUsers);
router.get("/posts", getAllPosts);
router.delete("/post/:postId", deletePost)

module.exports = router;
