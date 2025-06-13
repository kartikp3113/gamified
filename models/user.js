const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badges: [String],
  completedLessons: [String], // ✅ Add this line
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
