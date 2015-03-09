'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ModelSchema = new Schema({
	Title: String,
	NickName: String,
	CPU: String,
	Cost: { type: Number, min: 0 },
	Applications: String,
	Display: String,
	Image: String,
	Graphics: String,
	ItemCategory: [String],
	MobilityProfile: String,
	OpticalDrive: String,
	OS: String,
	RAM: String,
	Storage: String,
	Weight: String,
	Memory: String
});

var FeatureSchema = new Schema({
	Title: String,
	Description: String
})

var ProductSchema = new Schema({
	_id: String,
	Name: String,
	Rating: { type: Number, min: 0, max: 5 },
	BillingFrequency: String,
	Description: String,
	ETA: { type: Number, min: 0 },
	ItemCategory: [String],
	Features: [FeatureSchema],
	Models: [ModelSchema],
	Image: String,
	PublishingImage: String,
	RollupImage: String,
	Featured: Boolean,
	FeaturedCategory: String,
	FeaturedItemImage: String,
	TopProduct: Boolean,
	Cost: { type: Number, min: 0 }
});

module.exports = mongoose.model('Product', ProductSchema);