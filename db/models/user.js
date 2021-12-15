const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timeStamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
