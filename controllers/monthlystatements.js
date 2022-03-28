const Monthlystatement = require('../models/project2a');

module.exports = {
    index,
    new: newMonthlyStatement,
    create
  };

  function index(req, res) {
      Monthlystatement.find({}, function(err, monthlystatements) {
      res.render('monthlystatements/index', { monthlystatements });
    });
  }

  function newMonthlyStatement(req, res) {
    res.render('monthlystatements/new');
}

function create(req, res) {
  const monthlystatement = new Monthlystatement(req.body);
  monthlystatement.save(function(err) {
    // one way to handle errors
    if (err) return res.render('monthlystatements/new');
    // console.log(monthlystatements);
    // for now, redirect right back to new.ejs
    res.redirect('/monthlystatements');
  });
}