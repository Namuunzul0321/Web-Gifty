const express = require("express");
const router = express.Router();
const Store = require("../models/Store");

// Дэлгүүр нэмэх
router.post("/", async (req, res) => {
  try {
    const newStore = new Store(req.body);
    const savedStore = await newStore.save();
    res.status(201).json(savedStore);
  } catch (err) {
    res.status(500).json({ error: "Hadgalahad aldaa garlaa", details: err });
  }
});

// Бүх дэлгүүрүүдийг авах
router.get("/", async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (err) {
    res.status(500).json({ error: "Avahad aldaa garlaa", details: err });
  }
});

module.exports = router;
