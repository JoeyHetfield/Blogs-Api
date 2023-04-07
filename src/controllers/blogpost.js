const { blogPostService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const post = await blogPostService.createPost(title, content, id, categoryIds);
  
  res.status(201).json(post);
};

const getAllPosts = async (req, res) => {
  const posts = await blogPostService.getAllPosts();
  res.status(200).json(posts);
};

const getOnePost = async (req, res) => {
  const { id } = req.params;
  const post = await blogPostService.getOnePost(id);
  res.status(200).json(post);
};

module.exports = {
  createPost,
  getAllPosts,
  getOnePost,
};