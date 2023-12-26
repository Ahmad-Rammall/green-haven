const User = require("../models/user.model");

const getUserCart = async (req, res) => {
  if (req.user.role !== "user") {
    return res.status(403).send("Unauthorized");
  }

  try {
    const user = await User.findOne({ _id: req.user._id });
    return res.status(200).json({ cart: user.cart });

  } catch (error) {
    return res.status(500).json(error);
  }
};

const addProductToCart = async (req, res) => {};

const removeProductFromCart = async (req, res) => {};

module.exports = {
  removeProductFromCart,
  getUserCart,
  addProductToCart,
};
