// Define schema for User collection
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true }
});

// Create User model
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
