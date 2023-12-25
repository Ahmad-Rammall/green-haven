const Seller = require("../models/seller.model");
const Product = require("../models/product.model");

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
    const seller = await Seller.findOne({ _id: sellerId });
    console.log(seller);
    if (!seller) {
      return res.status(404).send("Seller Not Found");
    }

    return res.status(200).json({ products: seller.products });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addProduct = async (req, res) => {};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

module.exports = {
  getAllSellerProducts,
  getOneProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
