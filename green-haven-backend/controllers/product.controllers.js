const Product = require("../models/product.model");
const User = require("../models/user.model");

const getOneProduct = async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findOne({ _id: productId });
  if (product) {
    return res.status(200).json({ product });
  }
  return res.status(500).send("Product Not Found");
};

const getAllSellerProducts = async (req, res) => {
  try {
    const sellerId = req.body.sellerId;
    const seller = await User.findOne({ _id: sellerId });

    if (!seller) {
      return res.status(404).send("Seller Not Found");
    }

    // Get Seller's Products
    const products = await Product.find({ user: sellerId });

    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addProduct = async (req, res) => {
  if (req.user.role != "seller") {
    return res.status(403).send("Unauthorized");
  }
  const { name, description, image, price } = req.body;

  try {
    const product = new Product({
      user: req.user,
      name,
      description,
      image,
      price,
    });
    await product.save({ new: true, runValidators: true });

    return res.status(200).json({ message: "Product Added", product });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
  if (req.user.role != "seller") {
    return res.status(403).json({ message: "You are not a seller" });
  }
  const { productId, name, description, image, price } = req.body;

  if (!productId) {
    return res.status(400).json({ message: "productId required" });
  }

  try {
    const product = await Product.findOne({ _id: productId });

    // Seller can change only his own products
    if (String(product.user) !== String(req.user._id)) {
      return res.status(403).send("You can't change other's products");
    }

    // Find the product and update it
    const updated_product = await Product.findOneAndUpdate(
      { _id: productId },
      { name, description, image, price },
      { new: true, runValidators: true }
    );
    return res
      .status(200)
      .json({ message: "Product Updated", updated_product });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteProduct = async (req, res) => {
  if (req.user.role != "seller") {
    return res.status(403).json({ message: "You are not a seller" });
  }

  const productId = req.params.id;

  try {
    const product = await Product.findOne({ _id: productId });

    // Seller can delete only his own products
    if (String(product.user) !== String(req.user._id)) {
      return res.status(403).send("You can't delete other's products");
    }

    // Find the product and update it
    await Product.findOneAndDelete({ _id: productId });
    return res
      .status(200)
      .json({ message: "Product Deleted", product });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  getAllSellerProducts,
  getOneProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
