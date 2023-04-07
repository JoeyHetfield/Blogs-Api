const router = require('express').Router();
const routerLogin = require('./login');
const routerUser = require('./user');
const routerCategory = require('./category');
const routerBlogPost = require('./blogPost');

router.use('/login', routerLogin);
router.use('/user', routerUser);
router.use('/categories', routerCategory);
router.use('/post', routerBlogPost);

module.exports = router;