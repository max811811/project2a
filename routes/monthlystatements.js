const express = require('express');
const router = express.Router();
const monthlyStatementsCtrl = require('../controllers/monthlystatements');
const isLoggedIn = require('../config/auth');

router.get('/', monthlyStatementsCtrl.index);
// GET /movies/new
router.get('/new', isLoggedIn, monthlyStatementsCtrl.new);
router.get('/:id', monthlyStatementsCtrl.show);
// POST /movies
router.post('/', isLoggedIn, monthlyStatementsCtrl.create);


module.exports = router;