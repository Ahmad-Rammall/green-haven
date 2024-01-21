const express = require("express");
const { register, login, adminLogin} = require("../controllers/auth.controllers");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/adminLogin", adminLogin)

module.exports = router;
