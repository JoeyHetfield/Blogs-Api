const { validateToken } = require('../utils/auth');

const validateTokenMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  validateToken(token);

  next();
};

module.exports = validateTokenMiddleware;