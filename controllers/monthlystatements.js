const Monthlystatement = require('../models/project2a');

module.exports = {
    index,
    new: newMonthlyStatement,
    create
  };

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

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // ensure empty inputs are removed so that model's default values will work
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const movie = new Movie(req.body);
  movie.save(function(err) {
    if (err) return res.redirect('/movies/new');
    res.redirect(`/movies/${movie._id}`);
  });
}