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
  const { name, bio, phone_number, location } = req.body;
  const profile_picture = req.file?.filename;
  let password = req.body.password;

  try {
    if (password) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
    }

    // Update User
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { name, password, bio, phone_number, profile_picture, location },
      { new: true, runValidators: true }
    );
    return res.status(200).json({ message: "User Updated", updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal Error" });
  }
};

const followUser = async (req, res) => {
  const currentUser = req.user;
  const otherUserId = req.body.otherUserId;

  if (currentUser._id != otherUserId) {
    try {
      const userToFollow = await User.findById(otherUserId);
      if (userToFollow && currentUser) {
        // Test if currentUser is already following the otherUser
        const following = currentUser.following.find(
          (user) => user._id.toString() === String(otherUserId)
        );

        if (!following) {
          // Add userToFollow to the current User Following list.
          await currentUser.updateOne({
            $push: { following: userToFollow },
          });

          // Add current User to the userToFollow Followers list.
          await userToFollow.updateOne({ $push: { followers: currentUser } });
          res.status(200).json("Follow Successful");
        } else {
          unfollowUser(req, res);
        }
      } else {
        return res.status(403).json("Wrong Ids");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can't follow yourself !");
  }
};

const unfollowUser = async (req, res) => {
  const currentUser = req.user;
  const otherUserId = req.body.otherUserId;

  if (currentUser._id != otherUserId) {
    try {
      const userToUnfollow = await User.findById(otherUserId);
      if (userToUnfollow && currentUser) {
        // Get All Following List Without the other user
        currentUser.following = currentUser.following.filter(
          (user) => user._id.toString() !== String(otherUserId)
        );

        // Get All Followers List Without the current User
        userToUnfollow.followers = userToUnfollow.followers.filter(
          (user) => user._id.toString() !== String(currentUser._id)
        );

        await currentUser.save();
        await userToUnfollow.save();
        return res.status(200).json("Unfollow Successful");
      } else {
        return res.status(403).json("Wrong Ids");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can't Unfollow yourself !");
  }
};

module.exports = {
  updateProfile,
  getUser,
  followUser,
  unfollowUser,
};
