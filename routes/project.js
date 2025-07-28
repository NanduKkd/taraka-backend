const router = require('express').Router();
const projectController = require('../controllers/project');
const { createProjectSchema } = require('../validators/project');
const { validate } = require('../middlewares/validator');
const sessionRoutes = require('./session');

router.post('/', validate(createProjectSchema), projectController.createProject);
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProject);
router.put('/:id', projectController.updateProject);

router.use('/:projectId/sessions', sessionRoutes);

module.exports = router;
