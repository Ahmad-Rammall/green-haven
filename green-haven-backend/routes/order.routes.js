const router = require("express").Router();
const { createOrder, deleteOrder, getSellerOrders } = require("../controllers/order.controllers");
const sellerMiddleware = require("../middlewares/seller.middleware")

router.post("/", createOrder);
router.get("/", sellerMiddleware, getSellerOrders);
router.delete("/", sellerMiddleware, deleteOrder);

module.exports = router
