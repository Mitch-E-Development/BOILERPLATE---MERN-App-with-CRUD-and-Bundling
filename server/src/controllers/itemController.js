/**
 * @file itemController.js
 * @description Controller functions for handling CRUD operations on items.
 * @module controllers/itemController
 * @requires ../models/itemModel.js
 */

const Item = require('../models/itemModel.js');

/**
 * Create a new item.
 * @function createItem
 * @param {Object} req - The request object, containing the item data in `req.body`.
 * @param {Object} res - The response object.
 * @returns {Object} The newly created item or an error message.
 */
exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Get all items.
 * @function getAllItems
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Array} An array of items or an error message.
 */
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Search for items based on a query.
 * @function searchItems
 * @param {Object} req - The request object, containing the search query in `req.query.query`.
 * @param {Object} res - The response object.
 * @returns {Array} An array of items that match the search query or an error message.
 */
exports.searchItems = async (req, res) => {
  try {
    const { query } = req.query;
    const items = await Item.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Update an existing item by ID.
 * @function updateItem
 * @param {Object} req - The request object, containing the item ID in `req.params.id` and update data in `req.body`.
 * @param {Object} res - The response object.
 * @returns {Object} The updated item or an error message if the item is not found.
 */
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Delete an item by ID.
 * @function deleteItem
 * @param {Object} req - The request object, containing the item ID in `req.params.id`.
 * @param {Object} res - The response object.
 * @returns {Object} A confirmation message or an error message if the item is not found.
 */
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
