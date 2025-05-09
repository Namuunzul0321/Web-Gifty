import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Дэлгүүрийн нэр оруулна уу"],
    trim: true,
    maxlength: [50, "Дэлгүүрийн нэр 50 тэмдэгтээс хэтрэхгүй"],
  },
  description: {
    type: String,
    required: [true, "Дэлгүүрийн тайлбар оруулна уу"],
    maxlength: [500, "Тайлбар 500 тэмдэгтээс хэтрэхгүй"],
  },
  location: {
    type: String,
    required: [true, "Дэлгүүрийн байршил оруулна уу"],
  },
  logoUrl: {
    type: String,
  },
  contactPhone: {
    type: String,
  },
  contactEmail: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Store || mongoose.model("Store", StoreSchema);
