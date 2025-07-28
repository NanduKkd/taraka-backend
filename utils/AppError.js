class AppError extends Error {
  constructor(message) {
    super(message);

    this.isOperational = true;
    this.code = null;
    this.cause = null;
    this.details = null;

    Error.captureStackTrace(this, this.constructor);
  }

  setCode(code) {
    this.code = code;
    return this;
  }

  setCause(cause) {
    this.cause = cause;
    return this;
  }

  setDetails(details) {
    this.details = details;
    return this;
  }

  static get CODES() {
    return {
      VALIDATION_ERROR: 'VALIDATION_ERROR',
      AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
      AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
      NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
      INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
      NOT_IMPLEMENTED: 'NOT_IMPLEMENTED',
    };
  }

  static get STATUS_CODES() {
    return {
      VALIDATION_ERROR: 400,
      AUTHENTICATION_ERROR: 401,
      AUTHORIZATION_ERROR: 403,
      NOT_FOUND_ERROR: 404,
      INTERNAL_SERVER_ERROR: 500,
      NOT_IMPLEMENTED: 501,
    };
  }
}

module.exports = AppError;
