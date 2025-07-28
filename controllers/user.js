
const AppError = require('../utils/AppError');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { setup } = require('../config/constants');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError('Invalid credentials').setCode(AppError.CODES.AUTHENTICATION_ERROR);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError('Invalid credentials').setCode(AppError.CODES.AUTHENTICATION_ERROR);
  }

  const token = jwt.sign({ id: user._id }, setup.JWT_SECRET, { expiresIn: setup.JWT_EXPIRES_IN });

  res.helper.success({ token }, 'Login successful');
};

const logout = (req, res) => {
  // TODO: Implement logout functionality
  throw new AppError('Not Implemented').setCode(AppError.CODES.NOT_IMPLEMENTED);
};

const getProfile = (req, res) => {
  // TODO: Implement getProfile functionality
  throw new AppError('Not Implemented').setCode(AppError.CODES.NOT_IMPLEMENTED);
};

module.exports = {
  login,
  logout,
  getProfile,
};
