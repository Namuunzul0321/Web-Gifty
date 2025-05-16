// server/routes/productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // Модель зөв замаас авна

// Бүтээгдэхүүн нэмэх
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Бүх бүтээгдэхүүн авах
router.get("/", async (req, res) => {
  try {
    // store-г populate хийх нь дэлгүүрийн мэдээллийг хамт авахад тусална
    const products = await Product.find().populate("store", "name");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Дэлгүүрийн ID-аар бүтээгдэхүүн авах
router.get("/store/:storeId", async (req, res) => {
  try {
    const { storeId } = req.params;
    const products = await Product.find({ storeId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
