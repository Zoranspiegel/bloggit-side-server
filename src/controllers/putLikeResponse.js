const { Post } = require('../models/Post.js');

module.exports = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const { userId, responseId } = req.body;
    console.log(responseId);
    const foundPost = await Post.findById(postId);
    const foundComment = foundPost.comments.id(commentId);
    const foundResponse = foundComment.responses.id(responseId);
    const resIndex = foundResponse.responseLikes.indexOf(userId);
    if (resIndex < 0) {
      foundResponse.responseLikes.push(userId);
      await foundPost.save();
      res.status(200).json('Like Successfully Added');
    } else {
      foundResponse.responseLikes.splice(resIndex, resIndex + 1);
      await foundPost.save();
      res.status(200).json('Like Successfully Removed');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
