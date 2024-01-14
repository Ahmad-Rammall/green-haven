const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password -cart -garden -createdAt -updatedAt");

    if (users) res.status(200).json(users);
    else res.status(404).json("No Account");
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
};
