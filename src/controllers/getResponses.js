const { Post } = require('../models/Post.js');

module.exports = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const foundPost = await Post.findById(postId);
    const foundComment = foundPost.comments.find(c => c._id == commentId);
    res.status(200).json(foundComment.responses);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
