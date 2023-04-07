const { Category } = require('../models');
const ErrorFile = require('../utils/ErrorFile');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  if (!category) throw new ErrorFile('Invalid fields', 400);
  return category;
};

module.exports = {
  createCategory,
};
