const Monthlystatement = require('../models/project2a');

module.exports = {
    index,
    new: newMonthlyStatement,
    create,
    show, 
    delete: deleteMonthlyStatement
  };

  function deleteMonthlyStatement(req, res){
    Monthlystatement.findOneAndDelete(
     {_id:req.params.id, userRecommending: req.user._id}, function(err){
        res.redirect('/monthlystatements')
    })
  }

  function index(req, res) {
      Monthlystatement.find({}, function(err, monthlystatements) {
      res.render('monthlystatements/index', { title: 'All Monthlystatements', monthlystatements });
    });
  }

  function show(req, res) {
    Monthlystatement.findById(req.params.id)
      .populate('cast')
      .exec(function(err, monthlystatement) {
        // Native MongoDB syntax

      });
  }


  function newMonthlyStatement(req, res) {
    res.render('monthlystatements/new', { title: 'Add Monthly Statement' });
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
