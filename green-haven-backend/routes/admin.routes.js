const router = require("express").Router();
const { getCounts, getAllUsers, getAllProducts } = require("../controllers/admin.controllers");

router.get("/", getCounts);
router.get("/users", getAllUsers);
router.get("/products", getAllProducts);

module.exports = router;
