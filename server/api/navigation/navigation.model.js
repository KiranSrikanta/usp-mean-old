'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeaturedProduct = {
	Title: String,
	Image: String,
	Rating: String,
	ID: String
}

var NavigationLinkSchema = new Schema({
	Title: String,
	URL: String
});

var NavigationSubMenuSchema = new Schema({
	Title: String,
	NavLinks: [NavigationLinkSchema]
});

var NavigationSchema = new Schema({
  Title: String,
  Featured: FeaturedProduct,
  SubMenu: [NavigationSubMenuSchema]
});

module.exports = mongoose.model('Navigation', NavigationSchema);