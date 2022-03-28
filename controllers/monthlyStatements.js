const Movie = require('../models/project2a');

module.exports = {
    new: newMonthlyStatement
  };

  function newMonthlystatement(req, res) {
    res.render('monthlystatements/new');
}
