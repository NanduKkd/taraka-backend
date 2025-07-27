const router = require('express').Router({ mergeParams: true });
const sessionController = require('../controllers/session');

router.post('/', sessionController.createSession);
router.get('/', sessionController.getSessions);
router.get('/:sessionId', sessionController.getSession);

module.exports = router;
