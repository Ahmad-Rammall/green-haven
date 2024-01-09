const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 1,
  },
});

module.exports = mongoose.model("Order", orderSchema);

