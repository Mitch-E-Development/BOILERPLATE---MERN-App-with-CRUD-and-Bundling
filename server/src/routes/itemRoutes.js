/**
 * @file itemRoutes.js
 * @description Routes for managing items. Connects routes to the item controller functions.
 * @module routes/itemRoutes
 * @requires express
 * @requires ../controllers/itemController
 */

const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to create a new item
router.post('/', itemController.createItem);

// Route to get all items
router.get('/', itemController.getAllItems);

// Route to search for items
router.get('/search', itemController.searchItems);

// Route to update an item by ID
router.put('/:id', itemController.updateItem);

// Route to delete an item by ID
router.delete('/:id', itemController.deleteItem);

module.exports = router;
