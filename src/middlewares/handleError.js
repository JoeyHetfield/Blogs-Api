const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');
const ErrorFile = require('../utils/ErrorFile');

module.exports = (err, _req, res, _next) => {
  if (err instanceof ErrorFile) {
    return res.status(err.status).json({ message: err.message });
  }
  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  if (err instanceof TokenExpiredError) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  console.log(err);
  return res.status(500).json({ message: 'Internal server error' });
};