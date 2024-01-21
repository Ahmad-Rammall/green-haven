const router = require("express").Router();
const { getCounts, getAllUsers, getAllPosts } = require("../controllers/admin.controllers");

router.get("/", getCounts);
router.get("/users", getAllUsers);
router.get("/posts", getAllPosts);

module.exports = router;
