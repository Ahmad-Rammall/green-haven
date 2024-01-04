const User = require("../models/user.model");
const Product = require("../models/product.model");

const getUserCart = async (req, res) => {
  if (req.user.role !== "user") {
    return res.status(403).send("Unauthorized");
  }

  try {
    const user = await User.findOne({ _id: req.user._id }).populate("cart.product");
    return res.status(200).json({ cart: user.cart });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addProductToCart = async (req, res) => {
  if (req.user.role !== "user") {
    return res.status(403).send("Unauthorized");
  }

  try {
    const user = req.user;
    const { productId, quantity } = req.body;

    const product = await Product.findOne({ _id: productId });

    // Test if product exists in the user's cart
    const existingCartItem = user.cart.find((item) =>
      item.product.equals(productId)
    );
    if (existingCartItem) {
      return res
        .status(400)
        .json({ message: "Product already exists in the cart" });
    }

    // Push plant to the user's cart array
    user.cart.push({ product, quantity });

    await user.save();
    res.status(200).json({ message: "Product Added To Cart", cart: user.cart });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const removeProductFromCart = async (req, res) => {
  const user = req.user;
  const productId = req.body.productId;

  try {
    // Find the index of the product in the user's cart array
    const productIndex = user.cart.findIndex((product) => product._id == productId);

    if (productIndex === -1) {
      return res.status(404).json({ error: "Product not found in the cart" });
    }

    // Remove the plant from the user's garden array
    user.cart.splice(productIndex, 1);
    await user.save();

    res.json({ message: "Product deleted from the cart successfully", user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  removeProductFromCart,
  getUserCart,
  addProductToCart,
};
