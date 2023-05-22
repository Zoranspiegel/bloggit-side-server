require('dotenv').config();
const server = require('./src/app.js');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_DB)
  .then(() => {
    console.log('🍃Connected to MongoDB');
    server.listen(PORT, () => {
      console.log(`🧞Listening on port ${PORT}...`);
    });
  });
