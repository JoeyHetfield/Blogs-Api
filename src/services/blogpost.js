const { BlogPost, Category, User, PostCategory } = require('../models');
 const ErrorFile = require('../utils/ErrorFile');

const createPost = async (title, content, userId, categoryIds) => {
 const isCategory = categoryIds.map((id) => Category.findOne({ where: { id } }));
 const awaitedCategories = await Promise.all(isCategory);
      
  if (awaitedCategories.includes(null)) {
    throw new ErrorFile('one or more "categoryIds" not found', 400);
  }

  const isUser = await User.findOne({ where: { id: userId } });
  if (!isUser) throw new ErrorFile('User does not exist', 404);
  
  const post = await BlogPost
    .create({ title, content, userId, published: new Date(), updated: new Date() });
  const postCategory = categoryIds
    .map((id) => PostCategory.create({ postId: post.id, categoryId: id }));
  await Promise.all(postCategory);
  
  return post;
};

module.exports = {
  createPost,
};
