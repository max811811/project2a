const MonthlyStatement = require('../models/project2a');
const monthlystatements = require('./monthlystatements');

module.exports = {
  create,
  delete: deleteReview
};

// Include the next parameter - used for error handling in the catch
function deleteReview(req, res, next) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    MonthlyStatement.findOne({'reviews._id': req.params.id}).then(function(monthlystatement) {
      // Find the review subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const review = monthlystatement.reviews.id(req.params.id);
      // Ensure that the review was created by the logged in user
      if (!review.user.equals(req.user._id)) return res.redirect(`/monthlystatements/${monthlystatement._id}`);
      // Remove the review using the remove method of the subdoc
      review.remove();
      // Save the updated movie
      monthlystatement.save().then(function() {
        // Redirect back to the movie's show view
        res.redirect(`/monthlystatements/${movie._id}`);
      }).catch(function(err) {
        // Let Express display an error
        return next(err);
        // res.redirect(`/movies/${movie._id}`);
      });
    });
  }

function create(req, res) {
  // Find the movie to embed the review within
  Monthlystatement.findById(req.params.id, function(err, monthlystatement) {
    // Add the user-centric info to req.body
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    // Push the subdoc for the review
    monthlystatement.reviews.push(req.body);
    // Always save the top-level document (not subdocs)
    monthlystatement.save(function(err) {
      res.redirect(`/monthlystatements/${monthlystatement._id}`);
    });
  });
}