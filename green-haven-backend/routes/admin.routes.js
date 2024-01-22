const router = require("express").Router();
const { getCounts, getAllUsers, getAllPosts, deletePost, deleteProduct } = require("../controllers/admin.controllers");

router.get("/", getCounts);
router.get("/users", getAllUsers);
router.get("/posts", getAllPosts);
router.delete("/post/:postId", deletePost)
router.delete("/product/:productId", deleteProduct)


module.exports = router;
