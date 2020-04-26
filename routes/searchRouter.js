const express = require('express');
// add our router
const searchRouter = express.Router();
// require the author controller
const searchController = require('../controllers/searchController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
searchRouter.get('/', (req, res) => {
	res.send('<div class="topnav"><input type="text" placeholder="Search.."><button type="submit">Submit</button></div>')
});

//get author by id
searchRouter.get('/:id', (req, res) => searchController.getAuthorByID(req, res));

// export the router
module.exports = searchRouter;