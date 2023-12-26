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

    return res.status(200).json({ message: "Product Added", product })
  } catch (error) {
    return res.status(500).send(error);
  }
};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

module.exports = {
  getAllSellerProducts,
  getOneProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
