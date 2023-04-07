const { validateUpdatePost } = require('../utils/joi');

const validateUpdate = (req, res, next) => {
  const { error } = validateUpdatePost(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = validateUpdate;