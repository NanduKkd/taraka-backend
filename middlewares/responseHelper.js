const ResponseHelper = require('../utils/ResponseHelper');

module.exports = (req, res, next) => {
  res.helper = new ResponseHelper(res);
  next();
};
