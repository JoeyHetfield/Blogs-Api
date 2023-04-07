const router = require('express').Router();
const routerLogin = require('./login');
const routerUser = require('./user');

router.use('/login', routerLogin);
router.use('/user', routerUser);

module.exports = router;