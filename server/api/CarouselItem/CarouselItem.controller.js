'use strict';

var _ = require('lodash');
var CarouselItem = require('./CarouselItem.model');

// Get list of CarouselItems
exports.index = function(req, res) {
  CarouselItem.find(function (err, CarouselItems) {
    if(err) { return handleError(res, err); }
    return res.json(200, CarouselItems);
  });
};

// Get a single CarouselItem
exports.show = function(req, res) {
  CarouselItem.findById(req.params.id, function (err, CarouselItem) {
    if(err) { return handleError(res, err); }
    if(!CarouselItem) { return res.send(404); }
    return res.json(CarouselItem);
  });
};

// Creates a new CarouselItem in the DB.
exports.create = function(req, res) {
  CarouselItem.create(req.body, function(err, CarouselItem) {
    if(err) { return handleError(res, err); }
    return res.json(201, CarouselItem);
  });
};

// Updates an existing CarouselItem in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  CarouselItem.findById(req.params.id, function (err, CarouselItem) {
    if (err) { return handleError(res, err); }
    if(!CarouselItem) { return res.send(404); }
    var updated = _.merge(CarouselItem, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, CarouselItem);
    });
  });
};

// Deletes a CarouselItem from the DB.
exports.destroy = function(req, res) {
  CarouselItem.findById(req.params.id, function (err, CarouselItem) {
    if(err) { return handleError(res, err); }
    if(!CarouselItem) { return res.send(404); }
    CarouselItem.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}