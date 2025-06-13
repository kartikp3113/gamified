const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  content: String, // plain text or markdown (or embed links)
  videoUrl: String, // optional YouTube or other link
  xpReward: { type: Number, default: 100 },
  order: Number, // for ordering lessons in a course
}, { timestamps: true });

module.exports = mongoose.model('Lesson', lessonSchema);
