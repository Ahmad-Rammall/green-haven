const express = require("express");
const { updateProfile } = require("../controllers/profile.controllers");
const router = express.Router();

router.put("/", updateProfile);

module.exports = router;
