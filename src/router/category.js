const router = require('express').Router();
const categoryController = require('../controllers/category');
const validateCategory = require('../middlewares/validateCategory');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, validateCategory, categoryController.createCategory);

module.exports = router;