const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String }, // зургийн URL
  description: { type: String },
});

module.exports = mongoose.model("Store", storeSchema);
