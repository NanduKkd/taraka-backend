const router = require('express').Router();
const userController = require('../controllers/user');
const accessControl = require('../middlewares/accessControl');
const validate = require('../middlewares/validator');
const { loginSchema } = require('../validators/user');

router.post('/login', validate(loginSchema), userController.login);

router.post('/logout', userController.logout);
router.get('/', userController.getProfile);

module.exports = router;
