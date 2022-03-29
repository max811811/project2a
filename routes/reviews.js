const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');

router.post('/monthlystatements/:id/reviews', isLoggedIn, reviewsCtrl.create);
router.delete('/monthlystatements/:id', isLoggedIn, reviewsCtrl.delete);

module.exports = router;