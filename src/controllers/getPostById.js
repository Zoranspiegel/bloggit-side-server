const { Post } = require('../models/Post.js');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const postById = await Post.findOne({ _id: id });
    res.status(201).json(postById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
