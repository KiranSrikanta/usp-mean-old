'use strict';

var _ = require('lodash');
var UserProfile = require('./userProfile.model');

// Get list of userProfiles
exports.index = function(req, res) {
  UserProfile.find(function (err, userProfiles) {
    if(err) { return handleError(res, err); }
    return res.json(200, userProfiles);
  });
};

// Get a single userProfile
exports.show = function(req, res) {
  UserProfile.findById(req.params.id, function (err, userProfile) {
    if(err) { return handleError(res, err); }
    if(!userProfile) { return res.send(404); }
    return res.json(userProfile);
  });
};

// Creates a new userProfile in the DB.
exports.create = function(req, res) {
  UserProfile.create(req.body, function(err, userProfile) {
    if(err) { return handleError(res, err); }
    return res.json(201, userProfile);
  });
};

// Updates an existing userProfile in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  UserProfile.findById(req.params.id, function (err, userProfile) {
    if (err) { return handleError(res, err); }
    if(!userProfile) { return res.send(404); }
    var updated = _.merge(userProfile, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, userProfile);
    });
  });
};

// Deletes a userProfile from the DB.
exports.destroy = function(req, res) {
  UserProfile.findById(req.params.id, function (err, userProfile) {
    if(err) { return handleError(res, err); }
    if(!userProfile) { return res.send(404); }
    userProfile.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}