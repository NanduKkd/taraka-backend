class ResponseHelper {
  constructor(res) {
    this.res = res;
  }

  success(data, message = 'Success', statusCode = 200) {
    return this.res.status(statusCode).json({
      status: 'success',
      message,
      data,
    });
  }

  error(message = 'Error', statusCode = 500, errorDetails = null) {
    return this.res.status(statusCode).json({
      status: 'error',
      message,
      error: errorDetails,
    });
  }
}

module.exports = ResponseHelper;
