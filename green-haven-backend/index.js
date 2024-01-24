const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

// Connect to mongo db function
const { connectToMongoDB } = require("./configs/mongoDb.configs");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("common"));

// Define public folder as static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Auth Middleware
const authMiddleware = require("./middlewares/auth.middleware");

// Admin Middleware
const adminMiddleware = require("./middlewares/admin.middleware");

// Admin Routes
const adminRoutes = require("./routes/admin.routes");
app.use("/admin", authMiddleware, adminMiddleware, adminRoutes);

// Auth Routes
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// Garden Routes
const gardenRoutes = require("./routes/garden.routes");
app.use("/garden", authMiddleware, gardenRoutes);

// Product Routes
const productRoutes = require("./routes/product.routes");
app.use("/product", authMiddleware, productRoutes);

// Cart Routes
const cartRoutes = require("./routes/cart.routes");
app.use("/cart", authMiddleware, cartRoutes);

// Post Routes
const postRoutes = require("./routes/post.routes");
app.use("/post", authMiddleware, postRoutes);

// Profile Routes
const profileRoutes = require("./routes/profile.routes");
app.use("/profile", authMiddleware, profileRoutes);

// Order Routes
const orderRoutes = require("./routes/order.routes");
app.use("/order", authMiddleware, orderRoutes);

// User Routes
const userRoutes = require("./routes/user.routes");
app.use("/users", authMiddleware, userRoutes);

// User Routes
const chatRoutes = require("./routes/chat.routes");
app.use("/chat", authMiddleware, chatRoutes);

app.listen(8000, () => {
  console.log("Server listining on PORT: ", 8000);
  connectToMongoDB();
});
