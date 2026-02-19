import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: { type: String, require: true },
  name: { type: String, require: true },
  username: { type: String, require: true },
  profilePic: { type: String },
  coverPic: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = model("User", UserSchema);
export default mongoose.models.User || User;
