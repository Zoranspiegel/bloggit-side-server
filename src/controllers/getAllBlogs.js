const { Blog } = require('../models/Blog.js');

module.exports = async (req, res) => {
  try {
    const allBlogs = {};
    allBlogs.blogs = await Blog.find();
    res.status(200).json(allBlogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
