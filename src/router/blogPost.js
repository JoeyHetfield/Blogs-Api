const router = require('express').Router();
const blogPostController = require('../controllers/blogpost');
const validateBlogPost = require('../middlewares/validateBlogPost');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, validateBlogPost, blogPostController.createPost);
router.get('/', validateToken, blogPostController.getAllPosts);

module.exports = router;