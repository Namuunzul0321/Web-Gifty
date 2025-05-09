import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  store: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
