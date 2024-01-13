const User = require("../models/user.model");

const getAllUserPlants = async (req, res) => {
  return res.status(200).json({ garden: req.user.garden });
};

const addPlant = async (req, res) => {
  // Validate the user role
  if (req.user.role !== "user") {
    return res.status(403).json("Unauthorized");
  }
  const { plant_name, plant_description } = req.body;
  const plant_picture = req.file ? req.file.filename: "noPlantImage.jpg";

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
    res.status(200).json({ message: "Garden Added" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const removePlant = async (req, res) => {
  const user = req.user;
  const plantId = req.body.plantId;

  try {
    // Find the index of the plant in the user's garden array
    const plantIndex = user.garden.findIndex((plant) => plant._id == plantId);

    if (plantIndex === -1) {
      return res.status(404).json({ error: "Plant not found in the garden" });
    }

    // Remove the plant from the user's garden array
    user.garden.splice(plantIndex, 1);
    await user.save();

    res.json({ message: "Plant deleted from the garden successfully", user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllUserPlants,
  addPlant,
  removePlant,
};
