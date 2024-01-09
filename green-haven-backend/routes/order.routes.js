const router = require("express").Router();
const { createOrder, deleteOrder } = require("../controllers/order.controllers");

router.post("/", createOrder);
router.delete("/", deleteOrder);

module.exports = router
