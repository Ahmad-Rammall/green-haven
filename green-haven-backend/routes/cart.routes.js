const router = require("express").Router();
const { addProductToCart, removeProductFromCart, getUserCart } = require("../controllers/cart.controllers");

router.post("/", addProductToCart);
router.delete("/", removeProductFromCart);
router.get("/", getUserCart);

module.exports = router