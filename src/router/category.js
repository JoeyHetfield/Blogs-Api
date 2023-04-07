const router = require('express').Router();
const categoryController = require('../controllers/category');
const validateCategory = require('../middlewares/validateCategory');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, validateCategory, categoryController.createCategory);
router.get('/', validateToken, categoryController.getAllCategories);

module.exports = router;