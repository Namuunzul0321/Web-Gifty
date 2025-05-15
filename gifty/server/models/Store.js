import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    logoUrl: { type: String },
    contactPhone: { type: String },
    contactEmail: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Store || mongoose.model("Store", storeSchema);
