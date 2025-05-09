import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Бүтээгдэхүүний нэр оруулна уу"],
    trim: true,
    maxlength: [100, "Бүтээгдэхүүний нэр 100 тэмдэгтээс хэтрэхгүй"],
  },
  description: {
    type: String,
    required: [true, "Бүтээгдэхүүний тайлбар оруулна уу"],
  },
  price: {
    type: Number,
    required: [true, "Үнэ оруулна уу"],
  },
  discountPrice: {
    type: Number,
  },
  imageUrl: {
    type: String,
    required: [true, "Зураг оруулна уу"],
  },
  category: {
    type: String,
    required: [true, "Ангилал сонгоно уу"],
  },
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
    required: [true, "Дэлгүүр сонгоно уу"],
  },
  stock: {
    type: Number,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
