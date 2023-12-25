const express = require("express");
const { getAllUserPlants, addPlant, removePlant} = require("../controllers/garden.controllers");
const router = express.Router();

router.get("/", getAllUserPlants);
router.post("/", addPlant);
router.delete("/", removePlant);

module.exports = router;
