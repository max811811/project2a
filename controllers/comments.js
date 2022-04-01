const MonthlyStatement = require('../models/project2a');
const monthlystatements = require('./monthlystatements');

module.exports = {
  create,
  delete: deleteComment,
  update,
  edit
};

function edit(req, res) {
  console.log(req.params.id)
//  const getid = MonthlyStatement.foreach((statements) => {
    console.log(MonthlyStatement)
    console.log("hi")
 // })

  MonthlyStatement.findById({})
  res.render("monthlystatements/edit, ")
}

function update(req, res) {
  MonthlyStatement.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, comment) {
    console.log(req.body)
    console.log(req.params.id)
    if (err)
      return res.redirect(`/monthlystatements/${user._id}`)
    res.redirect(`/monthlystatements/${user._id}/edit`)
  });
}



// Include the next parameter - used for error handling in the catch
function deleteComment(req, res, next) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    MonthlyStatement.findOne({'comments._id': req.params.id}).then(function(monthlystatement) {
      // Find the review subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const comment = monthlystatement.comments.id(req.params.id);
      // Ensure that the review was created by the logged in user
      if (!comment.user.equals(req.user._id)) return res.redirect(`/monthlystatements/${monthlystatement._id}`);
      // Remove the review using the remove method of the subdoc
      comment.remove();
      // Save the updated movie
      monthlystatement.save().then(function() {
        // Redirect back to the movie's show view
        res.redirect(`/monthlystatements/${monthlystatement._id}`);
 //       res.redirect(`/monthlystatements/${comment._id}`);
      }).catch(function(err) {
        // Let Express display an error
        return next(err);
        // res.redirect(`/movies/${movie._id}`);
      });
    });
  }

function create(req, res) {
  // Find the movie to embed the review within
  MonthlyStatement.findById(req.params.id, function(err, monthlystatement) {
    // Add the user-centric info to req.body
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
 
    // Push the subdoc for the review
    monthlystatement.comments.push(req.body);
    // Always save the top-level document (not subdocs)
    monthlystatement.save(function(err) {
      res.redirect(`/monthlystatements/${monthlystatement._id}`);
    });
  });
}