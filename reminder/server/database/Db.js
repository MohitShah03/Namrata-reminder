// Db.js

const mongoose = require('mongoose');

// MongoDB connection setup
//'mongodb+srv://namratac:Namrata@cluster0.nte2w9a.mongodb.net/Reminder'
mongoose.connect('mongodb://127.0.0.1:27017/namrata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
