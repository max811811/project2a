const express = require('express');
const router = express.Router();
const monthlyStatementsCtrl = require('../controllers/monthlystatements');

router.get('/', monthlyStatementsCtrl.index);
// GET /movies/new
router.get('/new', monthlyStatementsCtrl.new);
// POST /movies
router.post('/', monthlyStatementsCtrl.create);


module.exports = router;