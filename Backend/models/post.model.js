import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  content:     { type: String, required: true },
  postLink:    { type: String },
  timestamp:   { type: Date, default: Date.now },

  user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  keyword:     { type: mongoose.Schema.Types.ObjectId, ref: 'Keyword', required: true },
  tags:        [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});

const Post = mongoose.model("Post",PostSchema);

export default Post;