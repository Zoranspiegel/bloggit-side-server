const { Post } = require('../models/Post');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { commentId, userId } = req.body;
    const foundPost = await Post.findById(id);
    const foundComment = foundPost.comments.id(commentId);
    const likeIndex = foundComment.commentLikes.indexOf(userId);
    if (likeIndex < 0) {
      foundComment.commentLikes.push(userId);
      await foundPost.save();
      return res.status(201).json('Like Successfully Added');
    } else {
      foundComment.commentLikes.splice(likeIndex, likeIndex + 1);
      await foundPost.save();
      return res.status(201).json('Like Successfully Removed');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
