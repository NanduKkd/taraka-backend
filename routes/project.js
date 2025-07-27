const router = require('express').Router();
const projectController = require('../controllers/project');

router.post('/', projectController.createProject);
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProject);
router.put('/:id', projectController.updateProject);

module.exports = router;
