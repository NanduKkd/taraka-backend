module.exports = (err, req, res, next) => {
  console.error('ERROR 💥', err);
  res.helper.error(err);
};
