const router = require('express').Router();
const routerLogin = require('./login');

router.use('/login', routerLogin);

module.exports = router;