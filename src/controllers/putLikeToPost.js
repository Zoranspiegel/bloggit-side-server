const { Post } = require('../models/Post.js');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    console.log(userId);
    const likedPost = await Post.updateOne({ _id: id }, { $addToSet: { postLikes: userId } });
    if (likedPost.modifiedCount === 0) {
      await Post.updateOne({ _id: id }, { $pull: { postLikes: userId } });
      return res.status(201).json({ message: 'Like successfully removed' });
    }
    res.status(201).json({ message: 'Like successfully added' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
