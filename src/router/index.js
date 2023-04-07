const router = require('express').Router();
const routerLogin = require('./login');
const routerUser = require('./user');
const routerCategory = require('./category');

router.use('/login', routerLogin);
router.use('/user', routerUser);
router.use('/categories', routerCategory);

module.exports = router;