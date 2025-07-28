
const User = require('../models/User');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = (req, res) => {
  // TODO: Implement logout functionality
  res.status(501).send({ message: 'Not Implemented' });
};

const getProfile = (req, res) => {
  // TODO: Implement getProfile functionality
  res.status(501).send({ message: 'Not Implemented' });
};

module.exports = {
  login,
  logout,
  getProfile,
};
