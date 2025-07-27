const router = require('express').Router();
const userController = require('../controllers/user');
const validate = require('../middlewares/validator');
const { loginSchema } = require('../validators/user');
const { restrictAnons } = require('../middlewares/auth');

router.post('/login', validate(loginSchema), userController.login);

router.post('/logout', restrictAnons, userController.logout);
router.get('/', restrictAnons, userController.getProfile);

module.exports = router;
