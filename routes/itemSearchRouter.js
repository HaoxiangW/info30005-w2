const express = require('express');
const itemSearchRouter = express.Router();

// require the item search controller
const searchController = require('../controllers/itemSearchController.js');
const path = require("path");

// handle the GET request on root of author-management path,
// i.e. get all authors
itemSearchRouter.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'views/search.html'));
});

//get item
itemSearchRouter.get('/:argument', (req, res) => searchController.findItem(req, res));

// export the router
module.exports = itemSearchRouter;

