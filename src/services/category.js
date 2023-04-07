const { Category } = require('../models');
const ErrorFile = require('../utils/ErrorFile');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  if (!category) throw new ErrorFile('Invalid fields', 400);
  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  if (!categories) throw new ErrorFile('Categories not found', 404);
  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};
