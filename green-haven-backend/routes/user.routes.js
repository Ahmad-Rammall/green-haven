const express = require("express");
const { } = require("../controllers/product.controllers");
const router = express.Router();

router.get("/", getAllUsers);

module.exports = router;
