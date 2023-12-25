const express = require("express");
const app = express();
require("dotenv").config();

const { connectToMongoDB } = require("./configs/mongoDb.configs")

app.use(express.json());

app.listen(8000, () => {
  console.log("Server listining on PORT: ", 8000);
  connectToMongoDB();
});
