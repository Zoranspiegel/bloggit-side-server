const { Post } = require('../models/Post');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const foundPost = await Post.findById(id);
    res.status(200).json(foundPost.comments);
  } catch (error) {
    res.status(400).json();
  }
};
