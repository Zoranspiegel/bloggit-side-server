const { Post } = require('../models/Post.js');

module.exports = async (req, res) => {
  try {
    const newPost = Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
