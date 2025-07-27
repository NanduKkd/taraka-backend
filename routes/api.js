const router = require('express').Router();
const userRoutes = require('./user');
const projectRoutes = require('./project');
const promptRoutes = require('./prompt');
const { authenticate, restrictAnons } = require('../middlewares/auth');

router.use(authenticate);

router.use('/user', userRoutes);
router.use('/project', restrictAnons, projectRoutes);
router.use('/prompt', restrictAnons, promptRoutes);

module.exports = router;
