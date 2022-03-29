const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// optional shortcut to the mongoose.Schema class


const reviewSchema = new Schema({
  content: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
  
});

const monthlyStatementSchema = new Schema({
    monthlyStatementId: Number,
    userId: Number,
    userName: String,
    content: String,
    reviews: [reviewSchema]
  });


  module.exports = mongoose.model('Monthlystatement', monthlyStatementSchema);