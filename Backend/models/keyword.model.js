import mongoose from "mongoose";

const KeywordSchema = new mongoose.Schema({
  word: { type: String, required: true, unique: true }
});

const Keyword = mongoose.model("Keyword",KeywordSchema);
export default Keyword;