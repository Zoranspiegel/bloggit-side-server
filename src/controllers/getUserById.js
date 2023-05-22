const { User } = require('../models/User');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await User.findById(id);
    res.status(200).json(foundUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
