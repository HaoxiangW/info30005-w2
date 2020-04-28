const express = require('express');
const itemRouter = express.Router();
const path = require("path");

// require the item controller
const itemController = require('../controllers/itemController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
itemRouter.get('/', (req, res) => itemController.getAllItems(req, res));

//get item
itemRouter.get('/:id', (req, res) => itemController.getItem(req, res));

// export the router
module.exports = itemRouter;

