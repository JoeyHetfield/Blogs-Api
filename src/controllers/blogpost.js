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

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user;

  const post = await blogPostService.updatePost(id, title, content, userId);
  res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  await blogPostService.deletePost(id, userId);
  res.status(204).end();
};

const findByTerm = async (req, res) => {  
  const { q: term } = req.query;
  const posts = await blogPostService.findByTerm(term);
  res.status(200).json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deletePost,
  findByTerm,
};