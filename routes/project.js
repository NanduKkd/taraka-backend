const router = require('express').Router();
const projectController = require('../controllers/project');
const sessionRoutes = require('./session');

router.post('/', projectController.createProject);
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProject);
router.put('/:id', projectController.updateProject);

router.use('/:projectId/sessions', sessionRoutes);

module.exports = router;
