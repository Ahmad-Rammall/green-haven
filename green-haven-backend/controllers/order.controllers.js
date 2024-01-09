const User = require("../models/user.model");
const Product = require("../models/product.model");
const Order = require("../models/order.model");

const getSellerOrders = async (req, res) => {};

const createOrder = async (req, res) => {
  const { productId, quantity, location } = req.body;

  try {
    // get product from database
    const product = await Product.findOne({ _id: productId }).populate("user");

    if (!product) {
      res.status(404).json({ message: "Product Doesn't Exist" });
    }
    console.log(product)

    const totalAmount = product.price * quantity;

    // create new order
    const order = new Order({
      client: req.user,
      seller: product.user._id,
      product,
      location,
      totalAmount,
      quantity,
    });

    // save order
    await order.save({ new: true, runValidators: true });

    res.status(200).json({ message: "Order Created", order });
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

const deleteOrder = async (req, res) => {};

module.exports = {
  createOrder,
  deleteOrder,
  getSellerOrders,
};
