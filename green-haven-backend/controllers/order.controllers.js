const User = require("../models/user.model");
const Product = require("../models/product.model");
const Order = require("../models/order.model");

const getSellerOrders = async (req, res) => {
  const sellerId = req.user._id;
  try {
    const orders = await Order.find({ seller: sellerId })
      .populate({ path: "client", select: "name phone_number" })
      .populate({ path: "product", select: "name" });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

const createOrder = async (req, res) => {
  const { productId, quantity, location } = req.body;

  try {
    // get product from database
    const product = await Product.findOne({ _id: productId }).populate("user");

    if (!product) {
      return res.status(404).json({ message: "Product Doesn't Exist" });
    }

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

const deleteOrder = async (req, res) => {
  const orderId = req.body.orderId;

  try {
    const deletedOrder = await Order.findOneAndDelete({
      _id: orderId,
      seller: req.user._id,
    });

    if (!deletedOrder) {
      return res.status(400).json({ message: "Order Not Found" });
    }

    res.status(200).json({ message: "Order Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

module.exports = {
  createOrder,
  deleteOrder,
  getSellerOrders,
};
