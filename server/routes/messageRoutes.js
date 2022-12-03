const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController')

router.get('/list', messageController.list)
router.post('/create', messageController.create)
router.get('/:messageId', messageController.findById)


module.exports = router;