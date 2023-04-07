const validateBody = require('../utils/joi');

module.exports = (req, res, next) => {
  const { error } = validateBody(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};