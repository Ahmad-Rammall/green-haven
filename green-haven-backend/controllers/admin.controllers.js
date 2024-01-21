const User = require("../models/user.model");
const Order = require("../models/order.model");

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

    return res.status(200).json({user_result, orders_result});
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllUsers = async (req,res) => {
  try{
    const users = await User.find({});
    if(!users) return res.status(400).json({message: "error"});
    res.status(200).json(users);
  }
  catch(error){
    return res.status(500).json(error);
  }
}

module.exports = {
  getCounts,
  getAllUsers
};
