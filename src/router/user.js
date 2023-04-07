const router = require('express').Router();
const userController = require('../controllers/user');
const validateUser = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateUser, userController.createUser);
router.get('/', validateToken, userController.getAllUsers);  
router.get('/:id', validateToken, userController.getOneUser);
router.delete('/me', validateToken, userController.deleteUser);

module.exports = router;