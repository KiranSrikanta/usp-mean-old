'use strict';

var _ = require('lodash');
var Cart = require('./Cart.model');

// Get list of Carts
exports.index = function(req, res) {
  Cart.find(function (err, Carts) {
    if(err) { return handleError(res, err); }
    return res.json(200, Carts);
  });
};

// Get a single Cart
exports.show = function(req, res) {
  Cart.findById(req.params.id, function (err, Cart) {
    if(err) { return handleError(res, err); }
    if(!Cart) { return res.send(404); }
    return res.json(Cart);
  });
};

// Creates a new Cart in the DB.
exports.create = function(req, res) {
  Cart.create(req.body, function(err, Cart) {
    if(err) { return handleError(res, err); }
    return res.json(201, Cart);
  });
};

// Updates an existing Cart in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cart.findById(req.params.id, function (err, Cart) {
    if (err) { return handleError(res, err); }
    if(!Cart) { return res.send(404); }
    var updated = _.merge(Cart, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Cart);
    });
  });
};

// Deletes a Cart from the DB.
exports.destroy = function(req, res) {
  Cart.findById(req.params.id, function (err, Cart) {
    if(err) { return handleError(res, err); }
    if(!Cart) { return res.send(404); }
    Cart.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}