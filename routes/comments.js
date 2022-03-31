const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');

router.post('/monthlystatements/:id/comments', isLoggedIn, commentsCtrl.create);
router.delete('/monthlystatements/:id', isLoggedIn, commentsCtrl.delete);

module.exports = router;