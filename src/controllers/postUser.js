const { User } = require('../models/User.js');

module.exports = async (req, res) => {
  try {
    const newUser = User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
