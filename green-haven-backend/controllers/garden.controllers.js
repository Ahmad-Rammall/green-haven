const User = require("../models/user.model");

const getAllUserPlants = async (req, res) => {
  return res.status(200).json({ garden: req.user });
};

const addPlant = async (req, res) => {
  // Validate the user role
  if (req.user.role !== "user") {
    return res.status(403).json("Unauthorized");
  }

  const { plant_name, plant_description, plant_picture } = req.body;
  // All fields should exist
  if (
    !plant_name ||
    !plant_description ||
    !plant_picture ||
    plant_name === "" ||
    plant_description === "" ||
    plant_picture === ""
  )
    return res
      .status(404)
      .send("Plant name, description and picture are required.");

  try {
    // Push plant to the user's garden array
    const user = req.user;
    user.garden.push({ plant_name, plant_description, plant_picture });

    await user.save();
    res.status(200).json({ message: "Garden Updated" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllUserPlants,
  addPlant,
  removePlant,
};
