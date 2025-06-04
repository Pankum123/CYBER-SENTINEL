import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  label: { type: String, required: true, unique: true },
  type:  { type: String, enum: ['location', 'person', 'organization'], required: true }
});
const Tag = mongoose.model("Tag", TagSchema);

export default Tag;