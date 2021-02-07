/* eslint-disable prefer-destructuring */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  body: String,
  rating: Number,
});

module.exports = mongoose.model('Review', reviewSchema);
