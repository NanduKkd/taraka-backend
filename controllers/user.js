
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { setup } = require('../config/constants');

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

    const token = jwt.sign({ id: user._id }, setup.JWT_SECRET, { expiresIn: setup.JWT_EXPIRES_IN });

    res.status(200).json({ message: 'Login successful', token });
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
