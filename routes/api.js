const router = require('express').Router();
const userRoutes = require('./user');
const projectRoutes = require('./project');
const messageRoutes = require('./message');
const { authenticate, restrictAnons } = require('../middlewares/auth');
const responseHelper = require('../middlewares/responseHelper');

router.use(responseHelper);
router.use(authenticate);

router.use('/user', userRoutes);
router.use('/project', restrictAnons, projectRoutes);
router.use('/message', restrictAnons, messageRoutes);

module.exports = router;
