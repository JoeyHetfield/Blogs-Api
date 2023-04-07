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

const getAllPosts = async () => { 
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, 
        as: 'categories', 
      through: { attributes: [
        'postId',
      ] } },
    ],
  });
  if (!posts) throw new ErrorFile('Posts not found', 404);
  return posts;
};

const getOnePost = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category,
        as: 'categories',
        through: { attributes: [
          'postId',
        ] } },
    ],
  });
  if (!post) throw new ErrorFile('Post does not exist', 404);
  return post;
};

const updatePost = async (id, title, content, userId) => {
  const isThePost = await BlogPost.findOne({ where: { id } });
  if (!isThePost) throw new ErrorFile('Post does not exist', 404);

  if (isThePost.id !== userId) throw new ErrorFile('Unauthorized user', 401);

  await BlogPost.update({ title, content, updated: new Date() }, { where: { id } });

  const updated = await getOnePost(id);

  return updated;
};

const deletePost = async (id, userId) => {
  const isThePost = await BlogPost.findOne({ where: { id } });
  if (!isThePost) throw new ErrorFile('Post does not exist', 404);

  if (isThePost.userId !== userId) throw new ErrorFile('Unauthorized user', 401);

  await BlogPost.destroy({ where: { id } });

  return { message: 'Post deleted' };
};

module.exports = {
  createPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deletePost,
};
