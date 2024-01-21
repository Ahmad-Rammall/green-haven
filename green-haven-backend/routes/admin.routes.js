const router = require("express").Router();
const { getCounts, getAllUsers } = require("../controllers/admin.controllers");

router.get("/", getCounts);
router.get("/users", getAllUsers);

module.exports = router;
