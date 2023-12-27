const express = require("express");
const { getAllSellerProducts, addProduct, updateProduct, deleteProduct, getOneProduct} = require("../controllers/product.controllers");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/images/products-pics"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname);
  },
});

// upload middleware
const upload = multer({ storage });

router.get("/", getAllSellerProducts);
router.post("/", upload.single("file"), addProduct);
router.put("/", upload.single("file"), updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getOneProduct);

module.exports = router;
