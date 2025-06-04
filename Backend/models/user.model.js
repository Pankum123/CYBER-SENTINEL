import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username:     { type: String, required: true, unique: true },
  email:        { type: String, required: true, unique: true },
  name:         { type: String },
  profileLink:  { type: String },
  location:     { type: String },
  platform:     { type: mongoose.Schema.Types.ObjectId, ref: 'Platform', required: true },
  followers:    { type: Number, default: 0 }
}, { timestamps: true });

const User = mongoose.model("User",UserSchema);

export default User;