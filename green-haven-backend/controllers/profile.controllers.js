const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    const { password, createdAt, updatedAt, garden, cart, ...other } =
      user._doc;
    if (user) res.status(200).json(other);
    else res.status(404).json("No Account");
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateProfile = async (req, res) => {
  // User cannot change his email / role
  const { name, bio, phone_number, profile_picture, location } = req.body;
  let password = req.body.password;

  try {
    if (password) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
    }

    // Update User
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { name, password, bio, phone_number, profile_picture, location },
      { new: true, runValidators: true }
    );
    return res.status(200).json({ message: "User Updated" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Error" });
  }
};

const followUser = async (req,res) => {};

const unfollowUser = async (req,res) => {}

module.exports = {
  updateProfile,
  getUser,
  followUser,
  unfollowUser
};
