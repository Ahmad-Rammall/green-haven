const router = require("express").Router();
const { addProductToCart, removeProductFromCart, getUserCart, resetCart } = require("../controllers/cart.controllers");

router.post("/", addProductToCart);
router.delete("/", removeProductFromCart);
router.get("/", getUserCart);
router.put("/", resetCart)

module.exports = router