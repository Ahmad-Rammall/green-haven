const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    bio: {
      type: String,
      default: "",
    },
    phone_number: {
      type: String,
      default: "",
    },
    profile_picture: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: "user",
      required: true,
    },
    garden: [
      {
        plant_name: { type: String, required: true },
        plant_description: { type: String, required: true },
        plant_picture: { type: String, required: true },
      },
    ],
    cart: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
      },
    ],

    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
