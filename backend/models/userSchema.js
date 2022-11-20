const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
});

const users = mongoose.model("users", userSchema);
module.exports = users;
