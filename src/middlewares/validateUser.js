const { validateUserCreate } = require('../utils/joi');

const validateUser = (req, res, next) => {
  const { error } = validateUserCreate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

module.exports = validateUser;