const { Blog } = require('../models/Blog.js');

module.exports = async (req, res) => {
  try {
    const newBlog = Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
