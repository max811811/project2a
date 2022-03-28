const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// optional shortcut to the mongoose.Schema class


const monthlyStatementSchema = new Schema({
    monthlyStatementId: Number,
    userId: Number,
    userName: String,
    content: String,
    comments: []
  });


  module.exports = mongoose.model('monthlyStatement', monthlyStatementSchema);