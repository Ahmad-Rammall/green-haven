const User = require("../models/user.model");
const bcrypt = require("bcrypt");

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

module.exports = {
  updateProfile,
};
