const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat");
const topUsedPasswords = require("../topUsedPasswords");

const { STREAM_API_KEY, STREAM_API_SECRET } = process.env;

const client = StreamChat.StreamChat.getInstance(
  STREAM_API_KEY,
  STREAM_API_SECRET
);

const register = async (req, res) => {
  const { email, password, name, role } = req.body;
  if (!email || !password || !name || !role) {
    return res.status(400).json({ message: "all fields are required" });
  }

  if (role != "user" && role != "seller") {
    return res.status(403).json(`Can't register as ${role}`);
  }

  if (topUsedPasswords.includes(password.toLowerCase())) {
    return res
      .status(400)
      .json({ message: "Very Common Password. Please Change It!" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = new User({
      email,
      password: hashedPassword,
      name,
      role,
    });

    await user.save({
      new: true,
      runValidators: true,
    });

    res.status(200).json({ user });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // check if user is available in DB
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ message: "Invalid username/password" });

  if (user.status === "banned") {
    return res.status(403).json({ message: "Banned Account" });
  }

  // check if password is correct
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return res.status(400).json({ message: "Invalid username/password" });

  const { password: hashedPassword, ...userDetails } = user.toJSON();

  // generate JWT token
  const token = jwt.sign(
    {
      ...userDetails,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  // generate StreamChat token
  const streamToken = client.createToken(user._id.toString());

  res.status(200).json({
    user: userDetails,
    token,
    streamToken,
  });
};

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  // check if user is available in DB
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ message: "Invalid username/password" });

  if (user.role !== "admin") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  // check if password is correct
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return res.status(400).json({ message: "Invalid username/password" });

  const { password: hashedPassword, ...userDetails } = user.toJSON();

  // generate JWT token
  const token = jwt.sign(
    {
      ...userDetails,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    user: userDetails,
    token,
  });
};

module.exports = {
  register,
  login,
  adminLogin,
};
