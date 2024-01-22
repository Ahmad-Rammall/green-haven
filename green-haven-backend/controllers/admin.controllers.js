const User = require("../models/user.model");
const Order = require("../models/order.model");
const Post = require("../models/post.model");
const Product = require("../models/product.model");
const bcrypt = require("bcrypt");

const getCounts = async (req, res) => {
  try {
    const user_result = await User.aggregate([
      {
        $group: {
          _id: "$role",
          count: { $sum: 1 },
        },
      },
    ]);

    if (!user_result) {
      return res.status(400).json("error");
    }

    const orders_result = await Order.aggregate([
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
        },
      },
    ]);

    if (!orders_result) {
      return res.status(400).json("error");
    }

    return res.status(200).json({ user_result, orders_result });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) return res.status(400).json({ message: "error" });
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate({
      path: "user",
      select: ["name", "profile_picture"],
    });
    if (!posts) return res.status(400).json({ message: "error" });
    res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const isDeleted = await Post.findOneAndDelete({ _id: postId });

    if (!isDeleted) {
      return res.status(400).json({ message: "Error Deleting Post" });
    }
    console.log(isDeleted);
    return res.status(200).json({ message: "Post Deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const isDeleted = await Product.findOneAndDelete({ _id: productId });

    if (!isDeleted) {
      return res.status(400).json({ message: "Error Deleting Product" });
    }
    console.log(isDeleted);
    return res.status(200).json({ message: "Product Deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addUser = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password, name, bio, phone_number, location, role, status } =
      req.body;

    if (
      email === "" ||
      password === "" ||
      name === "" ||
      role === "" ||
      status === "" ||
      email === undefined ||
      password === undefined ||
      name === undefined ||
      role === undefined ||
      status === undefined
    ) {
      return res.status(400).json({ message: "All Details required" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      password: hashedPassword,
      name,
      role,
      status,
      bio,
      phone_number,
      location,
    });

    await user.save({ new: true, runValidators: true });
    if (!user) return res.status(400).json({ message: "Error Adding User" });

    return res.status(200).json({ message: "User Added", user });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    console.log(req.body);
    const {
      email,
      password,
      name,
      bio,
      phone_number,
      location,
      role,
      status,
      _id,
    } = req.body;
    let hashedPassword = "";

    if (
      email === "" ||
      password === "" ||
      name === "" ||
      role === "" ||
      status === "" ||
      email === undefined ||
      password === undefined ||
      name === undefined ||
      role === undefined ||
      status === undefined
    ) {
      return res.status(400).json({ message: "All Details required" });
    }

    const user = await User.findOne({ _id });
    if (user.password === password) {
      hashedPassword = password;
    } else {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    user.email = email;
    user.password = hashedPassword;
    user.status = status;
    user.role = role;
    user.bio = bio;
    user.name = name;
    user.phone_number = phone_number;
    user.location = location;

    await user.save({ new: true, runValidators: true });
    if (!user) return res.status(400).json({ message: "Error Updating User" });

    return res.status(200).json({ message: "User Added", user });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCounts,
  getAllUsers,
  getAllPosts,
  deletePost,
  deleteProduct,
  addUser,
  updateUser
};
