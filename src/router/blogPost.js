const router = require('express').Router();
const blogPostController = require('../controllers/blogpost');
const validateBlogPost = require('../middlewares/validateBlogPost');
const validateToken = require('../middlewares/validateToken');
const validateUpdate = require('../middlewares/validateUpdate');

router.post('/', validateToken, validateBlogPost, blogPostController.createPost);
router.get('/', validateToken, blogPostController.getAllPosts);
router.get('/:id', validateToken, blogPostController.getOnePost);
router.put('/:id', validateToken, validateUpdate, blogPostController.updatePost);
router.delete('/:id', validateToken, blogPostController.deletePost);

module.exports = router;