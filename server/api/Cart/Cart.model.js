'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({
  User: String,
  Product: String,
  Model: String,
  CompanyAcquisitionPolicy: Boolean,
  Status: String,
  Quantity: Number,
  Reason: String,
  Total: Number,
  Cost: Number,
  Used: Boolean,
  Attachment: String,
  ETA: Number
});

module.exports = mongoose.model('Cart', CartSchema);