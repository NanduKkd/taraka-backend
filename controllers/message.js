
const AppError = require('../utils/AppError');

const getMessages = (req, res) => {
  // TODO: Implement getMessages
  throw new AppError('Not Implemented').setCode(AppError.CODES.NOT_IMPLEMENTED);
};

const createMessage = (req, res) => {
  // TODO: Implement createMessage
  throw new AppError('Not Implemented').setCode(AppError.CODES.NOT_IMPLEMENTED);
};

module.exports = {
  getMessages,
  createMessage,
};
