const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoryService.createCategory(name);
  res.status(201).json(category);
};

module.exports = {
  createCategory,
};