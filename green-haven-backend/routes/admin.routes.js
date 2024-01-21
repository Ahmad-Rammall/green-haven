const router = require("express").Router();
const { getCounts } = require("../controllers/admin.controllers");

router.get("/", getCounts);

module.exports = router;
