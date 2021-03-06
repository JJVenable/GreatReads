const router = require('express').Router();
const controller = require('../controllers/AuthController');

router.post('/login', controller.Login);
router.post('/register', controller.Register);
router.get('/session', controller.CheckSession);
// router.post('/password', controller.UpdatePassword);

module.exports = router;
