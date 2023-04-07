const ErrorFile = require('../utils/ErrorFile');

module.exports = (err, _req, res, _next) => {
  if (err instanceof ErrorFile) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: 'Internal server error' });
};