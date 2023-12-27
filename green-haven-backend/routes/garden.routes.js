const express = require("express");
const {
  getAllUserPlants,
  addPlant,
  removePlant,
} = require("../controllers/garden.controllers");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/images/garden-pics"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname);
  },
});

// upload middleware
const upload = multer({ storage });

router.get("/", getAllUserPlants);
router.post("/", upload.single("file"),addPlant);
router.delete("/", removePlant);

module.exports = router;
