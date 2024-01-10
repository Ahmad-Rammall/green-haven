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

const getAllProducts = async (req, res) => {
  const products = await Product.find({}).populate("user");
  return res.status(200).json({ products });
};

const getAllSellerProducts = async (req, res) => {
  try {
    const sellerId = req.user._id;

    // Get Seller's Products
    const products = await Product.find({ user: sellerId });

    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file ? req.file.filename : "noProductImage.jpg"

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
  const { productId, name, description, price } = req.body;
  const image = req.file?.filename ;

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
  getAllProducts,
  getAllSellerProducts,
  getOneProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
