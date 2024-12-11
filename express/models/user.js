import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female"],
  },
});

const userModel = mongoose.model("users", userSchema);
export default userModel;