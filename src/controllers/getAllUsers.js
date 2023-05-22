const { User } = require('../models/User');

module.exports = async (req, res) => {
  try {
    const allUsers = {};
    allUsers.users = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
