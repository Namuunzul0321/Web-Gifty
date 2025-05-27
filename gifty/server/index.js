const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Routes
const storeRoutes = require("./routes/storeRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB холбогдлоо"))
  .catch((err) => console.error("❌ MongoDB холболтын алдаа:", err));


// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend ажиллаж байна");
});

// API routes
app.use("/api/users", userRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Сервер порт ${PORT} дээр ажиллаж байна`));
