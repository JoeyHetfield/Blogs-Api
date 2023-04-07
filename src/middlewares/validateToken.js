const { validateToken } = require('../utils/auth');

const validateTokenMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
  
    if (!token) return res.status(401).json({ message: 'Token not found' });
  
    const validatedToken = validateToken(token);

    req.user = validatedToken;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateTokenMiddleware;