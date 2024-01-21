const router = require("express").Router();

router.get("/", getCounts);

module.exports = router