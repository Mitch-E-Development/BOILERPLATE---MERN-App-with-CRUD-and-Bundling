/**
 * @file itemModel.js
 * @description Mongoose model for the Item schema.
 * @module models/itemModel
 * @requires mongoose
 */

const mongoose = require('mongoose');

// Define the schema for an Item
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

// Create and export the Item model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
