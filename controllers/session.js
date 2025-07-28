
const AppError = require('../utils/AppError');

const createSession = (req, res) => {
  // TODO: Implement createSession
  throw new AppError('Not Implemented').setCode(AppError.CODES.NOT_IMPLEMENTED);
};

const getSessions = (req, res) => {
  // TODO: Implement getSessions
  throw new AppError('Not Implemented').setCode(AppError.CODES.NOT_IMPLEMENTED);
};

const getSession = (req, res) => {
  // TODO: Implement getSession
  throw new AppError('Not Implemented').setCode(AppError.CODES.NOT_IMPLEMENTED);
};

module.exports = {
  createSession,
  getSessions,
  getSession,
};
