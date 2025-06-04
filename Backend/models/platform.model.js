import mongoose from "mongoose";

const PlatformSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

const Platform = mongoose.model("Platform",PlatformSchema);

export default Platform;