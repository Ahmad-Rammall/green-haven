const router = require("express").Router();
const {
  getCounts,
  getAllUsers,
  getAllPosts,
  deletePost,
  deleteProduct,
  addUser,
  updateUser
} = require("../controllers/admin.controllers");

router.get("/", getCounts);

router.get("/users", getAllUsers);
router.post("/users", addUser);
router.put("/users", updateUser);

router.get("/posts", getAllPosts);
router.delete("/post/:postId", deletePost);
router.delete("/product/:productId", deleteProduct);

module.exports = router;
