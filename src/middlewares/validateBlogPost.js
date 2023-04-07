const { validateBlogPostCreate } = require('../utils/joi');

module.exports = (req, res, next) => {
  const { error } = validateBlogPostCreate(req.body);
  if (error) return res.status(400).json({ message: error.message });

  next();
};
