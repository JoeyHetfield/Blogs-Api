const router = require('express').Router();
const userController = require('../controllers/user');
const validateUser = require('../middlewares/validateUser');

router.post('/', validateUser, userController.createUser);

module.exports = router;