'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  RequestedBy: String,
  Status: String,
  Items: [Schema.Types.ObjectId],
  Mobile: String,
  Phone: String,
  RequestedFor: String
});

module.exports = mongoose.model('Order', OrderSchema);