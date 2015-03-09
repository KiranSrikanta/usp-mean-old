'use strict';

var _ = require('lodash');
var Navigation = require('./navigation.model');

// Get list of navigations
exports.index = function(req, res) {
  Navigation.find(function (err, navigations) {
    if(err) { return handleError(res, err); }
    return res.json(200, navigations);
  });
};

// Get a single navigation
exports.show = function(req, res) {
  Navigation.findById(req.params.id, function (err, navigation) {
    if(err) { return handleError(res, err); }
    if(!navigation) { return res.send(404); }
    return res.json(navigation);
  });
};

// Creates a new navigation in the DB.
exports.create = function(req, res) {
  Navigation.create(req.body, function(err, navigation) {
    if(err) { return handleError(res, err); }
    return res.json(201, navigation);
  });
};

// Updates an existing navigation in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Navigation.findById(req.params.id, function (err, navigation) {
    if (err) { return handleError(res, err); }
    if(!navigation) { return res.send(404); }
    var updated = _.merge(navigation, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, navigation);
    });
  });
};

// Deletes a navigation from the DB.
exports.destroy = function(req, res) {
  Navigation.findById(req.params.id, function (err, navigation) {
    if(err) { return handleError(res, err); }
    if(!navigation) { return res.send(404); }
    navigation.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}