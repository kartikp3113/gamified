const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');
require('dotenv').config();

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


const lessons = [
  {
    title: "Introduction to Programming",
    description: "Learn what programming is and why it matters.",
    content: "Programming is the process of creating a set of instructions...",
    videoUrl: "https://www.youtube.com/watch?v=zOjov-2OZ0E",
    xpReward: 100,
    order: 1
  },
  {
    title: "Variables and Data Types",
    description: "Understand variables in programming.",
    content: "A variable is a name given to a memory location...",
    xpReward: 150,
    order: 2
  }
];

async function seed() {
  await Lesson.deleteMany({});
  await Lesson.insertMany(lessons);
  console.log('Lessons seeded');
  process.exit();
}

seed();
