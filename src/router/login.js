const router = require('express').Router();
const loginController = require('../controllers/login');
const validateLogin = require('../middlewares/validateLogin');

router.post('/', validateLogin, loginController.findOne);

module.exports = router;