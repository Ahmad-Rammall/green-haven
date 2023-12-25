const express = require("express");
const { getAllPlants, addPlant, removePlant} = require("../controllers/garden.controllers");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
