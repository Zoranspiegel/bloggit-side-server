const { Post } = require('../models/Post');
const { Comment } = require('../models/Comment');

module.exports = async (req, res) => {
  try {
    const { postId } = req.body;
    const newComment = await Comment(req.body);
    const commentedPost = await Post.findById(postId);
    commentedPost.comments.push(newComment);
    await commentedPost.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
