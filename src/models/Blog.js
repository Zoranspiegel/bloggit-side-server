const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: String,
    required: true
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = {
  Blog
};
