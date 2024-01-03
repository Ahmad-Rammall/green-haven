const express = require("express");
const { getAllSellerProducts, addProduct, updateProduct, deleteProduct, getOneProduct, getAllProducts} = require("../controllers/product.controllers");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const sellerMiddleware = require("../middlewares/seller.middleware")

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

router.get("/", getAllProducts);
router.get("/seller", getAllSellerProducts);
router.post("/", sellerMiddleware, upload.single("file"), addProduct);
router.put("/", sellerMiddleware, upload.single("file"), updateProduct);
router.delete("/:id", sellerMiddleware, deleteProduct);
router.get("/:id", getOneProduct);

module.exports = router;
