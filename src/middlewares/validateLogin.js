const { validateLoginEnter } = require('../utils/joi');

module.exports = (req, res, next) => {
  const { error } = validateLoginEnter(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};