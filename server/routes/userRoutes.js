const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/list', userController.list)
router.get('/:userId', userController.findById)
router.post('/register', userController.register)

module.exports = router;