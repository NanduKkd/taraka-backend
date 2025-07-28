const AppError = require('../utils/AppError');

module.exports = (err, req, res, next) => {
  console.error('ERROR 💥', err);

  const statusCode = err.code ? AppError.STATUS_CODES[err.code] : (err.statusCode || 500);
  const status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

  if (process.env.NODE_ENV === 'production') {
    if (err.isOperational) {
      return res.status(statusCode).json({
        status: status,
        message: err.message,
        code: err.code,
        details: err.details,
      });
    } else {
      // Log the error for debugging
      console.error('ERROR', err);
      return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  } else {
    // Development environment: send all error details
    return res.status(statusCode).json({
      status: status,
      message: err.message,
      stack: err.stack,
      code: err.code,
      details: err.details,
    });
  }
};
