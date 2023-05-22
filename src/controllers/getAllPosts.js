const { Post } = require('../models/Post.js');

module.exports = async (req, res) => {
  try {
    const allPosts = {};
    allPosts.posts = await Post.find({ status: 1 });
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
