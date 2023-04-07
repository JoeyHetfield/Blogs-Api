const { blogPostService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const post = await blogPostService.createPost(title, content, id, categoryIds);
  
  res.status(201).json(post);
};

module.exports = {
  createPost,
};