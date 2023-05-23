const { Post } = require('../models/Post.js');
const { Response } = require('../models/Response.js');

module.exports = async (req, res) => {
  try {
    const { postId } = req.params;
    const { commentId } = req.body;
    const newResponse = new Response(req.body);
    const foundPost = await Post.findById(postId);
    foundPost.comments.find(c => c._id == commentId).responses.push(newResponse);
    foundPost.save();
    res.status(201).json(newResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
