const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// .env доторх утгуудыг ачааллах
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB холболт
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB холбогдлоо"))
  .catch((err) => console.error("MongoDB холболтын алдаа:", err));

// Жишээ маршрут
app.get("/", (req, res) => {
  res.send("Backend ажиллаж байна");
});

// Порт
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер порт ${PORT} дээр ажиллаж байна`));

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
