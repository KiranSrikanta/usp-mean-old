'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarouselItemSchema = new Schema({
  Title: String,
  Image: String,
  ProductUrl: String
});

module.exports = mongoose.model('CarouselItem', CarouselItemSchema);