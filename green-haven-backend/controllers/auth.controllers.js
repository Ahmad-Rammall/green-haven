const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = new User({
      email,
      password: hashedPassword,
      name,
    });

    await user.save();

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

  // check if password is correct
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return res.status(400).json({ message: "Invalid username/password" });

  const { password: hashedPassword, _id, ...userDetails } = user.toJSON();

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
};
