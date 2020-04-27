const express = require('express');
const itemRouter = express.Router();

// require the author controller
const itemController = require('../controllers/itemController.js');
const path = require("path");

// handle the GET request on root of author-management path,
// i.e. get all authors
itemRouter.get('/', (req, res) => itemController.getAllItems(req, res));

//get item
itemRouter.get('/:name', (req, res) => itemController.getItem(req, res));

// export the router
module.exports = itemRouter;

