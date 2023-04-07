const { validateToken } = require('../utils/auth');
const ErrorFile = require('../utils/ErrorFile');

const validateTokenMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) throw new ErrorFile('Token not found', 401);

  validateToken(token);

  next();
};

module.exports = validateTokenMiddleware;