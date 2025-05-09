import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

export default mongoose.models.Store || mongoose.model("Store", StoreSchema);
