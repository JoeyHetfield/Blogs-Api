const jwt = require('jsonwebtoken');
const { validateToken } = require('../utils/auth');
const ErrorFile = require('../utils/ErrorFile');

const validateTokenMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) throw new ErrorFile('Token not found', 401);

  validateToken(token);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Expired or invalid token' });
    req.user = decoded;
  });

  next();
};

module.exports = validateTokenMiddleware;