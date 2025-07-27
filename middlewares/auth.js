exports.authenticate = async(req, res, next) => {
  console.log('authenticate using auth header');
  // TODO
  next();
}

exports.restrictAnons = async(req, res, next) => {
  console.log('restrict entry for anonymous users');
  // TODO
  next();
}
