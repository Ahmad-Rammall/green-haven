const express = require("express");
const { getAllSellerProducts, addProduct, updateProduct, deleteProduct, getOneProduct} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/", getAllSellerProducts);
router.post("/", addProduct);
router.put("/", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getOneProduct);

module.exports = router;
