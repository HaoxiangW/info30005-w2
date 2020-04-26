const express = require('express');
// add our router
const searchRouter = express.Router();
// require the author controller


// handle the GET request on root of author-management path,
// i.e. get all authors
searchRouter.get('/', (req, res) => {
	res.send('<H1>INDEX</H1><div class="searcher"><input type="text" name="q" placeholder="Search.."><button type="submit">Submit</button></div>')
});



// export the router
module.exports = itemSearchRouter;

